import {  
  Text,  
    View, 
  StyleSheet,
} from "react-native";
import React from "react";


export default function CreatePostsScreen() { 
    return (
        <View style={styles.container}>
            <Text>hi from CreatePostsScreen</Text>
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