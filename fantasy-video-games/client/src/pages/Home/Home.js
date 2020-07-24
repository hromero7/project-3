import React from "react";
import Jumbotron from "../../components/Jumbotron";
import "./style.css";

const Home = () => {
    return (
    <>
    <div className="homeVideo">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/URCLFqeNHYk?controls=0&autoplay=1&iv_load_policy=3&playsinline=0" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <Jumbotron/>
    </>
    )
}


export default Home;