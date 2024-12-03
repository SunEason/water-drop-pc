import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: string; output: string }
}

export type AuthLogin = {
  __typename?: 'AuthLogin'
  /** 用户id */
  success: Scalars['Boolean']['output']
  token?: Maybe<Scalars['String']['output']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createUser?: Maybe<User>
  /** 登录 */
  login?: Maybe<AuthLogin>
  removeUser?: Maybe<User>
  /** 发送验证码 */
  sendMessage?: Maybe<Scalars['Boolean']['output']>
  updateUser?: Maybe<User>
}

export type MutationCreateUserArgs = {
  input: UserInput
}

export type MutationLoginArgs = {
  code: Scalars['String']['input']
  tel: Scalars['String']['input']
}

export type MutationRemoveUserArgs = {
  id: Scalars['String']['input']
}

export type MutationSendMessageArgs = {
  tel: Scalars['String']['input']
}

export type MutationUpdateUserArgs = {
  id: Scalars['String']['input']
  input: UserInput
}

export type OssParams = {
  __typename?: 'OSSParams'
  accessId: Scalars['String']['output']
  expire: Scalars['String']['output']
  host: Scalars['String']['output']
  policy: Scalars['String']['output']
  signature: Scalars['String']['output']
}

export type Query = {
  __typename?: 'Query'
  OSSInfo?: Maybe<OssParams>
  getUserInfo?: Maybe<User>
  user?: Maybe<User>
  users?: Maybe<Array<User>>
}

export type QueryUserArgs = {
  id: Scalars['String']['input']
}

export type User = {
  __typename?: 'User'
  account?: Maybe<Scalars['String']['output']>
  createTime: Scalars['DateTime']['output']
  desc?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  password: Scalars['String']['output']
  tel: Scalars['String']['output']
  updateTime: Scalars['DateTime']['output']
}

export type UserInput = {
  account?: InputMaybe<Scalars['String']['input']>
  desc?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  password: Scalars['String']['input']
  tel: Scalars['String']['input']
}

export type SendMessageMutationVariables = Exact<{
  tel: Scalars['String']['input']
}>

export type SendMessageMutation = {
  __typename?: 'Mutation'
  sendMessage?: boolean | null
}

export type LoginMutationVariables = Exact<{
  tel: Scalars['String']['input']
  code: Scalars['String']['input']
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login?: {
    __typename?: 'AuthLogin'
    success: boolean
    token?: string | null
  } | null
}

export type GetOssInfoQueryVariables = Exact<{ [key: string]: never }>

export type GetOssInfoQuery = {
  __typename?: 'Query'
  OSSInfo?: {
    __typename?: 'OSSParams'
    expire: string
    policy: string
    signature: string
    accessId: string
    host: string
  } | null
}

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>

export type GetUsersQuery = {
  __typename?: 'Query'
  users?: Array<{
    __typename?: 'User'
    id: string
    name: string
    password: string
    account?: string | null
    desc?: string | null
    tel: string
    createTime: string
    updateTime: string
  }> | null
}

export type GetUserQueryVariables = Exact<{
  id: Scalars['String']['input']
}>

export type GetUserQuery = {
  __typename?: 'Query'
  user?: {
    __typename?: 'User'
    id: string
    name: string
    password: string
    account?: string | null
    desc?: string | null
    tel: string
    createTime: string
    updateTime: string
  } | null
}

export type CreateUserMutationVariables = Exact<{
  input: UserInput
}>

export type CreateUserMutation = {
  __typename?: 'Mutation'
  createUser?: { __typename?: 'User'; id: string } | null
}

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String']['input']
  input: UserInput
}>

export type UpdateUserMutation = {
  __typename?: 'Mutation'
  updateUser?: { __typename?: 'User'; id: string } | null
}

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never }>

export type GetUserInfoQuery = {
  __typename?: 'Query'
  getUserInfo?: {
    __typename?: 'User'
    id: string
    name: string
    password: string
    tel: string
    desc?: string | null
    account?: string | null
    createTime: string
    updateTime: string
  } | null
}

export const SendMessageDocument = gql`
  mutation SendMessage($tel: String!) {
    sendMessage(tel: $tel)
  }
`
export type SendMessageMutationFn = Apollo.MutationFunction<
  SendMessageMutation,
  SendMessageMutationVariables
