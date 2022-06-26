import React from 'react'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import Routes from './Routes'
import { Row, Col } from 'react-bootstrap'

const App = () => {
  return (
    <Row style={{ maxWidth: "100%" }} >
      <SideBar />
      <Col>
        <Col md={12}>
          <Navbar />
        </Col>
        <Col md={12}>
          <Routes />
        </Col>
      </Col>
    </Row>
  )
}

export default App
