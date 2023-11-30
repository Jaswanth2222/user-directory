import React from 'react'
import { Col } from 'react-bootstrap'

const PostCard = ({post}) => {
  return (
      
    <Col sm={12} md={6} lg={4} className=' border rounded  my-2 py-2'>
                
                <p>{post.title}</p>
                  <p>{post.body}</p>
      
              </Col>
         
  )
}

export default PostCard;