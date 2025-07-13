import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Image } from 'expo-image'

export default function HeaderComponent() {
    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/kuyiEssence.jpg')}
                style={{ width: '100%', height: 105, marginTop: -5 }}
                contentFit="contain"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff7e4',
    },
})