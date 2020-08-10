import React from "react";
import styled from "styled-components";

const IndvProjects = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
    margin-bottom: 30px;

    > h6 {
        font-size: 18px;
        margin-left: 30px !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }
`;

const Title = styled.p`
  font-family: "amiri";
  font-size: 25px;
  margin: 0 !important;

  @media (max-width: 500px) {
    font-size: 18px !important;
  }
`;

const Description = styled.p`
  font-family: "amiri";
  font-size: 20px;
  color: #8482AF;
  margin-top: 0px !important;
  margin-bottom: 0 !important;
  margin-left: 30px !important;

  @media (max-width: 500px) {
    font-size: 18px !important;
  }
`;

class Projects extends React.Component {
    render() {
        return (
            <a target="_blank" rel="noopener noreferrer" href={this.props.link}>
                <IndvProjects>
                    <Title><sup>{this.props.label}</sup>{this.props.title}</Title>
                    <Description>{this.props.description}</Description>
                    <h6>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={this.props.link}
                        >
                            view project
                        </a>
                    </h6>
                </IndvProjects>
            </a >
        );
    }
}

export default Projects;
