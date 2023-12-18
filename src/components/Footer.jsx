import React from 'react'

const Footer = () => {
  return (
    <div className='bg-success-subtle text-success text-center py-3'>
      <h3 className="fw-light">
        {" "}
        &copy;{new Date().getFullYear()} All Right Reserved {" "}
      </h3>
      <h4 className="mt-1 fw-bold" ></h4>
    </div>
  )
}

export default Footer