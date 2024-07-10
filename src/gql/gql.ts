/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tquery GetRepos($first: Int!, $after: String) {\n\t\tviewer {\n\t\t\tlogin\n\t\t\tname\n\t\t\trepositories(\n\t\t\t\tfirst: $first\n\t\t\t\tafter: $after\n\t\t\t\townerAffiliations: OWNER\n\t\t\t\tvisibility: PUBLIC\n\t\t\t\torderBy: { field: UPDATED_AT, direction: DESC }\n\t\t\t) {\n\t\t\t\tpageInfo {\n\t\t\t\t\tstartCursor\n\t\t\t\t\tendCursor\n\t\t\t\t\thasNextPage\n\t\t\t\t\thasPreviousPage\n\t\t\t\t}\n\t\t\t\ttotalCount\n\t\t\t\tedges {\n\t\t\t\t\tcursor\n\t\t\t\t\tnode {\n\t\t\t\t\t\t...RepositoryOnMainPage\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetReposDocument,
    "\n\tfragment RepositoryOnMainPage on Repository {\n\t\tname\n\t\turl\n\t\tupdatedAt\n\t\tstargazerCount\n\t\towner {\n\t\t\tlogin\n\t\t\tavatarUrl\n\t\t\turl\n\t\t}\n\t}\n": types.RepositoryOnMainPageFragmentDoc,
    "\n\tquery SearchRepos($first: Int = 10, $after: String, $query: String!) {\n\t\tsearch(type: REPOSITORY, first: $first, after: $after, query: $query) {\n\t\t\trepositoryCount\n\t\t\tedges {\n\t\t\t\tcursor\n\t\t\t\tnode {\n\t\t\t\t\t...RepositoryOnMainPage\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.SearchReposDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetRepos($first: Int!, $after: String) {\n\t\tviewer {\n\t\t\tlogin\n\t\t\tname\n\t\t\trepositories(\n\t\t\t\tfirst: $first\n\t\t\t\tafter: $after\n\t\t\t\townerAffiliations: OWNER\n\t\t\t\tvisibility: PUBLIC\n\t\t\t\torderBy: { field: UPDATED_AT, direction: DESC }\n\t\t\t) {\n\t\t\t\tpageInfo {\n\t\t\t\t\tstartCursor\n\t\t\t\t\tendCursor\n\t\t\t\t\thasNextPage\n\t\t\t\t\thasPreviousPage\n\t\t\t\t}\n\t\t\t\ttotalCount\n\t\t\t\tedges {\n\t\t\t\t\tcursor\n\t\t\t\t\tnode {\n\t\t\t\t\t\t...RepositoryOnMainPage\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetRepos($first: Int!, $after: String) {\n\t\tviewer {\n\t\t\tlogin\n\t\t\tname\n\t\t\trepositories(\n\t\t\t\tfirst: $first\n\t\t\t\tafter: $after\n\t\t\t\townerAffiliations: OWNER\n\t\t\t\tvisibility: PUBLIC\n\t\t\t\torderBy: { field: UPDATED_AT, direction: DESC }\n\t\t\t) {\n\t\t\t\tpageInfo {\n\t\t\t\t\tstartCursor\n\t\t\t\t\tendCursor\n\t\t\t\t\thasNextPage\n\t\t\t\t\thasPreviousPage\n\t\t\t\t}\n\t\t\t\ttotalCount\n\t\t\t\tedges {\n\t\t\t\t\tcursor\n\t\t\t\t\tnode {\n\t\t\t\t\t\t...RepositoryOnMainPage\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tfragment RepositoryOnMainPage on Repository {\n\t\tname\n\t\turl\n\t\tupdatedAt\n\t\tstargazerCount\n\t\towner {\n\t\t\tlogin\n\t\t\tavatarUrl\n\t\t\turl\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment RepositoryOnMainPage on Repository {\n\t\tname\n\t\turl\n\t\tupdatedAt\n\t\tstargazerCount\n\t\towner {\n\t\t\tlogin\n\t\t\tavatarUrl\n\t\t\turl\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery SearchRepos($first: Int = 10, $after: String, $query: String!) {\n\t\tsearch(type: REPOSITORY, first: $first, after: $after, query: $query) {\n\t\t\trepositoryCount\n\t\t\tedges {\n\t\t\t\tcursor\n\t\t\t\tnode {\n\t\t\t\t\t...RepositoryOnMainPage\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery SearchRepos($first: Int = 10, $after: String, $query: String!) {\n\t\tsearch(type: REPOSITORY, first: $first, after: $after, query: $query) {\n\t\t\trepositoryCount\n\t\t\tedges {\n\t\t\t\tcursor\n\t\t\t\tnode {\n\t\t\t\t\t...RepositoryOnMainPage\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;