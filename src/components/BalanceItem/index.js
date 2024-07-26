import React, { useMemo } from 'react';
import { Container, Label, Balance } from './styles';

export default function BalanceItem({ data }){

    const labelName = useMemo( () => {
        if(data.tag == 'saldo'){
            return{
                label: 'Saldo atual',
                color: '5BD96E'
            }
        }else if(data.tag === 'receita'){
            return{
                label: 'Entradas de hoje',
                color: '00A5F2',
            }
        }else{
            return{
            label: 'Saídas de hoje',
            color: 'F2620F'
            }
        }
    }, [data])
    return(
        <Container card={labelName.color}>
            <Label>{labelName.label}</Label>
            <Balance>R${data.saldo}</Balance>
        </Container>
    )
}