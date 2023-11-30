import React from 'react'

const UserCard = ({ user }) => {
    console.log(user)
  return (
      <div className='d-flex justify-content-between text-white bg-info p-2 border rounded m-1'>
          <p>{user?.name}</p>
        <p>posts</p>
      </div>
  )
}

export default UserCard