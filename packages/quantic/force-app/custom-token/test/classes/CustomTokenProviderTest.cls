@isTest
private class CustomTokenProviderTest {
    static User createDummyUser(String alias, String profile) {
      Profile p = [SELECT Id FROM Profile WHERE Name = :profile];

      User user = new User(
            Username = alias + '@user.org',
            FirstName = 'Foo',
            LastName = 'Bar',
            Alias = alias.abbreviate(8),
            Email = alias + '@user.org',
            EmailEncodingKey = 'UTF-8',
            LanguageLocaleKey = 'en_US',
            LocaleSidKey = 'en_US',
            ProfileId = p.Id,
            TimeZoneSidKey = 'America/Los_Angeles'
        );

        insert user;

        return user;
    }

    static TokenSettings__c setupTokenSettings(String platformUrl, String organizationId, String apiKey){
        TokenSettings__c settings = TokenSettings__c.getOrgDefaults();
        settings.PlatformUrl__c = platformUrl;
        settings.OrganizationId__c = organizationId;
        settings.ApiKey__c = apiKey;
        
        upsert settings;
        return settings;
    }
    
    static final String sampleHeadlessConfiguration = '{"platformUrl":"https://platform.cloud.coveo.com","accessToken":"xx564559b1-0045-48e1-953c-3addd1ee4457","organizationId":"searchuisamples"}';

    @IsTest
    static void withInvalidSetting(){
        Test.startTest();
        System.runAs(CustomTokenProviderTest.createDummyUser('foo1', 'System Administrator')){
            CustomTokenProviderTest.setupTokenSettings('','someOrgId','someToken');
            System.assertEquals(sampleHeadlessConfiguration, CustomTokenProvider.getHeadlessConfiguration());
            
            CustomTokenProviderTest.setupTokenSettings('https://foo.com','','someToken');
            System.assertEquals(sampleHeadlessConfiguration, CustomTokenProvider.getHeadlessConfiguration());

            CustomTokenProviderTest.setupTokenSettings('https://foo.com','someOrgId','');
            System.assertEquals(sampleHeadlessConfiguration, CustomTokenProvider.getHeadlessConfiguration());
        }
        Test.stopTest();
    }
    
    @IsTest
    static void withInvalidPlatformUrl(){
        Test.startTest();
        System.runAs(CustomTokenProviderTest.createDummyUser('foo1', 'System Administrator')){
            CustomTokenProviderTest.setupTokenSettings('httpsfoocom','someOrgId','someToken');
            System.assertEquals(sampleHeadlessConfiguration, CustomTokenProvider.getHeadlessConfiguration());
        }
        Test.stopTest();
    }

    @IsTest
    static void whenTokenRequestIsUnsuccessful(){
        User testUser = CustomTokenProviderTest.createDummyUser('foo1', 'System Administrator');
        CustomTokenProviderTest.setupTokenSettings('https://foo.com','someOrgId','someToken');
        Test.setMock(HttpCalloutMock.class, new MockHttpTokenResponse('https://foo.com/rest/search/v2/token?organizationId=someOrgId',
                                                                      'Bearer someToken',
                                                                      '{"userIds":[{"provider":"Email Security Provider","type":"User","name":"foo1@user.org"}]}',
                                                                      'someError',
                                                                      89,
                                                                      400));
        
        Test.startTest();
        System.runAs(testUser){
            try {
				CustomTokenProvider.getHeadlessConfiguration();
            } catch (Exception e) {
                System.assert(e instanceOf CustomTokenProvider.HttpException);
                System.assertEquals('someError', e.getMessage());
            }
        }
        Test.stopTest();
        
    }
    
    @IsTest
    static void whenTokenRequestIsSuccessful(){
        User testUser = CustomTokenProviderTest.createDummyUser('foo1', 'System Administrator');
        CustomTokenProviderTest.setupTokenSettings('https://foo.com','someOrgId','someToken');
        Test.setMock(HttpCalloutMock.class, new MockHttpTokenResponse('https://foo.com/rest/search/v2/token?organizationId=someOrgId',
                                                                      'Bearer someToken',
                                                                      '{"userIds":[{"provider":"Email Security Provider","type":"User","name":"foo1@user.org"}]}',
                                                                      '{"token":"responseToken"}',
                                                                      89,
                                                                      200));
        
        Test.startTest();
        System.runAs(testUser){
            Map<String, Object> headlessConfiguration = (Map<String, Object>) JSON.deserializeUntyped(CustomTokenProvider.getHeadlessConfiguration());
            System.assertEquals('someOrgId', (String) headlessConfiguration.get('organizationId'));
            System.assertEquals('responseToken', (String) headlessConfiguration.get('accessToken'));
            System.assertEquals('https://foo.com', (String) headlessConfiguration.get('platformUrl'));
        }
        Test.stopTest();
        
    }
}