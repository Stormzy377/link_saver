import { View, Image, TouchableOpacity } from "react-native";

import EvilIcons from '@expo/vector-icons/EvilIcons';

import { colors } from "@/styles/colors";
import { styles } from "./styles";


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity>
          <EvilIcons name="plus" size={42} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
