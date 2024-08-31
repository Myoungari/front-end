import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as GreenCircle } from "../assets/images/StateCircleGreen.svg";
import { ReactComponent as RedCircle } from "../assets/images/StateCircleRed.svg";
import JoinLogo from "../assets/images/JoinLogo.svg";

const DetailBtn = ({ data }) => {
  const { categoryName, id, recruitmentStatus, image, name, introduce } = data;
  const navigate = useNavigate();

  const isRecruiting = recruitmentStatus === "Recruiting";
  const getCategoryNameInKorean = (categoryName) => {
    switch (categoryName) {
      case "sports":
        return "스포츠분과";
      case "service":
        return "봉사분과";
      case "science":
        return "과학분과";
      case "behavior":
        return "언행예술분과";
      case "religion":
        return "종교분과";
      case "flatar":
        return "평면예술분과";
      case "society":
        return "사회분과";
      default:
        return "기타분과";
    }
  };

  const categoryNameKorean = getCategoryNameInKorean(categoryName);

  const handleGoDetail = () => {
    navigate(`${categoryName}/${id}`);
  };
  return (
    <>
      <Container onClick={handleGoDetail}>
        <Top>
          {image && image.imageLink ? (
            <Logo src={image.imageLink} />
          ) : (
            <Logo src={JoinLogo} />
          )}
          <TitleBtnBox>
            <TitleBox>
              {isRecruiting ? (
                <State $isRecruiting={true}>
                  <GreenCircle />
                  모집 중
                </State>
              ) : (
                <State $isRecruiting={false}>
                  <RedCircle />
                  모집 마감
                </State>
              )}
              <Name>{name}</Name>
              <Type>{categoryNameKorean}</Type>
            </TitleBox>
            <GoDetailButton>자세히 보기</GoDetailButton>
          </TitleBtnBox>
        </Top>
        <Content>{introduce}</Content>
      </Container>
    </>
  );
};

export default DetailBtn;

const Container = styled.div`
  width: 350px;
  height: 191px;
  border-radius: 14px;
  border: 1px solid #e7e7e7;
  padding: 23px 21px 19px 21px;
  box-shadow: 0 0 10px 0 rgba(00, 00, 00, 0.1);
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.Primary100};
    box-shadow: 0 0 10px 0 rgba(00, 83, 226, 0.1);
    background-color: ${({ theme }) => theme.colors.Primary50};
  }
`;

const Logo = styled.img`
  width: 78px;
  height: 78px;
  border-radius: 12px;
  object-fit: cover;
`;

const Top = styled.div`
  display: flex;
`;

const TitleBtnBox = styled.div`
  width: calc(100% - 78px);
  display: flex;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 11px;
`;

const State = styled.div`
  width: 74px;
  height: 21px;
  border-radius: 8px;
  background-color: ${({ theme, $isRecruiting }) =>
    $isRecruiting ? theme.colors.Sub50 : theme.colors.SubR50};
  color: ${({ theme, $isRecruiting }) =>
    $isRecruiting ? theme.colors.Sub500 : theme.colors.SubR400};
  border: 1px solid
    ${({ theme, $isRecruiting }) =>
      $isRecruiting ? theme.colors.Sub100 : theme.colors.SubR100};
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Name = styled.div`
  width: auto;
  height: 35px;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const Type = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-left: 8px;
  color: ${({ theme }) => theme.colors.Primary300};
`;

const GoDetailButton = styled.button`
  width: 74px;
  height: 30px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.Neutral50};
  color: ${({ theme }) => theme.colors.Neutral400};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 12px;
  font-weight: 600;
`;

const Content = styled.div`
  width: 295px;
  height: auto;
  font-size: 16px;
  font-weight: 500;
  margin-top: 11px;
  color: ${({ theme }) => theme.colors.Neutral500};
  line-height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
