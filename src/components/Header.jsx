import { styled } from "styled-components";
import { ReactComponent as Logo } from "../assets/images/LogoWithText.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleGoMain = () => {
    navigate("/");
  };

  return (
    <>
      <Container>
        <LogoWrapper>
          <LogoStyle onClick={handleGoMain} />
        </LogoWrapper>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 105px;
  padding: 18px 19%;
  border-bottom: 1px solid #e7e7e7;
  box-shadow: 0 2px 4px 0 rgba(00, 00, 00, 0.1);

  @media ${({ theme }) => theme.device.mobile} {
    padding: 18px 21px;
  }
`;

const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const LogoStyle = styled(Logo)`
  width: 142px;
  height: auto;

  @media ${({ theme }) => theme.device.tablet} {
    width: 120px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 82px;
  }
`;
