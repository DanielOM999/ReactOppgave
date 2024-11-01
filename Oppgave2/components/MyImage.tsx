import React from "react";
import { Image, View, StyleSheet, Dimensions } from "react-native";


function MyImage() {
    let { width, height } = Dimensions.get("window");
    
  return (
    <View style={styles.container}>
      {
        <Image
          style={{ width: width - 50 }}
          source={require("../Images/wow.png")}
        />
      }
      {
        <Image
          style={{ width: width - 50, height: 300, marginTop: 50 }}
          source={{ uri: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg" }}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    alignItems: "center",
  },
});

export default MyImage;
