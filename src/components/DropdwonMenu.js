import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DropdownMenu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleMenu}>
      <Ionicons
                  name="notifications"
                  size={24}
                  color="#fff"
                  style={{ marginRight: 10 }}
                /> 
      </TouchableOpacity>
      {menuVisible && (
        <View style={{ backgroundColor: '#fff', padding: 10 , position:'absolute',width:500, height:1000, zIndex:1}}>
          <TouchableOpacity onPress={() => console.log('Option 1 sélectionnée')}>
            <Text>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Option 2 sélectionnée')}>
            <Text>Option 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Option 3 sélectionnée')}>
            <Text>Option 3</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
