import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";

export default function Add() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome name="arrow-left" size={32} color={colors.gray[200]} />
          </TouchableOpacity>
          <Text style={styles.title}>Novo</Text>
          <Text style={styles.label}>Selecione uma categoria</Text>
          <Categories />

          <View style={styles.form}>
            <Input placeholder="Nome do link" />
            <Input placeholder="Url" />
          </View>

        </View>
      </View>
    );
}