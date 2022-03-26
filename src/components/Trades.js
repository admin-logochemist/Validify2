import React,{useState,useEffect} from 'react'
import '../css/trades.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import moment from "moment";
import { BscScan } from "@jpmonette/bscscan";
function Trades() {
    const[resf,setRes]=useState([]);
    const callApi=()=>{
        fetch('http://localhost:9000/users?currency=ETH/USDT').then((res)=>res.json().then(re=>{setRes(re)
    
    }))
    }

    useEffect(() => {
        callApi()
    }, [])

    const client = new BscScan({ apikey: "4M737ZIVF6RDFH1E4FMX7HBGWBV4ZVRJKI" });

    const balance =  client.accounts.getBalance({ address: "0x4e656459ed25bf986eea1196bc1b00665401645d" });
   
    const txlist = client.accounts.getTxList({ address: "0x4e656459ed25bf986eea1196bc1b00665401645d" });
        txlist.then((data)=>{
       
        setTrades(data)
        }
     )

    const [trades, setTrades] = useState([])
 
  return (
    <div className='table_trades'>
        {console.log("post",resf)}
            {/* {resf.map((post,key) =>{
            return(
                
                <div key={key} style={{display:'flex',flexDirection:'row'}}><p>{post.datetime}</p>
                <p style={{paddingRight:10}}>{post.side}</p>
                <p style={{paddingRight:10}}>{post.price}</p>
                <p style={{paddingRight:10}}>1.0</p>
                <p style={{paddingRight:10}}>{post.cost}</p>
                <p style={{paddingRight:10}}>{post.id}</p>
                </div>
        
        )
    })}
       */}
      
            <div className='flex_box_table'>
               <h3>Trades</h3>
            </div>
                     
                               
           
        <table>
            <thead>
                <th>Date</th>
                <th>Type</th>
                <th>Price USD</th>
                <th>Amount USD</th>
                <th>Total ETH</th>
                <th>Marker</th>
            </thead>
            <tbody>         
                {resf.slice(0,10).map((post,key) =>{
                return(
                    <tr key={key}>
                        <td>{post.datetime}</td>
                        <td>{post.side}</td>
                        <td>${post.price}</td>
                        <td>${post.amount}</td>
                        <td>{post.cost}</td>
                        <td>{post.id}</td>
                    </tr>
                    )
                })}
           </tbody>
        </table>        
    </div>
  )
}

export default Trades