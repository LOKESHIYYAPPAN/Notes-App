import React from 'react'

const Header = ({title}) => {
  return (
    <header className='position-sticky top-0 text-bg-success d-flex justify-content-center align-items-center'>
      <h1>{title}</h1>
    </header>
  )
}

export default Header