import { FirstLabel, Main } from "Components/Labels/Lables";
import React from "react";
import st from "styled-components";
import { myEtc, myFramework, myLanguage, myLibrary } from "Utils/Resume/Skills";

const Container = st.div``;

const RowColumn = st.div`
    display : flex;
    flex-direction :row;
    align-items: center;

    border-bottom : 1px;
    border-style : dotted;
    border-color : gray;
`;

const Spacer = st.div` width : 50px;`;


export const Skills = () =>{
    return(
        <Container>
            <FirstLabel str="Skill Set"/>
            {/** language */}
                <RowColumn>
                    <Main.SkillLabel str="Language"/>
                    <Spacer/>
                    {
                        myLanguage.map(function(item,index){
                            return(
                                <Main.SkillSetLabel 
                                    key={index}
                                    str={item}/>
                            )
                        })
                    }
                </RowColumn>
            {/** framework */}
                <RowColumn>
                    <Main.SkillLabel str="Framework"/>
                    <Spacer/>
                    {
                        myFramework.map(function(item,index){
                            return(
                                <Main.SkillSetLabel 
                                    key={index}
                                    str={item}/>
                            )
                        })
                    }
                </RowColumn>
            {/** library */}
                <RowColumn>
                    <Main.SkillLabel str="Library"/>
                    <Spacer/>
                    {
                        myLibrary.map(function(item,index){
                            return(
                                <Main.SkillSetLabel 
                                    key={index}
                                    str={item}/>
                            )
                        })
                    }
                </RowColumn>
            {/** etc */}
                <RowColumn>
                    <Main.SkillLabel str="Devops"/>
                    <Spacer/>
                    {
                        myEtc.map(function(item,index){
                            return(
                                <Main.SkillSetLabel 
                                    key={index}
                                    str={item}/>
                            )
                        })
                    }
                </RowColumn>
        </Container>
    )
};