import { StyleSheet, Text, View } from "react-native";
import { redirect } from "react-router-dom";

export const RegistrationScreen = () => {
     <View style={styles.container}>
    
        <Text style={styles.text}>hi from register</Text>
     </View>
    
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    
    text: {
        color: 'red',
        backgroundColor: 'blue',
        fontSize: 12,
    }
});


