import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  Text,
} from "react-native";

import EvilIcons from "@expo/vector-icons/EvilIcons";

import { colors } from "@/styles/colors";
import { styles } from "./styles";

import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Option } from "@/components/option"; 

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity>
          <EvilIcons name="plus" size={42} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList
        data={["1", "2", "3"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="FreecodeCamp"
            url="https://www.freecodecamp.org/"
            onDetails={() => console.log("Clicado!")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={false}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Cursos</Text>
              <TouchableOpacity>
                <EvilIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>FreecodeCamp</Text>
            <Text style={styles.modalUrl}>https://www.freecodecamp.org/</Text>

            <View style={styles.modalFooter}>
              <Option name="Apagar" icon="trash" variant="secondary" />
              <Option name="Abrir" icon="globe" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
