import { Text, View, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <Text>hi from PostsScreen</Text>
      <Icon
        style={styles.icon}
        name="solidFaMugSaucer"
        size={24}
        color="rgba(255, 108, 0, 1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
