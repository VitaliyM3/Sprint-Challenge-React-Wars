import React from 'react';
import styled from "styled-components";

const CharComp = styled.div`
width: 200px;
height: 300px;
border: 2px solid brown;
background-color: transparent;
display: inline-block;
font-size: 24px;

`;





const Characters = props => {
console.log("character props", props.textContent)





    return (
        <CharComp>
            Name: { props.textContent.name } Birth Year:{ props.textContent.birth_year }
        </CharComp>
        
            
       


    )
};

export default Characters;