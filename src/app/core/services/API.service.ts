/* tslint:disable */
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

export enum ActionType {
  CHALLENGE = "CHALLENGE",
  HEAL = "HEAL",
  ATTACK = "ATTACK",
  ATTRIBUTEROLL = "ATTRIBUTEROLL",
  CHAT = "CHAT",
  DICEROLL = "DICEROLL"
}

export type ModelGameFilterInput = {
  id?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  uuid?: ModelStringInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  members?: ModelStringInput | null;
  and?: Array<ModelGameFilterInput | null> | null;
  or?: Array<ModelGameFilterInput | null> | null;
  not?: ModelGameFilterInput | null;
};

export type ModelPlayerCharacterFilterInput = {
  id?: ModelIDInput | null;
  owner?: ModelStringInput | null;
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelActionFilterInput = {
  id?: ModelIDInput | null;
  tabletopID?: ModelIDInput | null;
  timestamp?: ModelIntInput | null;
  actionType?: ModelActionTypeInput | null;
  player?: ModelStringInput | null;
  payload?: ModelStringInput | null;
  and?: Array<ModelActionFilterInput | null> | null;
  or?: Array<ModelActionFilterInput | null> | null;
  not?: ModelActionFilterInput | null;
};

export type ModelActionTypeInput = {
  eq?: ActionType | null;
  ne?: ActionType | null;
};

export type CreateGameInput = {
  id?: string | null;
  owner?: string | null;
  uuid: string;
  name: string;
  description?: string | null;
  members?: Array<string | null> | null;
  gameTabletopId?: string | null;
};

export type UpdateGameInput = {
  id: string;
  owner?: string | null;
  uuid?: string | null;
  name?: string | null;
  description?: string | null;
  members?: Array<string | null> | null;
  gameTabletopId?: string | null;
};

export type CreateTabletopInput = {
  id?: string | null;
  gameOwnerID: string;
  width?: number | null;
  height?: number | null;
};

export type ModelTabletopConditionInput = {
  gameOwnerID?: ModelStringInput | null;
  width?: ModelIntInput | null;
  height?: ModelIntInput | null;
  and?: Array<ModelTabletopConditionInput | null> | null;
  or?: Array<ModelTabletopConditionInput | null> | null;
  not?: ModelTabletopConditionInput | null;
};

export type UpdateTabletopInput = {
  id: string;
  gameOwnerID?: string | null;
  width?: number | null;
  height?: number | null;
};

export type DeleteTabletopInput = {
  id?: string | null;
};

export type CreateActionInput = {
  id?: string | null;
  tabletopID: string;
  timestamp?: number | null;
  actionType?: ActionType | null;
  player?: string | null;
  payload?: string | null;
};

export type ModelActionConditionInput = {
  tabletopID?: ModelIDInput | null;
  timestamp?: ModelIntInput | null;
  actionType?: ModelActionTypeInput | null;
  player?: ModelStringInput | null;
  payload?: ModelStringInput | null;
  and?: Array<ModelActionConditionInput | null> | null;
  or?: Array<ModelActionConditionInput | null> | null;
  not?: ModelActionConditionInput | null;
};

export type UpdateActionInput = {
  id: string;
  tabletopID?: string | null;
  timestamp?: number | null;
  actionType?: ActionType | null;
  player?: string | null;
  payload?: string | null;
};

export type DeleteActionInput = {
  id?: string | null;
};

export type CreateTabletopCharacterInput = {
  id?: string | null;
  tabletopID: string;
  gameOwnerID: string;
  playerID: string;
  characterID: string;
  location?: LocationInput | null;
  currentHealth: number;
};

export type LocationInput = {
  x?: number | null;
  y?: number | null;
};

export type ModelTabletopCharacterConditionInput = {
  tabletopID?: ModelIDInput | null;
  gameOwnerID?: ModelStringInput | null;
  playerID?: ModelStringInput | null;
  characterID?: ModelIDInput | null;
  currentHealth?: ModelIntInput | null;
  and?: Array<ModelTabletopCharacterConditionInput | null> | null;
  or?: Array<ModelTabletopCharacterConditionInput | null> | null;
  not?: ModelTabletopCharacterConditionInput | null;
};

export type UpdateTabletopCharacterInput = {
  id: string;
  tabletopID?: string | null;
  gameOwnerID?: string | null;
  playerID?: string | null;
  characterID?: string | null;
  location?: LocationInput | null;
  currentHealth?: number | null;
};

export type DeleteTabletopCharacterInput = {
  id?: string | null;
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

export type CreatePlayerCharacterInput = {
  id?: string | null;
  owner?: string | null;
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
  owner?: string | null;
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

export type ModelTabletopFilterInput = {
  id?: ModelIDInput | null;
  gameOwnerID?: ModelStringInput | null;
  width?: ModelIntInput | null;
  height?: ModelIntInput | null;
  and?: Array<ModelTabletopFilterInput | null> | null;
  or?: Array<ModelTabletopFilterInput | null> | null;
  not?: ModelTabletopFilterInput | null;
};

export type ModelTabletopCharacterFilterInput = {
  id?: ModelIDInput | null;
  tabletopID?: ModelIDInput | null;
  gameOwnerID?: ModelStringInput | null;
  playerID?: ModelStringInput | null;
  characterID?: ModelIDInput | null;
  currentHealth?: ModelIntInput | null;
  and?: Array<ModelTabletopCharacterFilterInput | null> | null;
  or?: Array<ModelTabletopCharacterFilterInput | null> | null;
  not?: ModelTabletopCharacterFilterInput | null;
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

export type ModelUserFilterInput = {
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelIntKeyConditionInput = {
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type DeleteGameRetrieveIDMutation = {
  
  id: string;
};

export type DeletePlayerRetrieveIDMutation = {
  
  id: string;
};

export type DeleteGameDataMutation = {
  
  id: string;
  owner: string | null;
  uuid: string;
  name: string;
  description: string | null;
  tabletop: {
    
    id: string;
    gameOwnerID: string;
    width: number | null;
    height: number | null;
    characters: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        gameOwnerID: string;
        playerID: string;
        characterID: string;
        currentHealth: number;
      } | null> | null;
      nextToken: string | null;
    } | null;
    actions: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        timestamp: number | null;
        actionType: ActionType | null;
        player: string | null;
        payload: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
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

export type ListGamesDataQuery = {
  
  items: Array<{
    
    id: string;
    owner: string | null;
    uuid: string;
    name: string;
    description: string | null;
    members: Array<string | null> | null;
    tabletop: {
      
      id: string;
      gameOwnerID: string;
      width: number | null;
      height: number | null;
    } | null;
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
        owner: string | null;
        members: Array<string | null> | null;
        tabletop: {
          
          id: string;
          gameOwnerID: string;
          width: number | null;
          height: number | null;
        } | null;
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

export type GetTabletopDataQuery = {
  
  id: string;
  gameOwnerID: string;
  width: number | null;
  height: number | null;
  characters: {
    
    items: Array<{
      
      id: string;
      tabletopID: string;
      gameOwnerID: string;
      playerID: string;
      characterID: string;
      location: {
        
        x: number | null;
        y: number | null;
      } | null;
      currentHealth: number;
      character: {
        
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
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListPlayerCharactersIdentificatorsQuery = {
  
  items: Array<{
    
    id: string;
    uuid: string;
    name: string;
    hitPoints: number | null;
  } | null> | null;
  nextToken: string | null;
};

export type ListActionsByTimestampQuery = {
  
  items: Array<{
    
    id: string;
    tabletopID: string;
    timestamp: number | null;
    actionType: ActionType | null;
    player: string | null;
    payload: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnUpdateTabletopDataSubscription = {
  
  id: string;
  gameOwnerID: string;
  width: number | null;
  height: number | null;
};

export type RollAttributeActionMutation = {
  
  id: string;
  tabletopID: string;
  timestamp: number | null;
  actionType: ActionType | null;
  player: string | null;
  payload: string | null;
};

export type RollChallengeActionMutation = {
  
  id: string;
  tabletopID: string;
  timestamp: number | null;
  actionType: ActionType | null;
  player: string | null;
  payload: string | null;
};

export type RollHealActionMutation = {
  
  id: string;
  tabletopID: string;
  timestamp: number | null;
  actionType: ActionType | null;
  player: string | null;
  payload: string | null;
};

export type RollAttackActionMutation = {
  
  id: string;
  tabletopID: string;
  timestamp: number | null;
  actionType: ActionType | null;
  player: string | null;
  payload: string | null;
};

export type CreateGameMutation = {
  
  id: string;
  owner: string | null;
  uuid: string;
  name: string;
  description: string | null;
  tabletop: {
    
    id: string;
    gameOwnerID: string;
    width: number | null;
    height: number | null;
    characters: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        gameOwnerID: string;
        playerID: string;
        characterID: string;
        currentHealth: number;
      } | null> | null;
      nextToken: string | null;
    } | null;
    actions: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        timestamp: number | null;
        actionType: ActionType | null;
        player: string | null;
        payload: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
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
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateGameMutation = {
  
  id: string;
  owner: string | null;
  uuid: string;
  name: string;
  description: string | null;
  tabletop: {
    
    id: string;
    gameOwnerID: string;
    width: number | null;
    height: number | null;
    characters: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        gameOwnerID: string;
        playerID: string;
        characterID: string;
        currentHealth: number;
      } | null> | null;
      nextToken: string | null;
    } | null;
    actions: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        timestamp: number | null;
        actionType: ActionType | null;
        player: string | null;
        payload: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
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
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteGameMutation = {
  
  id: string;
  owner: string | null;
  uuid: string;
  name: string;
  description: string | null;
  tabletop: {
    
    id: string;
    gameOwnerID: string;
    width: number | null;
    height: number | null;
    characters: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        gameOwnerID: string;
        playerID: string;
        characterID: string;
        currentHealth: number;
      } | null> | null;
      nextToken: string | null;
    } | null;
    actions: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        timestamp: number | null;
        actionType: ActionType | null;
        player: string | null;
        payload: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
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
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateTabletopMutation = {
  
  id: string;
  gameOwnerID: string;
  width: number | null;
  height: number | null;
  characters: {
    
    items: Array<{
      
      id: string;
      tabletopID: string;
      gameOwnerID: string;
      playerID: string;
      characterID: string;
      location: {
        
        x: number | null;
        y: number | null;
      } | null;
      currentHealth: number;
      character: {
        
        id: string;
        owner: string | null;
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
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  actions: {
    
    items: Array<{
      
      id: string;
      tabletopID: string;
      timestamp: number | null;
      actionType: ActionType | null;
      player: string | null;
      payload: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateTabletopMutation = {
  
  id: string;
  gameOwnerID: string;
  width: number | null;
  height: number | null;
  characters: {
    
    items: Array<{
      
      id: string;
      tabletopID: string;
      gameOwnerID: string;
      playerID: string;
      characterID: string;
      location: {
        
        x: number | null;
        y: number | null;
      } | null;
      currentHealth: number;
      character: {
        
        id: string;
        owner: string | null;
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
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  actions: {
    
    items: Array<{
      
      id: string;
      tabletopID: string;
      timestamp: number | null;
      actionType: ActionType | null;
      player: string | null;
      payload: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteTabletopMutation = {
  
  id: string;
  gameOwnerID: string;
  width: number | null;
  height: number | null;
  characters: {
    
    items: Array<{
      
      id: string;
      tabletopID: string;
      gameOwnerID: string;
      playerID: string;
      characterID: string;
      location: {
        
        x: number | null;
        y: number | null;
      } | null;
      currentHealth: number;
      character: {
        
        id: string;
        owner: string | null;
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
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  actions: {
    
    items: Array<{
      
      id: string;
      tabletopID: string;
      timestamp: number | null;
      actionType: ActionType | null;
      player: string | null;
      payload: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateActionMutation = {
  
  id: string;
  tabletopID: string;
  timestamp: number | null;
  actionType: ActionType | null;
  player: string | null;
  payload: string | null;
};

export type UpdateActionMutation = {
  
  id: string;
  tabletopID: string;
  timestamp: number | null;
  actionType: ActionType | null;
  player: string | null;
  payload: string | null;
};

export type DeleteActionMutation = {
  
  id: string;
  tabletopID: string;
  timestamp: number | null;
  actionType: ActionType | null;
  player: string | null;
  payload: string | null;
};

export type CreateTabletopCharacterMutation = {
  
  id: string;
  tabletopID: string;
  gameOwnerID: string;
  playerID: string;
  characterID: string;
  location: {
    
    x: number | null;
    y: number | null;
  } | null;
  currentHealth: number;
  character: {
    
    id: string;
    owner: string | null;
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
};

export type UpdateTabletopCharacterMutation = {
  
  id: string;
  tabletopID: string;
  gameOwnerID: string;
  playerID: string;
  characterID: string;
  location: {
    
    x: number | null;
    y: number | null;
  } | null;
  currentHealth: number;
  character: {
    
    id: string;
    owner: string | null;
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
};

export type DeleteTabletopCharacterMutation = {
  
  id: string;
  tabletopID: string;
  gameOwnerID: string;
  playerID: string;
  characterID: string;
  location: {
    
    x: number | null;
    y: number | null;
  } | null;
  currentHealth: number;
  character: {
    
    id: string;
    owner: string | null;
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
    tabletop: {
      
      id: string;
      gameOwnerID: string;
      width: number | null;
      height: number | null;
      characters: {
        
        nextToken: string | null;
      } | null;
      actions: {
        
        nextToken: string | null;
      } | null;
    } | null;
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
    tabletop: {
      
      id: string;
      gameOwnerID: string;
      width: number | null;
      height: number | null;
      characters: {
        
        nextToken: string | null;
      } | null;
      actions: {
        
        nextToken: string | null;
      } | null;
    } | null;
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
    tabletop: {
      
      id: string;
      gameOwnerID: string;
      width: number | null;
      height: number | null;
      characters: {
        
        nextToken: string | null;
      } | null;
      actions: {
        
        nextToken: string | null;
      } | null;
    } | null;
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

export type CreatePlayerCharacterMutation = {
  
  id: string;
  owner: string | null;
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

export type UpdatePlayerCharacterMutation = {
  
  id: string;
  owner: string | null;
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

export type DeletePlayerCharacterMutation = {
  
  id: string;
  owner: string | null;
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
  tabletop: {
    
    id: string;
    gameOwnerID: string;
    width: number | null;
    height: number | null;
    characters: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        gameOwnerID: string;
        playerID: string;
        characterID: string;
        currentHealth: number;
      } | null> | null;
      nextToken: string | null;
    } | null;
    actions: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        timestamp: number | null;
        actionType: ActionType | null;
        player: string | null;
        payload: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
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
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListGamesQuery = {
  
  items: Array<{
    
    id: string;
    owner: string | null;
    uuid: string;
    name: string;
    description: string | null;
    tabletop: {
      
      id: string;
      gameOwnerID: string;
      width: number | null;
      height: number | null;
      characters: {
        
        nextToken: string | null;
      } | null;
      actions: {
        
        nextToken: string | null;
      } | null;
    } | null;
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
  } | null> | null;
  nextToken: string | null;
};

export type GetTabletopQuery = {
  
  id: string;
  gameOwnerID: string;
  width: number | null;
  height: number | null;
  characters: {
    
    items: Array<{
      
      id: string;
      tabletopID: string;
      gameOwnerID: string;
      playerID: string;
      characterID: string;
      location: {
        
        x: number | null;
        y: number | null;
      } | null;
      currentHealth: number;
      character: {
        
        id: string;
        owner: string | null;
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
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  actions: {
    
    items: Array<{
      
      id: string;
      tabletopID: string;
      timestamp: number | null;
      actionType: ActionType | null;
      player: string | null;
      payload: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListTabletopsQuery = {
  
  items: Array<{
    
    id: string;
    gameOwnerID: string;
    width: number | null;
    height: number | null;
    characters: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        gameOwnerID: string;
        playerID: string;
        characterID: string;
        currentHealth: number;
      } | null> | null;
      nextToken: string | null;
    } | null;
    actions: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        timestamp: number | null;
        actionType: ActionType | null;
        player: string | null;
        payload: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetActionQuery = {
  
  id: string;
  tabletopID: string;
  timestamp: number | null;
  actionType: ActionType | null;
  player: string | null;
  payload: string | null;
};

export type ListActionsQuery = {
  
  items: Array<{
    
    id: string;
    tabletopID: string;
    timestamp: number | null;
    actionType: ActionType | null;
    player: string | null;
    payload: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetTabletopCharacterQuery = {
  
  id: string;
  tabletopID: string;
  gameOwnerID: string;
  playerID: string;
  characterID: string;
  location: {
    
    x: number | null;
    y: number | null;
  } | null;
  currentHealth: number;
  character: {
    
    id: string;
    owner: string | null;
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
};

export type ListTabletopCharactersQuery = {
  
  items: Array<{
    
    id: string;
    tabletopID: string;
    gameOwnerID: string;
    playerID: string;
    characterID: string;
    location: {
      
      x: number | null;
      y: number | null;
    } | null;
    currentHealth: number;
    character: {
      
      id: string;
      owner: string | null;
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
    tabletop: {
      
      id: string;
      gameOwnerID: string;
      width: number | null;
      height: number | null;
      characters: {
        
        nextToken: string | null;
      } | null;
      actions: {
        
        nextToken: string | null;
      } | null;
    } | null;
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
      tabletop: {
        
        id: string;
        gameOwnerID: string;
        width: number | null;
        height: number | null;
      } | null;
      members: Array<string | null> | null;
      players: {
        
        nextToken: string | null;
      } | null;
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

export type GetPlayerCharacterQuery = {
  
  id: string;
  owner: string | null;
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

export type ListPlayerCharactersQuery = {
  
  items: Array<{
    
    id: string;
    owner: string | null;
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

export type GetActionsByDateQuery = {
  
  items: Array<{
    
    id: string;
    tabletopID: string;
    timestamp: number | null;
    actionType: ActionType | null;
    player: string | null;
    payload: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnNewActionSubscription = {
  
  id: string;
  tabletopID: string;
  timestamp: number | null;
  actionType: ActionType | null;
  player: string | null;
  payload: string | null;
};

export type OnCreateGameSubscription = {
  
  id: string;
  owner: string | null;
  uuid: string;
  name: string;
  description: string | null;
  tabletop: {
    
    id: string;
    gameOwnerID: string;
    width: number | null;
    height: number | null;
    characters: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        gameOwnerID: string;
        playerID: string;
        characterID: string;
        currentHealth: number;
      } | null> | null;
      nextToken: string | null;
    } | null;
    actions: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        timestamp: number | null;
        actionType: ActionType | null;
        player: string | null;
        payload: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
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
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateGameSubscription = {
  
  id: string;
  owner: string | null;
  uuid: string;
  name: string;
  description: string | null;
  tabletop: {
    
    id: string;
    gameOwnerID: string;
    width: number | null;
    height: number | null;
    characters: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        gameOwnerID: string;
        playerID: string;
        characterID: string;
        currentHealth: number;
      } | null> | null;
      nextToken: string | null;
    } | null;
    actions: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        timestamp: number | null;
        actionType: ActionType | null;
        player: string | null;
        payload: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
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
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteGameSubscription = {
  
  id: string;
  owner: string | null;
  uuid: string;
  name: string;
  description: string | null;
  tabletop: {
    
    id: string;
    gameOwnerID: string;
    width: number | null;
    height: number | null;
    characters: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        gameOwnerID: string;
        playerID: string;
        characterID: string;
        currentHealth: number;
      } | null> | null;
      nextToken: string | null;
    } | null;
    actions: {
      
      items: Array<{
        
        id: string;
        tabletopID: string;
        timestamp: number | null;
        actionType: ActionType | null;
        player: string | null;
        payload: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
  } | null;
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
      };
      player: {
        
        username: string;
        email: string;
        owner: string | null;
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateTabletopSubscription = {
  
  id: string;
  gameOwnerID: string;
  width: number | null;
  height: number | null;
  characters: {
    
    items: Array<{
      
      id: string;
      tabletopID: string;
      gameOwnerID: string;
      playerID: string;
      characterID: string;
      location: {
        
        x: number | null;
        y: number | null;
      } | null;
      currentHealth: number;
      character: {
        
        id: string;
        owner: string | null;
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
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  actions: {
    
    items: Array<{
      
      id: string;
      tabletopID: string;
      timestamp: number | null;
      actionType: ActionType | null;
      player: string | null;
      payload: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateTabletopSubscription = {
  
  id: string;
  gameOwnerID: string;
  width: number | null;
  height: number | null;
  characters: {
    
    items: Array<{
      
      id: string;
      tabletopID: string;
      gameOwnerID: string;
      playerID: string;
      characterID: string;
      location: {
        
        x: number | null;
        y: number | null;
      } | null;
      currentHealth: number;
      character: {
        
        id: string;
        owner: string | null;
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
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  actions: {
    
    items: Array<{
      
      id: string;
      tabletopID: string;
      timestamp: number | null;
      actionType: ActionType | null;
      player: string | null;
      payload: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteTabletopSubscription = {
  
  id: string;
  gameOwnerID: string;
  width: number | null;
  height: number | null;
  characters: {
    
    items: Array<{
      
      id: string;
      tabletopID: string;
      gameOwnerID: string;
      playerID: string;
      characterID: string;
      location: {
        
        x: number | null;
        y: number | null;
      } | null;
      currentHealth: number;
      character: {
        
        id: string;
        owner: string | null;
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
      };
    } | null> | null;
    nextToken: string | null;
  } | null;
  actions: {
    
    items: Array<{
      
      id: string;
      tabletopID: string;
      timestamp: number | null;
      actionType: ActionType | null;
      player: string | null;
      payload: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateActionSubscription = {
  
  id: string;
  tabletopID: string;
  timestamp: number | null;
  actionType: ActionType | null;
  player: string | null;
  payload: string | null;
};

export type OnUpdateActionSubscription = {
  
  id: string;
  tabletopID: string;
  timestamp: number | null;
  actionType: ActionType | null;
  player: string | null;
  payload: string | null;
};

export type OnDeleteActionSubscription = {
  
  id: string;
  tabletopID: string;
  timestamp: number | null;
  actionType: ActionType | null;
  player: string | null;
  payload: string | null;
};

export type OnCreateTabletopCharacterSubscription = {
  
  id: string;
  tabletopID: string;
  gameOwnerID: string;
  playerID: string;
  characterID: string;
  location: {
    
    x: number | null;
    y: number | null;
  } | null;
  currentHealth: number;
  character: {
    
    id: string;
    owner: string | null;
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
};

export type OnUpdateTabletopCharacterSubscription = {
  
  id: string;
  tabletopID: string;
  gameOwnerID: string;
  playerID: string;
  characterID: string;
  location: {
    
    x: number | null;
    y: number | null;
  } | null;
  currentHealth: number;
  character: {
    
    id: string;
    owner: string | null;
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
};

export type OnDeleteTabletopCharacterSubscription = {
  
  id: string;
  tabletopID: string;
  gameOwnerID: string;
  playerID: string;
  characterID: string;
  location: {
    
    x: number | null;
    y: number | null;
  } | null;
  currentHealth: number;
  character: {
    
    id: string;
    owner: string | null;
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
};

export type OnCreatePlayerCharacterSubscription = {
  
  id: string;
  owner: string | null;
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

export type OnUpdatePlayerCharacterSubscription = {
  
  id: string;
  owner: string | null;
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

export type OnDeletePlayerCharacterSubscription = {
  
  id: string;
  owner: string | null;
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
  async DeleteGameData(
    input: DeleteGameInput,
    condition?: ModelGameConditionInput
  ): Promise<DeleteGameDataMutation> {
    const statement = `mutation DeleteGameData($input: DeleteGameInput!, $condition: ModelGameConditionInput) {
        deleteGame(input: $input, condition: $condition) {
          
          id
          owner
          uuid
          name
          description
          tabletop {
            
            id
            gameOwnerID
            width
            height
            characters {
              
              items {
                
                id
                tabletopID
                gameOwnerID
                playerID
                characterID
                currentHealth
              }
              nextToken
            }
            actions {
              
              items {
                
                id
                tabletopID
                timestamp
                actionType
                player
                payload
              }
              nextToken
            }
          }
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
    return <DeleteGameDataMutation>response.data.deleteGame;
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
            tabletop {
              
              id
              gameOwnerID
              width
              height
            }
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
                owner
                members
                tabletop {
                  
                  id
                  gameOwnerID
                  width
                  height
                }
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
  async GetTabletopData(id: string): Promise<GetTabletopDataQuery> {
    const statement = `query GetTabletopData($id: ID!) {
        getTabletop(id: $id) {
          
          id
          gameOwnerID
          width
          height
          characters {
            
            items {
              
              id
              tabletopID
              gameOwnerID
              playerID
              characterID
              location {
                
                x
                y
              }
              currentHealth
              character {
                
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
                owner
              }
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTabletopDataQuery>response.data.getTabletop;
  }
  async ListPlayerCharactersIdentificators(
    filter?: ModelPlayerCharacterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPlayerCharactersIdentificatorsQuery> {
    const statement = `query ListPlayerCharactersIdentificators($filter: ModelPlayerCharacterFilterInput, $limit: Int, $nextToken: String) {
        listPlayerCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
          
          items {
            
            id
            uuid
            name
            hitPoints
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
    return <ListPlayerCharactersIdentificatorsQuery>(
      response.data.listPlayerCharacters
    );
  }
  async ListActionsByTimestamp(
    tabletopID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelActionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListActionsByTimestampQuery> {
    const statement = `query ListActionsByTimestamp($tabletopID: ID, $sortDirection: ModelSortDirection, $filter: ModelActionFilterInput, $limit: Int, $nextToken: String) {
        getActionsByDate(tabletopID: $tabletopID, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          
          items {
            
            id
            tabletopID
            timestamp
            actionType
            player
            payload
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (tabletopID) {
      gqlAPIServiceArguments.tabletopID = tabletopID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListActionsByTimestampQuery>response.data.getActionsByDate;
  }
  OnUpdateTabletopDataListener: Observable<
    OnUpdateTabletopDataSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTabletopData {
        onUpdateTabletop {
          
          id
          gameOwnerID
          width
          height
        }
      }`
    )
  ) as Observable<OnUpdateTabletopDataSubscription>;

  async RollAttributeAction(
    attribute: string,
    bonifier: number,
    player: string,
    tabletopID: string
  ): Promise<RollAttributeActionMutation> {
    const statement = `mutation RollAttributeAction($attribute: String!, $bonifier: Int!, $player: String!, $tabletopID: ID!) {
        rollAttributeAction(attribute: $attribute, bonifier: $bonifier, player: $player, tabletopID: $tabletopID) {
          
          id
          tabletopID
          timestamp
          actionType
          player
          payload
        }
      }`;
    const gqlAPIServiceArguments: any = {
      attribute,
      bonifier,
      player,
      tabletopID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <RollAttributeActionMutation>response.data.rollAttributeAction;
  }
  async RollChallengeAction(
    attribute: string,
    bonifier: number,
    character: string,
    bonifier2: number,
    character2: string,
    player: string,
    tabletopID: string
  ): Promise<RollChallengeActionMutation> {
    const statement = `mutation RollChallengeAction($attribute: String!, $bonifier: Int!, $character: String!, $bonifier2: Int!, $character2: String!, $player: String!, $tabletopID: ID!) {
        rollChallengeAction(attribute: $attribute, bonifier: $bonifier, character: $character, bonifier2: $bonifier2, character2: $character2, player: $player, tabletopID: $tabletopID) {
          
          id
          tabletopID
          timestamp
          actionType
          player
          payload
        }
      }`;
    const gqlAPIServiceArguments: any = {
      attribute,
      bonifier,
      character,
      bonifier2,
      character2,
      player,
      tabletopID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <RollChallengeActionMutation>response.data.rollChallengeAction;
  }
  async RollHealAction(
    healer: string,
    healerWisdom: number,
    targetID: string,
    targetName: string,
    maxHealth: number,
    currentHealth: number,
    player: string,
    tabletopID: string
  ): Promise<RollHealActionMutation> {
    const statement = `mutation RollHealAction($healer: String!, $healerWisdom: Int!, $targetID: String!, $targetName: String!, $maxHealth: Int!, $currentHealth: Int!, $player: String!, $tabletopID: ID!) {
        rollHealAction(healer: $healer, healerWisdom: $healerWisdom, targetID: $targetID, targetName: $targetName, maxHealth: $maxHealth, currentHealth: $currentHealth, player: $player, tabletopID: $tabletopID) {
          
          id
          tabletopID
          timestamp
          actionType
          player
          payload
        }
      }`;
    const gqlAPIServiceArguments: any = {
      healer,
      healerWisdom,
      targetID,
      targetName,
      maxHealth,
      currentHealth,
      player,
      tabletopID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <RollHealActionMutation>response.data.rollHealAction;
  }
  async RollAttackAction(
    attacker: string,
    attackerStrength: number,
    targetID: string,
    targetName: string,
    targetStrength: number,
    targetCurrentHealth: number,
    player: string,
    tabletopID: string
  ): Promise<RollAttackActionMutation> {
    const statement = `mutation RollAttackAction($attacker: String!, $attackerStrength: Int!, $targetID: String!, $targetName: String!, $targetStrength: Int!, $targetCurrentHealth: Int!, $player: String!, $tabletopID: ID!) {
        rollAttackAction(attacker: $attacker, attackerStrength: $attackerStrength, targetID: $targetID, targetName: $targetName, targetStrength: $targetStrength, targetCurrentHealth: $targetCurrentHealth, player: $player, tabletopID: $tabletopID) {
          
          id
          tabletopID
          timestamp
          actionType
          player
          payload
        }
      }`;
    const gqlAPIServiceArguments: any = {
      attacker,
      attackerStrength,
      targetID,
      targetName,
      targetStrength,
      targetCurrentHealth,
      player,
      tabletopID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <RollAttackActionMutation>response.data.rollAttackAction;
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
          tabletop {
            
            id
            gameOwnerID
            width
            height
            characters {
              
              items {
                
                id
                tabletopID
                gameOwnerID
                playerID
                characterID
                currentHealth
              }
              nextToken
            }
            actions {
              
              items {
                
                id
                tabletopID
                timestamp
                actionType
                player
                payload
              }
              nextToken
            }
          }
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
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
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
          tabletop {
            
            id
            gameOwnerID
            width
            height
            characters {
              
              items {
                
                id
                tabletopID
                gameOwnerID
                playerID
                characterID
                currentHealth
              }
              nextToken
            }
            actions {
              
              items {
                
                id
                tabletopID
                timestamp
                actionType
                player
                payload
              }
              nextToken
            }
          }
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
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
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
          tabletop {
            
            id
            gameOwnerID
            width
            height
            characters {
              
              items {
                
                id
                tabletopID
                gameOwnerID
                playerID
                characterID
                currentHealth
              }
              nextToken
            }
            actions {
              
              items {
                
                id
                tabletopID
                timestamp
                actionType
                player
                payload
              }
              nextToken
            }
          }
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
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
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
    return <DeleteGameMutation>response.data.deleteGame;
  }
  async CreateTabletop(
    input: CreateTabletopInput,
    condition?: ModelTabletopConditionInput
  ): Promise<CreateTabletopMutation> {
    const statement = `mutation CreateTabletop($input: CreateTabletopInput!, $condition: ModelTabletopConditionInput) {
        createTabletop(input: $input, condition: $condition) {
          
          id
          gameOwnerID
          width
          height
          characters {
            
            items {
              
              id
              tabletopID
              gameOwnerID
              playerID
              characterID
              location {
                
                x
                y
              }
              currentHealth
              character {
                
                id
                owner
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
            }
            nextToken
          }
          actions {
            
            items {
              
              id
              tabletopID
              timestamp
              actionType
              player
              payload
            }
            nextToken
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
    return <CreateTabletopMutation>response.data.createTabletop;
  }
  async UpdateTabletop(
    input: UpdateTabletopInput,
    condition?: ModelTabletopConditionInput
  ): Promise<UpdateTabletopMutation> {
    const statement = `mutation UpdateTabletop($input: UpdateTabletopInput!, $condition: ModelTabletopConditionInput) {
        updateTabletop(input: $input, condition: $condition) {
          
          id
          gameOwnerID
          width
          height
          characters {
            
            items {
              
              id
              tabletopID
              gameOwnerID
              playerID
              characterID
              location {
                
                x
                y
              }
              currentHealth
              character {
                
                id
                owner
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
            }
            nextToken
          }
          actions {
            
            items {
              
              id
              tabletopID
              timestamp
              actionType
              player
              payload
            }
            nextToken
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
    return <UpdateTabletopMutation>response.data.updateTabletop;
  }
  async DeleteTabletop(
    input: DeleteTabletopInput,
    condition?: ModelTabletopConditionInput
  ): Promise<DeleteTabletopMutation> {
    const statement = `mutation DeleteTabletop($input: DeleteTabletopInput!, $condition: ModelTabletopConditionInput) {
        deleteTabletop(input: $input, condition: $condition) {
          
          id
          gameOwnerID
          width
          height
          characters {
            
            items {
              
              id
              tabletopID
              gameOwnerID
              playerID
              characterID
              location {
                
                x
                y
              }
              currentHealth
              character {
                
                id
                owner
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
            }
            nextToken
          }
          actions {
            
            items {
              
              id
              tabletopID
              timestamp
              actionType
              player
              payload
            }
            nextToken
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
    return <DeleteTabletopMutation>response.data.deleteTabletop;
  }
  async CreateAction(
    input: CreateActionInput,
    condition?: ModelActionConditionInput
  ): Promise<CreateActionMutation> {
    const statement = `mutation CreateAction($input: CreateActionInput!, $condition: ModelActionConditionInput) {
        createAction(input: $input, condition: $condition) {
          
          id
          tabletopID
          timestamp
          actionType
          player
          payload
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
    return <CreateActionMutation>response.data.createAction;
  }
  async UpdateAction(
    input: UpdateActionInput,
    condition?: ModelActionConditionInput
  ): Promise<UpdateActionMutation> {
    const statement = `mutation UpdateAction($input: UpdateActionInput!, $condition: ModelActionConditionInput) {
        updateAction(input: $input, condition: $condition) {
          
          id
          tabletopID
          timestamp
          actionType
          player
          payload
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
    return <UpdateActionMutation>response.data.updateAction;
  }
  async DeleteAction(
    input: DeleteActionInput,
    condition?: ModelActionConditionInput
  ): Promise<DeleteActionMutation> {
    const statement = `mutation DeleteAction($input: DeleteActionInput!, $condition: ModelActionConditionInput) {
        deleteAction(input: $input, condition: $condition) {
          
          id
          tabletopID
          timestamp
          actionType
          player
          payload
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
    return <DeleteActionMutation>response.data.deleteAction;
  }
  async CreateTabletopCharacter(
    input: CreateTabletopCharacterInput,
    condition?: ModelTabletopCharacterConditionInput
  ): Promise<CreateTabletopCharacterMutation> {
    const statement = `mutation CreateTabletopCharacter($input: CreateTabletopCharacterInput!, $condition: ModelTabletopCharacterConditionInput) {
        createTabletopCharacter(input: $input, condition: $condition) {
          
          id
          tabletopID
          gameOwnerID
          playerID
          characterID
          location {
            
            x
            y
          }
          currentHealth
          character {
            
            id
            owner
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
    return <CreateTabletopCharacterMutation>(
      response.data.createTabletopCharacter
    );
  }
  async UpdateTabletopCharacter(
    input: UpdateTabletopCharacterInput,
    condition?: ModelTabletopCharacterConditionInput
  ): Promise<UpdateTabletopCharacterMutation> {
    const statement = `mutation UpdateTabletopCharacter($input: UpdateTabletopCharacterInput!, $condition: ModelTabletopCharacterConditionInput) {
        updateTabletopCharacter(input: $input, condition: $condition) {
          
          id
          tabletopID
          gameOwnerID
          playerID
          characterID
          location {
            
            x
            y
          }
          currentHealth
          character {
            
            id
            owner
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
    return <UpdateTabletopCharacterMutation>(
      response.data.updateTabletopCharacter
    );
  }
  async DeleteTabletopCharacter(
    input: DeleteTabletopCharacterInput,
    condition?: ModelTabletopCharacterConditionInput
  ): Promise<DeleteTabletopCharacterMutation> {
    const statement = `mutation DeleteTabletopCharacter($input: DeleteTabletopCharacterInput!, $condition: ModelTabletopCharacterConditionInput) {
        deleteTabletopCharacter(input: $input, condition: $condition) {
          
          id
          tabletopID
          gameOwnerID
          playerID
          characterID
          location {
            
            x
            y
          }
          currentHealth
          character {
            
            id
            owner
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
    return <DeleteTabletopCharacterMutation>(
      response.data.deleteTabletopCharacter
    );
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
            tabletop {
              
              id
              gameOwnerID
              width
              height
              characters {
                
                nextToken
              }
              actions {
                
                nextToken
              }
            }
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
            tabletop {
              
              id
              gameOwnerID
              width
              height
              characters {
                
                nextToken
              }
              actions {
                
                nextToken
              }
            }
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
            tabletop {
              
              id
              gameOwnerID
              width
              height
              characters {
                
                nextToken
              }
              actions {
                
                nextToken
              }
            }
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
  async CreatePlayerCharacter(
    input: CreatePlayerCharacterInput,
    condition?: ModelPlayerCharacterConditionInput
  ): Promise<CreatePlayerCharacterMutation> {
    const statement = `mutation CreatePlayerCharacter($input: CreatePlayerCharacterInput!, $condition: ModelPlayerCharacterConditionInput) {
        createPlayerCharacter(input: $input, condition: $condition) {
          
          id
          owner
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
    return <CreatePlayerCharacterMutation>response.data.createPlayerCharacter;
  }
  async UpdatePlayerCharacter(
    input: UpdatePlayerCharacterInput,
    condition?: ModelPlayerCharacterConditionInput
  ): Promise<UpdatePlayerCharacterMutation> {
    const statement = `mutation UpdatePlayerCharacter($input: UpdatePlayerCharacterInput!, $condition: ModelPlayerCharacterConditionInput) {
        updatePlayerCharacter(input: $input, condition: $condition) {
          
          id
          owner
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
    return <UpdatePlayerCharacterMutation>response.data.updatePlayerCharacter;
  }
  async DeletePlayerCharacter(
    input: DeletePlayerCharacterInput,
    condition?: ModelPlayerCharacterConditionInput
  ): Promise<DeletePlayerCharacterMutation> {
    const statement = `mutation DeletePlayerCharacter($input: DeletePlayerCharacterInput!, $condition: ModelPlayerCharacterConditionInput) {
        deletePlayerCharacter(input: $input, condition: $condition) {
          
          id
          owner
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
          tabletop {
            
            id
            gameOwnerID
            width
            height
            characters {
              
              items {
                
                id
                tabletopID
                gameOwnerID
                playerID
                characterID
                currentHealth
              }
              nextToken
            }
            actions {
              
              items {
                
                id
                tabletopID
                timestamp
                actionType
                player
                payload
              }
              nextToken
            }
          }
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
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
          }
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
            tabletop {
              
              id
              gameOwnerID
              width
              height
              characters {
                
                nextToken
              }
              actions {
                
                nextToken
              }
            }
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
  async GetTabletop(id: string): Promise<GetTabletopQuery> {
    const statement = `query GetTabletop($id: ID!) {
        getTabletop(id: $id) {
          
          id
          gameOwnerID
          width
          height
          characters {
            
            items {
              
              id
              tabletopID
              gameOwnerID
              playerID
              characterID
              location {
                
                x
                y
              }
              currentHealth
              character {
                
                id
                owner
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
            }
            nextToken
          }
          actions {
            
            items {
              
              id
              tabletopID
              timestamp
              actionType
              player
              payload
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTabletopQuery>response.data.getTabletop;
  }
  async ListTabletops(
    filter?: ModelTabletopFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTabletopsQuery> {
    const statement = `query ListTabletops($filter: ModelTabletopFilterInput, $limit: Int, $nextToken: String) {
        listTabletops(filter: $filter, limit: $limit, nextToken: $nextToken) {
          
          items {
            
            id
            gameOwnerID
            width
            height
            characters {
              
              items {
                
                id
                tabletopID
                gameOwnerID
                playerID
                characterID
                currentHealth
              }
              nextToken
            }
            actions {
              
              items {
                
                id
                tabletopID
                timestamp
                actionType
                player
                payload
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
    return <ListTabletopsQuery>response.data.listTabletops;
  }
  async GetAction(id: string): Promise<GetActionQuery> {
    const statement = `query GetAction($id: ID!) {
        getAction(id: $id) {
          
          id
          tabletopID
          timestamp
          actionType
          player
          payload
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetActionQuery>response.data.getAction;
  }
  async ListActions(
    filter?: ModelActionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListActionsQuery> {
    const statement = `query ListActions($filter: ModelActionFilterInput, $limit: Int, $nextToken: String) {
        listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          
          items {
            
            id
            tabletopID
            timestamp
            actionType
            player
            payload
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
    return <ListActionsQuery>response.data.listActions;
  }
  async GetTabletopCharacter(id: string): Promise<GetTabletopCharacterQuery> {
    const statement = `query GetTabletopCharacter($id: ID!) {
        getTabletopCharacter(id: $id) {
          
          id
          tabletopID
          gameOwnerID
          playerID
          characterID
          location {
            
            x
            y
          }
          currentHealth
          character {
            
            id
            owner
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTabletopCharacterQuery>response.data.getTabletopCharacter;
  }
  async ListTabletopCharacters(
    filter?: ModelTabletopCharacterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTabletopCharactersQuery> {
    const statement = `query ListTabletopCharacters($filter: ModelTabletopCharacterFilterInput, $limit: Int, $nextToken: String) {
        listTabletopCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
          
          items {
            
            id
            tabletopID
            gameOwnerID
            playerID
            characterID
            location {
              
              x
              y
            }
            currentHealth
            character {
              
              id
              owner
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
    return <ListTabletopCharactersQuery>response.data.listTabletopCharacters;
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
            tabletop {
              
              id
              gameOwnerID
              width
              height
              characters {
                
                nextToken
              }
              actions {
                
                nextToken
              }
            }
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
              tabletop {
                
                id
                gameOwnerID
                width
                height
              }
              members
              players {
                
                nextToken
              }
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
  async GetPlayerCharacter(id: string): Promise<GetPlayerCharacterQuery> {
    const statement = `query GetPlayerCharacter($id: ID!) {
        getPlayerCharacter(id: $id) {
          
          id
          owner
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
            owner
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
  async GetActionsByDate(
    tabletopID?: string,
    timestamp?: ModelIntKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelActionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetActionsByDateQuery> {
    const statement = `query GetActionsByDate($tabletopID: ID, $timestamp: ModelIntKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelActionFilterInput, $limit: Int, $nextToken: String) {
        getActionsByDate(tabletopID: $tabletopID, timestamp: $timestamp, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          
          items {
            
            id
            tabletopID
            timestamp
            actionType
            player
            payload
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (tabletopID) {
      gqlAPIServiceArguments.tabletopID = tabletopID;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
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
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetActionsByDateQuery>response.data.getActionsByDate;
  }
  OnNewActionListener: Observable<OnNewActionSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnNewAction {
        onNewAction {
          
          id
          tabletopID
          timestamp
          actionType
          player
          payload
        }
      }`
    )
  ) as Observable<OnNewActionSubscription>;

  OnCreateGameListener: Observable<OnCreateGameSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateGame($owner: String!) {
        onCreateGame(owner: $owner) {
          
          id
          owner
          uuid
          name
          description
          tabletop {
            
            id
            gameOwnerID
            width
            height
            characters {
              
              items {
                
                id
                tabletopID
                gameOwnerID
                playerID
                characterID
                currentHealth
              }
              nextToken
            }
            actions {
              
              items {
                
                id
                tabletopID
                timestamp
                actionType
                player
                payload
              }
              nextToken
            }
          }
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
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
          }
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
          tabletop {
            
            id
            gameOwnerID
            width
            height
            characters {
              
              items {
                
                id
                tabletopID
                gameOwnerID
                playerID
                characterID
                currentHealth
              }
              nextToken
            }
            actions {
              
              items {
                
                id
                tabletopID
                timestamp
                actionType
                player
                payload
              }
              nextToken
            }
          }
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
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
          }
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
          tabletop {
            
            id
            gameOwnerID
            width
            height
            characters {
              
              items {
                
                id
                tabletopID
                gameOwnerID
                playerID
                characterID
                currentHealth
              }
              nextToken
            }
            actions {
              
              items {
                
                id
                tabletopID
                timestamp
                actionType
                player
                payload
              }
              nextToken
            }
          }
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
              }
              player {
                
                username
                email
                owner
              }
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteGameSubscription>;

  OnCreateTabletopListener: Observable<
    OnCreateTabletopSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTabletop {
        onCreateTabletop {
          
          id
          gameOwnerID
          width
          height
          characters {
            
            items {
              
              id
              tabletopID
              gameOwnerID
              playerID
              characterID
              location {
                
                x
                y
              }
              currentHealth
              character {
                
                id
                owner
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
            }
            nextToken
          }
          actions {
            
            items {
              
              id
              tabletopID
              timestamp
              actionType
              player
              payload
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateTabletopSubscription>;

  OnUpdateTabletopListener: Observable<
    OnUpdateTabletopSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTabletop {
        onUpdateTabletop {
          
          id
          gameOwnerID
          width
          height
          characters {
            
            items {
              
              id
              tabletopID
              gameOwnerID
              playerID
              characterID
              location {
                
                x
                y
              }
              currentHealth
              character {
                
                id
                owner
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
            }
            nextToken
          }
          actions {
            
            items {
              
              id
              tabletopID
              timestamp
              actionType
              player
              payload
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateTabletopSubscription>;

  OnDeleteTabletopListener: Observable<
    OnDeleteTabletopSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTabletop($gameOwnerId: String!) {
        onDeleteTabletop(gameOwnerId: $gameOwnerId) {
          
          id
          gameOwnerID
          width
          height
          characters {
            
            items {
              
              id
              tabletopID
              gameOwnerID
              playerID
              characterID
              location {
                
                x
                y
              }
              currentHealth
              character {
                
                id
                owner
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
            }
            nextToken
          }
          actions {
            
            items {
              
              id
              tabletopID
              timestamp
              actionType
              player
              payload
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteTabletopSubscription>;

  OnCreateActionListener: Observable<OnCreateActionSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateAction {
        onCreateAction {
          
          id
          tabletopID
          timestamp
          actionType
          player
          payload
        }
      }`
    )
  ) as Observable<OnCreateActionSubscription>;

  OnUpdateActionListener: Observable<OnUpdateActionSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAction {
        onUpdateAction {
          
          id
          tabletopID
          timestamp
          actionType
          player
          payload
        }
      }`
    )
  ) as Observable<OnUpdateActionSubscription>;

  OnDeleteActionListener: Observable<OnDeleteActionSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAction {
        onDeleteAction {
          
          id
          tabletopID
          timestamp
          actionType
          player
          payload
        }
      }`
    )
  ) as Observable<OnDeleteActionSubscription>;

  OnCreateTabletopCharacterListener: Observable<
    OnCreateTabletopCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTabletopCharacter {
        onCreateTabletopCharacter {
          
          id
          tabletopID
          gameOwnerID
          playerID
          characterID
          location {
            
            x
            y
          }
          currentHealth
          character {
            
            id
            owner
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
        }
      }`
    )
  ) as Observable<OnCreateTabletopCharacterSubscription>;

  OnUpdateTabletopCharacterListener: Observable<
    OnUpdateTabletopCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTabletopCharacter {
        onUpdateTabletopCharacter {
          
          id
          tabletopID
          gameOwnerID
          playerID
          characterID
          location {
            
            x
            y
          }
          currentHealth
          character {
            
            id
            owner
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
        }
      }`
    )
  ) as Observable<OnUpdateTabletopCharacterSubscription>;

  OnDeleteTabletopCharacterListener: Observable<
    OnDeleteTabletopCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTabletopCharacter {
        onDeleteTabletopCharacter {
          
          id
          tabletopID
          gameOwnerID
          playerID
          characterID
          location {
            
            x
            y
          }
          currentHealth
          character {
            
            id
            owner
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
        }
      }`
    )
  ) as Observable<OnDeleteTabletopCharacterSubscription>;

  OnCreatePlayerCharacterListener: Observable<
    OnCreatePlayerCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePlayerCharacter {
        onCreatePlayerCharacter {
          
          id
          owner
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
  ) as Observable<OnCreatePlayerCharacterSubscription>;

  OnUpdatePlayerCharacterListener: Observable<
    OnUpdatePlayerCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePlayerCharacter($owner: String!) {
        onUpdatePlayerCharacter(owner: $owner) {
          
          id
          owner
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
  ) as Observable<OnUpdatePlayerCharacterSubscription>;

  OnDeletePlayerCharacterListener: Observable<
    OnDeletePlayerCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePlayerCharacter($owner: String!) {
        onDeletePlayerCharacter(owner: $owner) {
          
          id
          owner
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
