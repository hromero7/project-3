
let axios = require("axios");


function twitchApi() {
        
    axios.get('https://api.twitch.tv/helix/streams?game_id=33214', {
        'client_id' : "xsh38komk8dx7ya5zrkrobx842m2df",
        'Authorization' : "Bearer fb62scupwg6p0wpau5zr4n1kf7h7wt",
    }).catch(thrown => {
        if (axios.isCancel(thrown)) {
            console.log(thrown.message);
        } else {
            // handle error
            console.log(thrown)
        }
    });
}

function twitchRetrieve(req, res){
    axios.get(`https://api.twitch.tv/helix/streams?game_id=${req.body.game_id}`, {
         headers: {
            "Client-Id":'xsh38komk8dx7ya5zrkrobx842m2df',
            'Authorization' : "Bearer fb62scupwg6p0wpau5zr4n1kf7h7wt",
        }
    }).then((data) => {
        //  Get variable for data from Twitch

        //  Get the first set of data

        //  Get what you need to get the livestream link
        
        //  Create and return livestream link
        let url = "https://www.twitch.tv/";
        
    })
}

module.exports = twitchApi;



// axios.post('https://id.twitch.tv/oauth2/token', {

// })


