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
	var roll = computeDamage(args.attackerStrength, args.targetStrength)
    var payload = {
		attacker: args.attacker,
		rolled: roll.damageRoll,
		attackBonifier: Math.floor((args.attackerStrength-10)/2),
		defenseBonifier: Math.max(0,Math.floor((args.targetStrength-10)/2)),
		target: {
			characterID: args.targetID,
			characterName: args.targetName
		},
		damagePoints: roll.damagePoints
    }
    var item = {
        id: args.id,
        timestamp: new Date().getTime(),
        player: args.player,
        payload: JSON.stringify(payload),
        actionType: "ATTACK",
        tabletopID: args.tabletopID
    }
    var params = {
        TableName: action_table_name,
        Item: item
    };

    var damageCharacterParams = {
        TableName: tabletopcharacter_tablet_name,
        Key: {
            "id": args.targetID
        },
        UpdateExpression: "set currentHealth = :h",
        ExpressionAttributeValues: {
            ":h":  args.targetCurrentHealth - roll.damagePoints
        }
    }

    if (Object.keys(event.arguments).length > 0) {
        try {
            var createAction = await docClient.put(params).promise();
            var updateCharacter = await docClient.update(damageCharacterParams).promise();
            callback(null, item)
        } catch(err){
            callback(err)
            console.log(err);
        }
    }
};

function computeDamage(attackerStrength, targetStrength) {
	damageRoll = simpleRoll()
	damagePoints =  damageRoll + Math.floor((attackerStrength-10)/2) - Math.max(0, Math.floor((targetStrength-10)/2))
	return { damageRoll, damagePoints } 
}

function simpleRoll( ) {
    return Math.floor(Math.random() * 5) + 1;
}