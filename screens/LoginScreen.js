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
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function LoginScreen({navigation}) {
 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);  

  const handleFocus2 = () => setFocus2(true);
  const handleFocus3 = () => setFocus3(true);
  const handleBlur2 = () => setFocus2(false);
  const handleBlur3 = () => setFocus3(false);

  const onLogin = () => {
    console.log(`Data: ${email}, ${password}`)
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
            <Text style={styles.header}>Увійти</Text>

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
            <Pressable style={styles.button} onPress={onLogin}>
              <Text style={styles.textBttn}>Увійти</Text>
            </Pressable>
            <View style={styles.underCont}>
              <Text style={styles.underText}>Немає акаунту? </Text>                
              <TouchableOpacity style={styles.navBttn}  onPress={() => navigation.navigate("Registration")}><Text style={styles.navText}>Зареєструватися</Text></TouchableOpacity>
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
    marginBottom: 100,
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
    borderTopRightRadius: 25,
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
    marginTop: 32,
    fontSize: 30,
    fontWeight: 500,
    color: "rgba(33, 33, 33, 1)",
  },
  
  showBttn: {
    height: 19,
    width: 72,
    position: "absolute",
    top: 200,
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