import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../store/tasks'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import AllTasksListItem from './AllTasksListItem'

class AllTasks extends React.Component {

  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    const tasks = this.props.tasks;

    return (
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Tasks</Card.Title>
                <p className="card-category">
                  Organization's Tasks
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Description</th>
                      <th>Priority</th>
                      <th>Status</th>
                      <th>Assigned To</th>
                      <th>Edit/Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks ?
                      tasks.map(task => (
                        <AllTasksListItem key={task.id} task={task} />
                      ))
                      :
                      <tr>
                        <td>There are currently no tasks</td>
                      </tr>
                    }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTasks: () => dispatch(fetchTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTasks)
