import React, { useEffect, useState } from 'react'
import apple from '../../assets/image/apple.png'
import './Header.css'

export default function Header() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#c815ff))'
    }
    if (count > 1) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#f3b014))'
    }
    if (count > 2) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(pink))'
    }
    if (count > 3) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#5f1b74))'
    }
    if (count > 4) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#6f1b24))'
    }
    if (count > 5) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#f90c63))'
    }
    if (count > 6) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#f35714))'
    }
    if (count > 7) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#83f314))'
    }
    if (count > 8) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#14e0f3))'
    }
    if (count > 9) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#142ef3))'
    }
    if (count > 10) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#c815ff))'
    }
    if (count > 11) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#f3b014))'
    }
    if (count > 12) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(pink))'
    }
    if (count > 13) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#5f1b74))'
    }
    if (count > 14) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#6f1b24))'
    }
    if (count > 15) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#f90c63))'
    }
    if (count > 16) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#f35714))'
    }
    if (count > 17) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#83f314))'
    }
    if (count > 18) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#14e0f3))'
    }
    if (count > 19) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#142ef3))'
    }
    if (count > 20) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#c815ff))'
    }
    if (count > 21) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#f3b014))'
    }
    if (count > 22) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(pink))'
    }
    if (count > 23) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#5f1b74))'
    }
    if (count > 24) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#6f1b24))'
    }
    if (count > 25) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#f90c63))'
    }
    if (count > 26) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#f35714))'
    }
    if (count > 27) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#83f314))'
    }
    if (count > 28) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#14e0f3))'
    }
    if (count > 29) {
      document.body.style.background = '-webkit-gradient(linear, left bottom, left top, from(rgba(162, 89, 255, 0)), to(#142ef3))'
    }
  }, [count])

  const backToFile = () => {
    window.location.replace('https://login-password-page.vercel.app/')
  }

  return (
    <>
      <header className='border ps-3 pe-3 mt-3 rounded-4 d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
        <a href="#">
            <img src={apple} alt="apple" width={150} />
        </a>
        <ul className='list-unstyled d-flex align-items-center ps-5 ms-5 mt-3'>
            <li className='me-5'>
                <a className='text-decoration-none text-dark' href="#">Home</a>
            </li>
            <li className='me-5'>
                <a className='text-decoration-none text-dark' href="#">Users</a>
            </li>
            <li className='me-5'>
                <a className='text-decoration-none text-dark' href="#">Todos</a>
            </li>
        </ul>
        </div>
        <div>
        <a className='btn btn-success me-4' href="#">Contact Us</a>
        <a className='btn btn-primary' onClick={() => setCount(count + 1)} href="#">Increment Count</a>
        <button className='btn btn-info ms-5' onClick={() => backToFile()}>Log out</button>
        </div>
      </header>
    </>
  )
}
