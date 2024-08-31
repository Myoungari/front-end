import { styled } from "styled-components";
import ContentHeader from "../components/ContentHeader";
import SearchBar from "../components/SearchBar";
import DetailBtn from "../components/DetailBtn";

const HomeLayout = () => {
  return (
    <>
      <Wrapper>
        <ContentHeader />
        <SearchBar />
        <DetailBtn />
      </Wrapper>
    </>
  );
};

export default HomeLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
