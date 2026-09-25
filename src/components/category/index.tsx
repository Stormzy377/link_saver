// Responsável pela estrutura do componente
import { Text, Pressable } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

export function Category() {
  return (
    <Pressable style={styles.container}>
      <FontAwesome name="file-code-o" size={24} color={colors.gray[400]} />
      <Text style={styles.name}>Projetos</Text>
    </Pressable>
  );
}
