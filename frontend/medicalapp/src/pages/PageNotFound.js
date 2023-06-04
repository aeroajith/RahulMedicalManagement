import React from 'react'
import "../Components/css/style.css"

import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <>
    <div className='error'>
    <h2>404</h2>
    <h4>Page Not Found</h4>
    <Link className='btn' to='/'
    >Back to Home</Link>
    </div>
    </>
  )
}
