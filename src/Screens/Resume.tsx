import { Introduce } from "Components/Body/Introduce";
import { Project } from "Components/Body/Project/Project";
import { Skills } from "Components/Body/Skill";
import { School } from "Components/Footer/School";
import { ImageView } from "Components/Header/Image";
import { Profile } from "Components/Header/Profile";
import React from "react";
import st from "styled-components";
import Color from "Utils/Color";

const Container = st.div`
    display: flex;
    flex-direction :column;
    width : 80%;
    background-color : ${Color.INNTER_BACKGROUND_COLOR};
    padding : 10px 20px;
`;

const Header = st.div`
    padding : 10px;
    display: flex;
    flex-direction :row;

    justify-content: space-between;
    align-items: center;
`;
const Main = st.div`
    display : flex;
    flex-direction :column;
`;
const Footer = st.div``;

interface Props{

}

export const Resume = ({} : Props) =>{
    return(
        <Container>
            {/* header = image + profile */}
            <Header>
                <ImageView url="./img/donggyu.png"/>
                <Profile/>
            </Header>
            {/* body = introduce */}
            <Main>
                <Introduce/>
                <Skills/>
                <Project/>
            </Main>
            {/* footer = description */}
            <Footer>
            {/** 특이사항 -> 학교 */}
                <School/>
            </Footer>
        </Container>
    );
};