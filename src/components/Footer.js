import React from 'react';
import styled from "styled-components";
import "./styling/Header.css";

const HeaderContainer = styled.div`
  display: flex;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;
  width: 100%;
  background-color: none;
  z-index: 1;
  > a:hover {
    transform: none;
    transition: none;
  }

  @media (max-width: 500px) {
    flex-direction: column; 
    margin-bottom: 3em;
    margin-top: 5em;

    width: 100%;
    > h1 {
      font-size: 0.75em;
    }
  }
`;

const ThankYou = styled.div`
  width: 20em;
  margin-left: 70px;

  @media (max-width: 500px) {
    width: 300px;
    margin-left: 0;
    align-self: flex-start;
    margin-left: 40px;

    > h1 {
      font-size: 15pt;
      margin-top: 10pt !important;
    }
  }
`;

const PagesContainer = styled.div`
  display: flex;
  flex-direction: flex-end;
  justify-content: space-between;
  align-items: center;
  width: 20em;
  height: 28px;
  padding-right: 70px;
  color: black;
  font-family: "vidaloka";
  font-size: 11pt;
  font-weight: 600;

  @media (max-width: 500px) {
    padding-right: 0px;
    justify-content: space-between;

    > a {
      font-size: 15px;
      padding-right: 15px;
    }
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer>
          <ThankYou>
            <h1>thanks for dropping by! 👋🏼</h1>
          </ThankYou>
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
              href="https://www.linkedin.com/in/jerin-raisa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
                        </a>
            <a
              className="link"
              href="https://github.com/jxrin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
                        </a>
            <a
              className="link"
              href="https://drive.google.com/file/d/1wwhLx6Nj0kiZI-gVkZIrwy4QL_XLEqHy/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
                        </a>

          </PagesContainer>
        </HeaderContainer>
      </div>
    );
  }
}

export default Footer;
