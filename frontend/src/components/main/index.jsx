import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Login from './Login'

const Main = () => {
  return (
  <>
    <Navbar/>
    <Login/>
    <Outlet/>
    </>
  )
}

export default Main