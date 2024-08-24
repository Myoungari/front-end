import { styled } from "styled-components";
import DetailBtn from "../components/DetailBtn";
import SearchBar from "../components/SearchBar";
import TabBar from "../components/TabBar";

const Main = () => {
  return (
    <>
      <Container>
        <TotalBox>
          <TotalBlack>명지대학교 자연 캠퍼스에는</TotalBlack>
          <TotalBlue>58</TotalBlue>
          <TotalBlack>개의 동아리가 있어요!</TotalBlack>
        </TotalBox>
        <TabBar />
        <SearchBar />
        <DetailBtn />
      </Container>
    </>
  );
};

export default Main;

const Container = styled.div`
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
  font-family: "Katuri" !important;
  color: ${({ theme }) => theme.colors.Neutral600};
  font-size: 24px;
`;

const TotalBlue = styled.p`
  font-family: "Katuri";
  color: #0069b5;
  font-size: 30px;
  margin-left: 5px;
`;
