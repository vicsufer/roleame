/* Amplify Params - DO NOT EDIT
	API_ROLEAMEAPI_ACTIONTABLE_ARN
	API_ROLEAMEAPI_ACTIONTABLE_NAME
	API_ROLEAMEAPI_GRAPHQLAPIIDOUTPUT
	API_ROLEAMEAPI_TABLETOPCHARACTERTABLE_ARN
	API_ROLEAMEAPI_TABLETOPCHARACTERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */


const AWS = require('aws-sdk')
const {"v4": uuidv4} = require('uuid');
AWS.config.update({access_key_id: 'xxxx'});
AWS.config.update({secret_access_key: 'yyyy'}); 
const region = process.env.REGION
const action_table_name = process.env.API_ROLEAMEAPI_ACTIONTABLE_NAME
const tabletopcharacter_tablet_name = process.env.API_ROLEAMEAPI_TABLETOPCHARACTERTABLE_NAME
const docClient = new AWS.DynamoDB.DocumentClient({region})

exports.handler = async (event, _, callback) => {

    const args = { ...event.arguments, id: uuidv4() }
	var roll = computeHeal(args.currentHealth, args.maxHealth, args.healerWisdom)
    var payload = {
		healer: args.healer,
		rolled: roll.healRoll,
		bonifier: Math.max(Math.floor(0,(args.healerWisdom-10)/2)),
		target: {
			characterID: args.targetID,
			characterName: args.targetName
		},
		healPoints: roll.healPoints
    }
    var item = {
        id: args.id,
        timestamp: new Date().getTime(),
        player: args.player,
        payload: JSON.stringify(payload),
        actionType: "HEAL",
        tabletopID: args.tabletopID
    }
    var params = {
        TableName: action_table_name,
        Item: item
    };

    var healCharacterParams = {
        TableName: tabletopcharacter_tablet_name,
        Key: {
            "id": args.targetID
        },
        UpdateExpression: "set currentHealth = :h",
        ExpressionAttributeValues: {
            ":h":  args.currentHealth+roll.healPoints
        }
    }

    if (Object.keys(event.arguments).length > 0) {
        try {
            var createAction = await docClient.put(params).promise();
            var updateCharacter = await docClient.update(healCharacterParams).promise();
            callback(null, item)
        } catch(err){
            callback(err)
            console.log(err);
        }
    }
};

function computeHeal(currentHealth, maxHealth, wisdomAttribute) {
	healCap =  maxHealth - currentHealth;
	healRoll = simpleRoll()
	healPoints =  healRoll + Math.max(0,Math.floor((wisdomAttribute-10)/2))
	return { healRoll, healPoints: Math.min(healPoints, healCap) } 
}

function simpleRoll( ) {
    return Math.floor(Math.random() * 5) + 1;
}