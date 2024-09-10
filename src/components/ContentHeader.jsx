import { styled } from "styled-components";

const ContentHeader = ({ length }) => {
  return (
    <HeaderWrapper>
      <TotalBox>
        <TotalBlack>명지대학교 자연 캠퍼스에는</TotalBlack>
        <TotalBlue>{length}</TotalBlue>
        <TotalBlack>개의 동아리가 있어요!</TotalBlack>
      </TotalBox>
    </HeaderWrapper>
  );
};

export default ContentHeader;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TotalBox = styled.div`
  display: flex;
  padding: 8px;
  margin: 32px 0;
`;

const TotalBlack = styled.p`
  font-family: "Katuri";
  color: ${({ theme }) => theme.colors.Neutral600};
  font-size: 24px;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 20px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 16px;
  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;

const TotalBlue = styled.p`
  font-family: "Katuri";
  color: #0069b5;
  font-size: 30px;
  margin-left: 5px;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 26px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 20px;
  }
  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;
