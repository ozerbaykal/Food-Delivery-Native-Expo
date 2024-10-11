import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { Image } from "react-native";

const OrderPrepairingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      //move to delivery screen
      navigation.navigate("Delivery");
    }, 3000);
  }, []);
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require("../assets/images/delivery.gif")}
        className="w-80 h-80"
      />
    </View>
  );
};

export default OrderPrepairingScreen;
