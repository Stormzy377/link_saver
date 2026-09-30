// Responsável pela estrutura do componente
import { Text, Pressable, PressableProps } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

type Props = PressableProps & {
  name: string
  isSelected: boolean
  icon: keyof typeof FontAwesome.glyphMap
}

export function Category({ name, icon, isSelected, ...rest }: Props) {

  const color = isSelected ? colors.green[300] : colors.gray[400]

  return (
    <Pressable style={styles.container} { ...rest }>
      <FontAwesome name={icon} size={20} color={color} />
      <Text style={[styles.name, { color }]}>{name}</Text>
    </Pressable>
  );
}
