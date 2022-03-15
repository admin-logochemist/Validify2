import React,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/dashboard.css'
import Sidebar from '../components/Sidebar'
import Dashheader from '../components/Dashheader'
import Tabscontent from '../components/Tabscontent'
import DashFooter from '../components/DashFooter'
import { BscScan } from "@jpmonette/bscscan";
function Dashboard() {
  const client = new BscScan({ apikey: "4M737ZIVF6RDFH1E4FMX7HBGWBV4ZVRJKI" });
 useEffect(() => {
  const balance =  client.accounts.getBalance({ address: "0x4e656459ed25bf986eea1196bc1b00665401645d" });
  console.log("balance",balance)
  const txlist = client.accounts.getTxList({ address: "0x946669fC17a7Fc36f36e3cAa8Cd9e67dB262c5F9" });
txlist.then((data)=>
console.log( "ham",data)
)
 }, [])
 

  return (
      <>
        <Sidebar />
        <Dashheader />
        <Tabscontent/>
        <DashFooter/>
      </>
  )
}

export default Dashboard