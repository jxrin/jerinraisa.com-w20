import React from 'react';
import styled from "styled-components";
import {
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import "./styling/Header.css";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3em;
  width: 100%;
  top: 0;
  left: 0;
  margin-top: 20px;
  background-color: none;
  z-index: 1;
  > a:hover {
    transform: none;
    transition: none;
  }

  @media (max-width: 500px) {
    width: 100%;
    > h1 {
      font-size: 0.75em;
    }
  }
`;

const Jerin = styled.div`
  width: 3em;
  padding-left: 70px;

  @media (max-width: 500px) {
    width: 1em;
    padding-left: 40px;
    padding-right: 110px;

    > h1 {
      font-size: 1.25em;
      margin-top: 10pt !important;
    }
  }
`;

const PagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15em;
  height: 28px;
  padding-right: 70px;
  color: black;
  font-family: "vidaloka";
  font-size: 11pt;
  font-weight: 600;

  @media (max-width: 500px) {
    padding-right: 0px;
    justify-content: flex-end;

    > a {
      font-size: 15px;
      padding-right: 25px;
      padding-left: 10px;
    }
  }
`;

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer>
          <Router>
            <Link to="/">
              <Jerin>
                <h1>jerin</h1>
              </Jerin>
            </Link>
          </Router>

          <PagesContainer>
            <a
              className="link"
              href="mailto:jerin.raisa11@gmail.com?Subject=Hello%20👋🏼!"
              target="_blank"
              rel="noopener noreferrer"
            >
              email
            </a>
            <a
              className="link"
              href="https://drive.google.com/file/d/1Ci7y-50Tg1JR9TKFGzSTLjeqQlgeEmGo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/jerin-raisa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </PagesContainer>
        </HeaderContainer>
      </div>
    );
  }
}

export default Navbar;
