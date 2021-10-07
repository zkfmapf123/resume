import { Header, Main } from "Components/Labels/Lables";
import React from "react";
import st from "styled-components";
import { ResumeProfile } from "Utils/Resume/Profile";

const Container = st.div``;

export const Profile = () =>{

    return (
        <Container>
            <Header.NameLabel str={ResumeProfile.name}/>
            <Header.JobLabel str={ResumeProfile.want}/>
            <Header.CommonLabel str ={ResumeProfile.job}/>
            <Header.CommonLabel str ={ResumeProfile.year}/>
            <Main.UrlLabel str ={ResumeProfile.email}/>
            <Main.UrlLabel str ={ResumeProfile.github}/>
            <Main.UrlLabel str ={ResumeProfile.blog}/>
            <Header.CommonLabel str ={"010 - 9341 -1762"}/>
        </Container>
    );    
};