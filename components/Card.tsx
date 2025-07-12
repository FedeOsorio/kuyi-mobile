import { View, Text, StyleSheet } from "react-native"

type Props = {
    title: string;
    content: string;
}

const Card = ({title, content}: Props) => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardContent}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 130,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 14,
        margin: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center'
    },
    cardContent: {
        fontSize: 14,
    },
});

export default Card;