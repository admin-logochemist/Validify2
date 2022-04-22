/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import * as Bitquery from './Bitquery';

// const lastBarsCache = new Map();
const configurationData = {
    supported_resolutions: ['1', '5', '15', '30', '60', '120', '1D', '1W', '1M']
};

export default {
    // This method is used by the Charting Library to get a configuration of your datafeed 
    // (e.g. supported resolutions, exchanges and so on)
    onReady: (callback) => {
        console.log('[onReady]: Method called!!');
        setTimeout(() => callback(configurationData));
    },
    // This method is used by the library to retrieve information about a specific symbol 
    // (exchange, price scale, full symbol etc.).
    resolveSymbol: async(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
        let baseQuery = await localStorage.getItem('@baseQuery');
        let qQuery = await localStorage.getItem('@qQuery');
        let network = await localStorage.getItem('@network');
        let exchange = await localStorage.getItem('@exchange');

        console.log('[resolveSymbol]: Method called!!');
        const response = await axios.post(
            Bitquery.endpoint, {
                query: Bitquery.GET_COIN_INFO(baseQuery, qQuery, network, exchange),
                variables: {
                    "tokenAddress": symbolName
                },
            }, {
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": "BQYH5kJPfhPiJsmS36s6zasFiNkfgWbD",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                }
            }
        );
        // const coin = response.data.data.ethereum.dexTrades[0].baseCurrency; 
        // console.log(response.data.data.ethereum.dexTrades[0].quotePrice); 
        console.log(response.data.data.ethereum.dexTrades[0].baseCurrency);

        const coin = response.data.data.ethereum.dexTrades[0].baseCurrency;
        if (!coin) {
            onResolveErrorCallback();
        } else {
            const symbol = {
                    ticker: symbolName,
                    name: `${coin.symbol}/BNB`,
                    session: '24x7',
                    timezone: 'Etc/UTC',
                    minmov: 1,
                    pricescale: 1000000000,
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
    // This method is used by the charting library to get historical data for the symbol. 
    getBars: async(symbolInfo, resolution, periodParams, onHistoryCallback) => {
        let baseQuery = await localStorage.getItem('@baseQuery');
        let qQuery = await localStorage.getItem('@qQuery');
        let network = await localStorage.getItem('@network');
        let exchange = await localStorage.getItem('@exchange');
        try {
            
            const response2 = await axios.post(Bitquery.endpoint, {
                query: Bitquery.GET_COIN_BARS(baseQuery, qQuery, network, exchange, resolution),
            }, {
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": "BQYH5kJPfhPiJsmS36s6zasFiNkfgWbD",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                }
            })

            const bars = response2.data.data.ethereum.dexTrades.map(el => ({
                time: new Date(el.timeInterval.minute).getTime(), // date string in api response
                low: el.low,
                high: el.high,
                open: Number(el.open),
                close: Number(el.close),
                volume: el.volume
            }))

            if (bars.length) {
                onHistoryCallback(bars, { noData: false });
            } else {
                onHistoryCallback(bars, { noData: true });
            }

        } catch (err) {
            console.log({ err })
        }
    },
    subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeID, onResetCacheNeededCallback) => {},
    unsubscribeBars: (subscribeID) => {}
};