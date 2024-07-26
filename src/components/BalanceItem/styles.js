import styled from "styled-components";

export const Container = styled.View`
    background-color: #FF9838;
    margin-right: 5px;
    margin-left: 10px;
    padding-left: 20px;
    justify-content: center;
    align-items: flex-start;
    width: 300px;
    border-color: #${props => props.card};
    border-radius: 25px;
    
`;

export const Label = styled.Text`
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
`;

export const Balance = styled.Text`
    font-weight: 300;
    font-size: 42px;
    color: #FFFFFF;
    
`;