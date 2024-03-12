import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.intro}>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  intro: {
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;