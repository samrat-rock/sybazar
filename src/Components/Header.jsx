import React, { useEffect, useState } from 'react';
import { LuHeadphones } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { CiShop } from "react-icons/ci";
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function Header() {
 let [groceryItems , Grocery]=useState([])
 useEffect(()=>{
  
 })

  return (
    <>
      <section>
        <div className="ss bg-primary">
          <div className="col-lg-12 text-white d-flex justify-content-between">
            <div className="col-lg-4">
              <div className="d-flex gap-4 mt-1 ms-4">
                <div className="border-end border-2 mt-1">
                  <div className="me-5">
                    <p><LuHeadphones className='me-2' />Hotline</p>
                  </div>
                </div>
                <p><MdOutlineMail className='me-2' />Email:support@sybazzar.com</p>
              </div>
            </div>
            <div className="col-lg-3">
              <ul className='ss d-flex gap-3'>
                <div className='border-end border-2 mt-2'><p className='me-2'>FAQ</p></div>
                <div className='border-end border-2 mt-2'><p className='me-2'>Blog</p></div>
                <div className='border-end border-2 mt-2'><p className='me-2'>Career</p></div>
                <p className='me-2 aa'>Contact Us</p>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <header>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3">
                <img className='dd' src="https://cdn.sybazzar.com/public/files/729FF4C08FF63B2-logo.png" alt="Logo" />
              </div>
              <div className="col-lg-5 mt-3">
                <form>
                  <input className="form me-2 w-100 p-2 rounded" placeholder="Search" />
                </form>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="ms-5 mt-4 d-flex gap-2">
                  <div className="logo"><CiUser size={25} /></div>
                  <p className='mt-1'>Login</p>
                </div>
                <div className="ms-5 mt-4 d-flex gap-2">
                  <div className="logo"><FaCartShopping size={25} className='mt-1' /></div>
                  <p className='mt-1'>Cart</p>
                </div>
                <div className="ms-5 mt-4 d-flex gap-2">
                  <div className="logo"><CiShop size={25} /></div>
                  <p className='mt-1'>Become a Seller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex mt-5">
              <div className="col-lg-2">
                <div className="dg">
                  <img className='gg' src="https://cdn.sybazzar.com/public/600-600/files/6556456E907F64D-01_Groceries.webp" alt="Grocery" />
                </div>

                <div className="btn-group">
                  <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Grocery
                  </button>
                 
                    {groceryItems.map((item) => (
                      <li key={item.id}>
                        <button className="dropdown-item" type="button">
                          {item.title}
                        </button>
                      </li>
                    ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default Header;
