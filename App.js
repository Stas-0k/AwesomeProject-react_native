import {
  Button,
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
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(true)
  const inputHandler = (text) => setValue(text);

  const handleFocus = () => setFocus( true)

 const handleBlur = () => setFocus( false)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} >
        <ImageBackground
          source={require("./PhotoBG.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <KeyboardAvoidingView style={styles.regContainer} behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <View style={styles.photoCont}></View>
            <Text style={styles.header}>Реєстрація</Text>
            
            <TextInput
              style={[styles.input, {
                borderColor: focus ? 'red' : 'black',
              }]}
              placeholder="Логін"
              value={value}
              onChangeText={inputHandler}   
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            />
            <TextInput style={styles.input} placeholder="Пароль" />
            <Pressable style={styles.showBttn}>
              <Text style={styles.textBttnShow}>Показати</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.textBttn}>Зареєструватися</Text>
            </Pressable>
            <Icon
              style={styles.icon}
              name="plus"
              size={24}
              color="rgba(255, 108, 0, 1)"
            />

            <Text style={styles.underText}>Вже є акаунт? Увійти</Text>
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
    borderColor: "#E8E8E8",
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
  underText: {
    marginBottom: 50,
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
