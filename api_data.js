define({ "api": [
  {
    "type": "post",
    "url": "/fabric/testnet/v2.x/chaincode/queryTransaction",
    "title": "Query a transaction",
    "description": "<p>Query a transaction to see the result after sending a transaction.</p>",
    "name": "queryTransaction",
    "group": "Chaincode",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user who is querying a transaction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "connectionProfileJSON",
            "description": "<p>file which will be used to navigate one of peer nodes in an organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channelName",
            "description": "<p>a channel to which chaincode is deployed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chaincodeId",
            "description": "<p>chaincode id which was decided when it was deployed to a channel by command line interface</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "functionName",
            "description": "<p>function to be queried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "functionArgs",
            "description": "<p>arguments to be passed to the function</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n  \"userId\": \"gilbert\",\n  \"connectionProfileJSON\": \"connection-org1.json\",\n  \"channelName\": \"mychannel\",\n  \"chaincodeId\": \"businessloan\",\n  \"functionName\": \"QueryMetaToken\",\n  \"functionArgs\": [\"tesco\",\"TES1\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true/false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Explain the result of processing a request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload",
            "description": "<p>transaction response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n  \"status\": true,\n  \"message\": \"the function QueryMetaToken has been successfully queried\",\n  \"payload\": {\n      \"docType\": \"loanType3\",\n      \"issuer\": \"tesco\",\n      \"tokenName\": \"TES1\",\n      \"denomination\": \"GBP\",\n      \"amountToBorrow\": 1000,\n      \"totalTokensToIssue\": 10,\n      \"faceValue\": 100,\n      \"interestRate\": 10,\n      \"issuingPeriod\": 3,\n      \"maturityPeriod\": 12,\n      \"tokensOwned\": 0,\n      \"tokensTrading\": 0,\n      \"tokensRedeemed\": 0,\n      \"tokensBurnt\": 0,\n      \"erc20ContractAddress\": \"0xERC20Addresss\",\n      \"issuerEtherAddres\": \"0xTescoEtherAddress\",\n      \"onMarket\": false\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-connector/api/chaincode/testnet-chaincode-query-transaction.js",
    "groupTitle": "Chaincode"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v2.x/chaincode/sendTransaction",
    "title": "Send a transaction",
    "description": "<p>Send a transaction to a chaincode deployed on a application channel.</p>",
    "name": "sendTransaction",
    "group": "Chaincode",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user who is sending a new transaction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "connectionProfileJSON",
            "description": "<p>file which will be used to navigate one of peer nodes in an organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channelName",
            "description": "<p>a channel to which chaincode is deployed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chaincodeId",
            "description": "<p>chaincode id which was decided when it was deployed to a channel by command line interface</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "functionName",
            "description": "<p>function to be invoked</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "functionArgs",
            "description": "<p>arguments to be passed to the function</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n  \"userId\": \"gilbert\",\n  \"connectionProfileJSON\": \"connection-org1.json\",\n  \"channelName\": \"mychannel\",\n  \"chaincodeId\": \"businessloan\",\n  \"functionName\": \"InitMetaToken\",\n  \"functionArgs\": [\"loanType3\", \"tesco\",\"TES1\",\"GBP\",\"1000.0\", \"10\", \"10.00\", \"3\", \"12\", \"0xERC20Addresss\", \"0xTescoEtherAddress\"]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true/false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Explain the result of processing a request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload",
            "description": "<p>transaction response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n  \"status\": true,\n  \"message\": \"the function InitMetaToken has been successfully invoked\",\n  \"payload\": \"\",\n  \"transactionId\": \"df34662eed4cac51b3dd987eec7ece58bdba994383521d3f2c45121237c1a749\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-connector/api/chaincode/testnet-chaincode-send-transaction.js",
    "groupTitle": "Chaincode"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v2.x/msp/enrollRegistrar",
    "title": "Enroll the registrar",
    "description": "<p>Enroll the registrar who is responsbile for issuing users' identity certificate. Only the registrar can call this API. The id and password of the registrar are already registered when Fabric CA server is launched.</p>",
    "name": "enrollRegistrar",
    "group": "MSP",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registrarId",
            "description": "<p>registrarID was decided when Fabric CA server was launched</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Registrar's Password was decided when Fabric CA server was launched</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "caServer",
            "description": "<p>The domain name of the organization to which the registrar belongs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mspId",
            "description": "<p>The id of MSP(Membership Service Provider) representing the organization to which the registrar belongs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "connectionProfileJSON",
            "description": "<p>file which will be used to navigate one of peer nodes in an organization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n   \"registrarId\": \"admin\",\n   \"password\": \"adminpw\",\n   \"caServer\": \"ca.org1.example.com\",\n   \"mspId\": \"Org1MSP\",\n   \"connectionProfileJSON\": \"connection-org1.json\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true/false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Explain the result of processing a request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n  \"status\": true,\n  \"message\": \"the registrar whose id is admin is enrolled successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-connector/api/msp/testnet-msp-enroll-registrar.js",
    "groupTitle": "MSP"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v2.x/msp/enrollUser",
    "title": "Enroll a user",
    "description": "<p>Enroll a user who is already registered to Fabric CA server.</p>",
    "name": "enrollUser",
    "group": "MSP",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userID is already registered by calling the API registerUser</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password is already created and registered by calling the API registerUser</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "caServer",
            "description": "<p>The domain name of the organization to which the user belongs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mspId",
            "description": "<p>The id of MSP(Membership Service Provider) representing the organization to which the user belongs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "connectionProfileJSON",
            "description": "<p>file which will be used to navigate one of peer nodes in an organization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n  \"userId\": \"Gilbert\",\n  \"password\": \"XYIfTbJKTWLU\",\n  \"caServer\": \"ca.org1.example.com\",\n  \"mspId\": \"Org1MSP\",\n   \"connectionProfileJSON\": \"connection-org1.json\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true/false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Explain the result of processing a request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n  \"status\": true,\n  \"message\": \"the user whose id is Gilbert is enrolled successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-connector/api/msp/testnet-msp-enroll-user.js",
    "groupTitle": "MSP"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v2.x/msp/registerUser",
    "title": "Register a user",
    "description": "<p>Register a user to Fabric CA server. Only the registrar can call this API to register the user. Then the server will create a password for the user. The registrar needs to pass securely the registered Id and password to the user.</p>",
    "name": "registerUser",
    "group": "MSP",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId should be unique in the organization to which the user is registered.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "affiliation",
            "description": "<p>It could be a department or team to which a user relates.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "caServer",
            "description": "<p>The domain name of the organization to which a user belongs.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registrarId",
            "description": "<p>The id of the registrar who is calling this API.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "connectionProfileJSON",
            "description": "<p>file which will be used to navigate one of peer nodes in an organization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n  \"userId\": \"Gilbert\",\n  \"affiliation\": \"org1.board\",\n  \"caServer\": \"ca.org1.example.com\",\n  \"registrarId\": \"admin\",\n   \"connectionProfileJSON\": \"connection-org1.json\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true/false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Explain the result of processing a request.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId which is registered successfully.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password created by Fabric CA server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n  \"status\": true,\n  \"message\": \"the user whose id is Gilbert is registered successfully\",\n  \"userId\": \"Gilbert\",\n  \"password\": \"XYIfTbJKTWLU\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-connector/api/msp/testnet-msp-register-user.js",
    "groupTitle": "MSP"
  }
] });
