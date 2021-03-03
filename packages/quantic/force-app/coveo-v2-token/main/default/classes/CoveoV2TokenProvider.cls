global with sharing class CoveoV2TokenProvider implements ITokenProvider {
    @AuraEnabled
    global static String getSearchToken() {
        Map<String, String> coveoV2EndpointData = CoveoV2.Globals.getEndpointData();
        String searchToken = CoveoV2.Globals.generateSearchToken();

        Map<String, String> headlessConfiguration = new Map<String, String>();
        headlessConfiguration.put('organizationId', (String) coveoV2EndpointData.get('organization'));
        headlessConfiguration.put('accessToken', searchToken);
        headlessConfiguration.put('platformUrl', (String) coveoV2EndpointData.get('platformUri'));
        return JSON.serialize(headlessConfiguration);
    }
}