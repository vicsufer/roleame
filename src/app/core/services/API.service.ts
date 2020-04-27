/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateGameInput = {
  id?: string | null;
  name: string;
  description: string;
  members?: Array<string | null> | null;
  messages?: Array<string | null> | null;
};

export type ModelGameConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  messages?: ModelStringInput | null;
  and?: Array<ModelGameConditionInput | null> | null;
  or?: Array<ModelGameConditionInput | null> | null;
  not?: ModelGameConditionInput | null;
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

export type UpdateGameInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  members?: Array<string | null> | null;
  messages?: Array<string | null> | null;
};

export type DeleteGameInput = {
  id?: string | null;
};

export type CreateGameCharacterInput = {
  id?: string | null;
  name: string;
  background?: string | null;
  portrait?: string | null;
  class?: string | null;
  agility?: number | null;
  hitPoints?: number | null;
  fellowship?: number | null;
  strength?: number | null;
  wisdom?: number | null;
  abilities?: Array<AbilityInput | null> | null;
};

export type AbilityInput = {
  name?: string | null;
  description?: string | null;
};

export type ModelGameCharacterConditionInput = {
  name?: ModelStringInput | null;
  background?: ModelStringInput | null;
  portrait?: ModelStringInput | null;
  class?: ModelStringInput | null;
  agility?: ModelIntInput | null;
  hitPoints?: ModelIntInput | null;
  fellowship?: ModelIntInput | null;
  strength?: ModelIntInput | null;
  wisdom?: ModelIntInput | null;
  and?: Array<ModelGameCharacterConditionInput | null> | null;
  or?: Array<ModelGameCharacterConditionInput | null> | null;
  not?: ModelGameCharacterConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateGameCharacterInput = {
  id: string;
  name?: string | null;
  background?: string | null;
  portrait?: string | null;
  class?: string | null;
  agility?: number | null;
  hitPoints?: number | null;
  fellowship?: number | null;
  strength?: number | null;
  wisdom?: number | null;
  abilities?: Array<AbilityInput | null> | null;
};

export type DeleteGameCharacterInput = {
  id?: string | null;
};

export type CreatePlayerCharacterInput = {
  id?: string | null;
  name: string;
  background?: string | null;
  portrait?: string | null;
  class?: string | null;
  agility?: number | null;
  hitPoints?: number | null;
  fellowship?: number | null;
  strength?: number | null;
  wisdom?: number | null;
  abilities?: Array<AbilityInput | null> | null;
};

export type ModelPlayerCharacterConditionInput = {
  name?: ModelStringInput | null;
  background?: ModelStringInput | null;
  portrait?: ModelStringInput | null;
  class?: ModelStringInput | null;
  agility?: ModelIntInput | null;
  hitPoints?: ModelIntInput | null;
  fellowship?: ModelIntInput | null;
  strength?: ModelIntInput | null;
  wisdom?: ModelIntInput | null;
  and?: Array<ModelPlayerCharacterConditionInput | null> | null;
  or?: Array<ModelPlayerCharacterConditionInput | null> | null;
  not?: ModelPlayerCharacterConditionInput | null;
};

export type UpdatePlayerCharacterInput = {
  id: string;
  name?: string | null;
  background?: string | null;
  portrait?: string | null;
  class?: string | null;
  agility?: number | null;
  hitPoints?: number | null;
  fellowship?: number | null;
  strength?: number | null;
  wisdom?: number | null;
  abilities?: Array<AbilityInput | null> | null;
};

export type DeletePlayerCharacterInput = {
  id?: string | null;
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  members?: ModelStringInput | null;
  messages?: ModelStringInput | null;
  and?: Array<ModelGameFilterInput | null> | null;
  or?: Array<ModelGameFilterInput | null> | null;
  not?: ModelGameFilterInput | null;
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

export type ModelGameCharacterFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  background?: ModelStringInput | null;
  portrait?: ModelStringInput | null;
  class?: ModelStringInput | null;
  agility?: ModelIntInput | null;
  hitPoints?: ModelIntInput | null;
  fellowship?: ModelIntInput | null;
  strength?: ModelIntInput | null;
  wisdom?: ModelIntInput | null;
  and?: Array<ModelGameCharacterFilterInput | null> | null;
  or?: Array<ModelGameCharacterFilterInput | null> | null;
  not?: ModelGameCharacterFilterInput | null;
};

export type ModelPlayerCharacterFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  background?: ModelStringInput | null;
  portrait?: ModelStringInput | null;
  class?: ModelStringInput | null;
  agility?: ModelIntInput | null;
  hitPoints?: ModelIntInput | null;
  fellowship?: ModelIntInput | null;
  strength?: ModelIntInput | null;
  wisdom?: ModelIntInput | null;
  and?: Array<ModelPlayerCharacterFilterInput | null> | null;
  or?: Array<ModelPlayerCharacterFilterInput | null> | null;
  not?: ModelPlayerCharacterFilterInput | null;
};

