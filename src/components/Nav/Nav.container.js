import React, { useEffect, useState } from 'react';
import NavUI from './Nav.presenter';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const Nav = () => {
  const initialUserData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {};
  const [userData, setUserData] = useState(initialUserData);
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (pathname === '/') {
          navigate('/main');
        }
      } else {
        navigate('/');
      }
    });
  }, [auth, navigate, pathname]);

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

  // Auth 함수
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserData(result.user);
        localStorage.setItem('userData', JSON.stringify(result.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Sign out 함수
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <NavUI
      show={show}
      pathname={pathname}
      handleChange={handleChange}
      searchValue={searchValue}
      handleAuth={handleAuth}
      handleLogOut={handleLogOut}
      userData={userData}
    />
  );
};

export default Nav;
