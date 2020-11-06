import {Engine} from '../../app/headless-engine';
import {
  ConfigurationSection,
  ProductRecommendationsSection,
} from '../../state/state-sections';
import {Schema, SchemaValues} from '@coveo/bueno';
import {
  baseProductRecommendationsOptionsSchema,
  buildBaseProductRecommendationsList,
} from './headless-base-product-recommendations';

const optionsSchema = new Schema({
  maxNumberOfRecommendations:
    baseProductRecommendationsOptionsSchema.maxNumberOfRecommendations,
});

export type UserInterestRecommendationsListOptions = SchemaValues<
  typeof optionsSchema
>;

export interface UserInterestRecommendationsListProps {
  options?: UserInterestRecommendationsListOptions;
}

export type UserInterestRecommendationsList = ReturnType<
  typeof buildUserInterestRecommendationsList
>;
export type UserInterestRecommendationsListState = UserInterestRecommendationsList['state'];

export const buildUserInterestRecommendationsList = (
  engine: Engine<ProductRecommendationsSection & ConfigurationSection>,
  props: UserInterestRecommendationsListProps
) => {
  const options = optionsSchema.validate(props.options) as Required<
    UserInterestRecommendationsListOptions
  >;
  const {setSkus, state, ...controller} = buildBaseProductRecommendationsList(
    engine,
    {
      ...props,
      options: {
        ...options,
        id: 'user',
      },
    }
  );

  return {
    ...controller,

    get state() {
      const {skus, ...rest} = state;

      return {
        ...rest,
      };
    },
  };
};
