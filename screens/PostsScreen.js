import {  
  Text,  
    View, 
  StyleSheet,
} from "react-native";
import React from "react";


export default function PostsScreen() { 
    return (
        <View style={styles.container}>
            <Text>hi from PostsScreen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
})