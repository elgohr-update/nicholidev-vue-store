import { CustomQueryFn } from '../../index';
import { basicProfile, fullProfile } from './defaultQuery';
import gql from 'graphql-tag';
import { getCustomQuery } from '../../helpers/queries';
import { Config } from './../../types/setup';

interface Options {
  customer?: boolean;
}

interface OrdersData {
  // TODO: When https://github.com/DivanteLtd/vue-storefront/issues/4900 is finished, please change "me: any" to "me: Pick<MeQueryInterface, "activeCart" | "customer">"
  me: any;
}

const getMe = async (settings: Config, params: Options = {}, customQueryFn?: CustomQueryFn) => {
  const { locale, acceptLanguage, client } = settings;

  const { customer }: Options = params;
  const defaultQuery = customer ? fullProfile : basicProfile;
  const defaultVariables = {
    locale,
    acceptLanguage
  };
  const { query, variables } = getCustomQuery(customQueryFn, { defaultQuery, defaultVariables });

  const request = await client.query<OrdersData>({
    query: gql`${query}`,
    variables,
    fetchPolicy: 'no-cache'
  });

  return request;
};

export default getMe;
