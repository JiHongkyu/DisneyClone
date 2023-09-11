import React, { useEffect, useState } from 'react';
import NavUI from './Nav.presenter';
import { useLocation, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return <NavUI show={show} pathname={pathname} handleChange={handleChange} searchValue={searchValue} />;
};

export default Nav;
