import { Reset } from "styled-reset";
import HeaderLayout from "./components/Layouts/HeaderLayout/HeaderLayout";
import { Global } from "@emotion/react";
import * as S from "./styles/common";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import MainContainer from "./components/Containers/MainContainer/MainContainer";
import { Route, Routes } from "react-router-dom";
import MyProjects from "./pages/MyProjects/MyProjects";
import MyShareProjects from "./pages/MyShareProjects/MyShareProjects";

function App() {
  return (
    <>
      <Reset />
      <Global styles={S.SCommon} />
      <MainLayout>
        <HeaderLayout />
        <MainContainer>
          <Routes>
            <Route path="/projects/my" element={ <MyProjects />}/>
            <Route path="/projects/share" element={ <MyShareProjects />}/>
          </Routes>
        </MainContainer>
      </MainLayout>
    </>
  );
}

export default App;
