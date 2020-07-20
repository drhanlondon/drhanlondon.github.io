define({ "api": [
  {
    "type": "post",
    "url": "/fabric/testnet/msp/enrollRegistrar",
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
          }
        ]
      }
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
      }
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-connector/api/msp/testnet-msp-register-enroll.js",
    "groupTitle": "MSP"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/msp/enrollUser",
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
          }
        ]
      }
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
      }
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-connector/api/msp/testnet-msp-register-enroll.js",
    "groupTitle": "MSP"
  },
  {
    "type": "post",
    "url": "/fabric/testnet/msp/registerUser",
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
          }
        ]
      }
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
      }
    },
    "filename": "/home/drhan/Dropbox/myWork/overledger-dlt-hyperledger-fabric-connector/api/msp/testnet-msp-register-enroll.js",
    "groupTitle": "MSP"
  }
] });
