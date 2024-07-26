import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, Modal, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { format } from 'date-fns'

import { AuthContext } from "../../contexts/auth";
import { HomeContext } from "../../contexts/home";

import { Feather } from '@expo/vector-icons';
import BalanceItem from "../../components/BalanceItem";
import HistoricList from '../../components/HistoricList';
import CalendarModal from '../../components/CalendarModal';
import Header from '../../components/Header';

import api from '../../services/api';

import { 
    Background,
    Container,

    ListBalance,
    Area,
    Title,
    List,
    FilterText,
    FilterButton,
    
    HomeView,
    HomeButton,
    TextButton,
    
    MessageView,
    BoxView,
    BoxText,

} from './styles';


export default function Home(){
    
    const { buttonRevenue, buttonExpense, type } = useContext(HomeContext);

    const navigation = useNavigation();

    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const [movements, setMovements] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const [dateMovements, setDateMovements] = useState(new Date())

    useEffect( () => {
        let isActive = true;

        async function getMovements(){
            let date = new Date(dateMovements)
            let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
            let dateFormated = format(onlyDate, 'dd/MM/yyyy');

            const receives = await api.get('/receives', {
                params:{
                    date: dateFormated
                }
            })

            const balance = await api.get('/balance', {
                params:{
                    date: dateFormated
                }
            })
            if(isActive){
                setMovements(receives.data);
                setListBalance(balance.data);
            }
        }

        getMovements();


        return () => isActive = false;
    }, [isFocused, dateMovements])


    async function handleDelete(id){
        try{
            await api.delete('/receives/delete', {
                params:{
                    item_id: id
                }
            })
            setDateMovements(new Date())
        }catch(err){
            console.log(err)
        }
    } 

    function filterDateMovements(dateSelected){
        setDateMovements(dateSelected);
    }


    return(
        <Background>
            <Header title="Movimentações"/>

            <ListBalance
            data={listBalance}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={ item => item.tag }
            renderItem={ ({ item }) => ( <BalanceItem data={item} /> )}
            />

            <Container>
                <HomeView>
                    <HomeButton 
                        onPress={ buttonRevenue }>
                        <BoxView>
                            <Feather name='arrow-up' size={20} color="#F25C05"/>
                        </BoxView>
                        <TextButton>Receita</TextButton>
                    </HomeButton>
                    
                    <HomeButton onPress={ buttonExpense }>
                        <BoxView>
                            <Feather name='arrow-down' size={20} color="#F25C05" />
                        </BoxView>
                        <TextButton>Despesa</TextButton>
                    </HomeButton>

                    <HomeButton onPress={ () => setModalVisible(true)}>
                        <BoxView>
                            <Feather name='filter' size={20} color="#F25C05" />
                        </BoxView>
                        <TextButton>Filtrar</TextButton>
                    </HomeButton>

                </HomeView>
            
                <MessageView>
                    <BoxView>
                        <Feather name="check" size={15} color="#4657E3"/>
                    </BoxView>
                        <BoxText>
                            Comece a economizar agora!
                        </BoxText>
                </MessageView>
            </Container>

            <Area>
                <TouchableOpacity>
                    <Title>Transações</Title>
                </TouchableOpacity>

                <FilterButton onPress={ () => setModalVisible(true) }>
                    <FilterText>Filtrar</FilterText>
                </FilterButton>
            </Area>

            <List 
                data={movements}
                keyExtractor={ item => item.id }
                renderItem={ ({item}) => <HistoricList data={item} deleteItem={handleDelete} /> }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
            
            

            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <CalendarModal
                    setVisible={ () => setModalVisible(false)}
                    handleFilter={filterDateMovements}
                />
            </Modal>

        </Background>
    )
}

