import { ImageBackground, ImageSource } from "expo-image";
import { View, Text, StyleSheet, ImageSourcePropType } from "react-native"
import { Pressable } from "react-native";

type Props = {
    title: string;
    content: string;
    onPress?: () => void;
    imgBackground: ImageSource;
}

const Card = ({ title, content, onPress, imgBackground }: Props) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.card}>
                <ImageBackground
                    source={imgBackground}
                    style={styles.cardBackground}
                    contentFit="cover"
                >
                </ImageBackground>
                <Text style={styles.cardContent}>{content}</Text>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    card: {
        width: 165,
        height: 98,
        backgroundColor: '#eee',
        borderRadius: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },
    cardBackground: {
        flex: 1,
        borderRadius: 15,
        overflow: 'hidden',
        opacity: 0.85,
    },
    cardTitle: {
        fontSize: 14,
        position: 'absolute',
        bottom: 24,
        left: 10,
        textShadowColor: 'white',
        textShadowOffset: { width: .5, height: 0 },
        textShadowRadius: 2,
        fontWeight: 600,
    },
    cardContent: {
        position: 'absolute',
        fontSize: 12
    },
});

export default Card;