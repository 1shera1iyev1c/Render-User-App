import React from 'react'
import UserImg from '../../assets/image/users.png'
import './Item.css'

export default function Item({user}) {
  return (
    <li className='w-25 border me-1 mb-5 rounded-5 item'>
      <a href="#" className='text-decoration-none text-dark'>
      <img className='d-block m-auto' src={UserImg} alt="user" width={250} />
      <hr className="text-light" />
      <div className='ps-4 pb-5'>
      <h3 className='text-light h5'><strong className='text-warning'>Name :</strong> {user.name}</h3>
      <h4 className='text-light h6'><strong className='text-warning'>Username :</strong> {user.username}</h4>
      <p className='text-light'><strong className='text-warning'>Phone number :</strong> {user.phone}</p>
      <div className='text-center d-flex pe-4 mt-5'>
      <a className='btn btn-info container-fluid ' href={user.email}>Email</a>
      <a className='btn btn-primary container-fluid' href={user.website}>Website</a>
      </div>
      </div>
      </a>
    </li>
  )
}
