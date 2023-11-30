import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UserSpecificDetail from './UserSpecificDetail';
import PostCard from './PostCard';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const UserDetails = () => {
  const { id }  = useParams();
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  console.log(users);
  
  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, [])
  
  const fetchUsers = async () => {
    const usersData = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    const jsonUsersData = await usersData.json();
    setUsers(jsonUsersData)
  }

  const fetchPosts = async () => {
    const postsData = await fetch("https://jsonplaceholder.typicode.com/posts/")
    const jsonPostsData = await postsData.json();
    setPosts(jsonPostsData);
  }
  const filterPosts = posts?.filter((post) => post?.userId == id);
  

  return (users.length === 0) ? <h1>Loading user profile</h1> : (
    <Container>
      <div className='w-75 d-flex  mx-auto flex-column my-4'>
        
          <Link to="/"><button className='btn border bg-info text-dark'>Back</button></Link>
          <p className='mx-auto'>Profile Page</p>
        
    <UserSpecificDetail user={users} />
      
      
        <Row className="d-flex justify-content-between">
          {
          filterPosts.map((post) => <PostCard post={post} key={post?.id} />)
          }
        </Row>
      
        
      
   
            
      
    </div>
    </Container>
  )
}

export default UserDetails;