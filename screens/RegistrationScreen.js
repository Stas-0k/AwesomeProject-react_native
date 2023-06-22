import {  
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function RegistrationScreen({navigation}) {
 
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFocus1 = () => setFocus1(true);
  const handleFocus2 = () => setFocus2(true);
  const handleFocus3 = () => setFocus3(true);
  const handleBlur1 = () => setFocus1(false);
  const handleBlur2 = () => setFocus2(false);
  const handleBlur3 = () => setFocus3(false);


  const onRegister = () => {
    console.log(`Data: ${login}, ${email}, ${password}`)
    navigation.navigate("Home")
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../PhotoBG.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <KeyboardAvoidingView
            style={styles.regContainer}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.photoCont}></View>
            <Text style={styles.header}>Реєстрація</Text>

            <TextInput
              style={[
                styles.input,
                {
                  borderColor: focus1 ? "#FF6C00" : "#E8E8E8",
                },
              ]}
              placeholder="Логін"
              value={login}
              onChangeText={setLogin}
              onFocus={handleFocus1}
              onBlur={handleBlur1}
            />

            <TextInput
              style={[
                styles.input,
                {
                  borderColor: focus2 ? "#FF6C00" : "#E8E8E8",
                },
              ]}
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
              onFocus={handleFocus2}
              onBlur={handleBlur2}
            />
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: focus3 ? "#FF6C00" : "#E8E8E8",
                },
              ]}
              placeholder="Пароль"
              value={password}
              onChangeText={setPassword}
              onFocus={handleFocus3}
              onBlur={handleBlur3}
            />
            <Pressable style={styles.showBttn}>
              <Text style={styles.textBttnShow}>Показати</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.textBttn} onPress={onRegister}>Зареєструватися</Text>
            </Pressable>
            <Icon
              style={styles.icon}
              name="plus"
              size={24}
              color="rgba(255, 108, 0, 1)"
            />
            <View style={styles.underCont}>
              <Text style={styles.underText}>Вже є акаунт? </Text>              
                <TouchableOpacity style={styles.navBttn}  onPress={() => navigation.navigate("Login")}><Text style={styles.navText}>Увійти</Text></TouchableOpacity>             
              </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  underCont: {    
    display:'flex-box',    
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  navBttn: {
    color:'red',
  },

  navText:{
    color:'teal',
  },  
  
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    width: "100%",
  },

  regContainer: {
    backgroundColor: "white",
    alignItems: "center",
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: "auto",
    position: "relative",
    justifyContent: "flex-end",
    borderTopLeftRadius: 25,
    borderTopRightRadius:25,
  },

  button: {
    display: "flex",
    height: 51,
    width: 343,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    borderColor: "red",
    color: "yellow",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
    marginBottom: 16,
  },

  textBttn: {
    paddingTop: 16,
    paddingBottom: 16,
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },

  header: {
    marginBottom: 32,
    marginTop: 92,
    fontSize: 30,
    fontWeight: 500,
    color: "rgba(33, 33, 33, 1)",
  },
  

  showBttn: {
    height: 19,
    width: 72,
    position: "absolute",
    top: 335,
    left: 310,
  },

  textBttnShow: {
    fontSize: 16,
    color: "rgba(27, 67, 113, 1)",
  },
  photoCont: {
    width: 120,
    height: 120,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  icon: {
    position: "absolute",
    top: 21,
    left: 258,
  },
});
