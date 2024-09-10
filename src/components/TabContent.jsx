import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import moment from "moment";
import { useOutletContext } from "react-router-dom";
import JoinLogo from "../assets/images/JoinLogo.svg";
import Loading from "./Loading";
const TabContent = () => {
  const categoryData = useOutletContext();
  const [clubData, setClubData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (categoryData?.club) {
      setClubData(categoryData.club);
      setIsLoading(false);
    }
  }, [categoryData]);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  const {
    name,
    image,
    president,
    location,
    snsLink,
    apply = {},
    introduce,
    activity,
  } = clubData;

  const startDate = apply.recruitStartDate
    ? moment(apply.recruitStartDate).format("YYYY.MM.DD")
    : "";
  const endDate = apply.recruitEndDate
    ? moment(apply.recruitEndDate).format("MM.DD")
    : "";
  const formedDate =
    apply.recruitStartDate && apply.recruitEndDate
      ? `${startDate} - ${endDate}`
      : "";

  const goApplyLink = () =>
    apply.applyLink
      ? (window.location.href = apply.applyLink)
      : alert("지원링크가 존재하지 않습니다 ㅠ.ㅠ");

  return (
    <>
      <Container>
        <Header>
          <HeaderContainer>
            <ClubName>{name}</ClubName>
            <ApplyBtn onClick={goApplyLink}>지원하기</ApplyBtn>
          </HeaderContainer>
        </Header>
        <ContentArea>
          <ProfileWrapper>
            <ProfileImg src={image?.imageLink || JoinLogo}></ProfileImg>
            <ProfileBox>
              <ProfileLineWrapper>
                <ProfileKeyText>회장: </ProfileKeyText>
                <ProfileValueText>{president.name}</ProfileValueText>
              </ProfileLineWrapper>
              <ProfileLineWrapper>
                <ProfileKeyText>연락처: </ProfileKeyText>
                <ProfileValueText>{president.contact}</ProfileValueText>
              </ProfileLineWrapper>
              <ProfileLineWrapper>
                <ProfileKeyText>Email: </ProfileKeyText>
                <ProfileValueText>{president.email}</ProfileValueText>
              </ProfileLineWrapper>
              <ProfileLineWrapper>
                <ProfileKeyText>위치: </ProfileKeyText>
                <ProfileValueText>{location}</ProfileValueText>
              </ProfileLineWrapper>
              <ProfileLineWrapper>
                <ProfileKeyText>SNS: </ProfileKeyText>
                <ProfileValueText>{snsLink}</ProfileValueText>
              </ProfileLineWrapper>
              <ProfileLineWrapper>
                <ProfileKeyText>모집기간: </ProfileKeyText>
                <ProfileValueText>{formedDate}</ProfileValueText>
              </ProfileLineWrapper>
            </ProfileBox>
          </ProfileWrapper>
          <ContentTitle>동아리 소개</ContentTitle>
          <ContentBox>{introduce}</ContentBox>
          <ContentTitle>활동 내용</ContentTitle>
          <ContentBox>{activity}</ContentBox>
          <ContentTitle>지원조건</ContentTitle>
          <ContentBox>{apply.qualifications}</ContentBox>
        </ContentArea>
      </Container>
    </>
  );
};

export default TabContent;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 18px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 79px;
  box-shadow: 0 2px 4px 0 rgba(00, 00, 00, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 0 20px 0;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 18px 14px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 16px 25px;
  }
`;

const HeaderContainer = styled.div`
  width: 648px;
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.tablet} {
    width: 592px;
  }
  @media screen and (max-width: 630px) {
    font-size: 340px;
  }
`;

const ClubName = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.BLACK};

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 28px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 24px;
  }
`;

const ApplyBtn = styled.button`
  width: 87px;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.colors.Primary300};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.Primary300};
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.WHITE};
    background-color: ${({ theme }) => theme.colors.Primary300};
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 80px;
    height: 40px;
    font-size: 16px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 66px;
    height: 30px;
    font-size: 12px;
  }
`;

const ContentArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin: 42px 0 36px;

  @media ${({ theme }) => theme.device.tablet} {
    gap: 10px;
  }
`;

const ProfileImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 12px;
  object-fit: cover;
  @media ${({ theme }) => theme.device.tablet} {
    width: 163px;
    height: 163px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 115px;
    height: 115px;
  }
`;

const ProfileBox = styled.div`
  width: 436px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.Neutral50};
  border-radius: 12px;
  padding: 16px 14px 16px 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  @media ${({ theme }) => theme.device.tablet} {
    width: 399px;
  }
  @media screen and (max-width: 600px) {
    width: auto;
    padding: 16px 10px;
  }
`;

const ProfileLineWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const ProfileKeyText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.Neutral500};
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 14px;
  }
`;

const ProfileValueText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.BLACK};
  word-wrap: break-word;
  white-space: normal;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 14px;
  }
`;

const ContentTitle = styled.div`
  font-size: 18px;
  font-family: "Katuri";
  color: ${({ theme }) => theme.colors.Primary300};
  margin-bottom: 10px;
`;
const ContentBox = styled.div`
  width: 630px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.Neutral50};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin-bottom: 30px;
  border-radius: 12px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 594px;
    font-size: 16px;
    line-height: 22px;
  }
  @media screen and (max-width: 600px) {
    width: auto;
    max-width: 450px;
    font-size: 14px;
    line-height: 20px;
  }
`;