>

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      tel: // value for 'tel'
 *   },
 * });
 */
export function useSendMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SendMessageMutation,
    SendMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(
    SendMessageDocument,
    options,
  )
}
export type SendMessageMutationHookResult = ReturnType<
  typeof useSendMessageMutation
>
export type SendMessageMutationResult =
  Apollo.MutationResult<SendMessageMutation>
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<
  SendMessageMutation,
  SendMessageMutationVariables
>
export const LoginDocument = gql`
  mutation Login($tel: String!, $code: String!) {
    login(tel: $tel, code: $code) {
      success
      token
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      tel: // value for 'tel'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
export const GetOssInfoDocument = gql`
  query GetOSSInfo {
    OSSInfo {
      expire
      policy
      signature
      accessId
      host
    }
  }
`

/**
 * __useGetOssInfoQuery__
 *
 * To run a query within a React component, call `useGetOssInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOssInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOssInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOssInfoQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetOssInfoQuery,
    GetOssInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetOssInfoQuery, GetOssInfoQueryVariables>(
    GetOssInfoDocument,
    options,
  )
}
export function useGetOssInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOssInfoQuery,
    GetOssInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetOssInfoQuery, GetOssInfoQueryVariables>(
    GetOssInfoDocument,
    options,
  )
}
export function useGetOssInfoSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetOssInfoQuery,
        GetOssInfoQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetOssInfoQuery, GetOssInfoQueryVariables>(
    GetOssInfoDocument,
    options,
  )
}
export type GetOssInfoQueryHookResult = ReturnType<typeof useGetOssInfoQuery>
export type GetOssInfoLazyQueryHookResult = ReturnType<
  typeof useGetOssInfoLazyQuery
>
export type GetOssInfoSuspenseQueryHookResult = ReturnType<
  typeof useGetOssInfoSuspenseQuery
>
export type GetOssInfoQueryResult = Apollo.QueryResult<
  GetOssInfoQuery,
  GetOssInfoQueryVariables
>
export const GetUsersDocument = gql`
  query GetUsers {
    users {
      id
      name
      password
      account
      desc
      tel
      createTime
      updateTime
    }
  }
`

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  )
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  )
}
export function useGetUsersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  )
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>
export type GetUsersSuspenseQueryHookResult = ReturnType<
  typeof useGetUsersSuspenseQuery
>
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>
export const GetUserDocument = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      id
      name
      password
      account
      desc
      tel
      createTime
      updateTime
    }
  }
`

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> &
    ({ variables: GetUserQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options,
  )
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserQuery,
    GetUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options,
  )
}
export function useGetUserSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options,
  )
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>
export type GetUserSuspenseQueryHookResult = ReturnType<
  typeof useGetUserSuspenseQuery
>
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>
export const CreateUserDocument = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      id
    }
  }
`
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  )
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>
export const UpdateUserDocument = gql`
  mutation UpdateUser($id: String!, $input: UserInput!) {
    updateUser(id: $id, input: $input) {
      id
    }
  }
`
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  )
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>
export const GetUserInfoDocument = gql`
  query GetUserInfo {
    getUserInfo {
      id
      name
      password
      tel
      desc
      account
      createTime
      updateTime
    }
  }
`

/**
 * __useGetUserInfoQuery__
 *
 * To run a query within a React component, call `useGetUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserInfoQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserInfoQuery,
    GetUserInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(
    GetUserInfoDocument,
    options,
  )
}
export function useGetUserInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserInfoQuery,
    GetUserInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(
    GetUserInfoDocument,
    options,
  )
}
export function useGetUserInfoSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetUserInfoQuery,
        GetUserInfoQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(
    GetUserInfoDocument,
    options,
  )
}
export type GetUserInfoQueryHookResult = ReturnType<typeof useGetUserInfoQuery>
export type GetUserInfoLazyQueryHookResult = ReturnType<
  typeof useGetUserInfoLazyQuery
>
export type GetUserInfoSuspenseQueryHookResult = ReturnType<
  typeof useGetUserInfoSuspenseQuery
>
export type GetUserInfoQueryResult = Apollo.QueryResult<
  GetUserInfoQuery,
  GetUserInfoQueryVariables
>
