import React from 'react';
import TitleContainer from '../../components/Containers/TitleContainer/TitleContainer';
import ProjectOption from '../../components/ProjectOption/ProjectOption';
import ProjectContainer from '../../components/Containers/ProjectContainer/ProjectContainer';
import ProjectSidebar from '../../components/Sidebars/ProjectSidebar/ProjectSidebar';

function MyShareProjects(props) {
    return (
        <>
            <TitleContainer title={"프로젝트 대쉬보드"}>
                <ProjectOption />
            </TitleContainer>
            <ProjectContainer>
                <ProjectSidebar />
                
            </ProjectContainer>
        </>
    );
}

export default MyShareProjects;