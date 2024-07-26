import styled from 'styled-components/native';

export const Container = styled.View`
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 14px;
    padding: 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerHistoric = styled.View`
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 14px;
    padding: 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Tipo = styled.View`
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 10px;
`;

export const TipoText = styled.Text`
    color: #87878C;
    font-weight: 400;
    font-size: 16px;
`;

export const DescripText = styled.Text`
    color: #212226;
    font-weight: 600;
    font-size: 17px;
`;

export const IconView = styled.View`
    flex-direction: row;
    align-items: center;
    //padding-bottom: 0px;
    //padding-top: 0px;
    margin-left: 3px;
    border-radius: 10px;
`;


export const Icon = styled.View`
    background-color: ${props => props.tipo === 'despesa' ? '#FAF7F5' : '#FFF2E5'};
    padding: 13px;
    border-radius: 20px;
    border-width: 1.5px;
    border-color: ${props => props.tipo === 'despesa' ? '#D6D0CC' : '#EC7000'};
`;

export const ValorView = styled.View`

`;

export const ValorText = styled.Text`
    color: #212226;
    font-size: 20px;
`;