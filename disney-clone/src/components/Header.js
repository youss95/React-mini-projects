import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";
import { useEffect } from "react";
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  .logo {
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0px;
    display: inline-block;
    img {
      display: block;
      width: 100%;
    }
  }
  .menu {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    @media (max-width: 768px) {
      display: none;
    }
    a {
      display: flex;
      align-items: center;
      padding: 0 12px;
      img {
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
      }
      span {
        color: rgb(240, 240, 240);
        font-size: 12px;
        line-height: 1.08;
        letter-spacing: 1.4px;
        white-space: nowrap;
        position: relative;

        &:before {
          background-color: rgb(249, 249, 249);
          border-radius: 0px 0px 4px 4px;
          bottom: -6px;
          /* adding another div */
          content: "";
          height: 2px;
          left: 0px;
          opacity: 0;
          position: absolute;
          right: 0px;
          transform-origin: left center;
          transform: scaleX(0);
          /* 스르륵 */
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.26);
          visibility: visible;
          width: auto;
        }
      }
      &:hover {
        cursor: pointer;
        span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
        }
      }
    }
  }
`;

const LOGIN = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  letter-spacing: 1px;
  font-size: 16px;
  text-transform: uppercase;
  padding: 8px 16px;
  border: 1px solid #f9f9f9f9;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  border: 1px solid lightgray;
  background-color: black;
  border-radius: 3px;
  padding: 5px 10px;
  letter-spacing: 3px;
  opacity: 0;
  font-size: 14px;
  width: 130px;
  text-align: center;
`;
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition: all 1s ease-out;
    }
  }
`;
const Header = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();

  //   로그인 되면 메인으로
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [username]);
  const handleAuth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
          setUser(result.user);
        })
        .catch((e) => console.log(e));
    } else if (username) {
      auth.signOut().then(() => {
        dispatch(setSignOutState()).catch((e) => console.log(e));
      });
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <div className="logo">
        <img src="/images/logo.svg" alt="" />
      </div>
      {!username ? (
        <LOGIN onClick={handleAuth}>LOGIN</LOGIN>
      ) : (
        <>
          <div className="menu">
            <a>
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="HOME" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="HOME" />
              <span>WATCH</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="HOME" />
              <span>MOVIE</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="HOME" />
              <span>SERIES</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="HOME" />
              <span>ORIGINALS</span>
            </a>
          </div>
          <SignOut>
            <UserImg src={userPhoto} alt="" />
            <DropDown>
              <span onClick={handleAuth}>SIgn Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

export default Header;
