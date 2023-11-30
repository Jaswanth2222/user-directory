import React from 'react'

const UserSpecificDetail = ({user}) => {
  return (
      <div className='d-flex  flex-column border rounded px-2'>
          <div className='d-flex justify-content-between'>
              <div className='d-flex flex-column'>
                  <p>{user.name}</p>
                  <p>{user?.username} | {user?.company?.catchPhrase}</p>
              </div>
              <div className='d-flex flex-column'>
                  
                  <p>{user?.address?.street}</p>
                  <p>{user?.email} | {user?.phone}</p>
              </div>
          </div>
      </div>
  )
}

export default UserSpecificDetail