import React from "react";
import { styled } from "styled-components";
import { ReactComponent as GreenCircle } from "../assets/images/StateCircleGreen.svg";
import { ReactComponent as RedCircle } from "../assets/images/StateCircleRed.svg";

const DetailBtn = ({ isRecruiting }) => {
  return (
    <>
      <Container>
        <Top>
          <Logo />
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
              <Name>포토랩</Name>
              <Type>평면예술분과</Type>
            </TitleBox>
            <GoDetailButton>자세히 보기</GoDetailButton>
          </TitleBtnBox>
        </Top>
        <Content>
          안녕하세요 동아리 설명입니다. 안녕하세요 동아리 설명입니다. 안녕하세요
          동아리 설명입니다. 안녕하세요 동아리 설명입니다. 안녕하세요 동아리
          설명입니다.
        </Content>
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
  width: 74px;
  height: 35px;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
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
