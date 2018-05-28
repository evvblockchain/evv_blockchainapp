export const config = {
    "appTitle":"EVV",
    "isOffline":false,
    "messages":{
        "LOGIN_ERROR":"Invalid username and password."
    },
    "FaceAPI":{
        "url":"https://eastasia.api.cognitive.microsoft.com/face/v1.0/",
        "JSONtypeHeader":{
            'Content-Type':'application/json',
            'Ocp-Apim-Subscription-Key':''
          },
          "OctectTypeHeader":{
            'Content-Type':'application/octet-stream',
            'Ocp-Apim-Subscription-Key':''
          }

    },
    "TierionAPI":{
        "URL":" https://api.tierion.com/v1/",
        "Header":{
            "Content-Type":"application/json",
            "X-Username":"",
            "X-Api-Key":"="
        },
        "DataStoreId":"7103"
    },
    "SentimentalAnalysisAPI":{
        "URL":"https://eastasia.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment",
        "JSONtypeHeader":{
            'Content-Type':'application/json',
            'Ocp-Apim-Subscription-Key':''
          },
    }
};