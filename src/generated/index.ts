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
  createOrganization?: Maybe<Organization>
  createUser?: Maybe<User>
  /** 登录 */
  login?: Maybe<AuthLogin>
  removeOrganization?: Maybe<Scalars['Boolean']['output']>
  removeUser?: Maybe<User>
  /** 发送验证码 */
  sendMessage?: Maybe<Scalars['Boolean']['output']>
  updateOrganization?: Maybe<Organization>
  updateUser?: Maybe<User>
  updateUserInfo?: Maybe<User>
}

export type MutationCreateOrganizationArgs = {
  input: MutationOrganizationInput
}

export type MutationCreateUserArgs = {
  input: UserInput
}

export type MutationLoginArgs = {
  code: Scalars['String']['input']
  tel: Scalars['String']['input']
}

export type MutationRemoveOrganizationArgs = {
  id: Scalars['String']['input']
}

export type MutationRemoveUserArgs = {
  id: Scalars['String']['input']
}

export type MutationSendMessageArgs = {
  tel: Scalars['String']['input']
}

export type MutationUpdateOrganizationArgs = {
  id: Scalars['String']['input']
  input: MutationOrganizationInput
}

export type MutationUpdateUserArgs = {
  id: Scalars['String']['input']
  input: UserInput
}

export type MutationUpdateUserInfoArgs = {
  id: Scalars['String']['input']
  input: UserUpdateInput
}

export type MutationOrganizationInput = {
  address: Scalars['String']['input']
  businessLicense: Scalars['String']['input']
  description?: InputMaybe<Scalars['String']['input']>
  frontImages?: InputMaybe<Array<OrgImageInput>>
  identityCardBackImg: Scalars['String']['input']
  identityCardFrontImg: Scalars['String']['input']
  latitude?: InputMaybe<Scalars['String']['input']>
  logo: Scalars['String']['input']
  longitude?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  otherImages?: InputMaybe<Array<OrgImageInput>>
  roomImages?: InputMaybe<Array<OrgImageInput>>
  tags?: InputMaybe<Scalars['String']['input']>
  tel: Scalars['String']['input']
}

export type OssParams = {
  __typename?: 'OSSParams'
  accessId: Scalars['String']['output']
  dir: Scalars['String']['output']
  expire: Scalars['String']['output']
  host: Scalars['String']['output']
  policy: Scalars['String']['output']
  signature: Scalars['String']['output']
}

/**  Organization Images: front, room, other  */
export type OrgImage = {
  __typename?: 'OrgImage'
  id: Scalars['String']['output']
  remark?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
}

export type OrgImageInput = {
  remark?: InputMaybe<Scalars['String']['input']>
  url: Scalars['String']['input']
}

/**  Organization  */
export type Organization = {
  __typename?: 'Organization'
  address: Scalars['String']['output']
  businessLicense: Scalars['String']['output']
  createTime: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  frontImages?: Maybe<Array<OrgImage>>
  id: Scalars['String']['output']
  identityCardBackImg: Scalars['String']['output']
  identityCardFrontImg: Scalars['String']['output']
  latitude?: Maybe<Scalars['String']['output']>
  logo: Scalars['String']['output']
  longitude?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  otherImages?: Maybe<Array<OrgImage>>
  roomImages?: Maybe<Array<OrgImage>>
  tags?: Maybe<Scalars['String']['output']>
  tel: Scalars['String']['output']
  updateTime: Scalars['DateTime']['output']
}

export type PageOrganization = {
  __typename?: 'PageOrganization'
  organizations?: Maybe<Array<Organization>>
  pageInfo: PageInfo
}

export type PageOrganizationInput = {
  name?: InputMaybe<Scalars['String']['input']>
  pageInput: PageInput
}

export type Query = {
  __typename?: 'Query'
  OSSInfo?: Maybe<OssParams>
  getOrganization?: Maybe<Organization>
  getUserInfo?: Maybe<User>
  pageOrganization?: Maybe<PageOrganization>
  students?: Maybe<Students>
  user?: Maybe<User>
  users?: Maybe<Array<User>>
}

export type QueryGetOrganizationArgs = {
  id: Scalars['String']['input']
}

export type QueryPageOrganizationArgs = {
  input?: InputMaybe<PageOrganizationInput>
}

export type QueryStudentsArgs = {
  input: PageStudentInput
}

export type QueryUserArgs = {
  id: Scalars['String']['input']
}

export type Student = {
  __typename?: 'Student'
  account?: Maybe<Scalars['String']['output']>
  avatar?: Maybe<Scalars['String']['output']>
  createTime: Scalars['DateTime']['output']
  desc?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  password: Scalars['String']['output']
  tel: Scalars['String']['output']
  updateTime: Scalars['DateTime']['output']
}

