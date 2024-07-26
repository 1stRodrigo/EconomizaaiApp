import React from 'react';
import { View , TouchableWithoutFeedback, Alert } from 'react-native';
import {
    Container, 
    TipoText,
    DescripText, 
    Tipo,
    ValorText,
    ValorView,
    IconView,
    Icon,
    ContainerHistoric
} from './styles';

import { Feather } from '@expo/vector-icons';


export default function HistoricList({data, deleteItem}){
    function handleDeleteItem(){
        Alert.alert(
            'Atenção',
            'Você tem certeza que deseja deletar esse registro?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => deleteItem(data.id)
                }
            ]
        )
    }


    return(
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
            <Container>
                
                    <IconView>
                            <Icon tipo={data.type}>
                                <Feather
                                    name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} 
                                    size={20} 
                                    color={data.type === 'despesa' ? '#87878C' : '#F25C05'}/>
                            </Icon>
                        <Tipo> 
                            <DescripText>{data.description}</DescripText>
                            <TipoText>{data.type}</TipoText>
                        </Tipo>
                    </IconView>

                    <ValorView>
                        <ValorText color={data.type === 'despesa' ? '#87878C' : '#F25C05'}>
                            R$ {data.value}
                        </ValorText>
                    </ValorView>
                
            </Container>
        </TouchableWithoutFeedback>
    )
}