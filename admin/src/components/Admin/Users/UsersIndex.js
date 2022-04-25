import React, { useEffect, useState } from 'react'
import UsersService from '../../../services/users'

export default function UsersIndex () {
  const [users, setUsers ] = useState([]);

  useEffect(() => {
    UsersService.userslist()
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error)
      });
      
  },[]);

  function  createUser(){
      alert('aaaa');
  }
  return (
    <div className='row'>
      <div className='col-12'>
        <div className='card-box'>
          <h4 className='header-title'>Users List <button onClick={createUser} className='btn btn-primary float-right'>Create User</button></h4>
          
          <div className='table-rep-plugin  mt-4'>
            <div className='table-responsive mb-0' data-pattern='priority-columns'>
              <table id='tech-companies-1' className='table  table-striped'>
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th data-priority='1'>Email</th>
                    <th data-priority='3'>Is Admin</th>
                    <th data-priority='4'>Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                { users.map(item=>(
                  <tr>
                    <th>
                      {item.fullname}
                    </th>
                    <td>{item.email}</td>
                    <td>{item.is_admin}</td>
                    <td><i className='fa fa-edit'></i></td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
