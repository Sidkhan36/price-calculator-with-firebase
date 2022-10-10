import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
const LayoutWrapper = (props) => {
  return (
    <div className='layout'>
        <Header />
            {props.children}
        <Footer />
        
    </div>
  )
}

export default LayoutWrapper