import React from "react";
import "./Home.css";

import MintBtn from "./mintbtn";

import CS from "./Imgs/1x/CS.png";

import HEadImg from "./Imgs/Livello 23.png";
import Mint from "./Imgs/MintBtn.png";
import TextImg from "./Imgs/Div2Imgtxt.png";

import RoadBtn from "./Imgs/RoadmapBtn.png";
import RoadA from "./Imgs/RoadMapleftImg.png";
import RoadB from "./Imgs/RoadMap.png";

import TeamBtn from "./Imgs/TeamBtn.png";

import OpenSea from "./Imgs/OpenseaBtn.png";

import TA from "./Imgs/1x/1x/TA.png";
import TB from "./Imgs/1x/1x/TB.png";
import TC from "./Imgs/1x/1x/TC.png";
import TD from "./Imgs/1x/1x/TD.png";
import TE from "./Imgs/1x/1x/TE.png";
import TF from "./Imgs/1x/1x/TF.png";

import TAB from "./Imgs/1x/TAB.png";
import TBB from "./Imgs/1x/TBB.png";
import TCB from "./Imgs/1x/TCB.png";
import TDB from "./Imgs/1x/TDB.png";
import TEB from "./Imgs/1x/TEB.png";
import TFB from "./Imgs/1x/TFB.png";

export default function Home() {
  return (
    <div className="Sara ">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand text-white font-weight-bold" href="#">
          OctoRiders TEAM
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  mx-auto">
            <li class="nav-item  active">
              <a class="nav-link mx-5 text-white" href="#about">
                About <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-5  text-white" href="#roadmap">
                The Road Map
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link mx-5 text-white" href="#team">
                The Team
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-5 text-white" href="#">
                OpenSea
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <a href="http://discord.gg/McphYRHMTA" target="_blank">
              <i class="fa-brands fa-discord ico mx-3"></i>
            </a>
            <a href="https://twitter.com/OctoRaidersNFT" target="_blank">
              <i class="fa-brands fa-twitter ico mx-3"></i>
            </a>
            <a href="https://www.instagram.com/octoraidersnft/" target="_blank">
              <i class="fa-brands fa-instagram ico mx-3"></i>
            </a>
          </form>
        </div>
      </nav>
      <div className="Header container-fluid ">
        <div className="row align-items-center" style={{ minHeight: "100vh" }}>
          <div className="col-12 pt-5 mt-5">
            <img src={HEadImg} className="mx-auto w-100 d-block HeadImg"></img>
            <h2
              className="text-white  py-3"
              style={{ textAlign: "center", fontWeight: "bold" }}
            >
              Welcome to OctoRaiders Universe
            </h2>
            {/* <a style={{ cursor: "pointer" }}> */}
            <MintBtn />

            {/* <img src={Mint} className="mx-auto MintImg d-block py-3"></img> */}
            {/* <img src={CS} className="mx-auto MintImg d-block py-3"></img> */}
            {/* </a> */}
          </div>
        </div>
      </div>

      <div className="DivB container-fluid ">
        <a id="about"></a>

        {/* <div className="container"> */}
        <div className="row align-items-center">
          <div className="col-12">
            <img
              className=" mx-auto d-block  "
              src={TextImg}
              style={{ maxWidth: "100%" }}
            ></img>
          </div>
        </div>

        {/* </div> */}
      </div>

      <div className="container-fluid text-center RoadMap">
        <a id="roadmap"></a>
        <div className="container  ">
          <img
            src={RoadBtn}
            className="w-50 pt-4"
            style={{ maxWidth: "300px" }}
          ></img>
          <div className="row py-5">
            <div className="col-3">
              <img src={RoadA} className="w-100 d-md-block d-none"></img>
            </div>

            <div className="col-12 col-md-9">
              <img src={RoadB} className="w-100"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid Team">
        <a id="team"></a>
        <div className="container text-center">
          <img
            src={TeamBtn}
            className="w-50 pt-2 my-5"
            style={{ maxWidth: "300px" }}
          ></img>
          <div className="row py-5">
            <div className="col-12 col-md-2  ">
              <div className="TeamCol">
                <img src={TA} className=""></img>
                <img src={TAB} className="my-3"></img>
              </div>
            </div>

            <div className="col-12 col-md-2">
              <div className="TeamCol">
                <img src={TB} className=""></img>
                <img src={TBB} className=" my-3"></img>
              </div>
            </div>

            <div className="col-12 col-md-2 ">
              <div className="TeamCol">
                {" "}
                <img src={TC} className=""></img>
                <img src={TCB} className="my-3"></img>
              </div>
            </div>

            <div className="col-12 col-md-2 ">
              <div className="TeamCol">
                {" "}
                <img src={TD} className=""></img>
                <img src={TDB} className="my-3"></img>
              </div>
            </div>

            <div className="col-12 col-md-2 ">
              <div className="TeamCol">
                {" "}
                <img src={TE} className=""></img>
                <img src={TEB} className="my-3"></img>
              </div>
            </div>

            <div className="col-12 col-md-2 ">
              <div className="TeamCol">
                {" "}
                <img src={TF} className=""></img>
                <img src={TFB} className="my-3"></img>
              </div>
            </div>
          </div>
          <img
            src={OpenSea}
            className="my-5 w-50 pt-2"
            style={{ maxWidth: "300px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}
