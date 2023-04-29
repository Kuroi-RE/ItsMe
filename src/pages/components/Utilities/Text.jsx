import React from "react";
import styled from "styled-components";

const HeadingComponents = styled.h1`
  font-weight: ${(props) => props.weight};
  text-color: ${(props) => props.color};
  font-size: ${(props) =>
    props.size === "sm"
      ? "25px"
      : props.size === "md"
      ? "34px"
      : props.size === "lg"
      ? "37px"
      : "20px"};
`;

const Text = ({ color, size, weight, children }) => {
  return <HeadingComponents>{children}</HeadingComponents>;
};

export default Text;
