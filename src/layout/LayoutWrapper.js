import React from 'react'
import Header from './Header'
// import Footer from './footer/Footer'
import Footer from './Footer'
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