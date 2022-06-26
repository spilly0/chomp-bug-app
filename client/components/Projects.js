import React from 'react'
import { connect } from 'react-redux'
import { fetchProjects } from '../store/projects'
import { Table } from 'react-bootstrap'
import AllProjectListItem from './AllProjectListItem'

class Projects extends React.Component {

  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const projects = this.props.projects;
    console.log(projects)
    return (
      <div>
        <p>Projects</p>
        <Table>
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

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: () => dispatch(fetchProjects())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
