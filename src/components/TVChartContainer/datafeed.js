/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'; 
import * as Bitquery from './Bitquery';
import { useEffect } from 'react';

const lastBarsCache = new Map(); 
const configurationData = {
 
    supported_resolutions: ['1','5','15','30', '60','1D', '1W', '1M']
}; 

export default {
   
    // This method is used by the Charting Library to get a configuration of your datafeed 
    // (e.g. supported resolutions, exchanges and so on)
    onReady: (callback) => {
        console.log('[onReady]: Method called!!');
        setTimeout(() => callback(configurationData));
     
    },
    resolveSymbol: async (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) =>{
         
        console.log('[resolveSymbol]: Method called!!'); 
        let baseQuery = await localStorage.getItem('@baseQuery')
        console.log("BaseQuery",baseQuery)
        const response = await fetch(
            Bitquery.endpoint, {
                method: "POST",
                variables: {
                    "tokenAddress": symbolName
                },
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": `BQYH5kJPfhPiJsmS36s6zasFiNkfgWbD`,
                    "Access-Control-Allow-Origin" : "*", 
                    "Access-Control-Allow-Credentials" : true,
                    'Authorization' : 'Bearer <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>'
                },
                //body: JSON.stringify({ query: Bitquery.GET_COIN_INFO2(baseQuery) }) // ({ QUERY })
                 body: JSON.stringify({ query: Bitquery.GET_COIN_INFO(baseQuery) }) // ({ QUERY })
            
            }
        )
        .then((response) => {
            if (response.status >= 400) {
              throw new Error("Error fetching data");
            } else {
              return response.json();
            }
          })
          .then((data) => window.mydata=data.data.ethereum.dexTrades[0].baseCurrency);
        // const coin = response.data.data.ethereum.dexTrades[0].baseCurrency; 
        // console.log(response.data.data.ethereum.dexTrades[0].quotePrice); 
        //console.log(response.data.data.ethereum.dexTrades[0].baseCurrency); 
    console.log("query Posted")
        const coin = window.mydata; 
        if(!coin){
            onResolveErrorCallback(); 
        }else{
            const symbol = {
                ticker: symbolName,
                name: `${coin.symbol}/WETH`,
                session: '24x7',
                timezone: 'Etc/UTC',
                minmov: 1,
                pricescale: 10000000,
                has_intraday: true,
                intraday_multipliers: ['1', '5', '15', '30', '60'],
                has_empty_bars: true,
                has_weekly_and_monthly: false,
                supported_resolutions: configurationData.supported_resolutions, 
                volume_precision: 1,
                data_status: 'streaming',
            }
            //onSymbolResolvedCallback(symbol);
            onSymbolResolvedCallback(symbol) 
        }
    }, 
    getBars: async(symbolInfo, resolution,periodParams, onHistoryCallback, onErrorCallback, first,) =>{
        const { from, to, firstDataRequest } = periodParams;
        console.log('[getBars]: Method call', symbolInfo, resolution, from, to);
        let baseQuery = await localStorage.getItem('@baseQuery')
        try{
            if (resolution==='1m') {
                resolution = 1400;
            }
            const response2 = await fetch(Bitquery.endpoint, {
                method: "POST",
                variables: {
                    "from": new Date("2022-01-11T07:23:21.000Z").toISOString(),
                    "to": new Date("2022-04-13T07:23:21.000Z").toISOString(),
                    "interval": Number(resolution),
                    "tokenAddress": symbolInfo.ticker
                },
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": "BQYH5kJPfhPiJsmS36s6zasFiNkfgWbD",
                    "Access-Control-Allow-Origin" : "*", 
                    "Access-Control-Allow-Credentials" : true,
                },
                body: JSON.stringify({ query: Bitquery.GET_COIN_BARS(baseQuery) })
            
            })
            .then((response) => {
                if (response.status >= 304)  {
                  throw new Error("Error fetching data");
                } else {
                  return response.json();
                
                }
                
              })
              
              .then((data) => window.bars=data.data.ethereum.dexTrades.map(el => ({
                time: new Date(el.timeInterval.minute).getTime(), // date string in api response
                low: el.low,
                high: el.high,
                open: Number(el.open),
                close: Number(el.close),
                volume: el.volume
            }))
           
            )
          if (firstDataRequest) {
				lastBarsCache.set(symbolInfo.full_name, {
					...window.bars[window.bars.length - 1],
				});
			}
			
			onHistoryCallback(window.bars, {
				noData: false,
			});
        } catch(err){
            console.log({err})
            // onErrorCallback(err)
        }
    },
subscribeBars: (
    symbolInfo,
    resolution,
    onRealtimeCallback,
    subscribeUID,
    onResetCacheNeededCallback
  ) => {
    console.log(
      "[subscribeBars]: Method call with subscribeUID:",
      subscribeUID
    );
  },
  unsubscribeBars: (subscriberUID) => {
    console.log(
      "[unsubscribeBars]: Method call with subscriberUID:",
      subscriberUID
    );
  },

}