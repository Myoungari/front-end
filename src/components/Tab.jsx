import { styled } from "styled-components";
const Tab = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default Tab;

const Container = styled.div`
  display: inline-flex;
  width: auto;
  height: 41px;
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.Neutral100};
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.Neutral300};

  @media ${({ theme }) => theme.device.mobile} {
    height: 39px;
  }
`;
