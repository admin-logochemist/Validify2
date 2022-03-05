import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/dashboard.css'
import Sidebar from '../components/Sidebar'
import Dashheader from '../components/Dashheader'
import Tabscontent from '../components/Tabscontent'
function Dashboard() {
 
 

  return (
      <>
        <Sidebar />
        <Dashheader />
        <Tabscontent/>
      </>
  )
}

export default Dashboard