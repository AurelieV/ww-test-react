import React from "react";
import styled from "styled-components";
import MatButton from "@material-ui/core/Button";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default (props) => {
    const style = { color: props.content && props.content.textColor };
    return (
        <div className="my-class">
            <p style={style}>I am a custom element !</p>
            <Title>Pouet</Title>
            <MatButton>Coucou</MatButton>
        </div>
    );
};
