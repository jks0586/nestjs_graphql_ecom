import React from 'react'
// import { Link } from "react-router-dom";
export default function LeftMenu () {
  return (
    <div className='left-side-menu'>
      <div className='slimscroll-menu'>
        <div className='logo-box'>
          <a href='index.html' className='logo'>
            <span className='logo-lg'>
              <img src='assets/images/logo-light.png' alt='' height='22' />
            </span>
            <span className='logo-sm'>
              <img src='assets/images/logo-sm.png' alt='' height='24' />
            </span>
          </a>
        </div>

        <div className='user-box'>
          <img
            src='assets/admin/images/users/avatar-1.jpg'
            alt='user-img'
            title='Mat Helme'
            className='rounded-circle img-thumbnail avatar-md'
          />
          <div className='dropdown'>
            <a
              href='/'
              className='text-dark dropdown-toggle h5 mt-2 mb-1 d-block'
              data-toggle='dropdown'
            >
              Jitendra Kumar Sharma
            </a>
          </div>
          <p className='text-muted'>CEO, Letscms Pvt Ltd</p>
        </div>

        <div id='sidebar-menu'>
          <ul className='metismenu' id='side-menu'>
            <li>
              <a href='/dashboard'>
                <i className='fe-airplay'></i>
                <span className='badge badge-danger float-right'>3</span>
                <span> Dashboard </span>
              </a>
            </li>

            <li>
              <a href='/users'>
                <i className='fe-users'></i>
                <span> Users </span>
                <span className='menu-arrow'></span>
              </a>
            </li>

            <li>
            <a href='/categories'>
                <i className='fe-layers'></i>
                <span> Categories </span>
                <span className='menu-arrow'></span>
              </a>
            </li>

            <li>
            <a href="/products">
                <i className='fe-layers'></i>
                <span> Products </span>
                <span className='menu-arrow'></span>
            </a>
            </li>
          </ul>
        </div>

        <div className='clearfix'></div>
      </div>
    </div>
  )
}
