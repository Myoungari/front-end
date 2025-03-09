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
  AxiosTotalNumGet,
} from "../api/AxiosMain";
import Loading from "../components/Loading";

const TabLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mainData, setMainData] = useState([]);
  const [categoryData, setCategoryData] = useState({
    clubNames: null,
    clubDetail: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [activeClubId, setActiveClubId] = useRecoilState(activeClubIdState);
  const [totalNum, setTotalNum] = useState(0);

  const fetchCategoryData = useCallback(
    async (url) => {
      if (url === "/") return;

      const category = url.split("/")[1];
      const clubId = url.split("/")[2];

      try {
        const TotalNum = await AxiosTotalNumGet();
        const categoryResponse = await AxiosCategoryGet(category);
        setTotalNum(TotalNum);

        // clubNames가 null이거나 빈 배열인 경우 처리
        if (
          !categoryResponse.clubNames ||
          categoryResponse.clubNames.length === 0
        ) {
          setCategoryData(categoryResponse);
          setActiveClubId(null);
          setIsLoading(false);
          return;
        }

        const firstClubId = categoryResponse.clubNames[0]?.id;
        const newActiveId = clubId || firstClubId;

        if (newActiveId) {
          try {
            const detailResponse = await AxiosCategoryNDetailGet(
              category,
              newActiveId
            );

            setCategoryData({
              ...categoryResponse,
              clubDetail: detailResponse.clubDetail,
            });

            setActiveClubId(newActiveId);
          } catch (detailError) {
            console.error("클럽 상세 데이터 가져오기 오류:", detailError);
            setCategoryData(categoryResponse);
          }
        } else {
          setCategoryData(categoryResponse);
        }
      } catch (error) {
        console.error("카테고리 데이터 가져오기 오류: ", error);
        setCategoryData({ clubNames: null, clubDetail: null });
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
  }, [location.pathname, fetchCategoryData]);

  const fetchMainData = async () => {
    try {
      const response = await AxiosMainGet();
      const TotalNum = await AxiosTotalNumGet();
      setTotalNum(TotalNum);
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
      setActiveClubId(null);
    },
    [navigate, setActiveClubId]
  );

  const handleClubSelect = useCallback(
    async (clubId) => {
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

          navigate(`/${category}/${clubId}`);
        } catch (error) {
          console.error("클럽 데이터 가져오기 오류:", error);
        }
      }
    },
    [location.pathname, navigate, activeClubId, setActiveClubId]
  );

  const renderCategoryContent = () => (
    <Container>
      <ContentHeader length={totalNum} />
      <TabBar onTabClick={handleTabClick} categoryData={categoryData} />
      {categoryData.clubNames && categoryData.clubNames.length > 0 ? (
        <ClubsTabBar
          data={categoryData}
          activeClubId={activeClubId}
          onClubSelect={handleClubSelect}
        />
      ) : null}
      <Outlet context={categoryData} />
    </Container>
  );

  const renderMainContent = () => (
    <Container>
      <Wrapper>
        <ContentHeader length={totalNum} />
        <TabBar onTabClick={handleTabClick} />
        <BtnArea>
          {mainData.map((item, index) => (
            <DetailBtn
              data={item}
              key={index}
              onClick={() => setActiveClubId(item.id)}
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
