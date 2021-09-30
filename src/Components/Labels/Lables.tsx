import React from "react";
import st from "styled-components";
import Color from "Utils/Color";

const Label = st.p`
    color : ${Color.COMMON_COLOR};
    padding : 2px;
`;

const UrlString = st.a`
    color : ${Color.COMMON_COLOR};
`;

interface Props{
    str : string;
    children ?: any;
}

export namespace Header {
    export const NameLabel = ({str}: Props) =>{
        return(
            <Label style={{
                fontSize : 30,
                fontWeight : 'bold',
            }}>{str}</Label>
        )
    };
    
    export const JobLabel = ({str} :Props )=>{
        return(
            <Label style={{
                fontSize : 20,
                fontWeight : 'bold',
                marginTop : 10,
                marginBottom : 10,
            }}>{str}</Label>
        )
    };
    
    export const CommonLabel = ({str} : Props) =>{
        return(
            <Label style={{

            }}>{str}</Label>
        )
    };
};

export namespace Main {
    
    export const DateLabel = ({str} : Props) =>{
        return (
            <Label>{str}</Label>
        )       
    };

    export const TitleLabvel = ({str} : Props) =>{
            return (
                <Label style={{
                    fontWeight : 'bold',
                }}>{str}</Label>
            )
    };

    export const SkillSetLabel = ({str} :Props) =>{
        return(
            <Label className="skill" style={{
                backgroundColor : `${Color.OUTER_BACKGROUND_COLOR}`,
                textAlign: 'center',
                borderRadius : 30,
                padding : 8,
                fontSize : 12,
                margin: 10,
            }}>{str}</Label>
        )
    };

    export const UrlLabel = ({str} : Props) =>{
        return(
            <UrlString href={str}>{str}</UrlString>
        )
    };

    export const CommonLabel = ({str} : Props)=>{
            return (
                <Label style={{
                    lineHeight : 2,
                    display : 'list-item'
                }}>{str} <br/></Label>
            )
    };

    export const SkillLabel = ({str} : Props) =>{
        return (
            <Label style={{
                width : 150,
                margin : 15,
                fontSize : 20,
            }}>{str}</Label>
        )
    };
};

export namespace Footer {

}

export const FirstLabel = ({str} :Props) =>{
    return(
        <Label
            style={{
                marginTop : 30,
                marginBottom : 20,
                textAlign: 'center',
                fontSize : 30,
                width : 250,
                fontWeight : 'bold',
                borderBottom: 4,
                borderStyle : 'solid',
                borderColor : `${Color.COMMON_COLOR}`
            }}>{str}</Label>
    )
}