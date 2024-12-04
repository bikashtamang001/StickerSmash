import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Bikash</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"blue"
    
  },

  text: {
    color: "white"
  },
  
  button: {
    color: "#fff111"

  }

})
