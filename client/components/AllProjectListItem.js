import React from 'react'
import Button from 'react-bootstrap/Button';

const AllProjectListItem = (props) => {
  const project = props.project

  return (
    <tr>
      <td>{project.id}</td>

      <td>{project.title}</td>

      <td>{project.startDate}</td>

      <td>{project.dueDate}</td>

      <td>{project.user ? (project.user.firstName + ' ' + project.user.lastName) : ''}</td>

      <td >
        <Button href={`/projects/${project.id}`} variant="primary" size="sm" style={{ marginRight: "15px" }}>
          View
        </Button>
        <Button variant="primary" size="sm">
          Delete
        </Button>
      </td>
    </tr >
  )
}


export default AllProjectListItem
