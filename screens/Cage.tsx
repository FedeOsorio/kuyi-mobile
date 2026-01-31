import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NotFound from '@/components/NotFound'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from '@/components/Header'

export default function Cage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fffaef' }}>
      <HeaderComponent title='Galeria' />
      <NotFound></NotFound>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})