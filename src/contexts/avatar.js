import React, { createContext, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import { useNavigation } from '@react-navigation/native';

export const AvatarContext = createContext({});

function AvatarProvider({ children }){
    const navigation = useNavigation()
    
    const [image, setImage] = useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        selectionLimit:1
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };


    return(
        <AvatarContext.Provider value={{ pickImage, image }}>
            {children}
        </AvatarContext.Provider>
    )

}

export default AvatarProvider;