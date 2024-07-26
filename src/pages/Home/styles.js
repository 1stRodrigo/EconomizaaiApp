import styled from 'styled-components/native';

export const Background = styled.SafeAreaView`
    flex: 1;
    background-color: #EC7000;
`;

export const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

export const ListBalance = styled.FlatList`
    max-height: 150px;
`;

export const Area = styled.View`
    background-color: #FFFFFF;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    flex-direction: row;
    margin-top: 10px;
    margin-left: 8px;
    margin-right: 8px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    justify-content: space-between;
    align-items: baseline;
`;

export const HomeView = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 10px;
    margin-top: 10px;
    width: 90%;
    //margin-left: 15px;
    //margin-right: 15px;
    background-color: #FFFFFF;
    border-radius: 20px;
`;

export const HomeButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 8px;
    padding: 15px;
    border-right-width: 0.5px;
    border-right-color: #F27405;
`;

export const TextButton = styled.Text`
    color: #F25C05;
    flex-wrap: wrap;
`;

export const MessageView = styled.View`
    width: 90%;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-direction: row;
    background-color: #FFFFFF;
    padding: 5px;
    border-radius: 20px;
    margin-left: 15px;
    margin-right: 15px;

`;

export const BoxView = styled.View`
    background-color: #FFFFFF;
    padding: 4px;
    border-radius: 100px;
`;

export const BoxText = styled.Text`
    color: #212226;
`;

export const Title = styled.Text`
    margin-left: 3px;
    color: #212226;
    margin-bottom: 14px;
    font-weight: 500;
    font-size: 20px;
`;

export const FilterButton = styled.TouchableOpacity`
    
`;

export const FilterText = styled.Text`
    color: #212226;
    font-weight: 400;
`;

export const List = styled.FlatList`
    flex: 1;
    margin-left: 8px;
    margin-right: 8px;
    background-color: #FFFFFF;

`;