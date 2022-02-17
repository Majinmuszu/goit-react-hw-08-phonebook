import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const phonebookApi = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61edaa0e634f2f00170cecd0.mockapi.io/",
  }),
  tagTypes: ["Contacts", "Users"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: (id) => `users/${id}/contacts`,
      providesTags: ["Contacts"],
    }),

    getUsers: builder.query({
      query: () => `users/`,
      providesTags: ["Users"],
    }),

    getUserById: builder.query({
      query: (id) => `users/${id}`,
      providesTags: ["Users"],
    }),

    deleteContactById: builder.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    
    postContact: builder.mutation({
      query: (contact) => ({
        url: "contacts/",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

const {
  useGetContactsQuery,
  useDeleteContactByIdMutation,
  usePostContactMutation,
  useGetUsersQuery,
  useGetUserByIdQuery,
} = phonebookApi;

export {
  phonebookApi,
  useGetUsersQuery,
  useGetContactsQuery,
  useDeleteContactByIdMutation,
  usePostContactMutation,
  useGetUserByIdQuery,
};
