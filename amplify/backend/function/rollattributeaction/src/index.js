/* Amplify Params - DO NOT EDIT
	API_ROLEAMEAPI_ACTIONTABLE_ARN
	API_ROLEAMEAPI_ACTIONTABLE_NAME
	API_ROLEAMEAPI_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk')
const {"v4": uuidv4} = require('uuid');
AWS.config.update({access_key_id: 'xxxx'});
AWS.config.update({secret_access_key: 'yyyy'}); 
const region = process.env.REGION
const ddb_table_name = process.env.API_ROLEAMEAPI_ACTIONTABLE_NAME
const docClient = new AWS.DynamoDB.DocumentClient({region})

exports.handler = async (event, _, callback) => {
    // createRollAttributeAction(event, callback)


    const args = { ...event.arguments, id: uuidv4() }
    var rolled = simpleRoll()
    var payload = {
        attribute: args.attribute,
        bonifier: args.bonifier,
        rolled: rolled,
        total: args.bonifier + rolled,
    }
    var item = {
        id: args.id,
        timestamp: new Date().getTime(),
        player: args.player,
        payload: JSON.stringify(payload),
        actionType: "ATTRIBUTEROLL",
        tabletopID: args.tabletopID
    }
    var params = {
        TableName: ddb_table_name,
        Item: item
    };

    if (Object.keys(event.arguments).length > 0) {
        try {
            var result = await docClient.put(params).promise();
            //Handle your result here!
            callback(null, item)
        } catch(err){
            callback(err)
            console.log(err);
        }
    }
};

function simpleRoll( ) {
    return Math.floor(Math.random() * 20) + 1;
}
