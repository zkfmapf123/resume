import { FirstLabel, Main } from "Components/Labels/Lables";
import React from "react";
import st from "styled-components";
import { MyProject } from "Utils/Resume/Project";

const Container = st.div``;

const RowColumn = st.div`
    display: flex;
    flex-direction :row;
    margin : 20px 0px;
    padding-bottom : 20px;
    border-bottom : 1px;
    border-style : dotted;
    border-color : gray;
`;

const SkillColumn =st.div`
    display : grid;
    grid-template-columns : 1fr 1fr 1fr;
`;

const DateColumn = st.div`
    display : flex;
    flex : 0.5;
    margin-top : 20px;
`;
const TitleColumn = st.div`
    display : flex;
    flex :1;
    flex-direction : column;
    margin-top : 20px;
`;
const DescriptionColumn = st.div`
    display : flex;
    flex-direction :column;
    flex : 1;
`;

export const Project = () =>{

    return(
        <Container>
            <FirstLabel str="개인/팀 프로젝트"/>
            {
                MyProject.map(function(item, index){
                    const {date, title, skillSet, person, description, url} = item; 

                    return(
                        <RowColumn key={index}>
                            <DateColumn>
                                <Main.DateLabel str={date}/>
                            </DateColumn>
                            <TitleColumn>
                                <Main.TitleLabvel str={title}/>
                            </TitleColumn>
                            <DescriptionColumn>
                                <SkillColumn>
                                {
                                    /** skill set */
                                    skillSet.map(function(item,index){
                                        return(
                                                <Main.SkillSetLabel key={index} str={item}/>
                                        )
                                    })
                                }
                                </SkillColumn>
                                { 
                                    /** description */
                                    description.map(function(item,index){
                                        
                                        return(
                                            <Main.CommonLabel key={index} str={item}/>
                                        )
                                    })
                                }
                                <Main.UrlLabel str={url}/>
                            </DescriptionColumn>
                        </RowColumn>
                    )
                })
            }
        </Container>
    )
};


