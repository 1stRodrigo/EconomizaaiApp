import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    margin-top: 12px;
`;
export const Box = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 18px;
    padding-right: 8px;
    margin-bottom: 10px;
`;
    
export const Title = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #FFFFFF;
    margin-bottom: 10px;
    
`;

export const AvatarButton = styled.TouchableOpacity`
    justify-content: end;
`;

export const Avatar = styled.Image`
    border-radius: 100px;
    object-fit: cover;
    width: 45px;
    height: 45px;
    border-color: #FAF7F5;
`;