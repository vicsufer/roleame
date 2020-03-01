/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateCharacterInput = {
  id?: string | null;
  name: string;
  background?: string | null;
};

export type ModelcharacterConditionInput = {
  name?: ModelStringInput | null;
  background?: ModelStringInput | null;
  and?: Array<ModelcharacterConditionInput | null> | null;
  or?: Array<ModelcharacterConditionInput | null> | null;
  not?: ModelcharacterConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateCharacterInput = {
  id: string;
  name?: string | null;
  background?: string | null;
};

export type DeleteCharacterInput = {
  id?: string | null;
};

export type ModelcharacterFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  background?: ModelStringInput | null;
  and?: Array<ModelcharacterFilterInput | null> | null;
  or?: Array<ModelcharacterFilterInput | null> | null;
  not?: ModelcharacterFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateCharacterMutation = {
  __typename: "character";
  id: string;
  name: string;
  background: string | null;
  owner: string | null;
};

export type UpdateCharacterMutation = {
  __typename: "character";
  id: string;
  name: string;
  background: string | null;
  owner: string | null;
};

export type DeleteCharacterMutation = {
  __typename: "character";
  id: string;
  name: string;
  background: string | null;
  owner: string | null;
};

export type GetCharacterQuery = {
  __typename: "character";
  id: string;
  name: string;
  background: string | null;
  owner: string | null;
};

export type ListCharactersQuery = {
  __typename: "ModelcharacterConnection";
  items: Array<{
    __typename: "character";
    id: string;
    name: string;
    background: string | null;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCharacterSubscription = {
  __typename: "character";
  id: string;
  name: string;
  background: string | null;
  owner: string | null;
};

export type OnUpdateCharacterSubscription = {
  __typename: "character";
  id: string;
  name: string;
  background: string | null;
  owner: string | null;
};

export type OnDeleteCharacterSubscription = {
  __typename: "character";
  id: string;
  name: string;
  background: string | null;
  owner: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCharacter(
    input: CreateCharacterInput,
    condition?: ModelcharacterConditionInput
  ): Promise<CreateCharacterMutation> {
    const statement = `mutation CreateCharacter($input: CreateCharacterInput!, $condition: ModelcharacterConditionInput) {
        createCharacter(input: $input, condition: $condition) {
          __typename
          id
          name
          background
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCharacterMutation>response.data.createCharacter;
  }
  async UpdateCharacter(
    input: UpdateCharacterInput,
    condition?: ModelcharacterConditionInput
  ): Promise<UpdateCharacterMutation> {
    const statement = `mutation UpdateCharacter($input: UpdateCharacterInput!, $condition: ModelcharacterConditionInput) {
        updateCharacter(input: $input, condition: $condition) {
          __typename
          id
          name
          background
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCharacterMutation>response.data.updateCharacter;
  }
  async DeleteCharacter(
    input: DeleteCharacterInput,
    condition?: ModelcharacterConditionInput
  ): Promise<DeleteCharacterMutation> {
    const statement = `mutation DeleteCharacter($input: DeleteCharacterInput!, $condition: ModelcharacterConditionInput) {
        deleteCharacter(input: $input, condition: $condition) {
          __typename
          id
          name
          background
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCharacterMutation>response.data.deleteCharacter;
  }
  async GetCharacter(id: string): Promise<GetCharacterQuery> {
    const statement = `query GetCharacter($id: ID!) {
        getCharacter(id: $id) {
          __typename
          id
          name
          background
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCharacterQuery>response.data.getCharacter;
  }
  async ListCharacters(
    filter?: ModelcharacterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCharactersQuery> {
    const statement = `query ListCharacters($filter: ModelcharacterFilterInput, $limit: Int, $nextToken: String) {
        listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            background
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCharactersQuery>response.data.listCharacters;
  }
  OnCreateCharacterListener: Observable<
    OnCreateCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCharacter($owner: String!) {
        onCreateCharacter(owner: $owner) {
          __typename
          id
          name
          background
          owner
        }
      }`
    )
  ) as Observable<OnCreateCharacterSubscription>;

  OnUpdateCharacterListener: Observable<
    OnUpdateCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCharacter($owner: String!) {
        onUpdateCharacter(owner: $owner) {
          __typename
          id
          name
          background
          owner
        }
      }`
    )
  ) as Observable<OnUpdateCharacterSubscription>;

  OnDeleteCharacterListener: Observable<
    OnDeleteCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCharacter($owner: String!) {
        onDeleteCharacter(owner: $owner) {
          __typename
          id
          name
          background
          owner
        }
      }`
    )
  ) as Observable<OnDeleteCharacterSubscription>;
}
