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

export type Card = {
  __typename?: 'Card'
  createTime: Scalars['DateTime']['output']
  duration?: Maybe<Scalars['Int']['output']>
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  times?: Maybe<Scalars['Int']['output']>
  type: CardType
  updateTime?: Maybe<Scalars['DateTime']['output']>
}

export type CardInput = {
  duration?: InputMaybe<Scalars['Int']['input']>
  name: Scalars['String']['input']
  times?: InputMaybe<Scalars['Int']['input']>
  type: CardType
}

export enum CardType {
  Duration = 'DURATION',
  Time = 'TIME',
}

export type Course = {
  __typename?: 'Course'
  baseAbility: Scalars['String']['output']
  createTime: Scalars['DateTime']['output']
  deletedAt?: Maybe<Scalars['DateTime']['output']>
  desc?: Maybe<Scalars['String']['output']>
  duration: Scalars['Int']['output']
  group: Scalars['String']['output']
  id: Scalars['String']['output']
  limitNumber: Scalars['Int']['output']
  name: Scalars['String']['output']
  otherInfo?: Maybe<Scalars['String']['output']>
  reducibleTime?: Maybe<Array<ReducibleTime>>
  refundInfo?: Maybe<Scalars['String']['output']>
  reserveInfo?: Maybe<Scalars['String']['output']>
  updateTime: Scalars['DateTime']['output']
}

export enum Method {
  Create = 'create',
  Update = 'update',
}

export type Mutation = {
  __typename?: 'Mutation'
  commitCard: Card
  commitCourse?: Maybe<Course>
  commitOrganization?: Maybe<Organization>
  createCard: Card
  createCourse?: Maybe<Course>
  createOrganization?: Maybe<Organization>
  createUser?: Maybe<User>
  /** 登录 */
  login?: Maybe<AuthLogin>
  removeCard: Scalars['Boolean']['output']
  removeCourse?: Maybe<Scalars['Boolean']['output']>
  removeOrganization?: Maybe<Scalars['Boolean']['output']>
  removeUser?: Maybe<User>
  /** 发送验证码 */
  sendMessage?: Maybe<Scalars['Boolean']['output']>
  setOrderTime?: Maybe<Array<ReducibleTime>>
  updateCard: Card
  updateCourse?: Maybe<Course>
  updateOrganization?: Maybe<Organization>
  updateUser?: Maybe<User>
  updateUserInfo?: Maybe<User>
}

export type MutationCommitCardArgs = {
  id: Scalars['String']['input']
  input: CardInput
  method: Method
}

export type MutationCommitCourseArgs = {
  id?: InputMaybe<Scalars['String']['input']>
  input: MutationCourseInput
}

export type MutationCommitOrganizationArgs = {
  id?: InputMaybe<Scalars['String']['input']>
  input: MutationOrganizationInput
}

export type MutationCreateCardArgs = {
  courseId: Scalars['String']['input']
  input: CardInput
}

