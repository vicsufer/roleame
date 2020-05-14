/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type DeleteGameInput = {
  id?: string | null;
};

export type ModelGameConditionInput = {
  uuid?: ModelStringInput | null;
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

export type DeletePlayerInput = {
  id?: string | null;
};

export type ModelPlayerConditionInput = {
  gameID?: ModelIDInput | null;
  pendingInvite?: ModelBooleanInput | null;
  and?: Array<ModelPlayerConditionInput | null> | null;
  or?: Array<ModelPlayerConditionInput | null> | null;
  not?: ModelPlayerConditionInput | null;
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

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  uuid?: ModelStringInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  members?: ModelStringInput | null;
  messages?: ModelStringInput | null;
  and?: Array<ModelGameFilterInput | null> | null;
  or?: Array<ModelGameFilterInput | null> | null;
  not?: ModelGameFilterInput | null;
};

export type CreateGameInput = {
  id?: string | null;
  owner?: string | null;
  uuid: string;
  name: string;
  description?: string | null;
  members?: Array<string | null> | null;
  messages?: Array<string | null> | null;
};

export type UpdateGameInput = {
  id: string;
  owner?: string | null;
  uuid?: string | null;
  name?: string | null;
  description?: string | null;
  members?: Array<string | null> | null;
  messages?: Array<string | null> | null;
};

export type CreatePlayerInput = {
  id?: string | null;
  gameID: string;
  gameOwnerID: string;
  playerID: string;
  pendingInvite?: boolean | null;
};

export type UpdatePlayerInput = {
  id: string;
  gameID?: string | null;
  gameOwnerID?: string | null;
  playerID?: string | null;
  pendingInvite?: boolean | null;
};

export type CreateGameCharacterInput = {
  id?: string | null;
  gameID: string;
  uuid: string;
  name: string;
  background?: string | null;
  portrait?: string | null;
  portraitURL?: string | null;
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
  gameID?: ModelIDInput | null;
  uuid?: ModelStringInput | null;
  name?: ModelStringInput | null;
  background?: ModelStringInput | null;
  portrait?: ModelStringInput | null;
  portraitURL?: ModelStringInput | null;
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
  gameID?: string | null;
  uuid?: string | null;
  name?: string | null;
  background?: string | null;
  portrait?: string | null;
  portraitURL?: string | null;
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
  uuid: string;
  name: string;
  background?: string | null;
  portrait?: string | null;
  portraitURL?: string | null;
  class?: string | null;
  agility?: number | null;
  hitPoints?: number | null;
  fellowship?: number | null;
  strength?: number | null;
  wisdom?: number | null;
  abilities?: Array<AbilityInput | null> | null;
};

export type ModelPlayerCharacterConditionInput = {
  uuid?: ModelStringInput | null;
  name?: ModelStringInput | null;
  background?: ModelStringInput | null;
  portrait?: ModelStringInput | null;
  portraitURL?: ModelStringInput | null;
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
  uuid?: string | null;
  name?: string | null;
  background?: string | null;
  portrait?: string | null;
  portraitURL?: string | null;
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

export type CreateUserInput = {
  username: string;
  email: string;
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type UpdateUserInput = {
  username: string;
  email?: string | null;
};

export type DeleteUserInput = {
  username: string;
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null;
  gameID?: ModelIDInput | null;
  gameOwnerID?: ModelStringInput | null;
  playerID?: ModelStringInput | null;
  pendingInvite?: ModelBooleanInput | null;
  and?: Array<ModelPlayerFilterInput | null> | null;
  or?: Array<ModelPlayerFilterInput | null> | null;
  not?: ModelPlayerFilterInput | null;
};

export type ModelGameCharacterFilterInput = {
  id?: ModelIDInput | null;
  gameID?: ModelIDInput | null;
  uuid?: ModelStringInput | null;
  name?: ModelStringInput | null;
  background?: ModelStringInput | null;
  portrait?: ModelStringInput | null;
  portraitURL?: ModelStringInput | null;
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
  uuid?: ModelStringInput | null;
  name?: ModelStringInput | null;
  background?: ModelStringInput | null;
  portrait?: ModelStringInput | null;
  portraitURL?: ModelStringInput | null;
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

export type ModelUserFilterInput = {
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type DeleteGameRetrieveIDMutation = {
  
  id: string;
};

export type DeletePlayerRetrieveIDMutation = {
  
  id: string;
};

export type ListGamesDataQuery = {
  
  items: Array<{
    
    id: string;
    owner: string | null;
    uuid: string;
    name: string;
    description: string | null;
    members: Array<string | null> | null;
    players: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        playerID: string;
        pendingInvite: boolean | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserDataQuery = {
  
  username: string;
  email: string;
};

export type GetUserGamesDataQuery = {
  
  gamesAsPlayer: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        uuid: string;
        name: string;
        description: string | null;
        messages: Array<string | null> | null;
        owner: string | null;
        members: Array<string | null> | null;
        players: {
          
          items: Array<{
            
            id: string;
            gameID: string;
            gameOwnerID: string;
            playerID: string;
            pendingInvite: boolean | null;
          } | null> | null;
          nextToken: string | null;
        } | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetUserMembershipsQuery = {
  
  gamesAsPlayer: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        uuid: string;
        name: string;
        description: string | null;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: string | null;
};

export type CreateGameMutation = {
  
  id: string;
  owner: string | null;
  uuid: string;
  name: string;
  description: string | null;
  members: Array<string | null> | null;
  players: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      gameOwnerID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        owner: string | null;
        uuid: string;
        name: string;
        description: string | null;
        members: Array<string | null> | null;
        messages: Array<string | null> | null;
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      uuid: string;
      name: string;
      background: string | null;
      portrait: string | null;
      portraitURL: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        
        name: string | null;
        description: string | null;
      } | null> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
};

export type UpdateGameMutation = {
  
  id: string;
  owner: string | null;
  uuid: string;
  name: string;
  description: string | null;
  members: Array<string | null> | null;
  players: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      gameOwnerID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        owner: string | null;
        uuid: string;
        name: string;
        description: string | null;
        members: Array<string | null> | null;
        messages: Array<string | null> | null;
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      uuid: string;
      name: string;
      background: string | null;
      portrait: string | null;
      portraitURL: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        
        name: string | null;
        description: string | null;
      } | null> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
};

export type DeleteGameMutation = {
  
  id: string;
  owner: string | null;
  uuid: string;
  name: string;
  description: string | null;
  members: Array<string | null> | null;
  players: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      gameOwnerID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        owner: string | null;
        uuid: string;
        name: string;
        description: string | null;
        members: Array<string | null> | null;
        messages: Array<string | null> | null;
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      uuid: string;
      name: string;
      background: string | null;
      portrait: string | null;
      portraitURL: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        
        name: string | null;
        description: string | null;
      } | null> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
};

export type CreatePlayerMutation = {
  
  id: string;
  gameID: string;
  gameOwnerID: string;
  playerID: string;
  pendingInvite: boolean | null;
  game: {
    
    id: string;
    owner: string | null;
    uuid: string;
    name: string;
    description: string | null;
    members: Array<string | null> | null;
    players: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        gameOwnerID: string;
        playerID: string;
        pendingInvite: boolean | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    gameCharacters: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        uuid: string;
        name: string;
        background: string | null;
        portrait: string | null;
        portraitURL: string | null;
        class: string | null;
        agility: number | null;
        hitPoints: number | null;
        fellowship: number | null;
        strength: number | null;
        wisdom: number | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    messages: Array<string | null> | null;
  };
  player: {
    
    username: string;
    email: string;
    gamesAsPlayer: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        gameOwnerID: string;
        playerID: string;
        pendingInvite: boolean | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  };
};

export type UpdatePlayerMutation = {
  
  id: string;
  gameID: string;
  gameOwnerID: string;
  playerID: string;
  pendingInvite: boolean | null;
  game: {
    
    id: string;
    owner: string | null;
    uuid: string;
    name: string;
    description: string | null;
    members: Array<string | null> | null;
    players: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        gameOwnerID: string;
        playerID: string;
        pendingInvite: boolean | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    gameCharacters: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        uuid: string;
        name: string;
        background: string | null;
        portrait: string | null;
        portraitURL: string | null;
        class: string | null;
        agility: number | null;
        hitPoints: number | null;
        fellowship: number | null;
        strength: number | null;
        wisdom: number | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    messages: Array<string | null> | null;
  };
  player: {
    
    username: string;
    email: string;
    gamesAsPlayer: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        gameOwnerID: string;
        playerID: string;
        pendingInvite: boolean | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  };
};

export type DeletePlayerMutation = {
  
  id: string;
  gameID: string;
  gameOwnerID: string;
  playerID: string;
  pendingInvite: boolean | null;
  game: {
    
    id: string;
    owner: string | null;
    uuid: string;
    name: string;
    description: string | null;
    members: Array<string | null> | null;
    players: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        gameOwnerID: string;
        playerID: string;
        pendingInvite: boolean | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    gameCharacters: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        uuid: string;
        name: string;
        background: string | null;
        portrait: string | null;
        portraitURL: string | null;
        class: string | null;
        agility: number | null;
        hitPoints: number | null;
        fellowship: number | null;
        strength: number | null;
        wisdom: number | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    messages: Array<string | null> | null;
  };
  player: {
    
    username: string;
    email: string;
    gamesAsPlayer: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        gameOwnerID: string;
        playerID: string;
        pendingInvite: boolean | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  };
};

export type CreateGameCharacterMutation = {
  
  id: string;
  gameID: string;
  uuid: string;
  name: string;
  background: string | null;
  portrait: string | null;
  portraitURL: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    
    name: string | null;
    description: string | null;
  } | null> | null;
};

export type UpdateGameCharacterMutation = {
  
  id: string;
  gameID: string;
  uuid: string;
  name: string;
  background: string | null;
  portrait: string | null;
  portraitURL: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    
    name: string | null;
    description: string | null;
  } | null> | null;
};

export type DeleteGameCharacterMutation = {
  
  id: string;
  gameID: string;
  uuid: string;
  name: string;
  background: string | null;
  portrait: string | null;
  portraitURL: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    
    name: string | null;
    description: string | null;
  } | null> | null;
};

export type CreatePlayerCharacterMutation = {
  
  id: string;
  uuid: string;
  name: string;
  background: string | null;
  portrait: string | null;
  portraitURL: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type UpdatePlayerCharacterMutation = {
  
  id: string;
  uuid: string;
  name: string;
  background: string | null;
  portrait: string | null;
  portraitURL: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type DeletePlayerCharacterMutation = {
  
  id: string;
  uuid: string;
  name: string;
  background: string | null;
  portrait: string | null;
  portraitURL: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type CreateUserMutation = {
  
  username: string;
  email: string;
  gamesAsPlayer: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      gameOwnerID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        owner: string | null;
        uuid: string;
        name: string;
        description: string | null;
        members: Array<string | null> | null;
        messages: Array<string | null> | null;
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: string | null;
};

export type UpdateUserMutation = {
  
  username: string;
  email: string;
  gamesAsPlayer: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      gameOwnerID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        owner: string | null;
        uuid: string;
        name: string;
        description: string | null;
        members: Array<string | null> | null;
        messages: Array<string | null> | null;
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: string | null;
};

export type DeleteUserMutation = {
  
  username: string;
  email: string;
  gamesAsPlayer: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      gameOwnerID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        owner: string | null;
        uuid: string;
        name: string;
        description: string | null;
        members: Array<string | null> | null;
        messages: Array<string | null> | null;
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: string | null;
};

export type GetGameQuery = {
  
  id: string;
  owner: string | null;
  uuid: string;
  name: string;
  description: string | null;
  members: Array<string | null> | null;
  players: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      gameOwnerID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        owner: string | null;
        uuid: string;
        name: string;
        description: string | null;
        members: Array<string | null> | null;
        messages: Array<string | null> | null;
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      uuid: string;
      name: string;
      background: string | null;
      portrait: string | null;
      portraitURL: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        
        name: string | null;
        description: string | null;
      } | null> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
};

export type ListGamesQuery = {
  
  items: Array<{
    
    id: string;
    owner: string | null;
    uuid: string;
    name: string;
    description: string | null;
    members: Array<string | null> | null;
    players: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        gameOwnerID: string;
        playerID: string;
        pendingInvite: boolean | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    gameCharacters: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        uuid: string;
        name: string;
        background: string | null;
        portrait: string | null;
        portraitURL: string | null;
        class: string | null;
        agility: number | null;
        hitPoints: number | null;
        fellowship: number | null;
        strength: number | null;
        wisdom: number | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    messages: Array<string | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPlayerQuery = {
  
  id: string;
  gameID: string;
  gameOwnerID: string;
  playerID: string;
  pendingInvite: boolean | null;
  game: {
    
    id: string;
    owner: string | null;
    uuid: string;
    name: string;
    description: string | null;
    members: Array<string | null> | null;
    players: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        gameOwnerID: string;
        playerID: string;
        pendingInvite: boolean | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    gameCharacters: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        uuid: string;
        name: string;
        background: string | null;
        portrait: string | null;
        portraitURL: string | null;
        class: string | null;
        agility: number | null;
        hitPoints: number | null;
        fellowship: number | null;
        strength: number | null;
        wisdom: number | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    messages: Array<string | null> | null;
  };
  player: {
    
    username: string;
    email: string;
    gamesAsPlayer: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        gameOwnerID: string;
        playerID: string;
        pendingInvite: boolean | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  };
};

export type ListPlayersQuery = {
  
  items: Array<{
    
    id: string;
    gameID: string;
    gameOwnerID: string;
    playerID: string;
    pendingInvite: boolean | null;
    game: {
      
      id: string;
      owner: string | null;
      uuid: string;
      name: string;
      description: string | null;
      members: Array<string | null> | null;
      players: {
        
        nextToken: string | null;
      } | null;
      gameCharacters: {
        
        nextToken: string | null;
      } | null;
      messages: Array<string | null> | null;
    };
    player: {
      
      username: string;
      email: string;
      gamesAsPlayer: {
        
        nextToken: string | null;
      } | null;
      owner: string | null;
    };
  } | null> | null;
  nextToken: string | null;
};

export type GetGameCharacterQuery = {
  
  id: string;
  gameID: string;
  uuid: string;
  name: string;
  background: string | null;
  portrait: string | null;
  portraitURL: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    
    name: string | null;
    description: string | null;
  } | null> | null;
};

export type ListGameCharactersQuery = {
  
  items: Array<{
    
    id: string;
    gameID: string;
    uuid: string;
    name: string;
    background: string | null;
    portrait: string | null;
    portraitURL: string | null;
    class: string | null;
    agility: number | null;
    hitPoints: number | null;
    fellowship: number | null;
    strength: number | null;
    wisdom: number | null;
    abilities: Array<{
      
      name: string | null;
      description: string | null;
    } | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPlayerCharacterQuery = {
  
  id: string;
  uuid: string;
  name: string;
  background: string | null;
  portrait: string | null;
  portraitURL: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type ListPlayerCharactersQuery = {
  
  items: Array<{
    
    id: string;
    uuid: string;
    name: string;
    background: string | null;
    portrait: string | null;
    portraitURL: string | null;
    class: string | null;
    agility: number | null;
    hitPoints: number | null;
    fellowship: number | null;
    strength: number | null;
    wisdom: number | null;
    abilities: Array<{
      
      name: string | null;
      description: string | null;
    } | null> | null;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserQuery = {
  
  username: string;
  email: string;
  gamesAsPlayer: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      gameOwnerID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        owner: string | null;
        uuid: string;
        name: string;
        description: string | null;
        members: Array<string | null> | null;
        messages: Array<string | null> | null;
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: string | null;
};

export type ListUsersQuery = {
  
  items: Array<{
    
    username: string;
    email: string;
    gamesAsPlayer: {
      
      items: Array<{
        
        id: string;
        gameID: string;
        gameOwnerID: string;
        playerID: string;
        pendingInvite: boolean | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateGameSubscription = {
  
  id: string;
  owner: string | null;
  uuid: string;
  name: string;
  description: string | null;
  members: Array<string | null> | null;
  players: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      gameOwnerID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        owner: string | null;
        uuid: string;
        name: string;
        description: string | null;
        members: Array<string | null> | null;
        messages: Array<string | null> | null;
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      uuid: string;
      name: string;
      background: string | null;
      portrait: string | null;
      portraitURL: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        
        name: string | null;
        description: string | null;
      } | null> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
};

export type OnUpdateGameSubscription = {
  
  id: string;
  owner: string | null;
  uuid: string;
  name: string;
  description: string | null;
  members: Array<string | null> | null;
  players: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      gameOwnerID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        owner: string | null;
        uuid: string;
        name: string;
        description: string | null;
        members: Array<string | null> | null;
        messages: Array<string | null> | null;
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      uuid: string;
      name: string;
      background: string | null;
      portrait: string | null;
      portraitURL: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        
        name: string | null;
        description: string | null;
      } | null> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
};

export type OnDeleteGameSubscription = {
  
  id: string;
  owner: string | null;
  uuid: string;
  name: string;
  description: string | null;
  members: Array<string | null> | null;
  players: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      gameOwnerID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        owner: string | null;
        uuid: string;
        name: string;
        description: string | null;
        members: Array<string | null> | null;
        messages: Array<string | null> | null;
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      uuid: string;
      name: string;
      background: string | null;
      portrait: string | null;
      portraitURL: string | null;
      class: string | null;
      agility: number | null;
      hitPoints: number | null;
      fellowship: number | null;
      strength: number | null;
      wisdom: number | null;
      abilities: Array<{
        
        name: string | null;
        description: string | null;
      } | null> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
};

export type OnCreateGameCharacterSubscription = {
  
  id: string;
  gameID: string;
  uuid: string;
  name: string;
  background: string | null;
  portrait: string | null;
  portraitURL: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    
    name: string | null;
    description: string | null;
  } | null> | null;
};

export type OnUpdateGameCharacterSubscription = {
  
  id: string;
  gameID: string;
  uuid: string;
  name: string;
  background: string | null;
  portrait: string | null;
  portraitURL: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    
    name: string | null;
    description: string | null;
  } | null> | null;
};

export type OnDeleteGameCharacterSubscription = {
  
  id: string;
  gameID: string;
  uuid: string;
  name: string;
  background: string | null;
  portrait: string | null;
  portraitURL: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    
    name: string | null;
    description: string | null;
  } | null> | null;
};

export type OnCreatePlayerCharacterSubscription = {
  
  id: string;
  uuid: string;
  name: string;
  background: string | null;
  portrait: string | null;
  portraitURL: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type OnUpdatePlayerCharacterSubscription = {
  
  id: string;
  uuid: string;
  name: string;
  background: string | null;
  portrait: string | null;
  portraitURL: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type OnDeletePlayerCharacterSubscription = {
  
  id: string;
  uuid: string;
  name: string;
  background: string | null;
  portrait: string | null;
  portraitURL: string | null;
  class: string | null;
  agility: number | null;
  hitPoints: number | null;
  fellowship: number | null;
  strength: number | null;
  wisdom: number | null;
  abilities: Array<{
    
    name: string | null;
    description: string | null;
  } | null> | null;
  owner: string | null;
};

export type OnCreateUserSubscription = {
  
  username: string;
  email: string;
  gamesAsPlayer: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      gameOwnerID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        owner: string | null;
        uuid: string;
        name: string;
        description: string | null;
        members: Array<string | null> | null;
        messages: Array<string | null> | null;
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: string | null;
};

export type OnUpdateUserSubscription = {
  
  username: string;
  email: string;
  gamesAsPlayer: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      gameOwnerID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        owner: string | null;
        uuid: string;
        name: string;
        description: string | null;
        members: Array<string | null> | null;
        messages: Array<string | null> | null;
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: string | null;
};

export type OnDeleteUserSubscription = {
  
  username: string;
  email: string;
  gamesAsPlayer: {
    
    items: Array<{
      
      id: string;
      gameID: string;
      gameOwnerID: string;
      playerID: string;
      pendingInvite: boolean | null;
      game: {
        
        id: string;
        owner: string | null;
        uuid: string;
        name: string;
        description: string | null;
        members: Array<string | null> | null;
        messages: Array<string | null> | null;
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  owner: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async DeleteGameRetrieveID(
    input: DeleteGameInput,
    condition?: ModelGameConditionInput
  ): Promise<DeleteGameRetrieveIDMutation> {
    const statement = `mutation DeleteGameRetrieveID($input: DeleteGameInput!, $condition: ModelGameConditionInput) {
        deleteGame(input: $input, condition: $condition) {
          
          id
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
    return <DeleteGameRetrieveIDMutation>response.data.deleteGame;
  }
  async DeletePlayerRetrieveID(
    input: DeletePlayerInput,
    condition?: ModelPlayerConditionInput
  ): Promise<DeletePlayerRetrieveIDMutation> {
    const statement = `mutation DeletePlayerRetrieveID($input: DeletePlayerInput!, $condition: ModelPlayerConditionInput) {
        deletePlayer(input: $input, condition: $condition) {
          
          id
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
    return <DeletePlayerRetrieveIDMutation>response.data.deletePlayer;
  }
  async ListGamesData(
    filter?: ModelGameFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGamesDataQuery> {
    const statement = `query ListGamesData($filter: ModelGameFilterInput, $limit: Int, $nextToken: String) {
        listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
          
          items {
            
            id
            owner
            uuid
            name
            description
            members
            players {
              
              items {
                
                id
                gameID
                playerID
                pendingInvite
              }
              nextToken
            }
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
    return <ListGamesDataQuery>response.data.listGames;
  }
  async GetUserData(username: string): Promise<GetUserDataQuery> {
    const statement = `query GetUserData($username: String!) {
        getUser(username: $username) {
          
          username
          email
        }
      }`;
    const gqlAPIServiceArguments: any = {
      username
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserDataQuery>response.data.getUser;
  }
  async GetUserGamesData(username: string): Promise<GetUserGamesDataQuery> {
    const statement = `query GetUserGamesData($username: String!) {
        getUser(username: $username) {
          
          gamesAsPlayer {
            
            items {
              
              id
              gameID
              playerID
              pendingInvite
              game {
                
                id
                uuid
                name
                description
                messages
                owner
                members
                players {
                  
                  items {
                    
                    id
                    gameID
                    gameOwnerID
                    playerID
                    pendingInvite
                  }
                  nextToken
                }
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      username
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserGamesDataQuery>response.data.getUser;
  }
  async GetUserMemberships(username: string): Promise<GetUserMembershipsQuery> {
    const statement = `query GetUserMemberships($username: String!) {
        getUser(username: $username) {
          
          gamesAsPlayer {
            
            items {
              
              id
              gameID
              playerID
              pendingInvite
              game {
                
                id
                uuid
                name
                description
                owner
              }
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      username
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserMembershipsQuery>response.data.getUser;
  }
  async CreateGame(
    input: CreateGameInput,
    condition?: ModelGameConditionInput
  ): Promise<CreateGameMutation> {
    const statement = `mutation CreateGame($input: CreateGameInput!, $condition: ModelGameConditionInput) {
        createGame(input: $input, condition: $condition) {
          
          id
          owner
          uuid
          name
          description
          members
          players {
            
            items {
              
              id
              gameID
              gameOwnerID
              playerID
              pendingInvite
              game {
                
                id
                owner
                uuid
                name
                description
                members
                messages
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
          }
          gameCharacters {
            
            items {
              
              id
              gameID
              uuid
              name
              background
              portrait
              portraitURL
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                
                name
                description
              }
            }
            nextToken
          }
          messages
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
          
          id
          owner
          uuid
          name
          description
          members
          players {
            
            items {
              
              id
              gameID
              gameOwnerID
              playerID
              pendingInvite
              game {
                
                id
                owner
                uuid
                name
                description
                members
                messages
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
          }
          gameCharacters {
            
            items {
              
              id
              gameID
              uuid
              name
              background
              portrait
              portraitURL
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                
                name
                description
              }
            }
            nextToken
          }
          messages
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
          
          id
          owner
          uuid
          name
          description
          members
          players {
            
            items {
              
              id
              gameID
              gameOwnerID
              playerID
              pendingInvite
              game {
                
                id
                owner
                uuid
                name
                description
                members
                messages
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
          }
          gameCharacters {
            
            items {
              
              id
              gameID
              uuid
              name
              background
              portrait
              portraitURL
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                
                name
                description
              }
            }
            nextToken
          }
          messages
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
  async CreatePlayer(
    input: CreatePlayerInput,
    condition?: ModelPlayerConditionInput
  ): Promise<CreatePlayerMutation> {
    const statement = `mutation CreatePlayer($input: CreatePlayerInput!, $condition: ModelPlayerConditionInput) {
        createPlayer(input: $input, condition: $condition) {
          
          id
          gameID
          gameOwnerID
          playerID
          pendingInvite
          game {
            
            id
            owner
            uuid
            name
            description
            members
            players {
              
              items {
                
                id
                gameID
                gameOwnerID
                playerID
                pendingInvite
              }
              nextToken
            }
            gameCharacters {
              
              items {
                
                id
                gameID
                uuid
                name
                background
                portrait
                portraitURL
                class
                agility
                hitPoints
                fellowship
                strength
                wisdom
              }
              nextToken
            }
            messages
          }
          player {
            
            username
            email
            gamesAsPlayer {
              
              items {
                
                id
                gameID
                gameOwnerID
                playerID
                pendingInvite
              }
              nextToken
            }
            owner
          }
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
    return <CreatePlayerMutation>response.data.createPlayer;
  }
  async UpdatePlayer(
    input: UpdatePlayerInput,
    condition?: ModelPlayerConditionInput
  ): Promise<UpdatePlayerMutation> {
    const statement = `mutation UpdatePlayer($input: UpdatePlayerInput!, $condition: ModelPlayerConditionInput) {
        updatePlayer(input: $input, condition: $condition) {
          
          id
          gameID
          gameOwnerID
          playerID
          pendingInvite
          game {
            
            id
            owner
            uuid
            name
            description
            members
            players {
              
              items {
                
                id
                gameID
                gameOwnerID
                playerID
                pendingInvite
              }
              nextToken
            }
            gameCharacters {
              
              items {
                
                id
                gameID
                uuid
                name
                background
                portrait
                portraitURL
                class
                agility
                hitPoints
                fellowship
                strength
                wisdom
              }
              nextToken
            }
            messages
          }
          player {
            
            username
            email
            gamesAsPlayer {
              
              items {
                
                id
                gameID
                gameOwnerID
                playerID
                pendingInvite
              }
              nextToken
            }
            owner
          }
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
    return <UpdatePlayerMutation>response.data.updatePlayer;
  }
  async DeletePlayer(
    input: DeletePlayerInput,
    condition?: ModelPlayerConditionInput
  ): Promise<DeletePlayerMutation> {
    const statement = `mutation DeletePlayer($input: DeletePlayerInput!, $condition: ModelPlayerConditionInput) {
        deletePlayer(input: $input, condition: $condition) {
          
          id
          gameID
          gameOwnerID
          playerID
          pendingInvite
          game {
            
            id
            owner
            uuid
            name
            description
            members
            players {
              
              items {
                
                id
                gameID
                gameOwnerID
                playerID
                pendingInvite
              }
              nextToken
            }
            gameCharacters {
              
              items {
                
                id
                gameID
                uuid
                name
                background
                portrait
                portraitURL
                class
                agility
                hitPoints
                fellowship
                strength
                wisdom
              }
              nextToken
            }
            messages
          }
          player {
            
            username
            email
            gamesAsPlayer {
              
              items {
                
                id
                gameID
                gameOwnerID
                playerID
                pendingInvite
              }
              nextToken
            }
            owner
          }
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
    return <DeletePlayerMutation>response.data.deletePlayer;
  }
  async CreateGameCharacter(
    input: CreateGameCharacterInput,
    condition?: ModelGameCharacterConditionInput
  ): Promise<CreateGameCharacterMutation> {
    const statement = `mutation CreateGameCharacter($input: CreateGameCharacterInput!, $condition: ModelGameCharacterConditionInput) {
        createGameCharacter(input: $input, condition: $condition) {
          
          id
          gameID
          uuid
          name
          background
          portrait
          portraitURL
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            
            name
            description
          }
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
          
          id
          gameID
          uuid
          name
          background
          portrait
          portraitURL
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            
            name
            description
          }
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
          
          id
          gameID
          uuid
          name
          background
          portrait
          portraitURL
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            
            name
            description
          }
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
          
          id
          uuid
          name
          background
          portrait
          portraitURL
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            
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
          
          id
          uuid
          name
          background
          portrait
          portraitURL
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            
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
          
          id
          uuid
          name
          background
          portrait
          portraitURL
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            
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
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          
          username
          email
          gamesAsPlayer {
            
            items {
              
              id
              gameID
              gameOwnerID
              playerID
              pendingInvite
              game {
                
                id
                owner
                uuid
                name
                description
                members
                messages
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
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
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          
          username
          email
          gamesAsPlayer {
            
            items {
              
              id
              gameID
              gameOwnerID
              playerID
              pendingInvite
              game {
                
                id
                owner
                uuid
                name
                description
                members
                messages
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
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
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          
          username
          email
          gamesAsPlayer {
            
            items {
              
              id
              gameID
              gameOwnerID
              playerID
              pendingInvite
              game {
                
                id
                owner
                uuid
                name
                description
                members
                messages
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
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
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async GetGame(id: string): Promise<GetGameQuery> {
    const statement = `query GetGame($id: ID!) {
        getGame(id: $id) {
          
          id
          owner
          uuid
          name
          description
          members
          players {
            
            items {
              
              id
              gameID
              gameOwnerID
              playerID
              pendingInvite
              game {
                
                id
                owner
                uuid
                name
                description
                members
                messages
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
          }
          gameCharacters {
            
            items {
              
              id
              gameID
              uuid
              name
              background
              portrait
              portraitURL
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                
                name
                description
              }
            }
            nextToken
          }
          messages
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
          
          items {
            
            id
            owner
            uuid
            name
            description
            members
            players {
              
              items {
                
                id
                gameID
                gameOwnerID
                playerID
                pendingInvite
              }
              nextToken
            }
            gameCharacters {
              
              items {
                
                id
                gameID
                uuid
                name
                background
                portrait
                portraitURL
                class
                agility
                hitPoints
                fellowship
                strength
                wisdom
              }
              nextToken
            }
            messages
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
  async GetPlayer(id: string): Promise<GetPlayerQuery> {
    const statement = `query GetPlayer($id: ID!) {
        getPlayer(id: $id) {
          
          id
          gameID
          gameOwnerID
          playerID
          pendingInvite
          game {
            
            id
            owner
            uuid
            name
            description
            members
            players {
              
              items {
                
                id
                gameID
                gameOwnerID
                playerID
                pendingInvite
              }
              nextToken
            }
            gameCharacters {
              
              items {
                
                id
                gameID
                uuid
                name
                background
                portrait
                portraitURL
                class
                agility
                hitPoints
                fellowship
                strength
                wisdom
              }
              nextToken
            }
            messages
          }
          player {
            
            username
            email
            gamesAsPlayer {
              
              items {
                
                id
                gameID
                gameOwnerID
                playerID
                pendingInvite
              }
              nextToken
            }
            owner
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPlayerQuery>response.data.getPlayer;
  }
  async ListPlayers(
    filter?: ModelPlayerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPlayersQuery> {
    const statement = `query ListPlayers($filter: ModelPlayerFilterInput, $limit: Int, $nextToken: String) {
        listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          
          items {
            
            id
            gameID
            gameOwnerID
            playerID
            pendingInvite
            game {
              
              id
              owner
              uuid
              name
              description
              members
              players {
                
                nextToken
              }
              gameCharacters {
                
                nextToken
              }
              messages
            }
            player {
              
              username
              email
              gamesAsPlayer {
                
                nextToken
              }
              owner
            }
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
    return <ListPlayersQuery>response.data.listPlayers;
  }
  async GetGameCharacter(id: string): Promise<GetGameCharacterQuery> {
    const statement = `query GetGameCharacter($id: ID!) {
        getGameCharacter(id: $id) {
          
          id
          gameID
          uuid
          name
          background
          portrait
          portraitURL
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            
            name
            description
          }
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
          
          items {
            
            id
            gameID
            uuid
            name
            background
            portrait
            portraitURL
            class
            agility
            hitPoints
            fellowship
            strength
            wisdom
            abilities {
              
              name
              description
            }
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
          
          id
          uuid
          name
          background
          portrait
          portraitURL
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            
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
          
          items {
            
            id
            uuid
            name
            background
            portrait
            portraitURL
            class
            agility
            hitPoints
            fellowship
            strength
            wisdom
            abilities {
              
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
  async GetUser(username: string): Promise<GetUserQuery> {
    const statement = `query GetUser($username: String!) {
        getUser(username: $username) {
          
          username
          email
          gamesAsPlayer {
            
            items {
              
              id
              gameID
              gameOwnerID
              playerID
              pendingInvite
              game {
                
                id
                owner
                uuid
                name
                description
                members
                messages
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      username
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    username?: string,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($username: String, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listUsers(username: $username, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          
          items {
            
            username
            email
            gamesAsPlayer {
              
              items {
                
                id
                gameID
                gameOwnerID
                playerID
                pendingInvite
              }
              nextToken
            }
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (username) {
      gqlAPIServiceArguments.username = username;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  OnCreateGameListener: Observable<OnCreateGameSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateGame($owner: String!) {
        onCreateGame(owner: $owner) {
          
          id
          owner
          uuid
          name
          description
          members
          players {
            
            items {
              
              id
              gameID
              gameOwnerID
              playerID
              pendingInvite
              game {
                
                id
                owner
                uuid
                name
                description
                members
                messages
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
          }
          gameCharacters {
            
            items {
              
              id
              gameID
              uuid
              name
              background
              portrait
              portraitURL
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                
                name
                description
              }
            }
            nextToken
          }
          messages
        }
      }`
    )
  ) as Observable<OnCreateGameSubscription>;

  OnUpdateGameListener: Observable<OnUpdateGameSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateGame($owner: String!) {
        onUpdateGame(owner: $owner) {
          
          id
          owner
          uuid
          name
          description
          members
          players {
            
            items {
              
              id
              gameID
              gameOwnerID
              playerID
              pendingInvite
              game {
                
                id
                owner
                uuid
                name
                description
                members
                messages
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
          }
          gameCharacters {
            
            items {
              
              id
              gameID
              uuid
              name
              background
              portrait
              portraitURL
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                
                name
                description
              }
            }
            nextToken
          }
          messages
        }
      }`
    )
  ) as Observable<OnUpdateGameSubscription>;

  OnDeleteGameListener: Observable<OnDeleteGameSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteGame($owner: String!) {
        onDeleteGame(owner: $owner) {
          
          id
          owner
          uuid
          name
          description
          members
          players {
            
            items {
              
              id
              gameID
              gameOwnerID
              playerID
              pendingInvite
              game {
                
                id
                owner
                uuid
                name
                description
                members
                messages
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
          }
          gameCharacters {
            
            items {
              
              id
              gameID
              uuid
              name
              background
              portrait
              portraitURL
              class
              agility
              hitPoints
              fellowship
              strength
              wisdom
              abilities {
                
                name
                description
              }
            }
            nextToken
          }
          messages
        }
      }`
    )
  ) as Observable<OnDeleteGameSubscription>;

  OnCreateGameCharacterListener: Observable<
    OnCreateGameCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateGameCharacter {
        onCreateGameCharacter {
          
          id
          gameID
          uuid
          name
          background
          portrait
          portraitURL
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            
            name
            description
          }
        }
      }`
    )
  ) as Observable<OnCreateGameCharacterSubscription>;

  OnUpdateGameCharacterListener: Observable<
    OnUpdateGameCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateGameCharacter {
        onUpdateGameCharacter {
          
          id
          gameID
          uuid
          name
          background
          portrait
          portraitURL
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            
            name
            description
          }
        }
      }`
    )
  ) as Observable<OnUpdateGameCharacterSubscription>;

  OnDeleteGameCharacterListener: Observable<
    OnDeleteGameCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteGameCharacter {
        onDeleteGameCharacter {
          
          id
          gameID
          uuid
          name
          background
          portrait
          portraitURL
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            
            name
            description
          }
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
          
          id
          uuid
          name
          background
          portrait
          portraitURL
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            
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
          
          id
          uuid
          name
          background
          portrait
          portraitURL
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            
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
          
          id
          uuid
          name
          background
          portrait
          portraitURL
          class
          agility
          hitPoints
          fellowship
          strength
          wisdom
          abilities {
            
            name
            description
          }
          owner
        }
      }`
    )
  ) as Observable<OnDeletePlayerCharacterSubscription>;

  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser($owner: String!) {
        onCreateUser(owner: $owner) {
          
          username
          email
          gamesAsPlayer {
            
            items {
              
              id
              gameID
              gameOwnerID
              playerID
              pendingInvite
              game {
                
                id
                owner
                uuid
                name
                description
                members
                messages
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser($owner: String!) {
        onUpdateUser(owner: $owner) {
          
          username
          email
          gamesAsPlayer {
            
            items {
              
              id
              gameID
              gameOwnerID
              playerID
              pendingInvite
              game {
                
                id
                owner
                uuid
                name
                description
                members
                messages
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser($owner: String!) {
        onDeleteUser(owner: $owner) {
          
          username
          email
          gamesAsPlayer {
            
            items {
              
              id
              gameID
              gameOwnerID
              playerID
              pendingInvite
              game {
                
                id
                owner
                uuid
                name
                description
                members
                messages
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;
}
