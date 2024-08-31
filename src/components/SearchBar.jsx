import { styled } from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/images/Search.svg";

const SearchBar = () => {
  return (
    <>
      <Container>
        <Input placeholder="명지대학교 동아리를 검색해보세요!" />
        <SearchIcon />
      </Container>
    </>
  );
};

export default SearchBar;

const Container = styled.div`
  width: 608px;
  height: 54px;
  border: 1px solid ${({ theme }) => theme.colors.Primary200};
  border-radius: 30px;
  padding: 15px 44px;
  margin: 33px 0 39px;

  @media screen and (max-width: 608px) {
    width: calc(100% - 40px);
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 353px;
    height: 48px;
  }
`;

const Input = styled.input`
  width: calc(100% - 23px);
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  border: none;
  margin-right: 5px;
  line-height: 54px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.Neutral200};
  }
`;
