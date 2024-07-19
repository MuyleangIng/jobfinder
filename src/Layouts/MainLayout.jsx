import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../Components/NavbarComponent'
import FooterComponent from '../Components/FooterComponent'


const MainLayout = () => {
  return (
    <>
      <header>
        <NavbarComponent/>
      </header>
      <main>
        <Outlet/>
      </main>
      <FooterComponent/>
    </>
  )
}

export default MainLayout
