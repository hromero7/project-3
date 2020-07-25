
let axios = require("axios");
const router = require("express").Router()

router.get("/streams/:id", ({params}, res)=> {
    axios.get(`https://api.twitch.tv/helix/streams?game_id=${params.id}`, {
         headers: {
            "Client-Id":'xsh38komk8dx7ya5zrkrobx842m2df',
            'Authorization' : "Bearer fb62scupwg6p0wpau5zr4n1kf7h7wt",
        }
    }).then(({data}) => {
        res.json(data.data)
        
    }).catch((e) => {
        res.status(300).json({
            error : true, 
            error_message : e
        })
    })
})

module.exports = router;



// axios.post('https://id.twitch.tv/oauth2/token', {

// })


