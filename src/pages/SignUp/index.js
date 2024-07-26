import React, { useContext, useState } from "react";
import { Platform, ActivityIndicator } from 'react-native';

import {
    Background, 
    Container, 
    AreaInput, 
    Input, 
    SubmitButton, 
    SubmitText,
    TextScreen 
} from '../SignIn/styles'

import { AuthContext } from '../../contexts/auth'

export default function SignUp(){

    const { signUp, loadingAuth } = useContext(AuthContext)
    const [nome ,setNome] = useState('');
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');

    function handleSignUp(){
        if(nome === '' || email === '' || password === '') return alert('Preencha todos os campos corretamente');

        signUp(email, password, nome);
    }

    return(
        <Background>
            <Container
             behavior={Platform.OS === 'ios' ? 'padding' : ''}
             enabled>
                <TextScreen>
                    Insira os dados abaixo
                </TextScreen>

                <AreaInput>
                    <Input
                    placeholder="Seu nome"
                    value={nome}
                    onChangeText={ (text) => setNome(text) }
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                    placeholder="Seu email"
                    value={email}
                    onChangeText={ (text) => setEmail(text) }
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                    placeholder="Sua senha"
                    value={password}
                    onChangeText={ (text) => setPassword(text) }
                    secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={ handleSignUp } >
                    {
                        loadingAuth ? 
                        (
                            <ActivityIndicator size={20} color="#F2F2F2" />
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                </SubmitButton>
            </Container>
        </Background>
    )
}