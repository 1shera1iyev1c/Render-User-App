import React from 'react'

export default function List({children}) {
  return (
    <ul className='d-flex list-unstyled flex-wrap justify-content-around align-items-start pe-5 ps-5 pt-5'>
      {children}
    </ul>
  )
}
