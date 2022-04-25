import React from 'react'
// import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../Dashboard';
import UsersIndex from '../Admin/Users/UsersIndex';
import CategoriesIndex from '../Admin/Categories/CategoriesIndex';
import ProductsIndex from '../Admin/Products/ProductsIndex';
export default function RightSection () {
  return (
    <div className='content-page'>
      <div className='content'>
        <div className='container-fluid'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Dashboard />}></Route>
              <Route path='/dashboard' element={<Dashboard />}></Route>
              <Route path='/users' element={<UsersIndex />}></Route>
              <Route path='/categories' element={<CategoriesIndex />}></Route>
              <Route path='/products' element={<ProductsIndex />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}
