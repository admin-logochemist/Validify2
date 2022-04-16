export const endpoint = 'https://graphql.bitquery.io';    

export const GET_COIN_INFO=(baseQuery)=>{
  let myQuery =`
{
  ethereum(network: ethereum) {
    dexTrades(
      options: {desc: ["block.height", "transaction.index"], limit: 1}
      exchangeName: {is: "Uniswap"},
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
      baseCurrency: {is: "${baseQuery}"}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      transaction {
        index
      }
      baseCurrency {
        name
        symbol
        decimals
      }
      quotePrice
    }
  }
}

`; 
return myQuery;
}

export const GET_COIN_BARS =(baseQuery)=>{
  let myQuery =`
 {
  ethereum(network: ethereum) {
    dexTrades(
      options: {asc: "timeInterval.minute" }
      date: {since: "2021-01-20T07:23:21.000Z"}
      exchangeName: {is: "Uniswap"}
      quoteCurrency: {is: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}
      baseCurrency: {is: "${baseQuery}"}
      tradeAmountUsd: {gt: 10}
    ) {
      timeInterval {
        minute(count: 1, format: "%Y-%m-%dT%H:%M:%SZ")
      }
      volume: quoteAmount
      high: quotePrice(calculate: maximum)
      low: quotePrice(calculate: minimum)
      open: minimum(of: block, get: quote_price)
      close: maximum(of: block, get: quote_price)
    }
  }
}

`; 
return myQuery;
}

