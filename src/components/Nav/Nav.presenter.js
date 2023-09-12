import React from 'react';
import * as S from './Nav.styles';
const NavUI = ({ show, pathname, searchValue, handleChange, handleAuth, handleLogOut, userData }) => {
  return (
    <S.NavWrapper $show={show}>
      <S.Logo>
        <img
          src='/images/logo.svg'
          alt='Disney Plus Logo'
          onClick={() => {
            window.location.href = '/';
          }}
        />
      </S.Logo>
      {pathname === '/' ? (
        <S.Login onClick={handleAuth}>Login</S.Login>
      ) : (
        <>
          <S.Input
            value={searchValue}
            onChange={handleChange}
            className='nav__input'
            type='text'
            placeholder='검색해주세요.'
          />
          <S.SignOut>
            <S.UserImg src={userData.photoURL} alt={userData.displayName} />
            <S.DropDown>
              <span onClick={handleLogOut}>Sign Out</span>
            </S.DropDown>
          </S.SignOut>
        </>
      )}
    </S.NavWrapper>
  );
};

export default NavUI;