export type CreateGameMutation = {
  __typename: "Game";
  id: string;
  name: string;
  description: string;
  members: Array<string | null> | null;
  playerCharacters: {
    __typename: "ModelPlayerCharacterConnection";
    items: Array<{
      __typename: "PlayerCharacter";
      id: string;
      name: string;
      background: string | null;
      portrait: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        __typename: "Ability";
        name: string | null;
        description: string | null;
      } | null> | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    __typename: "ModelGameCharacterConnection";
    items: Array<{
      __typename: "GameCharacter";
      id: string;
      name: string;
      background: string | null;
      portrait: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        __typename: "Ability";
        name: string | null;
        description: string | null;
      } | null> | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
  owner: string | null;
};

export type UpdateGameMutation = {
  __typename: "Game";
  id: string;
  name: string;
  description: string;
  members: Array<string | null> | null;
  playerCharacters: {
    __typename: "ModelPlayerCharacterConnection";
    items: Array<{
      __typename: "PlayerCharacter";
      id: string;
      name: string;
      background: string | null;
      portrait: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        __typename: "Ability";
        name: string | null;
        description: string | null;
      } | null> | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    __typename: "ModelGameCharacterConnection";
    items: Array<{
      __typename: "GameCharacter";
      id: string;
      name: string;
      background: string | null;
      portrait: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        __typename: "Ability";
        name: string | null;
        description: string | null;
      } | null> | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
  owner: string | null;
};

export type DeleteGameMutation = {
  __typename: "Game";
  id: string;
  name: string;
  description: string;
  members: Array<string | null> | null;
  playerCharacters: {
    __typename: "ModelPlayerCharacterConnection";
    items: Array<{
      __typename: "PlayerCharacter";
      id: string;
      name: string;
      background: string | null;
      portrait: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        __typename: "Ability";
        name: string | null;
        description: string | null;
      } | null> | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    __typename: "ModelGameCharacterConnection";
    items: Array<{
      __typename: "GameCharacter";
      id: string;
      name: string;
      background: string | null;
      portrait: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        __typename: "Ability";
        name: string | null;
        description: string | null;
      } | null> | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
  owner: string | null;
};

export type CreateGameCharacterMutation = {
  __typename: "GameCharacter";
  id: string;
  name: string;
  background: string | null;
  portrait: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    __typename: "Ability";
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type UpdateGameCharacterMutation = {
  __typename: "GameCharacter";
  id: string;
  name: string;
  background: string | null;
  portrait: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    __typename: "Ability";
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type DeleteGameCharacterMutation = {
  __typename: "GameCharacter";
  id: string;
  name: string;
  background: string | null;
  portrait: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    __typename: "Ability";
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type CreatePlayerCharacterMutation = {
  __typename: "PlayerCharacter";
  id: string;
  name: string;
  background: string | null;
  portrait: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    __typename: "Ability";
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type UpdatePlayerCharacterMutation = {
  __typename: "PlayerCharacter";
  id: string;
  name: string;
  background: string | null;
  portrait: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    __typename: "Ability";
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type DeletePlayerCharacterMutation = {
  __typename: "PlayerCharacter";
  id: string;
  name: string;
  background: string | null;
  portrait: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    __typename: "Ability";
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type GetGameQuery = {
  __typename: "Game";
  id: string;
  name: string;
  description: string;
  members: Array<string | null> | null;
  playerCharacters: {
    __typename: "ModelPlayerCharacterConnection";
    items: Array<{
      __typename: "PlayerCharacter";
      id: string;
      name: string;
      background: string | null;
      portrait: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        __typename: "Ability";
        name: string | null;
        description: string | null;
      } | null> | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    __typename: "ModelGameCharacterConnection";
    items: Array<{
      __typename: "GameCharacter";
      id: string;
      name: string;
      background: string | null;
      portrait: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        __typename: "Ability";
        name: string | null;
        description: string | null;
      } | null> | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
  owner: string | null;
};

export type ListGamesQuery = {
  __typename: "ModelGameConnection";
  items: Array<{
    __typename: "Game";
    id: string;
    name: string;
    description: string;
    members: Array<string | null> | null;
    playerCharacters: {
      __typename: "ModelPlayerCharacterConnection";
      items: Array<{
        __typename: "PlayerCharacter";
        id: string;
        name: string;
        background: string | null;
        portrait: string | null;
        class: string | null;
        agility: number | null;
        hitPoints: number | null;
        fellowship: number | null;
        strength: number | null;
        wisdom: number | null;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    gameCharacters: {
      __typename: "ModelGameCharacterConnection";
      items: Array<{
        __typename: "GameCharacter";
        id: string;
        name: string;
        background: string | null;
        portrait: string | null;
        class: string | null;
        agility: number | null;
        hitPoints: number | null;
        fellowship: number | null;
        strength: number | null;
        wisdom: number | null;
        owner: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    messages: Array<string | null> | null;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetGameCharacterQuery = {
  __typename: "GameCharacter";
  id: string;
  name: string;
  background: string | null;
  portrait: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    __typename: "Ability";
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type ListGameCharactersQuery = {
  __typename: "ModelGameCharacterConnection";
  items: Array<{
    __typename: "GameCharacter";
    id: string;
    name: string;
    background: string | null;
    portrait: string | null;
    class: string | null;
    agility: number | null;
    hitPoints: number | null;
    fellowship: number | null;
    strength: number | null;
    wisdom: number | null;
    abilities: Array<{
      __typename: "Ability";
      name: string | null;
      description: string | null;
    } | null> | null;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPlayerCharacterQuery = {
  __typename: "PlayerCharacter";
  id: string;
  name: string;
  background: string | null;
  portrait: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    __typename: "Ability";
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type ListPlayerCharactersQuery = {
  __typename: "ModelPlayerCharacterConnection";
  items: Array<{
    __typename: "PlayerCharacter";
    id: string;
    name: string;
    background: string | null;
    portrait: string | null;
    class: string | null;
    agility: number | null;
    hitPoints: number | null;
    fellowship: number | null;
    strength: number | null;
    wisdom: number | null;
    abilities: Array<{
      __typename: "Ability";
      name: string | null;
      description: string | null;
    } | null> | null;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateGameSubscription = {
  __typename: "Game";
  id: string;
  name: string;
  description: string;
  members: Array<string | null> | null;
  playerCharacters: {
    __typename: "ModelPlayerCharacterConnection";
    items: Array<{
      __typename: "PlayerCharacter";
      id: string;
      name: string;
      background: string | null;
      portrait: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        __typename: "Ability";
        name: string | null;
        description: string | null;
      } | null> | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    __typename: "ModelGameCharacterConnection";
    items: Array<{
      __typename: "GameCharacter";
      id: string;
      name: string;
      background: string | null;
      portrait: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        __typename: "Ability";
        name: string | null;
        description: string | null;
      } | null> | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
  owner: string | null;
};

export type OnUpdateGameSubscription = {
  __typename: "Game";
  id: string;
  name: string;
  description: string;
  members: Array<string | null> | null;
  playerCharacters: {
    __typename: "ModelPlayerCharacterConnection";
    items: Array<{
      __typename: "PlayerCharacter";
      id: string;
      name: string;
      background: string | null;
      portrait: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        __typename: "Ability";
        name: string | null;
        description: string | null;
      } | null> | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    __typename: "ModelGameCharacterConnection";
    items: Array<{
      __typename: "GameCharacter";
      id: string;
      name: string;
      background: string | null;
      portrait: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        __typename: "Ability";
        name: string | null;
        description: string | null;
      } | null> | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
  owner: string | null;
};

export type OnDeleteGameSubscription = {
  __typename: "Game";
  id: string;
  name: string;
  description: string;
  members: Array<string | null> | null;
  playerCharacters: {
    __typename: "ModelPlayerCharacterConnection";
    items: Array<{
      __typename: "PlayerCharacter";
      id: string;
      name: string;
      background: string | null;
      portrait: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        __typename: "Ability";
        name: string | null;
        description: string | null;
      } | null> | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    __typename: "ModelGameCharacterConnection";
    items: Array<{
      __typename: "GameCharacter";
      id: string;
      name: string;
      background: string | null;
      portrait: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        __typename: "Ability";
        name: string | null;
        description: string | null;
      } | null> | null;
      owner: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
  owner: string | null;
};

export type OnCreateGameCharacterSubscription = {
  __typename: "GameCharacter";
  id: string;
  name: string;
  background: string | null;
  portrait: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    __typename: "Ability";
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type OnUpdateGameCharacterSubscription = {
  __typename: "GameCharacter";
  id: string;
  name: string;
  background: string | null;
  portrait: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    __typename: "Ability";
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type OnDeleteGameCharacterSubscription = {
  __typename: "GameCharacter";
  id: string;
  name: string;
  background: string | null;
  portrait: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    __typename: "Ability";
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type OnCreatePlayerCharacterSubscription = {
  __typename: "PlayerCharacter";
  id: string;
  name: string;
  background: string | null;
  portrait: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    __typename: "Ability";
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type OnUpdatePlayerCharacterSubscription = {
  __typename: "PlayerCharacter";
  id: string;
  name: string;
  background: string | null;
  portrait: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    __typename: "Ability";
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type OnDeletePlayerCharacterSubscription = {
  __typename: "PlayerCharacter";
  id: string;
  name: string;
  background: string | null;
  portrait: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    __typename: "Ability";
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateGame(
    input: CreateGameInput,
    condition?: ModelGameConditionInput
  ): Promise<CreateGameMutation> {
    const statement = `mutation CreateGame($input: CreateGameInput!, $condition: ModelGameConditionInput) {
        createGame(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          members
          playerCharacters {
            __typename
            items {
              __typename
              id
              name
              background
              portrait
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                __typename
                name
                description
              }
              owner
            }
            nextToken
          }
          gameCharacters {
            __typename
            items {
              __typename
              id
              name
              background
              portrait
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                __typename
                name
                description
              }
              owner
            }
            nextToken
          }
          messages
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
    return <CreateGameMutation>response.data.createGame;
  }
  async UpdateGame(
    input: UpdateGameInput,
    condition?: ModelGameConditionInput
  ): Promise<UpdateGameMutation> {
    const statement = `mutation UpdateGame($input: UpdateGameInput!, $condition: ModelGameConditionInput) {
        updateGame(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          members
          playerCharacters {
            __typename
            items {
              __typename
              id
              name
              background
              portrait
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                __typename
                name
                description
              }
              owner
            }
            nextToken
          }
          gameCharacters {
            __typename
            items {
              __typename
              id
              name
              background
              portrait
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                __typename
                name
                description
              }
              owner
            }
            nextToken
          }
          messages
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
    return <UpdateGameMutation>response.data.updateGame;
  }
  async DeleteGame(
    input: DeleteGameInput,
    condition?: ModelGameConditionInput
  ): Promise<DeleteGameMutation> {
    const statement = `mutation DeleteGame($input: DeleteGameInput!, $condition: ModelGameConditionInput) {
        deleteGame(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          members
          playerCharacters {
            __typename
            items {
              __typename
              id
              name
              background
              portrait
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                __typename
                name
                description
              }
              owner
            }
            nextToken
          }
          gameCharacters {
            __typename
            items {
              __typename
              id
              name
              background
              portrait
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                __typename
                name
                description
              }
              owner
            }
            nextToken
          }
          messages
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
    return <DeleteGameMutation>response.data.deleteGame;
  }
  async CreateGameCharacter(
    input: CreateGameCharacterInput,
    condition?: ModelGameCharacterConditionInput
  ): Promise<CreateGameCharacterMutation> {
    const statement = `mutation CreateGameCharacter($input: CreateGameCharacterInput!, $condition: ModelGameCharacterConditionInput) {
        createGameCharacter(input: $input, condition: $condition) {
          __typename
          id
          name
          background
          portrait
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            __typename
            name
            description
          }
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
    return <CreateGameCharacterMutation>response.data.createGameCharacter;
  }
  async UpdateGameCharacter(
    input: UpdateGameCharacterInput,
    condition?: ModelGameCharacterConditionInput
  ): Promise<UpdateGameCharacterMutation> {
    const statement = `mutation UpdateGameCharacter($input: UpdateGameCharacterInput!, $condition: ModelGameCharacterConditionInput) {
        updateGameCharacter(input: $input, condition: $condition) {
          __typename
          id
          name
          background
          portrait
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            __typename
            name
            description
          }
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
    return <UpdateGameCharacterMutation>response.data.updateGameCharacter;
  }
  async DeleteGameCharacter(
    input: DeleteGameCharacterInput,
    condition?: ModelGameCharacterConditionInput
  ): Promise<DeleteGameCharacterMutation> {
    const statement = `mutation DeleteGameCharacter($input: DeleteGameCharacterInput!, $condition: ModelGameCharacterConditionInput) {
        deleteGameCharacter(input: $input, condition: $condition) {
          __typename
          id
          name
          background
          portrait
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            __typename
            name
            description
          }
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
    return <DeleteGameCharacterMutation>response.data.deleteGameCharacter;
  }
  async CreatePlayerCharacter(
    input: CreatePlayerCharacterInput,
    condition?: ModelPlayerCharacterConditionInput
  ): Promise<CreatePlayerCharacterMutation> {
    const statement = `mutation CreatePlayerCharacter($input: CreatePlayerCharacterInput!, $condition: ModelPlayerCharacterConditionInput) {
        createPlayerCharacter(input: $input, condition: $condition) {
          __typename
          id
          name
          background
          portrait
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            __typename
            name
            description
          }
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
    return <CreatePlayerCharacterMutation>response.data.createPlayerCharacter;
  }
  async UpdatePlayerCharacter(
    input: UpdatePlayerCharacterInput,
    condition?: ModelPlayerCharacterConditionInput
  ): Promise<UpdatePlayerCharacterMutation> {
    const statement = `mutation UpdatePlayerCharacter($input: UpdatePlayerCharacterInput!, $condition: ModelPlayerCharacterConditionInput) {
        updatePlayerCharacter(input: $input, condition: $condition) {
          __typename
          id
          name
          background
          portrait
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            __typename
            name
            description
          }
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
    return <UpdatePlayerCharacterMutation>response.data.updatePlayerCharacter;
  }
  async DeletePlayerCharacter(
    input: DeletePlayerCharacterInput,
    condition?: ModelPlayerCharacterConditionInput
  ): Promise<DeletePlayerCharacterMutation> {
    const statement = `mutation DeletePlayerCharacter($input: DeletePlayerCharacterInput!, $condition: ModelPlayerCharacterConditionInput) {
        deletePlayerCharacter(input: $input, condition: $condition) {
          __typename
          id
          name
          background
          portrait
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            __typename
            name
            description
          }
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
    return <DeletePlayerCharacterMutation>response.data.deletePlayerCharacter;
  }
  async GetGame(id: string): Promise<GetGameQuery> {
    const statement = `query GetGame($id: ID!) {
        getGame(id: $id) {
          __typename
          id
          name
          description
          members
          playerCharacters {
            __typename
            items {
              __typename
              id
              name
              background
              portrait
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                __typename
                name
                description
              }
              owner
            }
            nextToken
          }
          gameCharacters {
            __typename
            items {
              __typename
              id
              name
              background
              portrait
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                __typename
                name
                description
              }
              owner
            }
            nextToken
          }
          messages
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGameQuery>response.data.getGame;
  }
  async ListGames(
    filter?: ModelGameFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGamesQuery> {
    const statement = `query ListGames($filter: ModelGameFilterInput, $limit: Int, $nextToken: String) {
        listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            members
            playerCharacters {
              __typename
              items {
                __typename
                id
                name
                background
                portrait
                class
                agility
                hitPoints
                fellowship
                strength
                wisdom
                owner
              }
              nextToken
            }
            gameCharacters {
              __typename
              items {
                __typename
                id
                name
                background
                portrait
                class
                agility
                hitPoints
                fellowship
                strength
                wisdom
                owner
              }
              nextToken
            }
            messages
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
    return <ListGamesQuery>response.data.listGames;
  }
  async GetGameCharacter(id: string): Promise<GetGameCharacterQuery> {
    const statement = `query GetGameCharacter($id: ID!) {
        getGameCharacter(id: $id) {
          __typename
          id
          name
          background
          portrait
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            __typename
            name
            description
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGameCharacterQuery>response.data.getGameCharacter;
  }
  async ListGameCharacters(
    filter?: ModelGameCharacterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGameCharactersQuery> {
    const statement = `query ListGameCharacters($filter: ModelGameCharacterFilterInput, $limit: Int, $nextToken: String) {
        listGameCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            background
            portrait
            class
            agility
            hitPoints
            fellowship
            strength
            wisdom
            abilities {
              __typename
              name
              description
            }
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
    return <ListGameCharactersQuery>response.data.listGameCharacters;
  }
  async GetPlayerCharacter(id: string): Promise<GetPlayerCharacterQuery> {
    const statement = `query GetPlayerCharacter($id: ID!) {
        getPlayerCharacter(id: $id) {
          __typename
          id
          name
          background
          portrait
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            __typename
            name
            description
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPlayerCharacterQuery>response.data.getPlayerCharacter;
  }
  async ListPlayerCharacters(
    filter?: ModelPlayerCharacterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPlayerCharactersQuery> {
    const statement = `query ListPlayerCharacters($filter: ModelPlayerCharacterFilterInput, $limit: Int, $nextToken: String) {
        listPlayerCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            background
            portrait
            class
            agility
            hitPoints
            fellowship
            strength
            wisdom
            abilities {
              __typename
              name
              description
            }
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
    return <ListPlayerCharactersQuery>response.data.listPlayerCharacters;
  }
  OnCreateGameListener: Observable<OnCreateGameSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateGame($owner: String!) {
        onCreateGame(owner: $owner) {
          __typename
          id
          name
          description
          members
          playerCharacters {
            __typename
            items {
              __typename
              id
              name
              background
              portrait
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                __typename
                name
                description
              }
              owner
            }
            nextToken
          }
          gameCharacters {
            __typename
            items {
              __typename
              id
              name
              background
              portrait
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                __typename
                name
                description
              }
              owner
            }
            nextToken
          }
          messages
          owner
        }
      }`
    )
  ) as Observable<OnCreateGameSubscription>;

  OnUpdateGameListener: Observable<OnUpdateGameSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateGame($owner: String!) {
        onUpdateGame(owner: $owner) {
          __typename
          id
          name
          description
          members
          playerCharacters {
            __typename
            items {
              __typename
              id
              name
              background
              portrait
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                __typename
                name
                description
              }
              owner
            }
            nextToken
          }
          gameCharacters {
            __typename
            items {
              __typename
              id
              name
              background
              portrait
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                __typename
                name
                description
              }
              owner
            }
            nextToken
          }
          messages
          owner
        }
      }`
    )
  ) as Observable<OnUpdateGameSubscription>;

  OnDeleteGameListener: Observable<OnDeleteGameSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteGame($owner: String!) {
        onDeleteGame(owner: $owner) {
          __typename
          id
          name
          description
          members
          playerCharacters {
            __typename
            items {
              __typename
              id
              name
              background
              portrait
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                __typename
                name
                description
              }
              owner
            }
            nextToken
          }
          gameCharacters {
            __typename
            items {
              __typename
              id
              name
              background
              portrait
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                __typename
                name
                description
              }
              owner
            }
            nextToken
          }
          messages
          owner
        }
      }`
    )
  ) as Observable<OnDeleteGameSubscription>;

  OnCreateGameCharacterListener: Observable<
    OnCreateGameCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateGameCharacter($owner: String!) {
        onCreateGameCharacter(owner: $owner) {
          __typename
          id
          name
          background
          portrait
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            __typename
            name
            description
          }
          owner
        }
      }`
    )
  ) as Observable<OnCreateGameCharacterSubscription>;

  OnUpdateGameCharacterListener: Observable<
    OnUpdateGameCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateGameCharacter($owner: String!) {
        onUpdateGameCharacter(owner: $owner) {
          __typename
          id
          name
          background
          portrait
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            __typename
            name
            description
          }
          owner
        }
      }`
    )
  ) as Observable<OnUpdateGameCharacterSubscription>;

  OnDeleteGameCharacterListener: Observable<
    OnDeleteGameCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteGameCharacter($owner: String!) {
        onDeleteGameCharacter(owner: $owner) {
          __typename
          id
          name
          background
          portrait
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            __typename
            name
            description
          }
          owner
        }
      }`
    )
  ) as Observable<OnDeleteGameCharacterSubscription>;

  OnCreatePlayerCharacterListener: Observable<
    OnCreatePlayerCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePlayerCharacter($owner: String!) {
        onCreatePlayerCharacter(owner: $owner) {
          __typename
          id
          name
          background
          portrait
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            __typename
            name
            description
          }
          owner
        }
      }`
    )
  ) as Observable<OnCreatePlayerCharacterSubscription>;

  OnUpdatePlayerCharacterListener: Observable<
    OnUpdatePlayerCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePlayerCharacter($owner: String!) {
        onUpdatePlayerCharacter(owner: $owner) {
          __typename
          id
          name
          background
          portrait
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            __typename
            name
            description
          }
          owner
        }
      }`
    )
  ) as Observable<OnUpdatePlayerCharacterSubscription>;

  OnDeletePlayerCharacterListener: Observable<
    OnDeletePlayerCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePlayerCharacter($owner: String!) {
        onDeletePlayerCharacter(owner: $owner) {
          __typename
          id
          name
          background
          portrait
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            __typename
            name
            description
          }
          owner
        }
      }`
    )
  ) as Observable<OnDeletePlayerCharacterSubscription>;
}
