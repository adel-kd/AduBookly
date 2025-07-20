import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Welcome to Adu Bookly</h2><br />
                <p className='header-text fs-18 fw-3'>Search your favorite books, explore summaries, and start your next reading adventure here.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header