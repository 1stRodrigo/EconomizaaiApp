import React, { useContext, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { AvatarContext } from '../../contexts/avatar';

import { Container, Title, Box, AvatarButton, Avatar } from "./styles";

export default function Header({ title }){
  const { image } = useContext(AvatarContext);
  const navigation = useNavigation();

    return(
      <Container>
        <Box>
          { title && (
              <Title>
                  {title}
              </Title>
          )}
          <AvatarButton onPress={ () => navigation.navigate('Perfil')}>
            {
              image !== null && (
                <Avatar source={{ uri: image }}/>
              ) || ( <Feather name='user' size={30} color="#FFFFFF"/> )
            }
          </AvatarButton>
        </Box>
      </Container>  
    )
}