import React, { createContext, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

export const HomeContext = createContext({});

function HomeProvider({ children }){
    const navigation = useNavigation()
    const [ type, setType] = useState('');

    function buttonRevenue(){
        navigation.navigate('New');
        
        setType('');
        setType('receita');
    }
    function buttonExpense(){
        navigation.navigate('New');

        setType('');
        setType('despesa');
    }

    //criando um contexto com o navigation e o setType despesas / set type receitas e passando para o component RegisterTypes
    return(
        <HomeContext.Provider value={{ buttonRevenue, buttonExpense, type, setType }}>
            {children}
        </HomeContext.Provider>
    )

}

export default HomeProvider;