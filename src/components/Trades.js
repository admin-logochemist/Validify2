import React from 'react'
import '../css/trades.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BscScan } from "@jpmonette/bscscan";
function Trades() {
    const client = new BscScan({ apikey: "4M737ZIVF6RDFH1E4FMX7HBGWBV4ZVRJKI" });
    const balance =  client.accounts.getBalance({ address: "0x4e656459ed25bf986eea1196bc1b00665401645d" });
    console.log("balance",balance)
    const txlist = client.accounts.getTxList({ address: "0x946669fC17a7Fc36f36e3cAa8Cd9e67dB262c5F9" });
    txlist.then((data)=>
        console.log( "ham",data))
 
  return (
    <div className='table_trades mt-5 mb-3'>
            <div className='flex_box_table'>
               <h3>Trades</h3>
               <button className='buy_btn'>Buy</button>
               <button className='sale_btn'>Sale</button>
            </div>
        <table>
            <thead>
                <th>Date</th>
                <th>To</th>
                <th>Type</th>
                <th>From</th>
                <th>Gass Used</th>
                <th>Total Price</th>
            </thead>
            <tbody>
          
                <tr>
                    <td>13-Jan</td>
                    <td>USDT</td>
                    <td className='buy'>Buy</td>
                    <td>$345.87</td>
                    <td>6014.54</td>
                    <td>$1.004</td>
                </tr>
                <tr>
                    <td>13-Jan</td>
                    <td>USDT</td>
                    <td className='buy'>Buy</td>
                    <td>$345.87</td>
                    <td>6014.54</td>
                    <td>$1.004</td>
                </tr>
                <tr>
                    <td>13-Jan</td>
                    <td>USDT</td>
                    <td className='buy'>Buy</td>
                    <td>$345.87</td>
                    <td>6014.54</td>
                    <td>$1.004</td>
                </tr>
                <tr>
                    <td>13-Jan</td>
                    <td>USDT</td>
                    <td className='buy'>Buy</td>
                    <td>$345.87</td>
                    <td>6014.54</td>
                    <td>$1.004</td>
                </tr>
                <tr>
                    <td>13-Jan</td>
                    <td>USDT</td>
                    <td className='buy'>Buy</td>
                    <td>$345.87</td>
                    <td>6014.54</td>
                    <td>$1.004</td>
                </tr>
                <tr>
                    <td>13-Jan</td>
                    <td>USDT</td>
                    <td className='buy'>Buy</td>
                    <td>$345.87</td>
                    <td>6014.54</td>
                    <td>$1.004</td>
                </tr>
                <tr>
                    <td>13-Jan</td>
                    <td>USDT</td>
                    <td className='buy'>Buy</td>
                    <td>$345.87</td>
                    <td>6014.54</td>
                    <td>$1.004</td>
                </tr>
                <tr>
                    <td>13-Jan</td>
                    <td>USDT</td>
                    <td className='buy'>Buy</td>
                    <td>$345.87</td>
                    <td>6014.54</td>
                    <td>$1.004</td>
                </tr>
                <tr>
                    <td>13-Jan</td>
                    <td>USDT</td>
                    <td className='buy'>Buy</td>
                    <td>$345.87</td>
                    <td>6014.54</td>
                    <td>$1.004</td>
                </tr>
                <tr>
                    <td>13-Jan</td>
                    <td>USDT</td>
                    <td className='buy'>Buy</td>
                    <td>$345.87</td>
                    <td>6014.54</td>
                    <td>$1.004</td>
                </tr>

            </tbody>
        </table>
    </div>
  )
}

export default Trades