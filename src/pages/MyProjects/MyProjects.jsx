import React from 'react';
/** @jsxImportSource @emotion/react */
import ProjectSidebar from '../../components/Sidebars/ProjectSidebar/ProjectSidebar';
import ProjectContainer from '../../components/Containers/ProjectContainer/ProjectContainer';
import TitleContainer from '../../components/Containers/TitleContainer/TitleContainer';
import ProjectOption from '../../components/ProjectOption/ProjectOption';
import ProjectDashboard from '../../components/ProjectDashboard/ProjectDashboard';

function MyProjects(props) {
    return (
      <>
        <TitleContainer title={"프로젝트 대쉬보드"}>
          <ProjectOption />
        </TitleContainer>
        <ProjectContainer>
          <ProjectSidebar />
          <ProjectDashboard />
        </ProjectContainer>
      </>
    );
}

export default MyProjects;