import React from 'react'
import { connect } from 'react-redux'
import { fetchProjects } from '../store/projects'
import { Accordion, Button, Card, Col, Container, Row, Table } from 'react-bootstrap'
import AllProjectListItem from './AllProjectListItem'

class AllProjects extends React.Component {

  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const projects = this.props.projects;

    return (
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Row className="d-flex justify-content-between">
                  <Col>
                    <Card.Title as="h4">Projects</Card.Title>
                    <p className="card-category">
                      Organization's Projects
                    </p>
                  </Col>
                  <Col className="d-inline-flex justify-content-end">
                    <Button className="align-self-center">Add Project</Button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Title</th>
                      <th>Start Date</th>
                      <th>Due Date</th>
                      <th>Assigned To</th>
                      <th>Edit/Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects ?
                      projects.map(project => (
                        <AllProjectListItem key={project.id} project={project} />
                      ))
                      :
                      <tr>
                        <td>There are currently no projects</td>
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
    projects: state.projects
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    getProjects: () => dispatch(fetchProjects()),
    // sendProject: (project) => dispatch(sendCreateProject(project, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProjects)

{/* <Accordion defaultActiveKey="0">
<Card>
  <Card.Header>
    <Button>Click me</Button>
    <ContextAwareToggle eventKey="0">Click me!</ContextAwareToggle>
  </Card.Header>
  <Accordion.Collapse eventKey="0">
    <Card.Body>Hello! I'm the body</Card.Body>
  </Accordion.Collapse>
</Card>
<Card>
  <Card.Header>
    <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
  </Card.Header>
  <Accordion.Collapse eventKey="1">
    <Card.Body>Hello! I'm another body</Card.Body>
  </Accordion.Collapse>
</Card>
</Accordion> */}
