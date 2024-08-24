import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Tab from "./Tab";

const TabBar = () => {
  const datas = [
    { name: "전체", url: "/" },
    { name: "평면예술분과", url: "/art" },
    { name: "언행예술분과", url: "/" },
    { name: "종교분과", url: "/" },
    { name: "과학분과", url: "/" },
    { name: "인문사회분과", url: "/" },
    { name: "스포츠레저분과", url: "/" },
    { name: "봉사분과", url: "/" },
  ];
  const navigate = useNavigate();
  return (
    <Container>
      {datas.map((data, index) => (
        <Tab onClick={() => navigate(data.url)} key={index}>
          {data.name}
        </Tab>
      ))}
    </Container>
  );
};

export default TabBar;
const Container = styled.div`
  width: 990px;
  height: 39px;
  display: flex;
  gap: 7px;
`;
