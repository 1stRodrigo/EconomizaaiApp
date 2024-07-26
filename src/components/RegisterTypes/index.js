import React, { useState } from 'react';
import { 
    RegisterContainer, 
    RegisterTypeButton, 
    RegisterLabel,
    BoxIcon
} from './styles';
import { Feather } from '@expo/vector-icons'


export default function RegisterTypes({ type, sendTypeChanged }){
    const [typeChecked, setTypeChecked] = useState(type)

    function changeType(name) {
        if(name === 'receita'){
            setTypeChecked('receita');
            sendTypeChanged('receita');
        }else{
            setTypeChecked('despesa');
            sendTypeChanged('despesa');
        }
    }

    return(
        <RegisterContainer>
            <BoxIcon>
                <RegisterTypeButton 
                checked={ typeChecked === 'receita' ? true : false } 
                onPress={ () => changeType('receita') }
                >
                    <Feather name='arrow-up' size={22} color="#FF9838" />
                </RegisterTypeButton>
                    <RegisterLabel>
                        Receita
                    </RegisterLabel>
            </BoxIcon>

            <BoxIcon>
                <RegisterTypeButton 
                checked={ typeChecked === 'despesa' ? true : false }
                onPress={ () => changeType('despesa') }
                >
                    <Feather name='arrow-down' size={22} color="#FF9838" />
                </RegisterTypeButton>
                    <RegisterLabel>
                        Despesa
                    </RegisterLabel>
            </BoxIcon>

        </RegisterContainer>
    )
}