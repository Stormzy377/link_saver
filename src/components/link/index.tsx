import { View, Text, TouchableOpacity } from "react-native"
import Feather from "@expo/vector-icons/Feather";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

type Props= {
    name: string
    url: string
    onDetails: () => void
}

export function Link({ name, url, onDetails }: Props){
    return (
      <View style={styles.container}>
        <View style={styles.details}>
            <Text style={styles.name} numberOfLines={1}>
                {name}
            </Text>

            <Text style={styles.url} numberOfLines={1}>
                {url}
            </Text>
        </View>

        <TouchableOpacity onPress={onDetails}>
            <Feather name="more-horizontal" size={20} color={colors.gray[400]}/>
        </TouchableOpacity>

      </View>
    );
}