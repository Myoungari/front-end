import { styled } from "styled-components";
import TabBar from "./TabBar";

const ContentHeader = () => {
  const datas = [
    { name: "전체", url: "/" },
    { name: "평면예술분과", url: "/flatart" },
    { name: "언행예술분과", url: "/behavior" },
    { name: "종교분과", url: "/religion" },
    { name: "과학분과", url: "/science" },
    { name: "인문사회분과", url: "/society" },
    { name: "스포츠레저분과", url: "/sports" },
    { name: "봉사분과", url: "/service" },
  ];
  return (
    <HeaderWrapper>
      <TotalBox>
        <TotalBlack>명지대학교 자연 캠퍼스에는</TotalBlack>
        <TotalBlue>58</TotalBlue>
        <TotalBlack>개의 동아리가 있어요!</TotalBlack>
      </TotalBox>
      <TabBar data={datas} />
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
`;
