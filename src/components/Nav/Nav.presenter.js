import React from 'react';
import * as S from './Nav.styles';
const NavUI = ({ show, pathname, searchValue, handleChange }) => {
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
        <S.Login>Login</S.Login>
      ) : (
        <S.Input
          value={searchValue}
          onChange={handleChange}
          className='nav__input'
          type='text'
          placeholder='검색해주세요.'
        />
      )}
    </S.NavWrapper>
  );
};

export default NavUI;
