import { Button, ImageBackground, StyleSheet, Text, TextInput, View, YellowBox } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      
      
       
      <ImageBackground source={require('./PhotoBG.png')} resizeMode="cover" style={styles.image}>  
        <View style={styles.regContainer}>
          <TextInput style={styles.input} placeholder='Логін' />   
        <TextInput style={styles.input} placeholder='Адреса електронної пошти'/>   
          <TextInput style={styles.input} placeholder='Пароль' /> 
          <Button style={styles.button} title='Зареєструватися' />
        </View>  
      </ImageBackground>
      
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
   
  },
   text: {
    color: 'white', 
    
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,    
    paddingLeft: 16,
    paddingRight:16,
    
  },
  
  regContainer: {
    
    backgroundColor: 'white',
    
  },

  button: {
    display:'block',    
    height: 51,
    width:25,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    borderColor: 'red',
    color:'yellow',
  }
  
});
