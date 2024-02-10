import { ImageRequireSource } from "react-native"

export type TProps = {
    image?: ImageRequireSource
    title?: string
    imageClassName?: string
    size?: string
    onPress?: () => void
}