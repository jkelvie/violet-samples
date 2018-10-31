module.exports = {
    onRequest: (test, request) => {
        if (request.request) {
          console.log("Request: " + JSON.stringify(request, null, 2));
          if (request.request.intent.name === "launch") {
            request.request.type = "LaunchRequest";
            delete request.request.intent;
          } else if (request.request.intent.name === "closeSession") {
            request.request.type = "SessionEndedRequest";
            delete request.request.intent;
          }
        }
    },

    onResponse: (test, response) => {
      if (response.contextOut) {
        response.sessionAttributes = response.contextOut[0].parameters;
      }
      console.log(JSON.stringify(response, null, 2));

    }
}
