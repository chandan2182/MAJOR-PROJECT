import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

const Main = () => {
  return (
  <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Main