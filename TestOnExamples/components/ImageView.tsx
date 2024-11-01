import React from "react";
import { Image, View, Dimensions } from "react-native";

function ImageView() {
  let { width, height } = Dimensions.get("window");

  return (
    <View>
      {
        <Image
          style={{ width: width }}
          source={require("../../../assets/images/partial-react-logo.png")}
        />
      }
    </View>
  );
}

export default ImageView;
