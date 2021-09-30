import { FirstLabel, Main } from "Components/Labels/Lables";
import React from "react";
import st from "styled-components";
import { MyProject } from "Utils/Resume/Project";

const Container = st.div``;

const RowColumn = st.div`
    display: flex;
    flex-direction :row;
    margin : 20px 0px;
    
    align-items: center;
    padding-bottom : 20px;
    border-bottom : 1px;
    border-style : dotted;
    border-color : gray;
`;

const SkillColumn =st.div`
    display : flex;
    flex : 1;
    flex-direction : row;
    align-items: center;
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

export const School = () =>{

    return(
        <Container>
            <FirstLabel str="기타 사항"/>
            <RowColumn>
                <DateColumn>
                    2014.03 ~ 2021.09
                </DateColumn>
                <TitleColumn>
                    경동대학교
                </TitleColumn>
                <SkillColumn>
                    컴퓨터공학과 졸업 (경찰행정학과 전과)
                </SkillColumn>
            </RowColumn>
            <RowColumn>
                <DateColumn>
                    2015.5 ~ 2017.2
                </DateColumn>
                <TitleColumn>
                    병역
                </TitleColumn>
                <SkillColumn>
                    육군병장 만기 제대 (15사단)
                </SkillColumn>
            </RowColumn>
        </Container>
    )
};


