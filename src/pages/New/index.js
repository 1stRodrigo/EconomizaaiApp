import React, { useState, useContext } from "react";
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import { HomeContext } from "../../contexts/home";

import api from '../../services/api';
import Header from '../../components/Header'
import RegisterTypes from "../../components/RegisterTypes";

import { 
    Background, 
    Input, 
    SubmitButton, 
    SubmitText, 
    TextInput,
    ContainerNew,
    BoxRegister,
    TitleNew,
    TextNew,
    NewView

} from "./styles";

export default function New(){
    const { type, setType } = useContext(HomeContext);
    //const { buttonNew } = route.params;
    const navigation = useNavigation();
    
    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    

    function handleSubmit(){
        Keyboard.dismiss();

        if(isNaN(parseFloat(valueInput)) || type === null){
            alert('Preencha todos os campos')
            return;
        }

        Alert.alert(
            'Confirme os dados',
            `O tipo: ${type} | Valor: ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text:'Continuar',
                    onPress:() => handleAdd()
                }
            ]
        )
    }

    async function handleAdd(){
        Keyboard.dismiss();

        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        })

        setLabelInput('');
        setValueInput('');
        setType('');
        navigation.navigate('Home');
    }



    return(
            <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
        <Background>
            <Header title="Registrando" />
                <NewView>
                    <SafeAreaView style={{marginTop: 14,}}>

                        <ContainerNew>
                            <TitleNew>Faça um novo registro</TitleNew>
                            <TextNew>Selecione entre receitas e despesas!</TextNew>
                        </ContainerNew>
                        
                            <ContainerNew>
                                    <BoxRegister>
                                        <TextInput>Descrição do registro</TextInput>
                                            <Input
                                                placeholder="Descrição do registro"
                                                value={labelInput}
                                                onChangeText={ (text) => setLabelInput(text) }
                                            />
                                    </BoxRegister>
                            </ContainerNew>
                        
                            <ContainerNew>
                                    <BoxRegister>
                                        <TextInput>Valor</TextInput>
                                            <Input
                                                placeholder="Digite aqui um valor"
                                                keyboardType="numeric"
                                                value={valueInput}
                                                onChangeText={ (text) => setValueInput(text) }
                                            />
                                    </BoxRegister>
                            </ContainerNew>

                        <RegisterTypes type={type} sendTypeChanged={ (item) => setType(item) } />

                        <SubmitButton onPress={ handleSubmit }>
                            <SubmitText>Registrar</SubmitText>
                        </SubmitButton>

                    </SafeAreaView>
                </NewView>
        </Background>
        </TouchableWithoutFeedback>
    )
}