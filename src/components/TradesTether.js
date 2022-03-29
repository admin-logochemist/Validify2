import React,{useState,useEffect} from 'react'
import '../css/trades.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BscScan } from "@jpmonette/bscscan";
function TradesTether() {
    const[resf,setRes]=useState([]);
    const callApi=()=>{
        fetch('http://localhost:9000/users?currency=DAI/USDT').then((res)=>res.json().then(re=>{setRes(re)
    
    }))
    }

    useEffect(() => {
        callApi()
    }, [])

    // const client = new BscScan({ apikey: "4M737ZIVF6RDFH1E4FMX7HBGWBV4ZVRJKI" });

    // const balance =  client.accounts.getBalance({ address: "0x4e656459ed25bf986eea1196bc1b00665401645d" });
   
    // const txlist = client.accounts.getTxList({ address: "0x4e656459ed25bf986eea1196bc1b00665401645d" });
    //     txlist.then((data)=>{
       
    //     setTrades(data)
    //     }
    //  )

    // const [trades, setTrades] = useState([])
 
  return (
    <div className='table_trades'>
        {console.log("post",resf)}      
            <div className='flex_box_table'>
               <h3>Trades</h3>
            </div>

            {/* ++_-_++  TRADES TABLE DATA  ++_-_++ */}
            <table>
                <thead>
                <th>Pair</th>
                    <th>Date</th>
                    <th>Type</th>           
                    <th className='transform'>Price USD</th>
                    <th className='transform'>Amount USD</th>
                    <th className='transform'>Total BTC</th>
                    <th>Maker</th>
                </thead>
                <tbody>         
                    {resf.slice(0,10).map((post,key) =>{
                    return(
                        <tr key={key}>
                            <td>{post.symbol}</td>
                            <td className='date_table'>{(post.datetime).replace('T','..').slice(0, -5)}</td>
                            <td>{post.side}</td>                  
                            <td>${post.price}</td>
                            <td>${post.amount}</td>
                            <td>{post.cost}</td>
                            <td className='maker_table'>{post.id}</td>
                        </tr>
                        )
                    })}
            </tbody>
            </table>              
    </div>
  )
}

export default TradesTether