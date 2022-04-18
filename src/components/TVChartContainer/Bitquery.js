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

export const GET_COIN_BARS =(baseQuery,qQuery,network,exchange)=>{
  let myQuery;
  if(network==='ethereum'){
    myQuery =`
    {
     ethereum(network: ${network}) {
       dexTrades(
         options: {asc: "timeInterval.minute" }
         date: {since: "2021-06-20" till: "2022-04-18"}
         exchangeName: {is: "${exchange}"}
         quoteCurrency: {is: "${baseQuery}"}
         baseCurrency: {is: "${qQuery}"}
         
       ) {
         timeInterval {
           minute(count: 5, format: "%Y-%m-%dT%H:%M:%SZ")
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
  }else{
    console.log("bnb taiche");
    myQuery =`
    {
      ethereum(network: ${network}) {
        dexTrades(options: {limit: 100, asc: "timeInterval.minute"}, 
          date: {since:"2021-11-01"}
          exchangeName: {is: "${exchange}"}, 
          baseCurrency: {is: "${baseQuery}"}, 
          quoteCurrency: {is: "${qQuery}"}) {
          
          
          timeInterval {
            minute(count: 5)
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
                median_price: quotePrice(calculate: median)
    
          open_price: minimum(of: block get: quote_price)
          close_price: maximum(of: block get: quote_price)
      
        }
      }
    }
   
   `;
  }
  

 


   
return myQuery;
}

