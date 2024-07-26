import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';

import { 
    Container,
    Background,
    ButtonImage,
    ImageView,
    Image,
    TitlePerfil,
    Message,
    Name,
    NewLink,
    NewText,
    LogoutButton,
    LogoutText,
    DetailsContainer,
    BoxDetails,
    TitleDetail,
    
} from './styles';

import Header from '../../components/Header';

import { AuthContext } from "../../contexts/auth";
import { AvatarContext } from "../../contexts/avatar";

import { useNavigation } from '@react-navigation/native';

export default function Perfil(){
    const { pickImage, image } = useContext(AvatarContext);
    const { signOut, user } = useContext(AuthContext);
    const navigation = useNavigation();
    
    return(
        <Container>
                <Background>

                    <TitlePerfil>Minha conta</TitlePerfil>
                    
                    <ImageView>
                        {image !== null && ( 
                         <Image source={{ uri: image }}/>) || ( <Feather name='user' size={90} color="#262626"/> )} 
                        
                        <ButtonImage onPress={ pickImage }>
                            <Message>Alterar foto</Message>
                        </ButtonImage>
                    </ImageView>

                    <DetailsContainer>
                        <BoxDetails>
                            <TitleDetail>Nome completo</TitleDetail>
                            <Name numberOflines={1} >
                                {user.name}
                            </Name>
                        </BoxDetails>
                    </DetailsContainer>

                    <DetailsContainer>
                        <BoxDetails>
                            <TitleDetail>Email</TitleDetail>
                            <Name numberOflines={1} >
                                {user.email}
                            </Name>
                        </BoxDetails>
                    </DetailsContainer>

                    <DetailsContainer>
                        <BoxDetails>
                            <TitleDetail>Conta criada desde</TitleDetail>
                            <Name numberOflines={1} >
                                12/04/2024
                            </Name>
                        </BoxDetails>
                    </DetailsContainer>

                    <NewLink onPress={ () => navigation.navigate('New') }> 
                        <NewText> Fazer registro </NewText>
                    </NewLink>

                    <LogoutButton onPress={ () => signOut() }>
                        <LogoutText>Sair</LogoutText>
                    </LogoutButton>
            </Background>
        </Container>
    )
}