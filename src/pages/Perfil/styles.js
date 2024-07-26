import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ec7000;

`;

export const Background = styled.View`
    background-color: #FFF;
    width: 100%;
    flex: 1;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    border-top-right-radius: 23px;
    border-top-left-radius: 23px;
`;
export const ImageView = styled.View`
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const ButtonImage = styled.TouchableOpacity`

`;
export const Image = styled.Image`
    border-radius: 100px;
    object-fit: cover;
    width: 120px;
    height: 120px;
`;

export const TitlePerfil = styled.Text`
    font-size: 25px;
    font-weight: 600;
    color: #262626;
    text-align: center;
`;

export const Message = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: #003399;
    text-align: center;
`;

export const Name = styled.Text`
    font-size: 15px;
    font-weight: 400;
    color: #262626;
`;

export const DetailsContainer = styled.View`
    justify-content: flex-start;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 15px;
`;

export const BoxDetails = styled.View`
    background-color: #fff;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 10px;
    margin-top: 1px;
    border-width: 1.5px;
    border-color: #19191919;
    border-radius: 12px;
`;

export const TitleDetail = styled.Text`
    font-weight: 500;
    color: #0d0d0d;
    margin-bottom: 3px;
`;

export const NewLink = styled.TouchableOpacity`
    background-color: #0D0D0D;
    width: 90%;
    height: 45px;
    border-radius: 12px;
    margin-right: 16px;
    margin-left: 16px;
    margin-bottom: 16px;
    align-items: center;
    justify-content: center;
`;

export const NewText = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: #FFF;
`;

export const LogoutButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    margin-left: 16px;
    margin-bottom: 16px;
    height: 45px;
    border-radius: 12px;
    border-width: 1.5px;
    border-color: #E0452D;
    
`;

export const LogoutText = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: #EC7000;
`;
