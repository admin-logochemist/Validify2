import React,{useState} from 'react'
import '../css/trades.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import moment from "moment";
import { BscScan } from "@jpmonette/bscscan";
function Trades() {

    const client = new BscScan({ apikey: "4M737ZIVF6RDFH1E4FMX7HBGWBV4ZVRJKI" });

    const balance =  client.accounts.getBalance({ address: "0x4e656459ed25bf986eea1196bc1b00665401645d" });
    console.log("balance",balance)
    const txlist = client.accounts.getTxList({ address: "0x4e656459ed25bf986eea1196bc1b00665401645d" });
        txlist.then((data)=>{
        console.log( "ham",data);
        setTrades(data)
        }
     )

    const [trades, setTrades] = useState([])
 
  return (
    <div className='table_trades'>
        {console.log("trades",trades)}
      
            <div className='flex_box_table'>
               <h3>Trades</h3>
            </div>
                     
                               
           
        <table>
            <thead>
                <th>Date</th>
                <th>To</th>
                <th>From</th>
                <th>Gass Used</th>
                <th>Total Price</th>
            </thead>
            <tbody>         
                {trades.slice(0,10).map((post,key) =>{
                return(
                    <tr key={key}>
                        <td>{moment.unix(post?.timeStamp).format("MMMM Do YYYY, h:mma")}</td>
                        <td>{post?.to.slice(0, 17)}</td>
                        <td>{post?.from.slice(0, 17)}</td>
                        <td>${post?.gas}</td>
                        <td>${post?.gasPrice.slice(0,-5)}</td>
                    </tr>
                    )
                })}
           </tbody>
        </table>        
    </div>
  )
}

export default Trades