import { Header } from "Components/Labels/Lables";
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
            <Header.CommonLabel str ={ResumeProfile.email}/>
            <Header.CommonLabel str ={ResumeProfile.github}/>
            <Header.CommonLabel str ={ResumeProfile.blog}/>
        </Container>
    );    
};