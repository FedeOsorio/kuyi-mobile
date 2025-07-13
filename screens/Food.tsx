import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import HeaderComponent from '@/components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Food() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fffaef' }}>
            <ScrollView>
                <HeaderComponent></HeaderComponent>
                <View style={styles.container}>
                    <Text>food</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffaef',
        padding: 20
    },
})