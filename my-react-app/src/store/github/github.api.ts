import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUSer, ServerResponse } from "../../models.ts/models";
import { IRepo } from "../../models.ts/models";
export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchUsers: build.query<IUSer[], string>({
      query: (search: string) => ({
        url: "search/users",
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: ServerResponse<IUSer>) => response.items,
    }),
    getUserRepos: build.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
});
export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi;
