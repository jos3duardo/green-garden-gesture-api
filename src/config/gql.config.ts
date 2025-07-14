import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

export const gqlConfig = {
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  sortSchema: true,
  introspection: true,
  context: ({ req }) => ({ req }),
  playground: false,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
};
