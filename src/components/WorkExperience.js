import React from "react";
import styled from "styled-components";

const IndvExperience = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
    margin-bottom: 30px;
`;

const Title = styled.p`
  font-family: "amiri";
  font-size: 25px;
  margin: 0 !important;

  @media (max-width: 500px) {
    font-size: 18px !important;
  }
`;

const Date = styled.p`
  font-family: "amiri";
  font-size: 20px;
  color: #8482AF;
  margin-top: 10px !important;
  margin-left: 30px !important;

  @media (max-width: 500px) {
    font-size: 18px !important;
  }
`;

class WorkExperience extends React.Component {
  render() {
    return (
      <a target="_blank" rel="noopener noreferrer" href={this.props.link}>
        <IndvExperience>
          <Title><sup>{this.props.description}</sup>{this.props.title}</Title>
          <Date>{this.props.label}</Date>
        </IndvExperience>
      </a >
    );
  }
}

export default WorkExperience;
