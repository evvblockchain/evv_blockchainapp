export const config = {
    "appTitle":"EVV",
    "isOffline":false,
    "messages":{
        "LOGIN_ERROR":"Invalid username and password."
    },
    "FaceAPI":{
        "url":"https://westcentralus.api.cognitive.microsoft.com/face/v1.0/",
        "JSONtypeHeader":{
            'Content-Type':'application/json',
            'Ocp-Apim-Subscription-Key':'415a491cc97e480490105a7b19703e66'
          },
          "OctectTypeHeader":{
            'Content-Type':'application/octet-stream',
            'Ocp-Apim-Subscription-Key':'415a491cc97e480490105a7b19703e66'
          }

    },
    "TierionAPI":{
        "URL":" https://api.tierion.com/v1/",
        "Header":{
            "Content-Type":"application/json",
            "X-Username":"jince.george@xe04.ey.com",
            "X-Api-Key":"kXizEl+B4/4wyLXkmpRI6TpbDa35T53yMv21BfGElRM="
        },
        "DataStoreId":"7103"
    }
};