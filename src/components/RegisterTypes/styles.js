import styled from 'styled-components/native';

export const RegisterContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const BoxIcon = styled.View`
    flex-direction: column;
    align-items: center;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
    background-color: ${props => props.checked ? '#FFF2E5' : '#FAF7F5' };
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 50px;
    border-width: 1.5px;
    border-color: ${props => props.checked ? '#EC7000' : 'transparent' };
    //margin-bottom: 14px;
`;

export const RegisterLabel = styled.Text`
    color: #0D0D0D;
    font-weight: 500;
    font-size: 17px;
`;




