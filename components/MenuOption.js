

import { StyleSheet, Text, View, Pressable } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { Link } from "expo-router";

const MenuOption = ({item}) => {
    return (
      <Link href={item.href} asChild>
        <Pressable style={styles.optionRow}>

          {item.icon ? (<item.icon/>): (
            <MaterialCommunityIcons 
            name={item.iconName} 
            size={26} 
            color="gray" 
          />
          )}
              
          <Text style={styles.optionText}>{item.name}</Text>
          
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color="gray"
            style={{ marginLeft: 'auto' }}
          />
        </Pressable>
      </Link>
    )
  };

  const styles = StyleSheet.create({
    optionRow:{
      flexDirection:"row",
      marginVertical:20
    },
    optionText:{
      fontWeight:"bold",
      fontSize:18,
      marginLeft: 10,
      color:"#eee"
    }
  });
  

  export default MenuOption