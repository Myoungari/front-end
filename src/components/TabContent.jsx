import { styled } from "styled-components";
import moment from "moment";
const TabContent = () => {
  const Data = {
    code: 200,
    data: {
      clubNames: [
        {
          id: 5,
          clubName: "KUSA",
          recruitmentStatus: "Recruiting",
        },
        {
          id: 3,
          clubName: "M.U.V (무브)",
          recruitmentStatus: "Recruiting",
        },
        {
          id: 6,
          clubName: "방울",
          recruitmentStatus: "Recruiting",
        },
        {
          id: 4,
          clubName: "아이사랑",
          recruitmentStatus: "Recruiting",
        },
      ],
      club: {
        id: 5,
        name: "KUSA",
        location: "학관 4층 421호",
        snsLink: "@mju_kusa_",
        introduce:
          "저희 동아리는 타 대학과의 교류 및 연합 활동을 주로 합니다. 활동 시기는 월 1회 정도로 크게 부담되지 않는 선에서 활동을 합니다.\n명지대를 다니고 있지만 다른 대학과의 교류를 원하거나 다양한 사람들 만나보고 싶거나 선배들과 친해지고 싶다면 지금 바로 가입하시면 됩니다^^\n회비는 학기에 2만원입니다~~",
        activity:
          "저희 동아리는 타 대학과 연합하는 활동을 주로 합니다 예를 들어 플로깅활동, 문화 탐방활동도 하고 동아리 부원끼리 자체적인 회식을 통해 친목도모도 합니다!\n매달 1회 주말에 타 대학과 연합활동 (시험기간은 제외)",
        image: {
          imageLink:
            "https://myoungari.s3.ap-northeast-2.amazonaws.com/image/71af50f5-3c78-4a69-b85d-4af76bd21ad9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240829T111504Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIAUPMYM22W56JKKW7R%2F20240829%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=dc82c13f00e5ce1c9895b2de74ab75aec0e2d6ea87a962ff1e531ba35a72597a",
        },
        apply: {
          recruitmentStatus: "Recruiting",
          applyLink:
            "https://docs.google.com/forms/d/1zg6xjdadcmSjBfq7VyjDZS_KQzBCS1Ge8lfMCGqJ4zo/edit",
          recruitStartDate: "2024-09-02",
          recruitEndDate: "2024-09-15",
          qualifications:
            "학년무관/성별무관/여러 사람과 어울리고 싶거나 봉사를 좋아하시는 분",
        },
        president: {
          name: "이창현",
          contact: "010-4375-4356",
          email: "changhyeon55@naver.com",
        },
        category: {
          id: 2,
          name: "service",
        },
      },
    },
  };
  const {
    name,
    image,
    president,
    location,
    snsLink,
    apply,
    introduce,
    activity,
  } = Data.data.club;
  // const startDate = apply.recruitStartDate;
  console.log(Data.data.club);
  const startDate = moment(apply.recruitStartDate).format("YYYY.MM.DD");
  const endDate = moment(apply.recruitEndDate).format("MM.DD");
  const formedDate = `${startDate} - ${endDate}`;
  return (
    <>
      <Container>
        <Header>
          <HeaderContainer>
            <ClubName>{name}</ClubName>
            <ApplyBtn>지원하기</ApplyBtn>
          </HeaderContainer>
        </Header>
        <ContentArea>
          <ProfileWrapper>
            <ProfileImg src={image.imageLink}></ProfileImg>
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
  line-height: 20px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 594px;
    font-size: 16px;
    line-height: 19px;
  }
  @media screen and (max-width: 600px) {
    width: auto;
    max-width: 450px;
    font-size: 14px;
    line-height: 17px;
  }
`;
