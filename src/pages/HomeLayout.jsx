// import { styled } from "styled-components";
// import ContentHeader from "../components/ContentHeader";
// import SearchBar from "../components/SearchBar";
// import DetailBtn from "../components/DetailBtn";
// import { AxiosMainGet } from "../api/AxiosMain";
// import { useState, useEffect } from "react";

// const HomeLayout = () => {
//   const [data, setData] = useState([]);
//   const fetchData = async () => {
//     try {
//       const response = await AxiosMainGet();
//       setData(response.data.content);
//       console.log(response.data.content);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <Wrapper>
//         <ContentHeader length={data.length} />
//         <SearchBar />
//         <BtnArea>
//           {data.map((data, index) => (
//             <DetailBtn data={data} key={index} />
//           ))}
//         </BtnArea>
//       </Wrapper>
//     </>
//   );
// };

// export default HomeLayout;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const BtnArea = styled.div`
//   width: 1122px;
//   height: auto;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 28px 35px;
//   @media screen and (max-width: 1150px) {
//     width: 736px;
//   }
//   @media screen and (max-width: 750px) {
//     width: 350px;
//   }
// `;
