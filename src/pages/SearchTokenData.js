import React, { useState, useEffect } from "react";
import PriceTickers from "../components/PriceTickers";
import Header from "../components/Header";
import DashFooter from "../components/DashFooter";
import { TVChartContainer } from "../components/TVChartContainer";
// import { color } from "@mui/system";
import 'font-awesome/css/font-awesome.min.css'

import "../css/WhaleTrades.css";
import "../css/trades.css";
import "../css/SearchBar.css";
// import bitcoin_icon from "../images/bitcoin.png";
import Ethcoin_icon from "../images/eth.svg";
import bnbicon from "../images/bsc.png";
import avaicon from "../images/avalanche.png";
import polygon from "../images/polygon.svg";
import okc from "../images/okc.svg";
import fantom from "../images/fantom.png";
import arbitrum from "../images/arbitrum.png";
import metis from "../images/metis.png";
import heco from "../images/heco.svg";
import velas from "../images/velas.svg";
import aurora from "../images/aurora.svg";
import harmony from "../images/harmony.png";
import sushiswap from '../images/sushiswap.png'
import uniswap from '../images/uniswap.png'
import pancakeswap from '../images/pancakeswap.png'
import Apeswap from '../images/apeswap.svg'
import shibaswap from '../images/shibaswap.png'
import kyberswap from '../images/kyberswap.png'
import minty from '../images/minty.svg'
import cryptodefi from '../images/cryptodefi.png'
import justmoney from '../images/justmoney.svg'
import safemoon from '../images/safemoon.svg'
import swapr from '../images/swapr.svg'
import empiredex from '../images/empiredex.png'
import degen from '../images/degen.svg'
import dojo from '../images/dojo.svg'
import concave from '../images/concave.svg'
import mdex from '../images/mdex.png'
import wault from '../images/wault.png'
import sheepdex from '../images/sheepdex.png'
import bakery from '../images/bakery.svg'
import coinone from '../images/coinone.png'
import jetswap from '../images/jetswap.png'
import babyswap from '../images/babyswap.png'
import biswap from '../images/biswap.png'
import padswap from '../images/padswap.png'
import mochiswap from '../images/mochiswap.png'
import firebird from '../images/firebird.svg'
import justliquidity from '../images/justliquidity.png'
import shibanova from '../images/shibanova.png'
import acyfinance from '../images/acyfinance.svg'
import fsts from '../images/fst.png'
import niob from '../images/niob.svg'
import mars from '../images/mars.png'
import elkfinance from '../images/elkfinance.svg'
import hyperjump from '../images/hyperjump.png'
import knight from '../images/knight.svg'
import swapx from '../images/swapx.svg'
import traderjoe from '../images/traderjoe.png'
import lydiafinance from '../images/lydiafinance.png'
import pangolin from '../images/pangolin.png'

