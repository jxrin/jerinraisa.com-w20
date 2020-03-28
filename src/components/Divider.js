import React from "react";
import styled from "styled-components";
import Divi from "../imgs/Divider.svg";

const DiviImg = styled.img`
`;

const DivHolder = styled.div`
    display: flex;
    justify-content: center;
    height: 20px;

    @media (max-width: 500px) {
        margin-top: 3em;
        margin-bottom: 2em;   
        width: 100%;
      }
`;

class Divider extends React.Component {
    render() {
        return (
            <DivHolder>
                <DiviImg src={Divi} />
            </DivHolder>
        );
    }
}

export default Divider;