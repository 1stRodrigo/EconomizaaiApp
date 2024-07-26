import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { Foundation } from '@expo/vector-icons'

export default function CustomTabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                          type: 'tabPress',
                          target: route.key,
                          canPreventDefault: true,
                        });
              
                        if (!isFocused && !event.defaultPrevented) {
                          navigation.navigate(route.name, route.params);
                        }
                      };
              
                      const onLongPress = () => {
                        navigation.emit({
                          type: 'tabLongPress',
                          target: route.key,
                        });
                      };

                    return(
                        <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.buttonTab}
                        >
                            <View style={{ alignItems: 'center', padding: 4 }}>
                                <View style={styles.innerButton} bgColor={ isFocused ? "#FF9230" : "#FFFFFF" }>
                                    <Foundation
                                    name={options.tabBarIcon}
                                    size={34}
                                    color={ isFocused ? "#FF9230" : "#FFFFFF" }
                                    />

                                </View>
                            </View>
                        </TouchableOpacity>
                    )

                })}

            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    content:{
        //borderRadius: 99,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
        //marginBottom: Platform.OS === 'ios' ? 18 : 4,
        //alignItems: 'center',
        //justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(77, 74, 76 , 0.7)',
        gap: 8,
        
        //sombra para usar no Android
        //elevation: 3,

        //sombra para usar no IOS
        shadowColor:'#000',
        shadowOffset: {
            width: 0,
            height:2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3
    },

    buttonTab:{
        //justifyContent: 'center',
        //alignItems: 'center',

    },
    innerButton:{ 
        padding: 7,
        borderRadius: 99,
    }
})