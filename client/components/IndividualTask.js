import React from 'react'
import { connect } from 'react-redux'
import { fetchTask } from '../store/task'
import {
  Card,
  Col,
  Container,
  Form,
  Row
} from "react-bootstrap";

class IndividualTask extends React.Component {

  componentDidMount() {
    this.props.getTask(this.props.match.params.id);
  }

  render() {
    console.log(this.props.task)
    const task = this.props.task
    let comments = this.props.task.comments
    comments && comments.length > 1 ? comments.sort((a, b) => new Date(b.date) - new Date(a.date)) : comments
    console.log(comments)
    return (
      <Container>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Edit Task #{task.id}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <fieldset disabled>
                      <Row style={{ maxWidth: "100%" }}>
                        <Col md={11}>
                          <label htmlFor="ex2">Description</label>
                          <input className="form-control" id="ex2" type="text" defaultValue={task.description} />
                        </Col>
                      </Row>
                      <Row style={{ maxWidth: "100%" }}>
                        <Col md={5}>
                          <label htmlFor="ex2">Assigned To</label>
                          <input className="form-control" id="ex2" type="text" defaultValue={task.user ? task.user.firstName + ' ' + task.user.lastName : ''} />
                        </Col>
                        <Col md={5}>
                          <label htmlFor="ex2">Due Date</label>
                          <input className="form-control" id="ex2" type="date" defaultValue={task.createdAt} />
                        </Col>
                      </Row>
                      <Row style={{ maxWidth: "100%" }}>
                        <Col md={5}>
                          <label htmlFor="ex2">Status</label>
                          <Form.Select aria-label="Default select example" value={task.status}>
                            <option></option>
                            <option value="open">Open</option>
                            <option value="inwork">In-Work</option>
                            <option value="closed">Closed</option>
                          </Form.Select>
                        </Col>
                        <Col md={5}>
                          <label htmlFor="ex2">Status</label>
                          <Form.Select aria-label="Default select example" value={task.priority}>
                            <option></option>
                            <option value="low">Low</option>
                            <option value="high">High</option>
                            <option value="critical">Critical</option>
                          </Form.Select>
                        </Col>
                      </Row>
                    </fieldset>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container >
        <Container style={{ paddingTop: "20px" }}>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Comments</Card.Title>
                </Card.Header>
                <Card.Body>
                  This is some text within a card body.
                </Card.Body>
                <Container>
                  <Row>
                    <div className="row justify-content-end">
                      <div className="col-4">
                        One of two columns
                      </div>
                      <div className="col-4">
                        One of two columns
                      </div>
                    </div>
                  </Row>
                </Container>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    task: state.task
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTask: (id) => dispatch(fetchTask(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualTask)


{/* <div class="col align-self-end">
One of three columns
</div>
<div class="col align-self-end">
One of three columns
</div> */}
