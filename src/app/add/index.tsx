import { View, Text, TouchableOpacity, Alert } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { useState } from "react";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button"; 

export default function Add() {
    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    // Função para recuperar as informações
    function handleAdd() {
        if(!category) {
          return Alert.alert("Categoria", "Selecione a categoria")
        }
        if(!name.trim()) {
          return Alert.alert("Nome", "Adicione o nome do link")
        }
        if(!url.trim()) {
          return Alert.alert("Link", "Adicione a Url")
        }

        console.log({ category, name, url })
    }



    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome name="arrow-left" size={32} color={colors.gray[200]} />
          </TouchableOpacity>
          <Text style={styles.title}>Novo</Text>
          <Text style={styles.label}>Selecione uma categoria</Text>
          <Categories onChange={setCategory} selected={category} />

          <View style={styles.form}>
            <Input placeholder="Nome do link" onChangeText={setName} autoCorrect={false} />
            <Input placeholder="Url" onChangeText={setUrl} autoCorrect={false} />
            <Button title="Adicionar" onPress={handleAdd} />
          </View>

        </View>
      </View>
    );
}