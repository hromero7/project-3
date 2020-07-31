import React, { useState, useEffect } from "react";
import { auth } from "google-auth-library";
import Chat from "../../../components/Chat/Chat";
import config from "../config";


// const gapi = window.gapi;

// var authenticate = function() {
//   return gapi.auth2
//     .getAuthInstance()
//     .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
//     .then(
//       function () {
//         console.log("Sign-in successful");
//       },
//       function (err) {
//         console.error("Error signing in", err);
//       }
//     );
// }
// var loadClient = function() {
//   gapi.client.setApiKey("AIzaSyAD1G4_0RzexQcDaekIRO1J2HMKF9EmPEo");
//   return gapi.client
//     .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//     .then(
//       function () {
//         console.log("GAPI client loaded for API");
//       },
//       function (err) {
//         console.error("Error loading GAPI client for API", err);
//       }
//     );
// }

// var execute = function() {
//   return gapi.client.youtube.search
//     .list({
//       part: ["snippet"],
//       eventType: "live",
//       maxResults: 25,
//       q: "fortnite",
//       "regionCode": "US",
//       type: ["video"],
//       "videoEmbeddable": "any"
//     })
//     .then(
//       function (response) {
//         // Handle the results here (response.result has the parsed body).
//         console.log("Response", response);
//       },
//       function (err) {
//         console.error("Execute error", err);
//       }
//     );
// }
// gapi.load("client:auth2", function () {
//   gapi.auth2.init({
//     client_id:
//       "746169670759-j7mf5oaek8f1aefc20oufr4s5pukmq5g.apps.googleusercontent.com",
//   });
// });

// var a = function(){
//     authenticate().then(loadClient);
// }

const NbaLeague = () => {
  // const API = 'AIzaSyAD1G4_0RzexQcDaekIRO1J2HMKF9EmPEo';
  // const channelID = 'UCt4VNxNZiXXeWU1MiOWZVfw';
  // const result = 10;

  // var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}`
 useEffect(()=> {
   const { api_key, channel_id} = config;
   const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channel_id}&key=${api_key}`;
   fetch(apiCall)
   .then(result =>result.json())
   .then(data => {
     console.log(data);
   })
 });

 

  return (
    <div>
      {/* <button 
            onClick={a}
            style={{display:"none"}}
          >
            authorize and load
          </button>
          <button
            onClick={execute}
            style={{display:"none"}}
          >
            execute
          </button> */}
      <div
        className="streamVideo"
        style={{ marginRight: "44vw", marginTop: "8vw" }}
      >
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/MiPIsiGqK6A?controls=0&autoplay=1&iv_load_policy=3&playsinline=0&origin=http://localhost:3000"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>

        <Chat />
      </div>
    </div>
  );
};

export default NbaLeague;
