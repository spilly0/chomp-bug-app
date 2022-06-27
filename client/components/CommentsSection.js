import React from 'react'
import {
  Card,
  Row
} from "react-bootstrap";

const CommentsSection = (props) => {
  const comment = props.comment

  return (
    <Row>
      <div className="row justify-content-start" style={{ padding: '20px' }}>
        <div className="col-8">
          <Card>
            <Card.Body>
              <Card.Text>
                {comment.text}
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">{comment.user.firstName + ' ' + comment.user.lastName}</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Row>
  )
}

export default CommentsSection
