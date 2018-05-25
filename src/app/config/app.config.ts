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
            'Ocp-Apim-Subscription-Key':'d698c564245c4dad94074069fae51d67'
          },
          "OctectTypeHeader":{
            'Content-Type':'application/octet-stream',
            'Ocp-Apim-Subscription-Key':'d698c564245c4dad94074069fae51d67'
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
    },
    "SentimentalAnalysisAPI":{
        "URL":"https://eastasia.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment",
        "JSONtypeHeader":{
            'Content-Type':'application/json',
            'Ocp-Apim-Subscription-Key':'6c63c66929c54c049552bd42b1df2d2d'
          },
    }
};