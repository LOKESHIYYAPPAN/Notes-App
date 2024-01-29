import React from 'react'

const Header = ({title}) => {
  return (
    <header>
        <h1 className="text-center text-bg-success p-2">{title}</h1>
    </header>
  )
}

export default Header