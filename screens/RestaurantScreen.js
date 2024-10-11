import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";

const RestaurantScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;

  return (
    <View>
      <ScrollView>
        <View colassName="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity className="absolute top-14 left-4 bg-gray-50 rounded-full p-2 shadow">
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
