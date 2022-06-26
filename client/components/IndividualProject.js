import React from 'react'
import { connect } from 'react-redux'
import { fetchProject } from '../store/project'
import {
  Card,
  Col,
  Container,
  Form,
  Row
} from "react-bootstrap";

class IndividualProject extends React.Component {

  componentDidMount() {
    this.props.getProject(this.props.match.params.id);
  }

  render() {
    console.log(this.props.project)
    const project = this.props.project
    return (
      <Container>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Edit Project #{project.id}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <fieldset disabled>
                      <Row style={{ maxWidth: "100%" }}>
                        <Col md={11}>
                          <label htmlFor="ex2">Title</label>
                          <input className="form-control" id="ex2" type="text" defaultValue={project.title} />
                        </Col>
                      </Row>
                      <Row style={{ maxWidth: "100%" }}>
                        <Col md={5}>
                          <label htmlFor="ex2">Start Date</label>
                          <input className="form-control" id="ex2" type="date" defaultValue={project.startDate} />
                        </Col>
                        <Col md={5}>
                          <label htmlFor="ex2">Due Date</label>
                          <input className="form-control" id="ex2" type="date" defaultValue={project.dueDate} />
                        </Col>
                      </Row>
                      <Row style={{ maxWidth: "100%" }}>
                        <Col md={5}>
                          <label htmlFor="ex2">Status</label>
                          <Form.Select aria-label="Default select example" value={project.status}>
                            <option></option>
                            <option value="open">Open</option>
                            <option value="closed">Closed</option>
                          </Form.Select>
                        </Col>
                        <Col md={5}>
                          <label htmlFor="ex2">Assigned To</label>
                          <input className="form-control" id="ex2" type="text" defaultValue={project.user ? project.user.firstName + ' ' + project.user.lastName : ''} />
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
                  <Card.Title as="h4">Tasks... Needs work</Card.Title>
                </Card.Header>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    project: state.project
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: (id) => dispatch(fetchProject(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualProject)


{/* <fieldset> */ }
