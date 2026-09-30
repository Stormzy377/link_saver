import FontAwesome from "@expo/vector-icons/FontAwesome"

type Category = {
    id: string
    name: string
    icon: keyof typeof FontAwesome.glyphMap
}


export const categories: Category[] = [
    { id: "1", name: "Curso", icon: "file-code-o" },
    { id: "2", name: "Projeto", icon: "folder" },
    { id: "3", name: "Site", icon: "language" },
    { id: "4", name: "Artigo", icon: "newspaper-o" },
    { id: "5", name: "Video", icon: "video-camera" },
    { id: "6", name: "Documentação", icon: "paste" }
];