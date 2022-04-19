export const endpoint = 'https://graphql.bitquery.io';    

export const GET_COIN_INFO=(baseQuery,qQuery,network,exchange)=>{
  let myQuery =`
{
  ethereum(network: ${network}) {
    dexTrades(
      options: {desc: ["block.height", "transaction.index"], limit: 1}
      exchangeName: {is: "${exchange}"},
      quoteCurrency: {is: "${qQuery}"},
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

export const GET_COIN_BARS =(baseQuery,qQuery,network,exchange,from)=>{
  let myQuery;
    myQuery =`
    {
      ethereum(network: ${network}) {
        dexTrades(
          options: {limit: 100000, asc: "timeInterval.hour"}
          date: {since: "2021-06-20T07:23:21.000Z"}
          baseCurrency: {is: "${baseQuery}"}
          quoteCurrency: {is: "${qQuery}"}
        ) {
          timeInterval {
            hour(count: 4)
          }
          baseCurrency {
            symbol
            address
          }
          baseAmount
          quoteCurrency {
            symbol
            address
          }
          quoteAmount
          trades: count
          quotePrice
          maximum_price: quotePrice(calculate: maximum)
          minimum_price: quotePrice(calculate: minimum)
          open_price: minimum(of: block, get: quote_price)
          close_price: maximum(of: block, get: quote_price)
        }
      }
    }
   `; 
  
  

 


   
return myQuery;
}

