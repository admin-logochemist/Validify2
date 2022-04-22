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
// import harmony from "../images/harmony.png";

function SearchTokenData() {
  const [resd, setResd] = useState([]);
  const [search, setSearch] = useState();
  const [exchange, setExchange] = useState();
  const [qoute, setQoute] = useState();
  const [network, setNetwork] = useState();
  const [showResults, setShowResults] = useState()
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

  useEffect(() => {
    callApi();
  }, [search]);

  const callApi = () => {
    if (search || exchange || network || qoute) {
      fetch(
        `https://validefi.global:8080/exchange?bcurrency=${search}&ex=${exchange}&network=${network}&qcurrency=${qoute}`
      ).then((resd) =>
        resd.json().then((re) => {
          setResd(re);
        })
      );
    } else if (search === "") {
      console.log("no Search");
    }
  };

  const handleClick = () => {
    showResults ? setShowResults (false) : setShowResults(true);
    BorderRadius ?  setBorderRadius (false) : setBorderRadius (true)
    BorderRadiusBtn ?  setBorderRadiusBtn (false) : setBorderRadiusBtn (true)
    CroxIconBtn ?  setCroxIconBtn (false) : setCroxIconBtn (true)
  }
  const handleClickSvg = () => {
    showResults ? setShowResults (false) : setShowResults(true);
    CroxIconBtn ?  setCroxIconBtn (false) : setCroxIconBtn (true)
    BorderRadius ?  setBorderRadius (false) : setBorderRadius (true)
    BorderRadiusBtn ?  setBorderRadiusBtn (false) : setBorderRadiusBtn (true)
  }

  const Ethcoin = () => {
    setExchange("Uniswap");
    setNetwork("ethereum");
    setQoute("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
    switchClassOne
      ? setswitchClassOneToogled(false)
      : setswitchClassOneToogled(true);
  };
  const BNBcoin = () => {
    setExchange("Pancake v2");
    setNetwork("bsc");
    setQoute("0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c");
    switchClassTwo
      ? setswitchClassTwoToogled(false)
      : setswitchClassTwoToogled(true);
  };
  const AVAcoin = () => {
    setExchange("Partyswap");
    setNetwork("avalanche");
    setQoute("0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7");
    switchClassThree
      ? setswitchClassThreeToogled(false)
      : setswitchClassThreeToogled(true);
  };
  const polygoncoin = () => {
    switchClassFour
      ? setswitchClassFourToogled(false)
      : setswitchClassFourToogled(true);
  };
  const okccoin = () => {
    switchClassFive
      ? setswitchClassFiveToogled(false)
      : setswitchClassFiveToogled(true);
  };
  const fantomcoin = () => {
    switchClassSix
      ? setswitchClassSixToogled(false)
      : setswitchClassSixToogled(true);
  };
  const arbitrumcoin = () => {
    switchClassSeven
      ? setswitchClassSevenToogled(false)
      : setswitchClassSevenToogled(true);
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
                    <input type="text" onClick={handleClick} autoComplete="off"
                    onChange={(e) => {
                      setSearch(e.target.value);
                      localStorage.setItem("@baseQuery", e.target.value);
                      localStorage.setItem("@qQuery", qoute);
                      localStorage.setItem("@network", network);
                      localStorage.setItem("@exchange", exchange);
                    }}
                    placeholder="Search Token Address"
                    id={BorderRadius ?  "input_active" : "input_not_active"}
                  />
                  <svg id={CroxIconBtn ?  "svg_active" : "svg_not_active"} onClick={handleClickSvg}
                      role="img" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" class="svg-inline--fa fa-times fa-w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                      <path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z">
                      </path>
                  </svg>
              </div>
            <button
              type="submit"
              onClick={() => {
                callApi();
              }}
              id={BorderRadiusBtn ?  "btn_active" : "btn_not_active"}
            >
            Search
          </button>
            </div>

              <div class="next_search"  id={showResults ?  "search_active" : "search_not_active"}>
                  { /* showResults ? <Results /> : null */}
                  <Results />
              </div>
            </div>

            {/* <Searchbar  data={SearchData}/> */}
            <div className="icons_info">
              {resd.slice(0, 1).map((post, key) => {
                return (
                  <div className="img_box">
                    <img src={Ethcoin_icon} />
                    <li className="wrapper_name">
                      {post.quoteCurrency.symbol} / {post.baseCurrency.symbol}{" "}
                    </li>
                  </div>
                );
              })}
              {resd.slice(0, 1).map((post, key) => {
                return (
                  <div className="coin_names">
                    <li className="value_names">
                      <li>{post.quoteAmount}</li>
                    </li>
                    <span>BNB {post.quotePrice}</span>
                  </div>
                );
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
              <thead>
                <th>Date</th>
                <th>Type</th>
                <th>PRICE USDT</th>
                <th className="transform">Price BNB</th>
                <th className="transform">Amount WBNB</th>
                <th className="transform">TOTAL BNB</th>
                <th>Maker</th>
              </thead>
              <tbody>
                {resd.slice(0, 100).map((post, key) => {
                  if (post.side == "BUY") {
                    return (
                      <tr key={key}>
                        <td className="date_table">
                          {post.block.timestamp.iso8601
                            .replace("T", "..")
                            .slice(0, -4)}
                        </td>
                        <td className="green">{post.side}</td>
                        <td className="">{post.baseAmount}</td>
                        <td className="truncate">{post.quoteAmount}</td>
                        <td className="truncate">{post.quotePrice}</td>
                        <td className="truncate">{post.baseAmount}</td>
                        <td className="truncate maker_table">
                          {post.maker.address.slice(0, -2)}
                        </td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr key={key}>
                        <td className="date_table">
                          {post.block.timestamp.iso8601
                            .replace("T", "..")
                            .slice(0, -4)}
                        </td>
                        <td className="red">{post.side}</td>
                        <td className="">{post.baseAmount}</td>
                        <td className="truncate">{post.quoteAmount}</td>
                        <td className="truncate">{post.quotePrice}</td>
                        <td className="truncate">{post.baseAmount}</td>
                        <td className="truncate maker_table">
                          {post.maker.address.slice(0, -2)}
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
