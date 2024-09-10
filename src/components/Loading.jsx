import React from "react";
import { lineSpinner } from "ldrs";
import { styled } from "styled-components";
const Loading = () => {
  lineSpinner.register();
  return (
    <>
      <Wrapper>
        <l-line-spinner
          size="100"
          stroke="3"
          speed="1"
          color="#006BCE"
        ></l-line-spinner>
      </Wrapper>
    </>
  );
};

export default Loading;

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