export type MutationCreateCourseArgs = {
  input: MutationCourseInput
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

export type MutationRemoveCardArgs = {
  id: Scalars['String']['input']
}

export type MutationRemoveCourseArgs = {
  id: Scalars['String']['input']
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

export type MutationSetOrderTimeArgs = {
  id: Scalars['String']['input']
  input?: InputMaybe<Array<ReducibleTimeInput>>
}

export type MutationUpdateCardArgs = {
  id: Scalars['String']['input']
  input: CardInput
}

export type MutationUpdateCourseArgs = {
  id: Scalars['String']['input']
  input: MutationCourseInput
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

export type MutationCourseInput = {
  baseAbility: Scalars['String']['input']
  desc?: InputMaybe<Scalars['String']['input']>
  duration: Scalars['Int']['input']
  group: Scalars['String']['input']
  limitNumber: Scalars['Int']['input']
  name: Scalars['String']['input']
  otherInfo?: InputMaybe<Scalars['String']['input']>
  reducibleTime?: InputMaybe<Array<ReducibleTimeInput>>
  refundInfo?: InputMaybe<Scalars['String']['input']>
  reserveInfo?: InputMaybe<Scalars['String']['input']>
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

export type OrderTime = {
  __typename?: 'OrderTime'
  endTime: Scalars['String']['output']
  key: Scalars['Int']['output']
  startTime: Scalars['String']['output']
}

export type OrderTimeInput = {
  endTime: Scalars['String']['input']
  key: Scalars['Int']['input']
  startTime: Scalars['String']['input']
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

export type PageCourse = {
  __typename?: 'PageCourse'
  courses?: Maybe<Array<Course>>
  pageInfo: PageInfo
}

export type PageCourseInput = {
  name?: InputMaybe<Scalars['String']['input']>
  pageInput: PageInput
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
  card?: Maybe<Card>
  cards?: Maybe<Array<Card>>
  getCourse?: Maybe<Course>
  getOrderTime?: Maybe<Array<ReducibleTime>>
  getOrganization?: Maybe<Organization>
  getUserInfo?: Maybe<User>
  pageCourse?: Maybe<PageCourse>
  pageOrganization?: Maybe<PageOrganization>
  students?: Maybe<Students>
  user?: Maybe<User>
  users?: Maybe<Array<User>>
}

export type QueryCardArgs = {
  id: Scalars['String']['input']
}

export type QueryCardsArgs = {
  courseId: Scalars['String']['input']
}

export type QueryGetCourseArgs = {
  id: Scalars['String']['input']
}

export type QueryGetOrderTimeArgs = {
  id: Scalars['String']['input']
}

export type QueryGetOrganizationArgs = {
  id: Scalars['String']['input']
}

export type QueryPageCourseArgs = {
  input?: InputMaybe<PageCourseInput>
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

export type ReducibleTime = {
  __typename?: 'ReducibleTime'
  orderTime: Array<OrderTime>
  week: Weekday
}

export type ReducibleTimeInput = {
  orderTime: Array<OrderTimeInput>
  week: Weekday
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

export enum Weekday {
  Friday = 'friday',
  Monday = 'monday',
  Saturday = 'saturday',
  Sunday = 'sunday',
  Thursday = 'thursday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
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

export type CardsQueryVariables = Exact<{
  courseId: Scalars['String']['input']
}>

export type CardsQuery = {
  __typename?: 'Query'
  cards?: Array<{
    __typename?: 'Card'
    id: string
    createTime: string
    updateTime?: string | null
    name: string
    type: CardType
    times?: number | null
    duration?: number | null
  }> | null
}

export type CommitCardMutationVariables = Exact<{
  input: CardInput
  commitId: Scalars['String']['input']
  method: Method
}>

export type CommitCardMutation = {
  __typename?: 'Mutation'
  commitCard: {
    __typename?: 'Card'
    id: string
    createTime: string
    updateTime?: string | null
    name: string
    type: CardType
    times?: number | null
    duration?: number | null
  }
}

export type RemoveCardMutationVariables = Exact<{
  id: Scalars['String']['input']
}>

export type RemoveCardMutation = {
  __typename?: 'Mutation'
  removeCard: boolean
}

export type PageCourseQueryVariables = Exact<{
  input?: InputMaybe<PageCourseInput>
}>

export type PageCourseQuery = {
  __typename?: 'Query'
  pageCourse?: {
    __typename?: 'PageCourse'
    pageInfo: {
      __typename?: 'pageInfo'
      current: number
      pageSize: number
      total: number
    }
    courses?: Array<{
      __typename?: 'Course'
      id: string
      createTime: string
      updateTime: string
      deletedAt?: string | null
      name: string
      group: string
      baseAbility: string
      limitNumber: number
      desc?: string | null
      reserveInfo?: string | null
      refundInfo?: string | null
      otherInfo?: string | null
      duration: number
    }> | null
  } | null
}

export type GetCourseQueryVariables = Exact<{
  id: Scalars['String']['input']
}>

export type GetCourseQuery = {
  __typename?: 'Query'
  getCourse?: {
    __typename?: 'Course'
    id: string
    createTime: string
    updateTime: string
    deletedAt?: string | null
    name: string
    group: string
    baseAbility: string
    limitNumber: number
    desc?: string | null
    reserveInfo?: string | null
    refundInfo?: string | null
    otherInfo?: string | null
    duration: number
  } | null
}

export type CommitCourseMutationVariables = Exact<{
  input: MutationCourseInput
  id?: InputMaybe<Scalars['String']['input']>
}>

export type CommitCourseMutation = {
  __typename?: 'Mutation'
  commitCourse?: {
    __typename?: 'Course'
    id: string
    createTime: string
    updateTime: string
    deletedAt?: string | null
    name: string
    group: string
    baseAbility: string
    limitNumber: number
    desc?: string | null
    reserveInfo?: string | null
    refundInfo?: string | null
    otherInfo?: string | null
  } | null
}

export type GetOrderTimeQueryVariables = Exact<{
  id: Scalars['String']['input']
}>

export type GetOrderTimeQuery = {
  __typename?: 'Query'
  getOrderTime?: Array<{
    __typename?: 'ReducibleTime'
    week: Weekday
    orderTime: Array<{
      __typename?: 'OrderTime'
      key: number
      startTime: string
      endTime: string
    }>
  }> | null
}

export type SetOrderTimeMutationVariables = Exact<{
  id: Scalars['String']['input']
  input?: InputMaybe<Array<ReducibleTimeInput> | ReducibleTimeInput>
}>

export type SetOrderTimeMutation = {
  __typename?: 'Mutation'
  setOrderTime?: Array<{
    __typename?: 'ReducibleTime'
    week: Weekday
    orderTime: Array<{
      __typename?: 'OrderTime'
      key: number
      startTime: string
      endTime: string
    }>
  }> | null
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

export type SelectOrganizationsQueryVariables = Exact<{
  input?: InputMaybe<PageOrganizationInput>
}>

export type SelectOrganizationsQuery = {
  __typename?: 'Query'
  pageOrganization?: {
    __typename?: 'PageOrganization'
    organizations?: Array<{
      __typename?: 'Organization'
      id: string
      name: string
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
  updateOrganization?: { __typename?: 'Organization'; id: string } | null
}

export type CreateOrganizationMutationVariables = Exact<{
  input: MutationOrganizationInput
}>

export type CreateOrganizationMutation = {
  __typename?: 'Mutation'
  createOrganization?: { __typename?: 'Organization'; id: string } | null
}

export type RemoveOrganizationMutationVariables = Exact<{
  id: Scalars['String']['input']
}>

export type RemoveOrganizationMutation = {
  __typename?: 'Mutation'
  removeOrganization?: boolean | null
}

export type CommitOrganizationMutationVariables = Exact<{
  input: MutationOrganizationInput
  id?: InputMaybe<Scalars['String']['input']>
}>

export type CommitOrganizationMutation = {
  __typename?: 'Mutation'
  commitOrganization?: { __typename?: 'Organization'; id: string } | null
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
export const CardsDocument = gql`
  query Cards($courseId: String!) {
    cards(courseId: $courseId) {
      id
      createTime
      updateTime
      name
      type
      times
      duration
    }
  }
`

/**
 * __useCardsQuery__
 *
 * To run a query within a React component, call `useCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardsQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *   },
 * });
 */
export function useCardsQuery(
  baseOptions: Apollo.QueryHookOptions<CardsQuery, CardsQueryVariables> &
    ({ variables: CardsQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CardsQuery, CardsQueryVariables>(
    CardsDocument,
    options,
  )
}
export function useCardsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CardsQuery, CardsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CardsQuery, CardsQueryVariables>(
    CardsDocument,
    options,
  )
}
export function useCardsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<CardsQuery, CardsQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<CardsQuery, CardsQueryVariables>(
    CardsDocument,
    options,
  )
}
export type CardsQueryHookResult = ReturnType<typeof useCardsQuery>
export type CardsLazyQueryHookResult = ReturnType<typeof useCardsLazyQuery>
export type CardsSuspenseQueryHookResult = ReturnType<
  typeof useCardsSuspenseQuery
>
export type CardsQueryResult = Apollo.QueryResult<
  CardsQuery,
  CardsQueryVariables
>
export const CommitCardDocument = gql`
  mutation CommitCard(
    $input: CardInput!
    $commitId: String!
    $method: Method!
  ) {
    commitCard(input: $input, id: $commitId, method: $method) {
      id
      createTime
      updateTime
      name
      type
      times
      duration
    }
  }
`
export type CommitCardMutationFn = Apollo.MutationFunction<
  CommitCardMutation,
  CommitCardMutationVariables
>

/**
 * __useCommitCardMutation__
 *
 * To run a mutation, you first call `useCommitCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommitCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commitCardMutation, { data, loading, error }] = useCommitCardMutation({
 *   variables: {
 *      input: // value for 'input'
 *      commitId: // value for 'commitId'
 *      method: // value for 'method'
 *   },
 * });
 */
export function useCommitCardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CommitCardMutation,
    CommitCardMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CommitCardMutation, CommitCardMutationVariables>(
    CommitCardDocument,
    options,
  )
}
export type CommitCardMutationHookResult = ReturnType<
  typeof useCommitCardMutation
>
export type CommitCardMutationResult = Apollo.MutationResult<CommitCardMutation>
export type CommitCardMutationOptions = Apollo.BaseMutationOptions<
  CommitCardMutation,
  CommitCardMutationVariables
>
export const RemoveCardDocument = gql`
  mutation RemoveCard($id: String!) {
    removeCard(id: $id)
  }
`
export type RemoveCardMutationFn = Apollo.MutationFunction<
  RemoveCardMutation,
  RemoveCardMutationVariables
>

/**
 * __useRemoveCardMutation__
 *
 * To run a mutation, you first call `useRemoveCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCardMutation, { data, loading, error }] = useRemoveCardMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveCardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveCardMutation,
    RemoveCardMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RemoveCardMutation, RemoveCardMutationVariables>(
    RemoveCardDocument,
    options,
  )
}
export type RemoveCardMutationHookResult = ReturnType<
  typeof useRemoveCardMutation
>
export type RemoveCardMutationResult = Apollo.MutationResult<RemoveCardMutation>
export type RemoveCardMutationOptions = Apollo.BaseMutationOptions<
  RemoveCardMutation,
  RemoveCardMutationVariables
>
export const PageCourseDocument = gql`
  query PageCourse($input: PageCourseInput) {
    pageCourse(input: $input) {
      pageInfo {
        current
        pageSize
        total
      }
      courses {
        id
        createTime
        updateTime
        deletedAt
        name
        group
        baseAbility
        limitNumber
        desc
        reserveInfo
        refundInfo
        otherInfo
        duration
      }
    }
  }
`

/**
 * __usePageCourseQuery__
 *
 * To run a query within a React component, call `usePageCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageCourseQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePageCourseQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PageCourseQuery,
    PageCourseQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageCourseQuery, PageCourseQueryVariables>(
    PageCourseDocument,
    options,
  )
}
export function usePageCourseLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PageCourseQuery,
    PageCourseQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PageCourseQuery, PageCourseQueryVariables>(
    PageCourseDocument,
    options,
  )
}
export function usePageCourseSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        PageCourseQuery,
        PageCourseQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<PageCourseQuery, PageCourseQueryVariables>(
    PageCourseDocument,
    options,
  )
}
export type PageCourseQueryHookResult = ReturnType<typeof usePageCourseQuery>
export type PageCourseLazyQueryHookResult = ReturnType<
  typeof usePageCourseLazyQuery
>
export type PageCourseSuspenseQueryHookResult = ReturnType<
  typeof usePageCourseSuspenseQuery
>
export type PageCourseQueryResult = Apollo.QueryResult<
  PageCourseQuery,
  PageCourseQueryVariables
>
export const GetCourseDocument = gql`
  query GetCourse($id: String!) {
    getCourse(id: $id) {
      id
      createTime
      updateTime
      deletedAt
      name
      group
      baseAbility
      limitNumber
      desc
      reserveInfo
      refundInfo
      otherInfo
      duration
    }
  }
`

/**
 * __useGetCourseQuery__
 *
 * To run a query within a React component, call `useGetCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCourseQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCourseQuery,
    GetCourseQueryVariables
  > &
    (
      | { variables: GetCourseQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCourseQuery, GetCourseQueryVariables>(
    GetCourseDocument,
    options,
  )
}
export function useGetCourseLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCourseQuery,
    GetCourseQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCourseQuery, GetCourseQueryVariables>(
    GetCourseDocument,
    options,
  )
}
export function useGetCourseSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetCourseQuery, GetCourseQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetCourseQuery, GetCourseQueryVariables>(
    GetCourseDocument,
    options,
  )
}
export type GetCourseQueryHookResult = ReturnType<typeof useGetCourseQuery>
export type GetCourseLazyQueryHookResult = ReturnType<
  typeof useGetCourseLazyQuery
>
export type GetCourseSuspenseQueryHookResult = ReturnType<
  typeof useGetCourseSuspenseQuery
>
export type GetCourseQueryResult = Apollo.QueryResult<
  GetCourseQuery,
  GetCourseQueryVariables
>
export const CommitCourseDocument = gql`
  mutation CommitCourse($input: MutationCourseInput!, $id: String) {
    commitCourse(input: $input, id: $id) {
      id
      createTime
      updateTime
      deletedAt
      name
      group
      baseAbility
      limitNumber
      desc
      reserveInfo
      refundInfo
      otherInfo
    }
  }
`
export type CommitCourseMutationFn = Apollo.MutationFunction<
  CommitCourseMutation,
  CommitCourseMutationVariables
>

/**
 * __useCommitCourseMutation__
 *
 * To run a mutation, you first call `useCommitCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommitCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commitCourseMutation, { data, loading, error }] = useCommitCourseMutation({
 *   variables: {
 *      input: // value for 'input'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCommitCourseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CommitCourseMutation,
    CommitCourseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CommitCourseMutation,
    CommitCourseMutationVariables
  >(CommitCourseDocument, options)
}
export type CommitCourseMutationHookResult = ReturnType<
  typeof useCommitCourseMutation
>
export type CommitCourseMutationResult =
  Apollo.MutationResult<CommitCourseMutation>
export type CommitCourseMutationOptions = Apollo.BaseMutationOptions<
  CommitCourseMutation,
  CommitCourseMutationVariables
>
export const GetOrderTimeDocument = gql`
  query GetOrderTime($id: String!) {
    getOrderTime(id: $id) {
      week
      orderTime {
        key
        startTime
        endTime
      }
    }
  }
`

/**
 * __useGetOrderTimeQuery__
 *
 * To run a query within a React component, call `useGetOrderTimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderTimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderTimeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderTimeQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOrderTimeQuery,
    GetOrderTimeQueryVariables
  > &
    (
      | { variables: GetOrderTimeQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetOrderTimeQuery, GetOrderTimeQueryVariables>(
    GetOrderTimeDocument,
    options,
  )
}
export function useGetOrderTimeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrderTimeQuery,
    GetOrderTimeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetOrderTimeQuery, GetOrderTimeQueryVariables>(
    GetOrderTimeDocument,
    options,
  )
}
export function useGetOrderTimeSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetOrderTimeQuery,
        GetOrderTimeQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetOrderTimeQuery, GetOrderTimeQueryVariables>(
    GetOrderTimeDocument,
    options,
  )
}
export type GetOrderTimeQueryHookResult = ReturnType<
  typeof useGetOrderTimeQuery
>
export type GetOrderTimeLazyQueryHookResult = ReturnType<
  typeof useGetOrderTimeLazyQuery
>
export type GetOrderTimeSuspenseQueryHookResult = ReturnType<
  typeof useGetOrderTimeSuspenseQuery
>
export type GetOrderTimeQueryResult = Apollo.QueryResult<
  GetOrderTimeQuery,
  GetOrderTimeQueryVariables
>
export const SetOrderTimeDocument = gql`
  mutation SetOrderTime($id: String!, $input: [ReducibleTimeInput!]) {
    setOrderTime(id: $id, input: $input) {
      week
      orderTime {
        key
        startTime
        endTime
      }
    }
  }
`
export type SetOrderTimeMutationFn = Apollo.MutationFunction<
  SetOrderTimeMutation,
  SetOrderTimeMutationVariables
>

/**
 * __useSetOrderTimeMutation__
 *
 * To run a mutation, you first call `useSetOrderTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetOrderTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setOrderTimeMutation, { data, loading, error }] = useSetOrderTimeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetOrderTimeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SetOrderTimeMutation,
    SetOrderTimeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    SetOrderTimeMutation,
    SetOrderTimeMutationVariables
  >(SetOrderTimeDocument, options)
}
export type SetOrderTimeMutationHookResult = ReturnType<
  typeof useSetOrderTimeMutation
>
export type SetOrderTimeMutationResult =
  Apollo.MutationResult<SetOrderTimeMutation>
export type SetOrderTimeMutationOptions = Apollo.BaseMutationOptions<
  SetOrderTimeMutation,
  SetOrderTimeMutationVariables
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
export const SelectOrganizationsDocument = gql`
  query selectOrganizations($input: PageOrganizationInput) {
    pageOrganization(input: $input) {
      organizations {
        id
        name
      }
    }
  }
`

/**
 * __useSelectOrganizationsQuery__
 *
 * To run a query within a React component, call `useSelectOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectOrganizationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSelectOrganizationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SelectOrganizationsQuery,
    SelectOrganizationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    SelectOrganizationsQuery,
    SelectOrganizationsQueryVariables
  >(SelectOrganizationsDocument, options)
}
export function useSelectOrganizationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SelectOrganizationsQuery,
    SelectOrganizationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    SelectOrganizationsQuery,
    SelectOrganizationsQueryVariables
  >(SelectOrganizationsDocument, options)
}
export function useSelectOrganizationsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        SelectOrganizationsQuery,
        SelectOrganizationsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    SelectOrganizationsQuery,
    SelectOrganizationsQueryVariables
  >(SelectOrganizationsDocument, options)
}
export type SelectOrganizationsQueryHookResult = ReturnType<
  typeof useSelectOrganizationsQuery
>
export type SelectOrganizationsLazyQueryHookResult = ReturnType<
  typeof useSelectOrganizationsLazyQuery
>
export type SelectOrganizationsSuspenseQueryHookResult = ReturnType<
  typeof useSelectOrganizationsSuspenseQuery
>
export type SelectOrganizationsQueryResult = Apollo.QueryResult<
  SelectOrganizationsQuery,
  SelectOrganizationsQueryVariables
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
      id
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
      id
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
export const CommitOrganizationDocument = gql`
  mutation CommitOrganization($input: MutationOrganizationInput!, $id: String) {
    commitOrganization(input: $input, id: $id) {
      id
    }
  }
`
export type CommitOrganizationMutationFn = Apollo.MutationFunction<
  CommitOrganizationMutation,
  CommitOrganizationMutationVariables
>

/**
 * __useCommitOrganizationMutation__
 *
 * To run a mutation, you first call `useCommitOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommitOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commitOrganizationMutation, { data, loading, error }] = useCommitOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCommitOrganizationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CommitOrganizationMutation,
    CommitOrganizationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CommitOrganizationMutation,
    CommitOrganizationMutationVariables
  >(CommitOrganizationDocument, options)
}
export type CommitOrganizationMutationHookResult = ReturnType<
  typeof useCommitOrganizationMutation
>
export type CommitOrganizationMutationResult =
  Apollo.MutationResult<CommitOrganizationMutation>
export type CommitOrganizationMutationOptions = Apollo.BaseMutationOptions<
  CommitOrganizationMutation,
  CommitOrganizationMutationVariables
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
