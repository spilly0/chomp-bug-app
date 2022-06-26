import React from 'react'
import { Row, Col } from 'react-bootstrap'

const SideBar = () => {
  return (
    <Col md='auto' className="bg-light">
      <img src="/ChompBug.png" height="50px" />
      <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
        <li className="nav-item">
          <a href="/dashboard" className="nav-link align-middle px-0">
            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/projects" className="nav-link align-middle px-0">
            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Projects</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/tasks" className="nav-link align-middle px-0">
            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">My Tasks</span>
          </a>
        </li>
      </ul>
    </Col>
  )


}

export default SideBar
