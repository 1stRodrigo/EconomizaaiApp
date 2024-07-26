import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from 'react-native';
import { 
    Container, 
    ButtonFilterText, 
    ModalContent,
    ButtonFilter
} from './styles';

import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from './localeCalendar';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({ setVisible, handleFilter }){
    const [dateNow, setDateNow] = useState(new Date());
    const [markedDates, setMarkedDates] = useState({});

    function handleOnDayPress(date){
        console.log(date.dateString);
        setDateNow(new Date(date.dateString))

        let markedDay = {};

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#0D0D0D',
            textColor: '#FFF'
        }

        setMarkedDates(markedDay)
    }

    function handleFilterDate(){
       handleFilter(dateNow)
       setVisible(); 
    }

    return(
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{ flex:1}}></View>
            </TouchableWithoutFeedback>

            <ModalContent>
                <Calendar
                    onDayPress={handleOnDayPress}
                    markedDates={markedDates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: '#E0452D',
                        selectedDayBackgroundColor: '#0D0D0D',
                        selectedDayTextColor: '#FFF'
                    }}
                />

                <ButtonFilter onPress={handleFilterDate}>
                    <ButtonFilterText>Filtrar</ButtonFilterText>
                </ButtonFilter>
            </ModalContent>

        </Container>
    )
}