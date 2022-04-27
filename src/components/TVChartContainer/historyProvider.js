/* eslint-disable import/no-anonymous-default-export */
import * as Bitquery from './Bitquery';
import axios from "axios";
import moment from 'moment';

const api_root = "https://min-api.cryptocompare.com";
const history = {};

export default {
  history: history,

  getBars: async function (symbolInfo, resolution, periodParams, gg) {
      // console.log(periodParams);
    var split_symbol = symbolInfo.name.split(/[:/]/);

    // console.log('symbolInfo:', symbolInfo);
    const url =
      resolution === "D"
        ? "/data/histoday"
        : resolution >= 60
        ? "/data/histohour"
        : "/data/histominute";
    const qs = {
      e: split_symbol[0],
      fsym: split_symbol[1],
      tsym: split_symbol[2],
      toTs: periodParams.to ? periodParams.to : "",
      limit: 2000
      // aggregate: 1//resolution
    };
    

    let dateFrom = moment(periodParams.from*1000).toISOString();
    let dateTill = moment(periodParams.to*1000).toISOString();

    return await axios.post(Bitquery.endpoint, {
        query: Bitquery.GET_COIN_BARS(gg.baseQuery, gg.qQuery, gg.network, gg.exchange, resolution, dateFrom, dateTill),

        
    }, {
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "BQYH5kJPfhPiJsmS36s6zasFiNkfgWbD",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        }
    }).then(res => {
     

        if (res.data.data.ethereum.dexTrades && res.status<307) {
       
        var bars = res.data.data.ethereum.dexTrades.map((el) => {
            return {
                time: new Date(el.timeInterval.minute).getTime(), // date string in api response
                low: el.low,
                high: el.high,
                open: Number(el.open),
                close: Number(el.close),
                volume: el.volume,
            };
        });
        if (periodParams.firstDataRequest) {
            var lastBar = bars[bars.length - 1];
            history[symbolInfo.name] = { lastBar: lastBar };
        }
        return bars;
        } else {
        return [];
        }
    })

  }
};
