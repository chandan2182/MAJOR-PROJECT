import React from 'react'
import { Outlet } from 'react-router-dom'

const User = () => {
  return (
    <>
    <Profile/>
    <Outlet/>
    </>
  )
}

export default User