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

      <td>{project.user.firstName} {project.user.lastName}</td>

      <td >
        <Button variant="primary" size="sm">
          Edit
        </Button>
        <Button variant="primary" size="sm">
          Delete
        </Button>
      </td>
    </tr>
  )
}


export default AllProjectListItem
