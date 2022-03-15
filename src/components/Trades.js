import React from 'react'
import '../css/trades.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Trades() {
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