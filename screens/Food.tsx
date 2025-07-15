import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import HeaderComponent from '@/components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Food() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fffaef' }}>
            <ScrollView>
                <HeaderComponent></HeaderComponent>
                <View style={styles.imageContainer}>
                    <Image source={require('@/assets/images/kuyiDiet.png')}
                        style={{ width: '100%', height: 220 }}
                        resizeMode='cover'></Image>
                </View>
                <View style={styles.container}>
                    <Text>food</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%'
    },
    container: {
        backgroundColor: '#fffaef',
        padding: 20
    },
})