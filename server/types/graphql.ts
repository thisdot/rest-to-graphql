import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string | number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateDotterInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  location: CreateLocationInput;
  profilePic: Scalars['String'];
  title: Scalars['String'];
};

export type CreateLocationInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
};

export type Dotter = {
  __typename?: 'Dotter';
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  profilePic?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type DotterConnection = {
  __typename?: 'DotterConnection';
  nodes?: Maybe<Array<Maybe<Dotter>>>;
  pagination?: Maybe<Pagination>;
};

export type Location = {
  __typename?: 'Location';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dotters?: Maybe<Array<Maybe<Dotter>>>;
  id: Scalars['ID'];
  state?: Maybe<Scalars['String']>;
};

export type LocationConnection = {
  __typename?: 'LocationConnection';
  nodes?: Maybe<Array<Maybe<Location>>>;
  pagination?: Maybe<Pagination>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDotter?: Maybe<Dotter>;
  deleteDotter?: Maybe<Dotter>;
  updateDotter?: Maybe<Dotter>;
};


export type MutationCreateDotterArgs = {
  data: CreateDotterInput;
};


export type MutationDeleteDotterArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateDotterArgs = {
  data: UpdateDotterInput;
  id: Scalars['ID'];
};

export type Pagination = {
  __typename?: 'Pagination';
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  dotter?: Maybe<Dotter>;
  dotters?: Maybe<DotterConnection>;
  hello?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  locations?: Maybe<LocationConnection>;
};


export type QueryDotterArgs = {
  id: Scalars['ID'];
};


export type QueryDottersArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type UpdateDotterInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  profilePic?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateDotterInput: CreateDotterInput;
  CreateLocationInput: CreateLocationInput;
  Dotter: ResolverTypeWrapper<Dotter>;
  DotterConnection: ResolverTypeWrapper<DotterConnection>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Location: ResolverTypeWrapper<Location>;
  LocationConnection: ResolverTypeWrapper<LocationConnection>;
  Mutation: ResolverTypeWrapper<{}>;
  Pagination: ResolverTypeWrapper<Pagination>;
  PaginationInput: PaginationInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateDotterInput: UpdateDotterInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CreateDotterInput: CreateDotterInput;
  CreateLocationInput: CreateLocationInput;
  Dotter: Dotter;
  DotterConnection: DotterConnection;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Location: Location;
  LocationConnection: LocationConnection;
  Mutation: {};
  Pagination: Pagination;
  PaginationInput: PaginationInput;
  Query: {};
  String: Scalars['String'];
  UpdateDotterInput: UpdateDotterInput;
};

export type DotterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dotter'] = ResolversParentTypes['Dotter']> = {
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  profilePic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DotterConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DotterConnection'] = ResolversParentTypes['DotterConnection']> = {
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dotter']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['Pagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dotters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dotter']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocationConnection'] = ResolversParentTypes['LocationConnection']> = {
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Location']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['Pagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createDotter?: Resolver<Maybe<ResolversTypes['Dotter']>, ParentType, ContextType, RequireFields<MutationCreateDotterArgs, 'data'>>;
  deleteDotter?: Resolver<Maybe<ResolversTypes['Dotter']>, ParentType, ContextType, RequireFields<MutationDeleteDotterArgs, 'id'>>;
  updateDotter?: Resolver<Maybe<ResolversTypes['Dotter']>, ParentType, ContextType, RequireFields<MutationUpdateDotterArgs, 'data' | 'id'>>;
};

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = {
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  dotter?: Resolver<Maybe<ResolversTypes['Dotter']>, ParentType, ContextType, RequireFields<QueryDotterArgs, 'id'>>;
  dotters?: Resolver<Maybe<ResolversTypes['DotterConnection']>, ParentType, ContextType, Partial<QueryDottersArgs>>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<QueryLocationArgs, 'id'>>;
  locations?: Resolver<Maybe<ResolversTypes['LocationConnection']>, ParentType, ContextType, Partial<QueryLocationsArgs>>;
};

export type Resolvers<ContextType = any> = {
  Dotter?: DotterResolvers<ContextType>;
  DotterConnection?: DotterConnectionResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  LocationConnection?: LocationConnectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

