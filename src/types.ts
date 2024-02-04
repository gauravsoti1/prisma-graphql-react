import type { GetUsersQuery } from './graphql/generated';

/* The reason you import this type instead of the full User and Note types
 is that the GetUsersQuery type has access to a more specific set of 
 types that contain only the fields your query retrieves.
 */
export type Message = GetUsersQuery['users'][0]['messages'][0];
export type User = GetUsersQuery['users'][0];
