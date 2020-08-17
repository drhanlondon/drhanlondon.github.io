define({ "api": [
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/chaincode/queryTransaction",
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
          "content": "{\n  \"userId\": \"gilbert\",\n  \"connectionProfileJSON\": \"connection-org1-peer0.json\",\n  \"channelName\": \"mychannel\",\n  \"chaincodeId\": \"mycc\",\n  \"functionName\": \"query\",\n  \"functionArgs\": [\"a\"]\n}",
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
            "field": "success",
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
          "content": "{\n  \"status\": true,\n  \"message\": \"the function query has been successfully queried\",\n  \"payload\": 85\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/chaincode/testnet-chaincode-query-transaction.js",
    "groupTitle": "Chaincode"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/chaincode/sendTransaction",
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
          "content": "{\n  \"userId\": \"gilbert\",\n  \"connectionProfileJSON\": \"connection-org1-peer0.json\",\n  \"channelName\": \"mychannel\",\n  \"chaincodeId\": \"mycc\",\n  \"functionName\": \"invoke\",\n  \"functionArgs\": [\"a\", \"b\", \"5\"]\n}",
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
            "field": "success",
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
          "content": "{\n  \"success\": true,\n  \"message\": \"the function invoke has been successfully invoked\",\n  \"payload\": \"\",\n  \"transactionId\": \"6b413aea5b704b98efad5c69c24e7a0c6a99fee6c6754a41bd38da4897f927d4\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/chaincode/testnet-chaincode-send-transaction.js",
    "groupTitle": "Chaincode"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/channel/queryChannelForBlockHeight",
    "title": "Query a block height of a channel",
    "description": "<p>Query a block height of a channel and show hash values of the latest block and the previous block.</p>",
    "name": "queryChannelForBlockHeight",
    "group": "Channel",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user who is sending a query</p>"
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
            "description": "<p>channel to be queried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mspId",
            "description": "<p>organization msp id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n  \"userId\": \"peter\",\n  \"mspId\": \"Org1MSP\",\n  \"connectionProfileJSON\": \"connection-org1-peer0.json\",\n  \"channelName\": \"samplechannel1\"\n}",
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
            "field": "success",
            "description": "<p>true/false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currentBlockHeight",
            "description": "<p>the latest blocknumber plus one</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currentBlockHash",
            "description": "<p>hash of the latest block, which is a part of fullCurrentBlockHash</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullCurrentBlockHash",
            "description": "<p>full hash of the latest block</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelInfo",
            "description": "<p>more info of the current block and the previous block</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n  \"success\": true,\n  \"currentChainHeight\": 4,\n  \"currentBlockHash\": \"149e2d0ef97f5b5b749a2a2dc0da1ece3aa4ab9d8b295eee55cda3a53aec2fdf\",\n  \"fullCurrentBlockHash\": \"08041220149e2d0ef97f5b5b749a2a2dc0da1ece3aa4ab9d8b295eee55cda3a53aec2fdf1a202b5537a80c54401611062f799cee9f8fd2be1cb464f121c7bc8e6f860e5c1c0a\",\n  \"channelInfo\": {\n      \"height\": {\n          \"low\": 4,\n          \"high\": 0,\n          \"unsigned\": true\n      },\n      \"currentBlockHash\": {\n          \"buffer\": {\n              \"type\": \"Buffer\",\n              \"data\": [ 8, 4, 18, 32, 20 ... ] \n          },\n          \"offset\": 4,\n          \"markedOffset\": -1,\n          \"limit\": 36,\n          \"littleEndian\": true,\n          \"noAssert\": false\n      },\n      \"previousBlockHash\": {\n          \"buffer\": {\n              \"type\": \"Buffer\",\n              \"data\": [8, 4, 18, 32, 20 , .... ]\n          },\n          \"offset\": 38,\n          \"markedOffset\": -1,\n          \"limit\": 70,\n          \"littleEndian\": true,\n          \"noAssert\": false\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/channel/testnet-query-channelForBlockHeight.js",
    "groupTitle": "Channel"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/channel/queryChannelForChaincodes",
    "title": "Query instantiated chaincodes on a channel",
    "description": "<p>Query chaincodes deployed and instantiated on the requested channel and show the detailed info for the list of instantiated chaincodes.</p>",
    "name": "queryChannelForChaincodes",
    "group": "Channel",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user who is sending a query</p>"
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
            "description": "<p>channel to be queried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mspId",
            "description": "<p>organization msp id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n  \"userId\": \"peter\",\n  \"mspId\": \"Org1MSP\",\n  \"connectionProfileJSON\": \"connection-org1-peer0.json\",\n  \"channelName\": \"samplechannel1\"\n}",
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
            "field": "success",
            "description": "<p>true/false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instantiatedChaincodes",
            "description": "<p>list of chaincodes instantiated on the requested channel</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n  \"success\": true,\n  \"instantiatedChaincodes\": {\n      \"chaincodes\": [\n          {\n              \"name\": \"mycc\",\n              \"version\": \"1.0\",\n              \"path\": \"github.com/chaincode/chaincode_example02/go/\",\n              \"input\": \"\",\n              \"escc\": \"escc\",\n              \"vscc\": \"vscc\",\n              \"id\": {\n                  \"buffer\": {\n                      \"type\": \"Buffer\",\n                      \"data\": []\n                  },\n                  \"offset\": 0,\n                  \"markedOffset\": -1,\n                  \"limit\": 0,\n                  \"littleEndian\": false,\n                  \"noAssert\": false\n              }\n          }\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/channel/testnet-query-channelForChaincodes.js",
    "groupTitle": "Channel"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/channel/queryPeerForChaincodes",
    "title": "Query installed chaincodes on a peer node",
    "description": "<p>Query chaincodes installed on the target peer node. Only the admin of organization is allowed to call it.</p>",
    "name": "queryPeerForChaincodes",
    "group": "Channel",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user who is sending a query</p>"
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
            "field": "peerDomainName",
            "description": "<p>host and domain name of the peer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mspId",
            "description": "<p>organization msp id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n  \"userId\": \"Admin@org1.example.com\",\n  \"mspId\": \"Org1MSP\",\n  \"connectionProfileJSON\": \"connection-org1-peer0.json\",\n  \"peerDomainName\": \"peer0.org1.example.com\"\n }",
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
            "field": "success",
            "description": "<p>true/false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "peerURL",
            "description": "<p>URL and port number of the peer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "chaincodesInstalled",
            "description": "<p>list of chaincodes installed on the peer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n  \"success\": true,\n  \"peerURL\": \"grpcs://localhost:7051\",\n  \"chaincodeInstalled\": {\n      \"chaincodes\": [\n          {\n              \"name\": \"mycc\",\n              \"version\": \"1.0\",\n              \"path\": \"github.com/chaincode/chaincode_example02/go/\",\n              \"input\": \"\",\n              \"escc\": \"\",\n              \"vscc\": \"\",\n              \"id\": {\n                  \"buffer\": {\n                      \"type\": \"Buffer\",\n                      \"data\": [ 10, 91, 10, 4, ... ]\n                  },\n                  \"offset\": 61,\n                  \"markedOffset\": -1,\n                  \"limit\": 93,\n                  \"littleEndian\": true,\n                  \"noAssert\": false\n              }\n          },\n          {\n              \"name\": \"mysacc\",\n              \"version\": \"1\",\n              \"path\": \"github.com/chaincode/sacc\",\n              \"input\": \"\",\n              \"escc\": \"\",\n              \"vscc\": \"\",\n              \"id\": {\n                  \"buffer\": {\n                      \"type\": \"Buffer\",\n                      \"data\": [10, 91, 10 ,4, 109, .... ]\n                  },\n                  \"offset\": 135,\n                  \"markedOffset\": -1,\n                  \"limit\": 167,\n                  \"littleEndian\": true,\n                  \"noAssert\": false\n              }\n          }\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/channel/testnet-query-peerForChaincodes.js",
    "groupTitle": "Channel"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/channel/queryPeerForChannels",
    "title": "Query channels a peer node joined",
    "description": "<p>Query channels which a target peer node has joined.</p>",
    "name": "queryPeerForChannels",
    "group": "Channel",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user who is sending a query</p>"
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
            "field": "peerDomainName",
            "description": "<p>host and domain name of the peer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mspId",
            "description": "<p>organization msp id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n  \"userId\": \"peter\",\n  \"mspId\": \"Org1MSP\",\n  \"connectionProfileJSON\": \"connection-org1-peer0.json\",\n  \"peerDomainName\": \"peer0.org1.example.com\"\n}",
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
            "field": "success",
            "description": "<p>true/false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "peerURL",
            "description": "<p>URL and port number of the peer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelsJoined",
            "description": "<p>list of the channels the target peer has joined</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n  \"success\": true,\n  \"peerURL\": \"grpcs://localhost:7051\",\n  \"channelsJoined\": {\n      \"channels\": [\n          {\n              \"channel_id\": \"mychannel\"\n          },\n          {\n              \"channel_id\": \"samplechannel1\"\n          }\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/channel/testnet-query-peerForChannels.js",
    "groupTitle": "Channel"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/channel/queryPeerForGossip",
    "title": "Query peers available for gossip",
    "description": "<p>Query peer nodes to which a target peer node is connected for a gossip protocol. Only the admin of organization is allowed to call it.</p>",
    "name": "queryPeerForGossip",
    "group": "Channel",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user who is sending a query</p>"
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
            "field": "peerDomainName",
            "description": "<p>host and domain name of the peer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mspId",
            "description": "<p>organization msp id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n  \"userId\": \"Admin@org1.example.com\",\n  \"mspId\": \"Org1MSP\",\n  \"connectionProfileJSON\": \"connection-org1-peer0.json\",\n  \"peerDomainName\": \"peer0.org1.example.com\"\n }",
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
            "field": "success",
            "description": "<p>true/false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "peerURL",
            "description": "<p>URL and port number of the peer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "connectedPeersForGossip",
            "description": "<p>list of chaincodes installed on the peer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n  \"success\": true,\n  \"peerURL\": \"grpcs://localhost:7051\",\n  \"connectedPeersForGossip\": {\n      \"local_peers\": {\n          \"Org2MSP\": {\n              \"peers\": [\n                  {\n                      \"mspid\": \"Org2MSP\",\n                      \"endpoint\": \"peer0.org2.example.com:9051\"\n                  },\n                  {\n                      \"mspid\": \"Org2MSP\",\n                      \"endpoint\": \"peer1.org2.example.com:10051\"\n                  }\n              ]\n          },\n          \"Org1MSP\": {\n              \"peers\": [\n                  {\n                      \"mspid\": \"Org1MSP\",\n                      \"endpoint\": \"peer0.org1.example.com:7051\"\n                  },\n                  {\n                      \"mspid\": \"Org1MSP\",\n                      \"endpoint\": \"peer1.org1.example.com:8051\"\n                  }\n              ]\n          }\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/channel/testnet-query-peerForGossip.js",
    "groupTitle": "Channel"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/ledger/queryBlockByHash",
    "title": "Query a block by its hash",
    "description": "<p>Send a transaction to a chaincode deployed on a application channel.</p>",
    "name": "queryBlockByHash",
    "group": "Ledger",
    "version": "0.1.1",
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/ledger/testnet-query-blockByHash.js",
    "groupTitle": "Ledger"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/ledger/queryBlockByNumber",
    "title": "Query a block by a number",
    "description": "<p>Query a block by a number on the header</p>",
    "name": "queryBlockByNumber",
    "group": "Ledger",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user who is sending a query</p>"
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
            "description": "<p>channel to be queried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mspId",
            "description": "<p>organization msp id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "blockNumber",
            "description": "<p>number to be queried</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n  \"userId\": \"peter\",\n  \"mspId\": \"Org1MSP\",\n  \"connectionProfileJSON\": \"connection-org1-peer0.json\",\n  \"channelName\": \"samplechannel1\",\n  \"blockNumber\": 3\n}",
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
            "field": "success",
            "description": "<p>true/false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "blockHash",
            "description": "<p>A block hash is calculated by hashing over the concatenated ASN.1 encoded bytes of the block number, previous block hash, and current block data hash.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "block",
            "description": "<p>the detailed information about the queried block</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n  \"success\": true,\n  \"block\": {\n      \"header\": {\n          \"number\": \"3\",\n          \"previous_hash\": \"2b5537a80c54401611062f799cee9f8fd2be1cb464f121c7bc8e6f860e5c1c0a\",\n          \"data_hash\": \"f87177d97b21b40753594e63a2c00354938d051903d98c4ce29e65469e288dd4\"\n      },\n      \"data\": {\n          \"data\": [\n              {\n                  \"signature\": {\n                      \"type\": \"Buffer\",\n                      \"data\": [48, 69, 2, 33, ... ]\n                  },\n                  \"payload\": {\n                      \"header\": {\n                          \"channel_header\": {\n                              \"type\": 3,\n                              \"version\": 1,\n                              \"timestamp\": \"2020-08-16T19:00:41.962Z\",\n                              \"channel_id\": \"samplechannel1\",\n                              \"tx_id\": \"0d299becabd550bc1dccd1b77cd2cd3bd379eb2da7319a2ab293ebd63497ea40\",\n                              \"epoch\": \"0\",\n                              \"extension\": {\n                                  \"type\": \"Buffer\",\n                                  \"data\": [18,8,18,6, ..... ]\n                              },\n                              \"typeString\": \"ENDORSER_TRANSACTION\"\n                          },\n                          \"signature_header\": {\n                              \"creator\": {\n                                  \"Mspid\": \"Org1MSP\",\n                                  \"IdBytes\": \"-----BEGIN CERTIFICATE-----\\nMIICkjCCAjmgAwIBAgIUR4gFIPB5DqbC/VYNRru3b9/RiawwCgYIKoZIzj0EAwIw\\nczELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNh\\nbiBGcmFuY2lzY28xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMT\\nE2NhLm9yZzEuZXhhbXBsZS5jb20wHhcNMjAwODE2MTgxNTAwWhcNMjEwODE2MTgy\\nMDAwWjBEMTAwDQYDVQQLEwZjbGllbnQwCwYDVQQLEwRvcmcxMBIGA1UECxMLZGVw\\nYXJ0bWVudDExEDAOBgNVBAMTB2dpbGJlcnQwWTATBgcqhkjOPQIBBggqhkjOPQMB\\nBwNCAAQIEFbhXWGRGInOLqyds9ZKFVKxhq4Sf6o9kP5RH6ivzDAoBoCoLn5ggETs\\nq/nRAQbhGCwY7g4XzuqKwjtudxSYo4HZMIHWMA4GA1UdDwEB/wQEAwIHgDAMBgNV\\nHRMBAf8EAjAAMB0GA1UdDgQWBBTQa66Hf14SLK54Ko84OIkF5jh3EjArBgNVHSME\\nJDAigCDZ2m02KVrQ3exKFD4U8Z3WYXVP7pAxcBMMZsZfUoru6jBqBggqAwQFBgcI\\nAQReeyJhdHRycyI6eyJoZi5BZmZpbGlhdGlvbiI6Im9yZzEuZGVwYXJ0bWVudDEi\\nLCJoZi5FbnJvbGxtZW50SUQiOiJnaWxiZXJ0IiwiaGYuVHlwZSI6ImNsaWVudCJ9\\nfTAKBggqhkjOPQQDAgNHADBEAiA3aEX+mZ5mJ0rcLFX7KrUzP10ISelfiu0BrYnz\\nahLZ3gIgOPSv4iFpHchfd+GFlPdwE3IbwXqwv+lghyhQns4EegI=\\n-----END CERTIFICATE-----\\n\"\n                              },\n                              \"nonce\": {\n                                  \"type\": \"Buffer\",\n                                  \"data\": [102, 150, 199, ... ]\n                              }\n                          }\n                      },\n                      \"data\": {\n                          \"actions\": [\n                              {\n                                  \"header\": {\n                                      \"creator\": {\n                                          \"Mspid\": \"Org1MSP\",\n                                          \"IdBytes\": \"-----BEGIN CERTIFICATE-----\\nMIICkjCCAjmgAwIBAgIUR4gFIPB5DqbC/VYNRru3b9/RiawwCgYIKoZIzj0EAwIw\\nczELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNh\\nbiBGcmFuY2lzY28xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMT\\nE2NhLm9yZzEuZXhhbXBsZS5jb20wHhcNMjAwODE2MTgxNTAwWhcNMjEwODE2MTgy\\nMDAwWjBEMTAwDQYDVQQLEwZjbGllbnQwCwYDVQQLEwRvcmcxMBIGA1UECxMLZGVw\\nYXJ0bWVudDExEDAOBgNVBAMTB2dpbGJlcnQwWTATBgcqhkjOPQIBBggqhkjOPQMB\\nBwNCAAQIEFbhXWGRGInOLqyds9ZKFVKxhq4Sf6o9kP5RH6ivzDAoBoCoLn5ggETs\\nq/nRAQbhGCwY7g4XzuqKwjtudxSYo4HZMIHWMA4GA1UdDwEB/wQEAwIHgDAMBgNV\\nHRMBAf8EAjAAMB0GA1UdDgQWBBTQa66Hf14SLK54Ko84OIkF5jh3EjArBgNVHSME\\nJDAigCDZ2m02KVrQ3exKFD4U8Z3WYXVP7pAxcBMMZsZfUoru6jBqBggqAwQFBgcI\\nAQReeyJhdHRycyI6eyJoZi5BZmZpbGlhdGlvbiI6Im9yZzEuZGVwYXJ0bWVudDEi\\nLCJoZi5FbnJvbGxtZW50SUQiOiJnaWxiZXJ0IiwiaGYuVHlwZSI6ImNsaWVudCJ9\\nfTAKBggqhkjOPQQDAgNHADBEAiA3aEX+mZ5mJ0rcLFX7KrUzP10ISelfiu0BrYnz\\nahLZ3gIgOPSv4iFpHchfd+GFlPdwE3IbwXqwv+lghyhQns4EegI=\\n-----END CERTIFICATE-----\\n\"\n                                      },\n                                      \"nonce\": {\n                                          \"type\": \"Buffer\",\n                                          \"data\": [102, 150, 199, ... ]\n                                      }\n                                  },\n                                  \"payload\": {\n                                      \"chaincode_proposal_payload\": {\n                                          \"input\": {\n                                              \"chaincode_spec\": {\n                                                  \"type\": 1,\n                                                  \"typeString\": \"GOLANG\",\n                                                  \"input\": {\n                                                      \"args\": [\n                                                          {\n                                                              \"type\": \"Buffer\",\n                                                              \"data\": [\n                                                                  115,\n                                                                  101,\n                                                                  116\n                                                              ]\n                                                          },\n                                                          {\n                                                              \"type\": \"Buffer\",\n                                                              \"data\": [\n                                                                  97\n                                                              ]\n                                                          },\n                                                          {\n                                                              \"type\": \"Buffer\",\n                                                              \"data\": [\n                                                                  50,\n                                                                  48,\n                                                                  48\n                                                              ]\n                                                          }\n                                                      ],\n                                                      \"decorations\": {}\n                                                  },\n                                                  \"chaincode_id\": {\n                                                      \"path\": \"\",\n                                                      \"name\": \"mysacc\",\n                                                      \"version\": \"\"\n                                                  },\n                                                  \"timeout\": 0\n                                              }\n                                          }\n                                      },\n                                      \"action\": {\n                                          \"proposal_response_payload\": {\n                                              \"proposal_hash\": \"021b13735bf16b3626829270fc907b76150aa53fa44b26a7a518405c3e92fcbb\",\n                                              \"extension\": {\n                                                  \"results\": {\n                                                      \"data_model\": 0,\n                                                      \"ns_rwset\": [\n                                                          {\n                                                              \"namespace\": \"lscc\",\n                                                              \"rwset\": {\n                                                                  \"reads\": [\n                                                                      {\n                                                                          \"key\": \"mysacc\",\n                                                                          \"version\": {\n                                                                              \"block_num\": \"2\",\n                                                                              \"tx_num\": \"0\"\n                                                                          }\n                                                                      }\n                                                                  ],\n                                                                  \"range_queries_info\": [],\n                                                                  \"writes\": [],\n                                                                  \"metadata_writes\": []\n                                                              },\n                                                              \"collection_hashed_rwset\": []\n                                                          },\n                                                          {\n                                                              \"namespace\": \"mysacc\",\n                                                              \"rwset\": {\n                                                                  \"reads\": [],\n                                                                  \"range_queries_info\": [],\n                                                                  \"writes\": [\n                                                                      {\n                                                                          \"key\": \"a\",\n                                                                          \"is_delete\": false,\n                                                                          \"value\": \"200\"\n                                                                      }\n                                                                  ],\n                                                                  \"metadata_writes\": []\n                                                              },\n                                                              \"collection_hashed_rwset\": []\n                                                          }\n                                                      ]\n                                                  },\n                                                  \"events\": {\n                                                      \"chaincode_id\": \"\",\n                                                      \"tx_id\": \"\",\n                                                      \"event_name\": \"\",\n                                                      \"payload\": {\n                                                          \"type\": \"Buffer\",\n                                                          \"data\": []\n                                                      }\n                                                  },\n                                                  \"response\": {\n                                                      \"status\": 200,\n                                                      \"message\": \"\",\n                                                      \"payload\": \"200\"\n                                                  },\n                                                  \"chaincode_id\": {\n                                                      \"path\": \"\",\n                                                      \"name\": \"mysacc\",\n                                                      \"version\": \"1\"\n                                                  }\n                                              }\n                                          },\n                                          \"endorsements\": [\n                                              {\n                                                  \"endorser\": {\n                                                      \"Mspid\": \"Org1MSP\",\n                                                      \"IdBytes\": \"-----BEGIN CERTIFICATE-----\\nMIICKDCCAc6gAwIBAgIQJfF5Fvk/Hg9aJQewKcoSNDAKBggqhkjOPQQDAjBzMQsw\\nCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMNU2FuIEZy\\nYW5jaXNjbzEZMBcGA1UEChMQb3JnMS5leGFtcGxlLmNvbTEcMBoGA1UEAxMTY2Eu\\nb3JnMS5leGFtcGxlLmNvbTAeFw0yMDA4MTYxNzU5MDBaFw0zMDA4MTQxNzU5MDBa\\nMGoxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMRYwFAYDVQQHEw1T\\nYW4gRnJhbmNpc2NvMQ0wCwYDVQQLEwRwZWVyMR8wHQYDVQQDExZwZWVyMC5vcmcx\\nLmV4YW1wbGUuY29tMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEZAObn82xAfMQ\\nhXsPkjGCJBLajopy5zGxBKiw14BJG2lNgbCw7F75CPizkoI3Y61HZfbH+CR77VpA\\nidlX5hFdNqNNMEswDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQCMAAwKwYDVR0j\\nBCQwIoAg2dptNila0N3sShQ+FPGd1mF1T+6QMXATDGbGX1KK7uowCgYIKoZIzj0E\\nAwIDSAAwRQIhAItGeZ7y9kn/qGsEiR4l3MbYzahrR8cxouLTuMkE2RoiAiAqDaSq\\n2QnIgFHmktO33MMkOAmPt+0lrVhZx/er7ETrJw==\\n-----END CERTIFICATE-----\\n\"\n                                                  },\n                                                  \"signature\": {\n                                                      \"type\": \"Buffer\",\n                                                      \"data\": [48, 68, 2, 32, ... ]\n                                                  }\n                                              }\n                                          ]\n                                      }\n                                  }\n                              }\n                          ]\n                      }\n                  }\n              }\n          ]\n      },\n      \"metadata\": {\n          \"metadata\": [\n              {\n                  \"value\":\"\\n\u0002\\b\u0001\",\n                  \"signatures\": [\n                      {\n                          \"signature_header\": {\n                              \"creator\": {\n                                  \"Mspid\": \"OrdererMSP\",\n                                  \"IdBytes\": \"-----BEGIN CERTIFICATE-----\\nMIICHjCCAcWgAwIBAgIRALBRMNyrRVPlyjYGwHTbD4swCgYIKoZIzj0EAwIwaTEL\\nMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG\\ncmFuY2lzY28xFDASBgNVBAoTC2V4YW1wbGUuY29tMRcwFQYDVQQDEw5jYS5leGFt\\ncGxlLmNvbTAeFw0yMDA4MTYxNzU5MDBaFw0zMDA4MTQxNzU5MDBaMGoxCzAJBgNV\\nBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMRYwFAYDVQQHEw1TYW4gRnJhbmNp\\nc2NvMRAwDgYDVQQLEwdvcmRlcmVyMRwwGgYDVQQDExNvcmRlcmVyLmV4YW1wbGUu\\nY29tMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEF5qKc/sfydqtlpSHZW3o9boY\\nzhLNW+o23ZiZb1GUtt8Rz7RKwSOoLodfFxj5Mi0h2gmJxp5gbFuKBhRIo9kpgaNN\\nMEswDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQCMAAwKwYDVR0jBCQwIoAgNQGW\\nnA65yOGMrOC+6YYpRqduG/xmZaJTUXuVXHv6VmkwCgYIKoZIzj0EAwIDRwAwRAIg\\nWNmBaM63RnQ+it04RzPgXfX/bkUdGOqYIry5ZFfxYrwCIH6ULVFQsPuiMFOuupjh\\nkWTsoVN2GPOzhMD1SppC1vQv\\n-----END CERTIFICATE-----\\n\"\n                              },\n                              \"nonce\": {\n                                  \"type\": \"Buffer\",\n                                  \"data\": [133, 221, 151, 95, ... ]\n                              }\n                          },\n                          \"signature\": {\n                              \"type\": \"Buffer\",\n                              \"data\": [48, 69, 2, 33, ... ]\n                          }\n                      }\n                  ]\n              },\n              {\n                  \"value\": {\n                      \"index\": \"1\"\n                  },\n                  \"signatures\": []\n              },\n              [\n                  0\n              ]\n          ]\n      }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/ledger/testnet-query-blockByNumber.js",
    "groupTitle": "Ledger"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/ledger/queryBlockByTxId",
    "title": "Query a block by a transaction id",
    "description": "<p>Send a transaction to a chaincode deployed on a application channel.</p>",
    "name": "queryBlockByTxId",
    "group": "Ledger",
    "version": "0.1.1",
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/ledger/testnet-query-blockByTxId.js",
    "groupTitle": "Ledger"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/ledger/queryGenesisBlock",
    "title": "Query the genesis block of a channel",
    "description": "<p>Query the genesis block of the given channel.</p>",
    "name": "queryGenesisBlock",
    "group": "Ledger",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user who is sending a query</p>"
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
            "description": "<p>channel to be queried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mspId",
            "description": "<p>organization msp id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n  \"userId\": \"peter\",\n  \"mspId\": \"Org1MSP\",\n  \"connectionProfileJSON\": \"connection-org1-peer0.json\",\n  \"channelName\": \"samplechannel1\"\n}",
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
            "field": "success",
            "description": "<p>true/false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "blockNumber",
            "description": "<p>number of the genesis block</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "blockHash",
            "description": "<p>hash of the genesis block</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfTransactions",
            "description": "<p>number of transactions in the genesis block</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions",
            "description": "<p>list of transactions; a config transaction does not have a transaction id although it is counted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n  \"success\": true,\n   \"blockNumber\": \"0\",\n   \"blockHash\": \"00fb49ff0e6b18f0818b6773c1c0dc3cd0c7845a6886eb551c01cace1ce1c116\",\n   \"numberOfTransactions\": 1,\n   \"transactions\": {\n       \"tx_0\": [\n           \"\",\n           \"OrdererMSP\"\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/ledger/testnet-query-genesisBlock.js",
    "groupTitle": "Ledger"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/ledger/queryLatestBlock",
    "title": "Query the latest block of a channel",
    "description": "<p>Query the lastest block of the given channel.</p>",
    "name": "queryLatestBlock",
    "group": "Ledger",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user who is sending a query</p>"
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
            "description": "<p>channel to be queried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mspId",
            "description": "<p>organization msp id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n  \"userId\": \"peter\",\n  \"mspId\": \"Org1MSP\",\n  \"connectionProfileJSON\": \"connection-org1-peer0.json\",\n  \"channelName\": \"samplechannel1\"\n}",
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
            "field": "success",
            "description": "<p>true/false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "blockNumber",
            "description": "<p>number of the latest block, which is the same as the block height minus one</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "blockHash",
            "description": "<p>hash of the latest block</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "previousBlockHash",
            "description": "<p>hash of the previous block</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dataHash",
            "description": "<p>data hash of the latest block</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfTransactions",
            "description": "<p>number of transactions in the latest block</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions",
            "description": "<p>list of transactions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n  \"success\": true,\n  \"blockNumber\": \"3\",\n  \"blockHash\": \"149e2d0ef97f5b5b749a2a2dc0da1ece3aa4ab9d8b295eee55cda3a53aec2fdf\",\n  \"previousBlockHash\": \"2b5537a80c54401611062f799cee9f8fd2be1cb464f121c7bc8e6f860e5c1c0a\",\n  \"dataHash\": \"f87177d97b21b40753594e63a2c00354938d051903d98c4ce29e65469e288dd4\",\n  \"numberOfTransactions\": 1,\n  \"transactions\": {\n      \"tx_0\": [\n          \"0d299becabd550bc1dccd1b77cd2cd3bd379eb2da7319a2ab293ebd63497ea40\",\n          \"Org1MSP\"\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/ledger/testnet-query-latestBlock.js",
    "groupTitle": "Ledger"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/ledger/queryTransactionById",
    "title": "Query a transaction by an id",
    "description": "<p>Send a transaction to a chaincode deployed on a application channel.</p>",
    "name": "queryTransactionById",
    "group": "Ledger",
    "version": "0.1.1",
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/ledger/testnet-query-transactionById.js",
    "groupTitle": "Ledger"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/msp/enrollRegistrar",
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
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/msp/testnet-msp-enroll-registrar.js",
    "groupTitle": "MSP"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/msp/enrollUser",
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
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/msp/testnet-msp-enroll-user.js",
    "groupTitle": "MSP"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/msp/exportIdentity",
    "title": "Export an identity",
    "description": "<p>Export an identity from the wallet</p>",
    "name": "exportIdentity",
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
            "description": "<p>userID to be exported from the wallet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n  \"userId\": \"gilbert\"\n}",
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
            "field": "payload",
            "description": "<p>shows credentials, mspId and type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n   \"status\": true,\n   \"payload\": {\n      \"credentials\": {\n          \"certificate\": \"-----BEGIN CERTIFICATE-----\\nMIICTTCCAfOgAwIBAgIUf0rLHgRqevSJOd665Orn3sznEDEwCgYIKoZIzj0EAwIw\\ncDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMQ8wDQYDVQQH\\nEwZEdXJoYW0xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh\\nLm9yZzEuZXhhbXBsZS5jb20wHhcNMjAwNzIzMTU1NzAwWhcNMjEwNzIzMTYwMjAw\\nWjAgMQ8wDQYDVQQLEwZjbGllbnQxDTALBgNVBAMTBGNob2kwWTATBgcqhkjOPQIB\\nBggqhkjOPQMBBwNCAARh4nOrNltzuIzFG6SDWYKgPNj5bxWYBfNvlGPoT905X1Ks\\n94M28ltMQpAaSLgSLNk9Qq8+2YrOLiv/6Orb0NLto4G6MIG3MA4GA1UdDwEB/wQE\\nAwIHgDAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBTZGKEww4xXEpm89DJ7VPNAA6WJ\\nhjAfBgNVHSMEGDAWgBSlUfcE4QbhPer1Dc6EnqZs/84PCDBXBggqAwQFBgcIAQRL\\neyJhdHRycyI6eyJoZi5BZmZpbGlhdGlvbiI6IiIsImhmLkVucm9sbG1lbnRJRCI6\\nImNob2kiLCJoZi5UeXBlIjoiY2xpZW50In19MAoGCCqGSM49BAMCA0gAMEUCIQDZ\\nAmzpSN1TZOeLzkxU4dlWDhcOisN+kcyYsvBmDyrlqwIgVH6XKrI2ZcLJo0XPxXxS\\na1IAWlcUS0rXu9CgRrhhwPA=\\n-----END CERTIFICATE-----\\n\",\n          \"privateKey\": \"-----BEGIN PRIVATE KEY-----\\r\\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgJRg4fRYU4QRzTfqL\\r\\nMBXOBPQPIVaTIuIn9iwhFJcNmMWhRANCAARh4nOrNltzuIzFG6SDWYKgPNj5bxWY\\r\\nBfNvlGPoT905X1Ks94M28ltMQpAaSLgSLNk9Qq8+2YrOLiv/6Orb0NLt\\r\\n-----END PRIVATE KEY-----\\r\\n\"\n      },\n      \"mspId\": \"Org1MSP\",\n      \"type\": \"X.509\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/msp/testnet-msp-export-identity.js",
    "groupTitle": "MSP"
  },
  {
    "type": "get",
    "url": "/fabric/testnet/v2.x/msp/listIdentities",
    "title": "List identities",
    "description": "<p>Retrieve all identities from the wallet</p>",
    "name": "listIdentities",
    "group": "MSP",
    "version": "0.1.1",
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
            "field": "payload",
            "description": "<p>list all user identities in the wallet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n  \"status\": true,\n  \"payload\": [\n      \"gilbert\",\n      \"luke\",\n      \"alex\"\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/msp/testnet-msp-list-identities.js",
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
          "content": "{\n  \"userId\": \"Gilbert\",\n  \"affiliation\": \"org1.department1\",\n  \"registrarId\": \"admin\",\n   \"connectionProfileJSON\": \"connection-org1.json\"\n}",
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
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/msp/testnet-msp-register-user.js",
    "groupTitle": "MSP"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v2.x/msp/removeIdentity",
    "title": "Remove an identity",
    "description": "<p>Remove an identity from the wallet</p>",
    "name": "removeIdentity",
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
            "description": "<p>userID to be removed from the wallet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n  \"userId\": \"gilbert\"\n}",
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
            "description": "<p>shows the result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Body Example",
          "content": "{\n  \"status\": true,\n  \"message\": \"gilbert has been successfully removed from the wallet\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/msp/testnet-msp-remove-identity.js",
    "groupTitle": "MSP"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/v1.4x/msp/retrievePeerOrgAdminIdentity",
    "title": "Retrieve the admin identity of a peer org",
    "description": "<p>Retrieve the admin identity of a peer organization which was created when a Fabric testnetwork is deployed with crypto materials generated from crytogen tool</p>",
    "name": "retrievePeerOrgAdminIdentity",
    "group": "MSP",
    "version": "0.1.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "peerOrgDomainAddress",
            "description": "<p>The domain address of the peer organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mspId",
            "description": "<p>The id of MSP(Membership Service Provider) representing the organization</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body Example",
          "content": "{\n  \"peerOrgDomainAddress\": \"org2.example.com\",\n  \"mspId\": \"Org2MSP\"\n}",
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
          "content": "{\n  \"status\": true,\n  \"message\": \"The admin identity of org2.example.com is imported to the wallet successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-1.4x-connector/api/msp/testnet-msp-retrieve-peerOrgAdminIdentity.js",
    "groupTitle": "MSP"
  }
] });
