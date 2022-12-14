import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLogged }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    alert('Logged out');
    navigate('/login');
  };
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>
          LOANPROAPP
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className='collapse navbar-collapse'
          id='navbarSupportedContent'
        ></div>
        <div classname='collapse navbar-collapse'>
          {!isLogged && (
            <Link to='/signup'>
              <button
                className='btn btn-primary'
                style={{ marginRight: '15px' }}
              >
                Sign Up
              </button>
            </Link>
          )}
          {isLogged ? (
            <Link to='/login'>
              <button className='btn btn-danger' onClick={logout}>
                Logout
              </button>
            </Link>
          ) : (
            <Link to='/login'>
              <button className='btn btn-primary'>Login</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;