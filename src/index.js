import React from "react";
import ReactDOM from "react-dom/client"; // ReactDOM의 createRoot를 사용하려면 'react-dom/client'에서 임포트해야 합니다.
import App from "./App"; // App 컴포넌트
import { RecoilRoot } from "recoil"; // RecoilRoot 임포트

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
