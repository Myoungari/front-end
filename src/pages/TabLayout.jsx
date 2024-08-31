import React from "react";
import ContentHeader from "../components/ContentHeader";
import { Outlet } from "react-router-dom";
import ClubsTabBar from "../components/ClubsTabBar";

const TabLayout = () => {
  const datas = {
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
        id: 6,
        name: "방울",
        location: "학관 5층 533호 (Y1533)",
        snsLink: "@mju.bell",
        introduce:
          "🫧유기동물보호 관련 봉사하고 싶은데, 하는 방법을 모르시는 분\n🫧동물에게 아낌없이 사랑을 주며 봉사 시간을 채우고 싶으신 분\n🫧새로운 사람과 함께 시간 보내는 것을 좋아하시는 분\n\n위 내용 중 하나라도 해당되시는분 모두 🐶유기동물 봉사동아리 방울🔔에서 환영합니다🐾\n",
        activity:
          "1️⃣용인시 유기동물보호센터, 대형견 산책 봉사 (평일)\n-> 매주 1회 이상 (시험 기간 제외) 봉사활동\n\n2️⃣유기동물보호센터 견사 청소 봉사\n-> 매월 2회 이상 (시험 기간 제외) 봉사활동\n\n3️⃣짝선배&짝후배 활동\n\n4️⃣방학 중 수도권에 있는 유기동물보호센터 방문\n1. 매 학기 개강, 종강시즌, 중간고사 이후\n\n2. 친목도모활동 (단체회식)",
        image: {
          imageLink:
            "https://myoungari.s3.ap-northeast-2.amazonaws.com/image/3c887574-613d-437c-a8c3-940fbe14d3f6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240829T094209Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIAUPMYM22W56JKKW7R%2F20240829%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=704918d657c43bcd953a85b2c121ecf3c3a0c132e8f523b536c7e70c62ce6a0e",
        },
        apply: {
          recruitmentStatus: "Recruiting",
          applyLink: "https://forms.gle/GR67iFPqkSgeJEaG6",
          recruitStartDate: "2024-08-01",
          recruitEndDate: "2024-09-30",
          qualifications:
            "학년무관 / 성별무관 /\n🫧유기동물보호 관련 봉사하고 싶은데, 하는 방법을 모르시는 분\n🫧동물에게 아낌없이 사랑을 주며 봉사 시간을 채우고 싶으신 분",
        },
        president: {
          name: "문현희",
          contact: "010-7663-5737",
          email: "ansgusgml529@naver.com",
        },
        category: {
          id: 2,
          name: "service",
        },
      },
    },
  };

  return (
    <>
      <ContentHeader />
      <ClubsTabBar data={datas} />
      <Outlet />
    </>
  );
};

export default TabLayout;
