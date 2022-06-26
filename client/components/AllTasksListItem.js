import React from 'react'
import Button from 'react-bootstrap/Button';

const AllTasksListItem = (props) => {
  console.log(props.task)
  const task = props.task
  return (
    <tr>
      <td>{task.id}</td>

      <td>{task.description}</td>

      <td>{task.priority}</td>

      <td>{task.status}</td>

      <td>{task.user ? (task.user.firstName + ' ' + task.user.lastName) : ''}</td>

      <td >
        <Button href={`/tasks/${task.id}`} variant="primary" size="sm" style={{ marginRight: "15px" }}>
          View
        </Button>
        <Button variant="primary" size="sm">
          Delete
        </Button>
      </td>
    </tr >
  )
}

export default AllTasksListItem
