export const endpoint = 'https://graphql.bitquery.io';    

export const GET_COIN_INFO=(baseQuery,qQuery,network,exchange)=>{
  let myQuery =`
{
  ethereum(network: ${network}) {
    dexTrades(
      options: {desc: ["block.height", "transaction.index"], limit: 1}
      exchangeName: {is: "${exchange}"},
      quoteCurrency: {is: "${qQuery}"}
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

export const GET_COIN_BARS =(baseQuery,qQuery,network,exchange)=>{
  let myQuery =`
 {
  ethereum(network: ${network}) {
    dexTrades(
      options: {asc: "timeInterval.minute" }
      date: {is: "2022-01-20T07:23:21.000Z" }
      exchangeName: {is: "${exchange}"}
      quoteCurrency: {is: "${qQuery}"}
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

