import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import NotFound from '@/components/NotFound'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from '@/components/Header'

export default function Adopt() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fffaef' }}>
            <HeaderComponent title='Guía de adopción' />
            <NotFound></NotFound>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})