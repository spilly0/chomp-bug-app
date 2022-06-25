import React from 'react'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import Routes from './Routes'

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar />
        <Navbar />
        <Routes />
      </div>
    </div>
  )
}

export default App
