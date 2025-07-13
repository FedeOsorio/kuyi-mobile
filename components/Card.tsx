import { View, Text, StyleSheet } from "react-native"
import { Pressable } from "react-native";

type Props = {
    title: string;
    content: string;
    onPress?: () => void;
}

const Card = ({ title, content, onPress }: Props) => {
    return (
        <Pressable onPress={onPress} >
            <View style={styles.card}>
                <Text style={styles.cardContent}>{content}</Text>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 110,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 14,
        paddingBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        flex: 1,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        textAlignVertical: 'bottom',
        marginBottom: 10,
    },
    cardContent: {
        fontSize: 12,
    },
});

export default Card;