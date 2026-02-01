import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'

export default function HeaderComponent({ title }: { title?: string }) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={require('@/assets/images/kuyiEssence.jpg')}
                    style={styles.logoChico}
                    contentFit="contain"
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {title && (
                        <Text style={styles.title} numberOfLines={1}>
                            {title}
                        </Text>
                    )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: '#fff7e4',
        justifyContent: 'center',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
        // Borde inferior sutil para más profundidad
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(120, 53, 15, 0.1)',
    },
    logoChico: {
        position: 'absolute',
        width: 100,
        height: 54,
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '800',
        color: '#78350f',
        letterSpacing: 0.3,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 3,
    }
})