function SearchTokenData() {
  const [resd, setResd] = useState([]);
  const [search, setSearch] = useState();
  const [exchange, setExchange] = useState();
  const [qoute, setQoute] = useState();
  const [network, setNetwork] = useState();
  const [showResults, setShowResults] = useState()
  const [NexBoxResults, setNexBoxResults] = useState()
  const [BorderRadius, setBorderRadius] = useState()
  const [BorderRadiusBtn, setBorderRadiusBtn] = useState()
  const [CroxIconBtn, setCroxIconBtn] = useState()


  const [switchClassOne, setswitchClassOneToogled] = useState(false);
  const [switchClassTwo, setswitchClassTwoToogled] = useState(false);
  const [switchClassThree, setswitchClassThreeToogled] = useState(false);
  const [switchClassFour, setswitchClassFourToogled] = useState(false);
  const [switchClassFive, setswitchClassFiveToogled] = useState(false);
  const [switchClassSix, setswitchClassSixToogled] = useState(false);
  const [switchClassSeven, setswitchClassSevenToogled] = useState(false);
  const [switchClassEight, setswitchClassEightToogled] = useState(false);
  const [switchClassNine, setswitchClassNineToogled] = useState(false);
  const [switchClassTen, setswitchClassTenToogled] = useState(false);
  const [switchClassEleven, setswitchClassElevenToogled] = useState(false);

let btnIds = ["top_box_active","top_box_not_active"];
  const [switchBox, setswitchBox] = useState(false);

  useEffect(() => {
    callApi();
  }, [search]);

  const callApi = () => {
    if (search || exchange || network || qoute) {
      fetch(
        `https://validefi.global:8080/exchange?bcurrency=${search}&network=${network}&qcurrency=${qoute}`
      ).then((resd) =>
        resd.json().then((re) => {
          setResd(re);
        })
      );
    } else if (search === "") {
      console.log("no Search");
    }
  };
  
  let ShowBOx = showResults ?  "search_active" : "search_not_active"
  const handleClick = () => {
    // showResults ? setShowResults (false) : setShowResults(true);
    // setShowResults(showResults => !showResults);
    // BorderRadius ?  setBorderRadius (false) : setBorderRadius (true)
    // BorderRadiusBtn ?  setBorderRadiusBtn (false) : setBorderRadiusBtn (true)
    CroxIconBtn ?  setCroxIconBtn (false) : setCroxIconBtn (true)
  }
  const handleClickSvg = () => {
    // showResults ? setShowResults (false) : setShowResults(true);
    CroxIconBtn ?  setCroxIconBtn (false) : setCroxIconBtn (true)
    // BorderRadius ?  setBorderRadius (false) : setBorderRadius (true)
    // BorderRadiusBtn ?  setBorderRadiusBtn (false) : setBorderRadiusBtn (true)
  }

  const Ethcoin = () => {
    setExchange("Uniswap");
    setNetwork("ethereum");
    setQoute("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
    switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(true);
    // NexBoxResults ? setNexBoxResults(false) : setNexBoxResults(true);
    switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(false);
    switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(false);
    switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(false);
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(false);
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(false);
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(false);
    switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(false);
    switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(false);
    switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(false);
    switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(false);
  };
  const BNBcoin = () => {
    setExchange("Pancake v2");
    setNetwork("bsc");
    setQoute("0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c");


    switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(true);
    switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(false);
    switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(false);
    switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(false);
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(false);
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(false);
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(false);
    switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(false);
    switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(false);
    switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(false);
    switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(false);

  };
  const AVAcoin = () => {
    setExchange("Partyswap");
    setNetwork("avalanche");
    setQoute("0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7");
    switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(true);

    switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(false);
    switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(false);
    switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(false);
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(false);
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(false);
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(false);
    switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(false);
    switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(false);
    switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(false);
    switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(false);
  };
  const polygoncoin = () => {
    switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(true);

    switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(false);
    switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(false);
    switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(false);
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(false);
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(false);
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(false);
    switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(false);
    switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(false);
    switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(false);
    switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(false);
  };
  const okccoin = () => {
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(true);
  };
  const fantomcoin = () => {
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(true);
  };
  const arbitrumcoin = () => {
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(true);

    
  };
  const metiscoin = () => {
    switchClassEight
      ? setswitchClassEightToogled(false)
      : setswitchClassEightToogled(true);
  };
  const hecocoin = () => {
    switchClassNine
      ? setswitchClassNineToogled(false)
      : setswitchClassNineToogled(true);
  };
  const velascoin = () => {
    switchClassTen
      ? setswitchClassTenToogled(false)
      : setswitchClassTenToogled(true);
  };
  const auroracoin = () => {
    switchClassEleven
      ? setswitchClassElevenToogled(false)
      : setswitchClassElevenToogled(true);
  };


  const Results = () => (
    <div className="search-results">
      <div className="scroll_box">
        <li
          className="top_box"
          onClick={Ethcoin}
          id={switchClassOne ? "top_box_active" : "top_box_not_active"}
        >
          <img src={Ethcoin_icon} />
          <span>ETHEREUM</span>
        </li>
        {console.log(exchange)}
        <li
          className="top_box"
          onClick={BNBcoin}
          id={switchClassTwo ? "top_box_active" : "top_box_not_active"}
        >
          <img src={bnbicon} />
          <span>BNB</span>
        </li>
        <li
          className="top_box"
          onClick={AVAcoin}
          id={switchClassThree ? "top_box_active" : "top_box_not_active"}
        >
          <img src={avaicon} />
          <span>AVALANCE</span>
        </li>
        <li
          className="top_box"
          onClick={polygoncoin}
          id={switchClassFour ? "top_box_active" : "top_box_not_active"}
        >
          <img src={polygon} />
          <span>POLYGON</span>
        </li>
        <li
          className="top_box"
          onClick={okccoin}
          id={switchClassFive ? "top_box_active" : "top_box_not_active"}
        >
          <img src={okc} />
          <span>OKC</span>
        </li>
        <li
          className="top_box"
          onClick={fantomcoin}
          id={switchClassSix ? "top_box_active" : "top_box_not_active"}
        >
          <img src={fantom} />
          <span>FANTOM</span>
        </li>
        <li
          className="top_box"
          onClick={arbitrumcoin}
          id={switchClassSeven ? "top_box_active" : "top_box_not_active"}
        >
          <img src={arbitrum} />
          <span>ARBITRUM</span>
        </li>
        <li
          className="top_box"
          onClick={metiscoin}
          id={switchClassEight ? "top_box_active" : "top_box_not_active"}
        >
          <img src={metis} />
          <span>METIS</span>
        </li>
        <li
          className="top_box"
          onClick={hecocoin}
          id={switchClassNine ? "top_box_active" : "top_box_not_active"}
        >
          <img src={heco} />
          <span>HECO</span>
        </li>
        <li
          className="top_box"
          onClick={velascoin}
          id={switchClassTen ? "top_box_active" : "top_box_not_active"}
        >
          <img src={velas} />
          <span>VELAS</span>
        </li>
        <li
          className="top_box"
          onClick={auroracoin}
          id={switchClassEleven ? "top_box_active" : "top_box_not_active"}
        >
          <img src={aurora} />
          <span>AURORA</span>
        </li>
      </div>
    </div>
  );



  const EthSwap = () => (
    <div className="">
       <div className="check_box_width">
         <div className="check_box_scroll_box">
            <label class="container-radio">
                {/*<input type="radio" name="radio"  />*/}
                All Exchanges
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                 {/*<input type="radio" name="radio"  />*/}
                <img src={sushiswap} />
                Sushiswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
             {/*<input type="radio" name="radio"  />*/}
            <img src={uniswap} />
            Uniswap
            <span class="checkmark"></span>
            </label>
            
            <label class="container-radio">
            {/*<input type="radio" name="radio"  />*/}
              <img src={shibaswap} />
              Shibaswap
              <span class="checkmark"></span>
           </label>

           <label class="container-radio">
           {/*<input type="radio" name="radio"  />*/}
             <img src={kyberswap} />
             Kyberswap
             <span class="checkmark"></span>
          </label>


                <label class="container-radio">
                {/*<input type="radio" name="radio"  />*/}
                  <img src={minty} />
                  Minty
                  <span class="checkmark"></span>
              </label>

              <label class="container-radio">
              {/*<input type="radio" name="radio"  />*/}
                <img src={cryptodefi} />
                Cryptodefi
                <span class="checkmark"></span>
              </label>


              <label class="container-radio">
              {/*<input type="radio" name="radio"  />*/}
                <img src={justmoney} />
                Justmoney
                <span class="checkmark"></span>
            </label>


            <label class="container-radio">
            {/*<input type="radio" name="radio"  />*/}
              <img src={safemoon} />
              Safemoon
              <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio"  />*/}
              <img src={swapr} />
              Swapr
              <span class="checkmark"></span>
          </label>


            <label class="container-radio">
            {/*<input type="radio" name="radio"  />*/}
              <img src={empiredex} />
              Emiredex
              <span class="checkmark"></span>
            </label>

          <label class="container-radio">
          {/*<input type="radio" name="radio"  />*/}
            <img src={degen} />
            Degen
            <span class="checkmark"></span>
        </label>


        <label class="container-radio">
        {/*<input type="radio" name="radio"  />*/}
          <img src={dojo} />
          Dojo
          <span class="checkmark"></span>
      </label>

      <label class="container-radio">
      {/*<input type="radio" name="radio"  />*/}
        <img src={concave} />
        Concave
        <span class="checkmark"></span>
    </label>

         </div>
       </div>
    </div>
  );
  
  const BNBSwap = () => (
    <div className="">
       <div className="check_box_width">
         <div className="check_box_scroll_box">
            <label class="container-radio">
                {/*<input type="radio" name="radio" />*/}
                All Exchanges
                <span class="checkmark"></span>
                </label>

            <label class="container-radio">
               {/*<input type="radio" name="radio" />*/}
                <img src={Apeswap} />
                Apeswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={pancakeswap} />
            Pancakeswap
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={mdex} />
            Mdex
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={empiredex} />
            Empiredex
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={wault} />
            Wault
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={sheepdex} />
            Sheepdex
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={bakery} />
            Bakery
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={sushiswap} />
            Sushiswap
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={coinone} />
            Coinone
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={jetswap} />
            Jetswap
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={babyswap} />
            BabySwap
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={kyberswap} />
            Kyberswap
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={biswap} />
            Biswap
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={padswap} />
            Padswap
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={mochiswap} />
            Mochiswap
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={firebird} />
            Firebird
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={justliquidity} />
            Coming Soon
            <span class="checkmark"></span>
            </label>


            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={shibanova} />
            Coming Soon
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={acyfinance} />
             Coming Soon
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={fsts} />
            Coming Soon
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={niob} />
            Coming Soon
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={mars} />
             Coming Soon
            <span class="checkmark"></span>
            </label>


            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={safemoon} />
            Coming Soon
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={elkfinance} />
            Coming Soon
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={hyperjump} />
            Coming Soon
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={knight} />
            Coming Soon
            <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio" />*/}
            <img src={swapx} />
            Coming Soon
            <span class="checkmark"></span>
            </label>
         </div>
       </div>
    </div>
  );

  const AVASwap = () => (
    <div className="">
       <div className="check_box_width">
         <div className="check_box_scroll_box">
            <label class="container-radio">
                {/*<input type="radio" name="radio"  />*/}
                All Exchanges
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                 {/*<input type="radio" name="radio"  />*/}
                <img src={traderjoe} />
                Coming Soon
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
             {/*<input type="radio" name="radio"  />*/}
            <img src={lydiafinance} />
            Coming Soon
            <span class="checkmark"></span>
            </label>
            
            <label class="container-radio">
            {/*<input type="radio" name="radio"  />*/}
              <img src={shibaswap} />
              Coming Soon
              <span class="checkmark"></span>
           </label>

           <label class="container-radio">
           {/*<input type="radio" name="radio"  />*/}
             <img src={kyberswap} />
             Coming Soon
             <span class="checkmark"></span>
          </label>


                <label class="container-radio">
                {/*<input type="radio" name="radio"  />*/}
                  <img src={minty} />
                  Coming Soon
                  <span class="checkmark"></span>
              </label>

              <label class="container-radio">
              {/*<input type="radio" name="radio"  />*/}
                <img src={cryptodefi} />
                Coming Soon
                <span class="checkmark"></span>
              </label>


              <label class="container-radio">
              {/*<input type="radio" name="radio"  />*/}
                <img src={justmoney} />
                Coming Soon
                <span class="checkmark"></span>
            </label>


            <label class="container-radio">
            {/*<input type="radio" name="radio"  />*/}
              <img src={safemoon} />
              Coming Soon
              <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            {/*<input type="radio" name="radio"  />*/}
              <img src={swapr} />
              Coming Soon
              <span class="checkmark"></span>
          </label>


            <label class="container-radio">
            {/*<input type="radio" name="radio"  />*/}
              <img src={empiredex} />
              Coming Soon
              <span class="checkmark"></span>
            </label>

          <label class="container-radio">
          {/*<input type="radio" name="radio"  />*/}
            <img src={degen} />
            Coming Soon
            <span class="checkmark"></span>
        </label>


        <label class="container-radio">
        {/*<input type="radio" name="radio"  />*/}
          <img src={dojo} />
          Coming Soon
          <span class="checkmark"></span>
      </label>

      <label class="container-radio">
      {/*<input type="radio" name="radio"  />*/}
        <img src={concave} />
        Coming Soon
        <span class="checkmark"></span>
    </label>

         </div>
       </div>
    </div>
  );
  return (
    <>
      <Header />
      <section className="bannerAdds_whale_trade"></section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mt-3">
            <PriceTickers />
          </div>
        </div>
        <div className="col-12">
          <div className="table_trades">
            <div className="Trades_search">
            <div className="search_max">
              <div>
                    <input type="text" onClick={handleClick} value={search}  autoComplete="off"
                    onChange={(e) => {
                      setSearch(e.target.value);
                      localStorage.setItem("@baseQuery", e.target.value);
                      localStorage.setItem("@qQuery", qoute);
                      localStorage.setItem("@network", network);
                      localStorage.setItem("@exchange", exchange);
                    }}
                    placeholder="Search Token Address"
                    id={BorderRadius ?  "input_active" : null}
                  />
                  <svg id={CroxIconBtn ?  "svg_active" : "svg_not_active"} onClick={() => setSearch(() => "")}
                      role="img" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" class="svg-inline--fa fa-times fa-w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                      <path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z">
                      </path>
                  </svg>
              </div>
           {/* <button
              type="submit"
              onClick={() => {
                callApi();
              }}
              id={BorderRadiusBtn ?  "btn_active" : "btn_not_active"}
            >
            Search
            </button>*/}
            </div>

              <div class="next_search">
                  <Results />
              </div>
              <div className="" id={switchClassOne ?  "search_active" : "search_not_active"}>
                 <EthSwap />
              </div>
              <div className="" id={switchClassTwo ?  "search_active" : "search_not_active"}>
                 <BNBSwap />
              </div>
              <div className="" id={switchClassThree ?  "search_active" : "search_not_active"}>
                    <AVASwap />
                </div>
              </div> 

            {/* <Searchbar  data={SearchData}/> */}
            <div className="icons_info">
              {resd.slice(0, 1).map((post, key) => {
                if(network==='bsc'){
                return (
                  <div className="img_box">
                    <img src={bnbicon} />
                    <li className="wrapper_name">
                      {post.quoteCurrency.symbol} / {post.baseCurrency.symbol}{" "}
                    </li>
                  </div>
                )
                }else if(network==='ethereum'){
                  return(
                  <div className="img_box">
                    <img src={Ethcoin_icon} />
                    <li className="wrapper_name">
                      {post.quoteCurrency.symbol} / {post.baseCurrency.symbol}{" "}
                    </li>
                  </div>
                  )} else{
                    return(
                      <div className="img_box">
                      <img src={avaicon} />
                      <li className="wrapper_name">
                        {post.quoteCurrency.symbol} / {post.baseCurrency.symbol}{" "}
                      </li>
                    </div>
                    )
                  }
              })}
              {resd.slice(0, 1).map((post, key) => {
                if(network==='bsc'){
                return (
                  <div className="coin_names">
                  <li className="value_names">
                    <li>${((post?.quotePrice)*408.16).toPrecision(5)}</li>
                  </li>

                  <span>BNB {(post.quotePrice).toPrecision(5)}</span>


                </div>
                )
                }else if(network==='ethereum'){
                  return(
                    <div className="coin_names">
                    <li className="value_names">
                      <li>${((post?.quotePrice)*2937.69).toPrecision(5)}</li>
                    </li>

                    <span>ETH {(post.quotePrice).toPrecision(5)}</span>


                  </div>
                  )} else{
                    return(
                      <div className="coin_names">
                      <li className="value_names">
                        <li>${((post?.quotePrice)*73.05).toPrecision(5)}</li>
                      </li>

                      <span>AVAX {(post.quotePrice).toPrecision(5)}</span>


                    </div>
                    )
                  }
              })}
            </div>
            {resd.slice(0, 1).map((post, key) => {
              return (
                <div className="li_pairs">
                  <li className="li_div">
                    {post.baseCurrency.name}
                    <li className="inner_li">
                      Token:{post.baseCurrency.address}
                    </li>
                    <li className="inner_li">
                      Pair: {post.quoteCurrency.address}
                    </li>
                  </li>
                </div>
              );
            })}
            {console.log("post", resd)}
            <div id="tv_chart_container">
              <TVChartContainer
                baseQuery={search}
                network={network}
                qQuery={qoute}
                exchange={exchange}
              />
            </div>
            <div className="flex_box_table">
              <h3>Trades</h3>
              
              {/* <div className='btns_lengends'>
                    <button className='buy'>Buy</button>
                    <button className='sell'>Sale</button>
               </div> */}
            </div>

            {/* ++_-_++  TRADES TABLE DATA  ++_-_++ */}

            <table>
            {resd.slice(0, 1).map((post, key) => {
                  if (network === 'bsc') {
                    return (
                      <thead>  
                      <th>Date</th>
                      <th>Type</th>
                      <th>PRICE USD</th>
                      <th className="transform">Amount WBNB</th>
                      <th className="transform">Price BNB</th>
                      <th className="transform">TOTAL {post.baseCurrency.symbol}</th>
                      <th>Maker</th>
                    </thead>
                    
            
              );
            } else if(network==='etherum') {  
              return(      
               <thead>  
              <th>Date</th>
              <th>Type</th>
              <th>PRICE USD</th>
              <th className="transform">Amount WETH</th>
              <th className="transform">Price ETH</th>
              <th className="transform">TOTAL {post.baseCurrency.symbol}</th>
              <th>Maker</th>
            </thead>
            
            )} else {
              return(
              <thead>  
              <th>Date</th>
              <th>Type</th>
              <th>PRICE USD</th>
              <th className="transform">Amount AVAX</th>
              <th className="transform">Price AVAX</th>
              <th className="transform">TOTAL {post.baseCurrency.symbol}</th>
              <th>Maker</th>
            </thead>
              )
            }
          
          })}
              <tbody>
                {resd.slice(0, 100).map((post, key) => {
                  if (post.side == "BUY") {
                    return (
                      <tr key={key}>
                        <td className="date_table">
                        {post.block.timestamp.time}
                        </td>
                        <td className="red">SELL</td>
                        <td className="">{(post.quotePrice)*408.16}</td>
                        <td className="truncate">{post.quoteAmount}</td>
                        <td className="truncate">{post.quotePrice}</td>
                        <td className="truncate">{post.baseAmount}</td>
                        <td className="truncate maker_table">
                          {post.transaction.txFrom.address.slice(0, -2)}
                        </td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr key={key}>
                        <td className="date_table">
                          {post.block.timestamp.time}
                        </td>
                        <td className="green">BUY</td>
                        <td className="">{(post.quotePrice)*408.16}</td>
                        <td className="truncate">{post.quoteAmount}</td>
                        <td className="truncate">{post.quotePrice}</td>
                        <td className="truncate">{post.baseAmount}</td>
                        <td className="truncate maker_table">
                          {post.transaction.txFrom.address.slice(0, -2)}
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <DashFooter />
    </>
  );
}
export default SearchTokenData;
