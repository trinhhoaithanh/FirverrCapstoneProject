import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import HeaderHome from '../../Components/HeaderHome/HeaderHome'
import "../../assets/scss/style.scss"
function HomeTemplate() {
  return (
    <div className='relative'>
        <HeaderHome/>
        <div style={{minHeight:'75vh'}}>
            {/* Outlet sẽ là nơi chứa nội dung các component Pages */}
        <Outlet/>
        </div>
        <div style={{marginTop:'500px'}} className='mt-5'>
        <Footer/>
        </div>
        
    </div>
  )
}

export default HomeTemplate