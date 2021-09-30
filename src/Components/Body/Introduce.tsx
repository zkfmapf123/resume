import { FirstLabel } from "Components/Labels/Lables";
import React from "react";
import st from "styled-components";
import Color from "Utils/Color";
import { INTRODUCE_STRING } from "Utils/Resume/Introduce";

const Container = st.div``;
const HeaderLabel = st.p``;
const Label = st.p`
    letter-spacing: 2px;
    padding : 2px;
    font-size : 15px;
    color : ${Color.COMMON_COLOR};
`;

export const Introduce = () =>{

    return(
        <Container>
            <FirstLabel str="자기소개"/>
            {
                INTRODUCE_STRING.split("\n").map((item,index)=>{
                    return(
                        <Label
                            key={index}>
                            {item}
                            <br/>
                        </Label>
                    )
                })
            }
        </Container>
    );
};