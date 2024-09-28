import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <footer className={`py-3 mt-3 mb-0 bg-${props.mode === 'light' ? props.mode : '' }`}>
    <p  className={`text-center mb-0 text-${props.mode === 'light' ? 'dark' : 'light' }`}>TextUtils by <b>Neha Thakur</b> <Link></Link></p>
    </footer>

  )
}

export default Footer