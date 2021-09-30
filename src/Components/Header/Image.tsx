import React from "react";
import st from "styled-components";

const Img = st.img`
    width : 200px;
    height : 200px;
    border-radius : 100px;
`;

interface Props{
    url : string;
};

export const ImageView = ({url} : Props) =>{
    
    return(
        <Img src={url}/>
    )
}
