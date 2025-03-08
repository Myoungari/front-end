import React, { useState, useCallback, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { activeClubIdState } from "../atoms/activeClubId";
import ContentHeader from "../components/ContentHeader";
import ClubsTabBar from "../components/ClubsTabBar";
import TabBar from "../components/TabBar";
import DetailBtn from "../components/DetailBtn";
import {
  AxiosCategoryGet,
  AxiosMainGet,
  AxiosCategoryNDetailGet,
} from "../api/AxiosMain";
import Loading from "../components/Loading";

const TabLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mainData, setMainData] = useState([]);
  const [categoryData, setCategoryData] = useState({
    clubNames: [],
    clubDetail: {},
  });
  const [isLoading, setIsLoading] = useState(true);
  const [activeClubId, setActiveClubId] = useRecoilState(activeClubIdState);

  // `fetchCategoryData`를 useCallback으로 감싸서 의존성 배열에 포함하도록 수정
  const fetchCategoryData = useCallback(
    async (url) => {
      if (url === "/") return;

      const category = url.split("/")[1];
      const clubId = url.split("/")[2];

      try {
        const categoryResponse = await AxiosCategoryGet(category);
        const firstClubId = categoryResponse.clubNames[0]?.id;
        const newActiveId = clubId || firstClubId;

        if (newActiveId) {
          const detailResponse = await AxiosCategoryNDetailGet(
            category,
            newActiveId
          );

          setCategoryData({
            ...categoryResponse,
            clubDetail: detailResponse.clubDetail,
          });

          setActiveClubId(newActiveId); // ✅ activeClubId 업데이트
        } else {
          setCategoryData(categoryResponse);
        }
      } catch (error) {
        console.error("카테고리 데이터 가져오기 오류: ", error);
      } finally {
        setIsLoading(false);
      }
    },
    [setActiveClubId]
  );

  useEffect(() => {
    setIsLoading(true);
    if (location.pathname === "/") {
      fetchMainData();
    } else {
      fetchCategoryData(location.pathname);
    }
  }, [location.pathname, fetchCategoryData]); // ✅ fetchCategoryData를 의존성 배열에 추가

  const fetchMainData = async () => {
    try {
      const response = await AxiosMainGet();
      setMainData(response.data);
    } catch (error) {
      console.error("메인 데이터 가져오기 오류:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTabClick = useCallback(
    (url) => {
      navigate(url);
      setActiveClubId(null); // ✅ TabBar에서 탭 변경 시 activeClubId 초기화 (첫 번째 클럽 선택을 유도)
    },
    [navigate, setActiveClubId]
  );

  const handleClubSelect = useCallback(
    async (clubId) => {
      console.log("클럽 선택됨 (이전 값):", activeClubId);
      console.log("새로운 클럽 ID:", clubId);

      if (activeClubId !== clubId) {
        const category = location.pathname.split("/")[1];

        try {
          const detailResponse = await AxiosCategoryNDetailGet(
            category,
            clubId
          );

          setCategoryData((prevData) => ({
            ...prevData,
            clubDetail: detailResponse.clubDetail,
          }));

          setActiveClubId(clubId);

          console.log("✅ activeClubId 업데이트 완료:", clubId);

          navigate(`/${category}/${clubId}`);
        } catch (error) {
          console.error("클럽 데이터 가져오기 오류:", error);
        }
      }
    },
    [location.pathname, navigate, activeClubId, setActiveClubId] // ✅ 의존성 배열에 setActiveClubId 추가
  );

  const renderCategoryContent = () => (
    <Container>
      <ContentHeader length={"26"} />
      <TabBar onTabClick={handleTabClick} categoryData={categoryData} />
      <ClubsTabBar
        data={categoryData}
        activeClubId={activeClubId}
        onClubSelect={handleClubSelect}
      />
      <Outlet context={categoryData} />
    </Container>
  );

  const renderMainContent = () => (
    <Container>
      <Wrapper>
        <ContentHeader length={"26"} />
        <TabBar onTabClick={handleTabClick} />
        <BtnArea>
          {mainData.map((item, index) => (
            <DetailBtn
              data={item}
              key={index}
              onClick={() => setActiveClubId(item.id)} // ✅ DetailBtn 클릭 시 activeClubId 설정
            />
          ))}
        </BtnArea>
      </Wrapper>
    </Container>
  );

  if (isLoading) {
    return <Loading />;
  }

  return location.pathname === "/"
    ? renderMainContent()
    : renderCategoryContent();
};

export default TabLayout;

const Container = styled.div`
  margin-top: 105px;
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 75px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BtnArea = styled.div`
  width: 1122px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 28px 35px;
  margin-top: 35px;
  @media screen and (max-width: 1150px) {
    width: 736px;
  }
  @media screen and (max-width: 750px) {
    width: 350px;
  }
`;
