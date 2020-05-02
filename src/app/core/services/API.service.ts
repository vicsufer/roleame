/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateGameInput = {
  id?: string | null;
  uuid: string;
  name: string;
  description: string;
  members?: Array<string | null> | null;
  messages?: Array<string | null> | null;
};

export type UpdateGameInput = {
  id: string;
  uuid?: string | null;
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

export type UpdateGameCharacterInput = {
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

export type ModelGameFilterInput = {
  id?: ModelIDFilterInput | null;
  uuid?: ModelStringFilterInput | null;
  name?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  members?: ModelStringFilterInput | null;
  messages?: ModelStringFilterInput | null;
  and?: Array<ModelGameFilterInput | null> | null;
  or?: Array<ModelGameFilterInput | null> | null;
  not?: ModelGameFilterInput | null;
};

export type ModelIDFilterInput = {
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
};

export type ModelStringFilterInput = {
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
};

export type ModelGameCharacterFilterInput = {
  id?: ModelIDFilterInput | null;
  uuid?: ModelStringFilterInput | null;
  name?: ModelStringFilterInput | null;
  background?: ModelStringFilterInput | null;
  portrait?: ModelStringFilterInput | null;
  portraitURL?: ModelStringFilterInput | null;
  class?: ModelStringFilterInput | null;
  agility?: ModelIntFilterInput | null;
  hitPoints?: ModelIntFilterInput | null;
  fellowship?: ModelIntFilterInput | null;
  strength?: ModelIntFilterInput | null;
  wisdom?: ModelIntFilterInput | null;
  and?: Array<ModelGameCharacterFilterInput | null> | null;
  or?: Array<ModelGameCharacterFilterInput | null> | null;
  not?: ModelGameCharacterFilterInput | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelPlayerCharacterFilterInput = {
  id?: ModelIDFilterInput | null;
  uuid?: ModelStringFilterInput | null;
  name?: ModelStringFilterInput | null;
  background?: ModelStringFilterInput | null;
  portrait?: ModelStringFilterInput | null;
  portraitURL?: ModelStringFilterInput | null;
  class?: ModelStringFilterInput | null;
  agility?: ModelIntFilterInput | null;
  hitPoints?: ModelIntFilterInput | null;
  fellowship?: ModelIntFilterInput | null;
  strength?: ModelIntFilterInput | null;
  wisdom?: ModelIntFilterInput | null;
  and?: Array<ModelPlayerCharacterFilterInput | null> | null;
  or?: Array<ModelPlayerCharacterFilterInput | null> | null;
  not?: ModelPlayerCharacterFilterInput | null;
};

export type CreateGameMutation = {
  
  id: string;
  uuid: string;
  name: string;
  description: string;
  members: Array<string | null> | null;
  playerCharacters: {
    
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
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    
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
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
};

export type UpdateGameMutation = {
  
  id: string;
  uuid: string;
  name: string;
  description: string;
  members: Array<string | null> | null;
  playerCharacters: {
    
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
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    
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
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
};

export type DeleteGameMutation = {
  
  id: string;
  uuid: string;
  name: string;
  description: string;
  members: Array<string | null> | null;
  playerCharacters: {
    
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
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    
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
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
};

export type CreateGameCharacterMutation = {
  
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
};

export type UpdateGameCharacterMutation = {
  
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
};

export type DeleteGameCharacterMutation = {
  
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
};

export type GetGameQuery = {
  
  id: string;
  uuid: string;
  name: string;
  description: string;
  members: Array<string | null> | null;
  playerCharacters: {
    
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
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    
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
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
};

export type ListGamesQuery = {
  
  items: Array<{
    
    id: string;
    uuid: string;
    name: string;
    description: string;
    members: Array<string | null> | null;
    playerCharacters: {
      
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
      } | null> | null;
      nextToken: string | null;
    } | null;
    gameCharacters: {
      
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
      } | null> | null;
      nextToken: string | null;
    } | null;
    messages: Array<string | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetGameCharacterQuery = {
  
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
};

export type ListGameCharactersQuery = {
  
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
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateGameSubscription = {
  
  id: string;
  uuid: string;
  name: string;
  description: string;
  members: Array<string | null> | null;
  playerCharacters: {
    
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
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    
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
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
};

export type OnUpdateGameSubscription = {
  
  id: string;
  uuid: string;
  name: string;
  description: string;
  members: Array<string | null> | null;
  playerCharacters: {
    
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
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    
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
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
};

export type OnDeleteGameSubscription = {
  
  id: string;
  uuid: string;
  name: string;
  description: string;
  members: Array<string | null> | null;
  playerCharacters: {
    
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
    } | null> | null;
    nextToken: string | null;
  } | null;
  gameCharacters: {
    
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
    } | null> | null;
    nextToken: string | null;
  } | null;
  messages: Array<string | null> | null;
};

export type OnCreateGameCharacterSubscription = {
  
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
};

export type OnUpdateGameCharacterSubscription = {
  
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
};

export type OnDeleteGameCharacterSubscription = {
  
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
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateGame(input: CreateGameInput): Promise<CreateGameMutation> {
    const statement = `mutation CreateGame($input: CreateGameInput!) {
        createGame(input: $input) {
          
          id
          uuid
          name
          description
          members
          playerCharacters {
            
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
            }
            nextToken
          }
          gameCharacters {
            
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
            }
            nextToken
          }
          messages
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGameMutation>response.data.createGame;
  }
  async UpdateGame(input: UpdateGameInput): Promise<UpdateGameMutation> {
    const statement = `mutation UpdateGame($input: UpdateGameInput!) {
        updateGame(input: $input) {
          
          id
          uuid
          name
          description
          members
          playerCharacters {
            
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
            }
            nextToken
          }
          gameCharacters {
            
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
            }
            nextToken
          }
          messages
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGameMutation>response.data.updateGame;
  }
  async DeleteGame(input: DeleteGameInput): Promise<DeleteGameMutation> {
    const statement = `mutation DeleteGame($input: DeleteGameInput!) {
        deleteGame(input: $input) {
          
          id
          uuid
          name
          description
          members
          playerCharacters {
            
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
            }
            nextToken
          }
          gameCharacters {
            
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
            }
            nextToken
          }
          messages
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGameMutation>response.data.deleteGame;
  }
  async CreateGameCharacter(
    input: CreateGameCharacterInput
  ): Promise<CreateGameCharacterMutation> {
    const statement = `mutation CreateGameCharacter($input: CreateGameCharacterInput!) {
        createGameCharacter(input: $input) {
          
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGameCharacterMutation>response.data.createGameCharacter;
  }
  async UpdateGameCharacter(
    input: UpdateGameCharacterInput
  ): Promise<UpdateGameCharacterMutation> {
    const statement = `mutation UpdateGameCharacter($input: UpdateGameCharacterInput!) {
        updateGameCharacter(input: $input) {
          
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGameCharacterMutation>response.data.updateGameCharacter;
  }
  async DeleteGameCharacter(
    input: DeleteGameCharacterInput
  ): Promise<DeleteGameCharacterMutation> {
    const statement = `mutation DeleteGameCharacter($input: DeleteGameCharacterInput!) {
        deleteGameCharacter(input: $input) {
          
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGameCharacterMutation>response.data.deleteGameCharacter;
  }
  async CreatePlayerCharacter(
    input: CreatePlayerCharacterInput
  ): Promise<CreatePlayerCharacterMutation> {
    const statement = `mutation CreatePlayerCharacter($input: CreatePlayerCharacterInput!) {
        createPlayerCharacter(input: $input) {
          
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePlayerCharacterMutation>response.data.createPlayerCharacter;
  }
  async UpdatePlayerCharacter(
    input: UpdatePlayerCharacterInput
  ): Promise<UpdatePlayerCharacterMutation> {
    const statement = `mutation UpdatePlayerCharacter($input: UpdatePlayerCharacterInput!) {
        updatePlayerCharacter(input: $input) {
          
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePlayerCharacterMutation>response.data.updatePlayerCharacter;
  }
  async DeletePlayerCharacter(
    input: DeletePlayerCharacterInput
  ): Promise<DeletePlayerCharacterMutation> {
    const statement = `mutation DeletePlayerCharacter($input: DeletePlayerCharacterInput!) {
        deletePlayerCharacter(input: $input) {
          
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePlayerCharacterMutation>response.data.deletePlayerCharacter;
  }
  async GetGame(id: string): Promise<GetGameQuery> {
    const statement = `query GetGame($id: ID!) {
        getGame(id: $id) {
          
          id
          uuid
          name
          description
          members
          playerCharacters {
            
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
            }
            nextToken
          }
          gameCharacters {
            
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
            uuid
            name
            description
            members
            playerCharacters {
              
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
              }
              nextToken
            }
            gameCharacters {
              
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
  async GetGameCharacter(id: string): Promise<GetGameCharacterQuery> {
    const statement = `query GetGameCharacter($id: ID!) {
        getGameCharacter(id: $id) {
          
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
      `subscription OnCreateGame {
        onCreateGame {
          
          id
          uuid
          name
          description
          members
          playerCharacters {
            
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
            }
            nextToken
          }
          gameCharacters {
            
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
      `subscription OnUpdateGame {
        onUpdateGame {
          
          id
          uuid
          name
          description
          members
          playerCharacters {
            
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
            }
            nextToken
          }
          gameCharacters {
            
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
      `subscription OnDeleteGame {
        onDeleteGame {
          
          id
          uuid
          name
          description
          members
          playerCharacters {
            
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
            }
            nextToken
          }
          gameCharacters {
            
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
      `subscription OnCreatePlayerCharacter {
        onCreatePlayerCharacter {
          
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
        }
      }`
    )
  ) as Observable<OnCreatePlayerCharacterSubscription>;

  OnUpdatePlayerCharacterListener: Observable<
    OnUpdatePlayerCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePlayerCharacter {
        onUpdatePlayerCharacter {
          
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
        }
      }`
    )
  ) as Observable<OnUpdatePlayerCharacterSubscription>;

  OnDeletePlayerCharacterListener: Observable<
    OnDeletePlayerCharacterSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePlayerCharacter {
        onDeletePlayerCharacter {
          
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
        }
      }`
    )
  ) as Observable<OnDeletePlayerCharacterSubscription>;
}
