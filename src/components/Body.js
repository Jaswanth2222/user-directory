import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';

const Body = () => {
    const [users, setUsers] = useState([]);
    console.log(users);
    const [posts, setPosts] = useState([]);
    console.log(posts);
    useEffect(() => {
        fetchUsers();
        fetchPosts();
    }, [])

    const fetchUsers = async () => {
        const userData = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonuserData = await userData.json();
        setUsers(jsonuserData);
        
    }

    const fetchPosts = async () => {
        const postsData = await fetch("https://jsonplaceholder.typicode.com/posts/")
        const jsonPostsData = await postsData.json();
        setPosts(jsonPostsData);
    }
        
  return users?.length === 0 ? <h1>Loading</h1> : (
      <div className='d-flex flex-column align-items-center my-3'>
          <p>Directory</p>
          
            {
              users?.map((user) => <Link className='w-50 text-decoration-none' to={'/user/'+ user?.id} key={user?.id}><UserCard user={user}  /> </Link>)
           }
              
      </div>
  )
}

export default Body;