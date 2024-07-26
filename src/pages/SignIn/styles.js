import styled from 'styled-components/native';

export const Background = styled.View`
  flex:1;
  background-color: #FFF;
`
export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
  height: 80px;
  width: 100%;

`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color: #F2F2F2;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 32px;
  color: #262626;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 32px;
  background-color: #0D0D0D;
  margin-top: 10px;
  align-items: center;
  justify-content: center;

`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #F2F2F2;

`;
export const TextScreen = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #0D0D0D;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled.Text`
  color: #0D0D0D;
`;