export type Students = {
  __typename?: 'Students'
  pageInfo?: Maybe<PageInfo>
  students?: Maybe<Array<Maybe<Student>>>
}

export type User = {
  __typename?: 'User'
  account?: Maybe<Scalars['String']['output']>
  avatar?: Maybe<Scalars['String']['output']>
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

export type UserUpdateInput = {
  avatar?: InputMaybe<Scalars['String']['input']>
  desc?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type PageInfo = {
  __typename?: 'pageInfo'
  current: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type PageInput = {
  current: Scalars['Int']['input']
  pageSize: Scalars['Int']['input']
}

export type PageStudentInput = {
  name?: InputMaybe<Scalars['String']['input']>
  pageInput: PageInput
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

export type OrganizationsQueryVariables = Exact<{
  input?: InputMaybe<PageOrganizationInput>
}>

export type OrganizationsQuery = {
  __typename?: 'Query'
  pageOrganization?: {
    __typename?: 'PageOrganization'
    pageInfo: {
      __typename?: 'pageInfo'
      current: number
      pageSize: number
      total: number
    }
    organizations?: Array<{
      __typename?: 'Organization'
      createTime: string
      updateTime: string
      id: string
      businessLicense: string
      identityCardFrontImg: string
      identityCardBackImg: string
      logo: string
      tags?: string | null
      description?: string | null
      name: string
      address: string
      longitude?: string | null
      latitude?: string | null
      tel: string
      frontImages?: Array<{
        __typename?: 'OrgImage'
        id: string
        url: string
        remark?: string | null
      }> | null
      roomImages?: Array<{
        __typename?: 'OrgImage'
        id: string
        url: string
        remark?: string | null
      }> | null
      otherImages?: Array<{
        __typename?: 'OrgImage'
        id: string
        url: string
        remark?: string | null
      }> | null
    }> | null
  } | null
}

export type GetOrganizationQueryVariables = Exact<{
  id: Scalars['String']['input']
}>

export type GetOrganizationQuery = {
  __typename?: 'Query'
  getOrganization?: {
    __typename?: 'Organization'
    createTime: string
    updateTime: string
    id: string
    businessLicense: string
    identityCardFrontImg: string
    identityCardBackImg: string
    logo: string
    tags?: string | null
    description?: string | null
    name: string
    address: string
    longitude?: string | null
    latitude?: string | null
    tel: string
    frontImages?: Array<{
      __typename?: 'OrgImage'
      id: string
      url: string
      remark?: string | null
    }> | null
    roomImages?: Array<{
      __typename?: 'OrgImage'
      id: string
      url: string
      remark?: string | null
    }> | null
    otherImages?: Array<{
      __typename?: 'OrgImage'
      id: string
      url: string
      remark?: string | null
    }> | null
  } | null
}

export type UpdateOrganizationMutationVariables = Exact<{
  id: Scalars['String']['input']
  input: MutationOrganizationInput
}>

export type UpdateOrganizationMutation = {
  __typename?: 'Mutation'
  updateOrganization?: {
    __typename?: 'Organization'
    createTime: string
    updateTime: string
    id: string
    businessLicense: string
    identityCardFrontImg: string
    identityCardBackImg: string
    logo: string
    tags?: string | null
    description?: string | null
    name: string
    address: string
    longitude?: string | null
    latitude?: string | null
    tel: string
    frontImages?: Array<{
      __typename?: 'OrgImage'
      id: string
      url: string
      remark?: string | null
    }> | null
    roomImages?: Array<{
      __typename?: 'OrgImage'
      id: string
      url: string
      remark?: string | null
    }> | null
    otherImages?: Array<{
      __typename?: 'OrgImage'
      id: string
      url: string
      remark?: string | null
    }> | null
  } | null
}

export type CreateOrganizationMutationVariables = Exact<{
  input: MutationOrganizationInput
}>

export type CreateOrganizationMutation = {
  __typename?: 'Mutation'
  createOrganization?: {
    __typename?: 'Organization'
    createTime: string
    updateTime: string
    id: string
    businessLicense: string
    identityCardFrontImg: string
    identityCardBackImg: string
    logo: string
    tags?: string | null
    description?: string | null
    name: string
    address: string
    longitude?: string | null
    latitude?: string | null
    tel: string
    frontImages?: Array<{
      __typename?: 'OrgImage'
      id: string
      url: string
      remark?: string | null
    }> | null
    roomImages?: Array<{
      __typename?: 'OrgImage'
      id: string
      url: string
      remark?: string | null
    }> | null
    otherImages?: Array<{
      __typename?: 'OrgImage'
      id: string
      url: string
      remark?: string | null
    }> | null
  } | null
}

export type RemoveOrganizationMutationVariables = Exact<{
  id: Scalars['String']['input']
}>

export type RemoveOrganizationMutation = {
  __typename?: 'Mutation'
  removeOrganization?: boolean | null
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
    dir: string
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
    avatar?: string | null
    createTime: string
    updateTime: string
  } | null
}

export type UpdateUserInfoMutationVariables = Exact<{
  id: Scalars['String']['input']
  input: UserUpdateInput
}>

export type UpdateUserInfoMutation = {
  __typename?: 'Mutation'
  updateUserInfo?: {
    __typename?: 'User'
    id: string
    name: string
    password: string
    tel: string
    desc?: string | null
    account?: string | null
    avatar?: string | null
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
export const OrganizationsDocument = gql`
  query Organizations($input: PageOrganizationInput) {
    pageOrganization(input: $input) {
      pageInfo {
        current
        pageSize
        total
      }
      organizations {
        createTime
        updateTime
        id
        businessLicense
        identityCardFrontImg
        identityCardBackImg
        logo
        tags
        description
        name
        address
        longitude
        latitude
        tel
        frontImages {
          id
          url
          remark
        }
        roomImages {
          id
          url
          remark
        }
        otherImages {
          id
          url
          remark
        }
      }
    }
  }
`

/**
 * __useOrganizationsQuery__
 *
 * To run a query within a React component, call `useOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOrganizationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    OrganizationsQuery,
    OrganizationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<OrganizationsQuery, OrganizationsQueryVariables>(
    OrganizationsDocument,
    options,
  )
}
export function useOrganizationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    OrganizationsQuery,
    OrganizationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<OrganizationsQuery, OrganizationsQueryVariables>(
    OrganizationsDocument,
    options,
  )
}
export function useOrganizationsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        OrganizationsQuery,
        OrganizationsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    OrganizationsQuery,
    OrganizationsQueryVariables
  >(OrganizationsDocument, options)
}
export type OrganizationsQueryHookResult = ReturnType<
  typeof useOrganizationsQuery
>
export type OrganizationsLazyQueryHookResult = ReturnType<
  typeof useOrganizationsLazyQuery
>
export type OrganizationsSuspenseQueryHookResult = ReturnType<
  typeof useOrganizationsSuspenseQuery
>
export type OrganizationsQueryResult = Apollo.QueryResult<
  OrganizationsQuery,
  OrganizationsQueryVariables
>
export const GetOrganizationDocument = gql`
  query GetOrganization($id: String!) {
    getOrganization(id: $id) {
      createTime
      updateTime
      id
      businessLicense
      identityCardFrontImg
      identityCardBackImg
      logo
      tags
      description
      name
      address
      longitude
      latitude
      tel
      frontImages {
        id
        url
        remark
      }
      roomImages {
        id
        url
        remark
      }
      otherImages {
        id
        url
        remark
      }
    }
  }
`

/**
 * __useGetOrganizationQuery__
 *
 * To run a query within a React component, call `useGetOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrganizationQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOrganizationQuery,
    GetOrganizationQueryVariables
  > &
    (
      | { variables: GetOrganizationQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetOrganizationQuery, GetOrganizationQueryVariables>(
    GetOrganizationDocument,
    options,
  )
}
export function useGetOrganizationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrganizationQuery,
    GetOrganizationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetOrganizationQuery,
    GetOrganizationQueryVariables
  >(GetOrganizationDocument, options)
}
export function useGetOrganizationSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetOrganizationQuery,
        GetOrganizationQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetOrganizationQuery,
    GetOrganizationQueryVariables
  >(GetOrganizationDocument, options)
}
export type GetOrganizationQueryHookResult = ReturnType<
  typeof useGetOrganizationQuery
>
export type GetOrganizationLazyQueryHookResult = ReturnType<
  typeof useGetOrganizationLazyQuery
>
export type GetOrganizationSuspenseQueryHookResult = ReturnType<
  typeof useGetOrganizationSuspenseQuery
>
export type GetOrganizationQueryResult = Apollo.QueryResult<
  GetOrganizationQuery,
  GetOrganizationQueryVariables
>
export const UpdateOrganizationDocument = gql`
  mutation UpdateOrganization(
    $id: String!
    $input: MutationOrganizationInput!
  ) {
    updateOrganization(id: $id, input: $input) {
      createTime
      updateTime
      id
      businessLicense
      identityCardFrontImg
      identityCardBackImg
      logo
      tags
      description
      name
      address
      longitude
      latitude
      tel
      frontImages {
        id
        url
        remark
      }
      roomImages {
        id
        url
        remark
      }
      otherImages {
        id
        url
        remark
      }
    }
  }
`
export type UpdateOrganizationMutationFn = Apollo.MutationFunction<
  UpdateOrganizationMutation,
  UpdateOrganizationMutationVariables
>

/**
 * __useUpdateOrganizationMutation__
 *
 * To run a mutation, you first call `useUpdateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrganizationMutation, { data, loading, error }] = useUpdateOrganizationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrganizationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOrganizationMutation,
    UpdateOrganizationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateOrganizationMutation,
    UpdateOrganizationMutationVariables
  >(UpdateOrganizationDocument, options)
}
export type UpdateOrganizationMutationHookResult = ReturnType<
  typeof useUpdateOrganizationMutation
>
export type UpdateOrganizationMutationResult =
  Apollo.MutationResult<UpdateOrganizationMutation>
export type UpdateOrganizationMutationOptions = Apollo.BaseMutationOptions<
  UpdateOrganizationMutation,
  UpdateOrganizationMutationVariables
>
export const CreateOrganizationDocument = gql`
  mutation CreateOrganization($input: MutationOrganizationInput!) {
    createOrganization(input: $input) {
      createTime
      updateTime
      id
      businessLicense
      identityCardFrontImg
      identityCardBackImg
      logo
      tags
      description
      name
      address
      longitude
      latitude
      tel
      frontImages {
        id
        url
        remark
      }
      roomImages {
        id
        url
        remark
      }
      otherImages {
        id
        url
        remark
      }
    }
  }
`
export type CreateOrganizationMutationFn = Apollo.MutationFunction<
  CreateOrganizationMutation,
  CreateOrganizationMutationVariables
>

/**
 * __useCreateOrganizationMutation__
 *
 * To run a mutation, you first call `useCreateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrganizationMutation, { data, loading, error }] = useCreateOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrganizationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOrganizationMutation,
    CreateOrganizationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateOrganizationMutation,
    CreateOrganizationMutationVariables
  >(CreateOrganizationDocument, options)
}
export type CreateOrganizationMutationHookResult = ReturnType<
  typeof useCreateOrganizationMutation
>
export type CreateOrganizationMutationResult =
  Apollo.MutationResult<CreateOrganizationMutation>
export type CreateOrganizationMutationOptions = Apollo.BaseMutationOptions<
  CreateOrganizationMutation,
  CreateOrganizationMutationVariables
>
export const RemoveOrganizationDocument = gql`
  mutation RemoveOrganization($id: String!) {
    removeOrganization(id: $id)
  }
`
export type RemoveOrganizationMutationFn = Apollo.MutationFunction<
  RemoveOrganizationMutation,
  RemoveOrganizationMutationVariables
>

/**
 * __useRemoveOrganizationMutation__
 *
 * To run a mutation, you first call `useRemoveOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeOrganizationMutation, { data, loading, error }] = useRemoveOrganizationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveOrganizationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveOrganizationMutation,
    RemoveOrganizationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RemoveOrganizationMutation,
    RemoveOrganizationMutationVariables
  >(RemoveOrganizationDocument, options)
}
export type RemoveOrganizationMutationHookResult = ReturnType<
  typeof useRemoveOrganizationMutation
>
export type RemoveOrganizationMutationResult =
  Apollo.MutationResult<RemoveOrganizationMutation>
export type RemoveOrganizationMutationOptions = Apollo.BaseMutationOptions<
  RemoveOrganizationMutation,
  RemoveOrganizationMutationVariables
>
export const GetOssInfoDocument = gql`
  query GetOSSInfo {
    OSSInfo {
      expire
      policy
      signature
      accessId
      host
      dir
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
      avatar
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
export const UpdateUserInfoDocument = gql`
  mutation UpdateUserInfo($id: String!, $input: UserUpdateInput!) {
    updateUserInfo(id: $id, input: $input) {
      id
      name
      password
      tel
      desc
      account
      avatar
      createTime
      updateTime
    }
  }
`
export type UpdateUserInfoMutationFn = Apollo.MutationFunction<
  UpdateUserInfoMutation,
  UpdateUserInfoMutationVariables
>

/**
 * __useUpdateUserInfoMutation__
 *
 * To run a mutation, you first call `useUpdateUserInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserInfoMutation, { data, loading, error }] = useUpdateUserInfoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserInfoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserInfoMutation,
    UpdateUserInfoMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateUserInfoMutation,
    UpdateUserInfoMutationVariables
  >(UpdateUserInfoDocument, options)
}
export type UpdateUserInfoMutationHookResult = ReturnType<
  typeof useUpdateUserInfoMutation
>
export type UpdateUserInfoMutationResult =
  Apollo.MutationResult<UpdateUserInfoMutation>
export type UpdateUserInfoMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserInfoMutation,
  UpdateUserInfoMutationVariables
>
