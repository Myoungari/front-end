import React from "react";
import { styled } from "styled-components";
import { ReactComponent as Logo } from "../assets/images/JoinLogo.svg";
import { ReactComponent as InstaLogo } from "../assets/images/InstaLogo.svg";

const Footer = () => {
  const goInsta = () =>
    (window.location.href = "https://www.instagram.com/mju_join");
  return (
    <>
      <Container>
        <Wrapper>
          <LogoBox>
            <LogoImg />
          </LogoBox>
          <TextBox>
            <Title>명지대학교 제 40대 총동아리연합회 Join</Title>
            <Address>
              17058 경기도 용인시 처인구 명지로 116 (남동, 명지대학교용인캠퍼스)
              , 학관 101호
            </Address>
            <BottomRowBox>
              <MadeBox>
                <MadeBy>Developed by 김효리, 박상혁</MadeBy>
                <MadeBy>Designed by 김고은, 김사랑 </MadeBy>
              </MadeBox>

              <InstagramBtn onClick={goInsta}>
                <InstaLogoImg />
                인스타그램
              </InstagramBtn>
            </BottomRowBox>
          </TextBox>
        </Wrapper>
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.Neutral600};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  position: relative;
  bottom: 0;
`;

const Wrapper = styled.div`
  width: 820px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 700px;
  }
  @media screen and (max-width: 500px) {
    width: 330px;
    gap: 20px;
  }
`;

const LogoBox = styled.div`
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.device.tablet} {
    width: 45px;
    height: 45px;
  }
`;

const LogoImg = styled(Logo)`
  width: 45px;
  height: 45px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 40px;
    height: 40px;
  }
`;

const TextBox = styled.div`
  width: 754px;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.tablet} {
    width: 400px;
  }
  @media screen and (max-width: 500px) {
    width: 270px;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.WHITE};
  margin-bottom: 8px;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const Address = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.WHITE};
  margin-bottom: 15px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const BottomRowBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MadeBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MadeBy = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.WHITE};
  margin-bottom: 3px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const InstaLogoImg = styled(InstaLogo)`
  @media screen and (max-width: 500px) {
    width: 12px;
    height: 12px;
  }
`;

const InstagramBtn = styled.button`
  width: auto;
  height: auto;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.WHITE};
  display: flex;
  gap: 5px;
  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;
