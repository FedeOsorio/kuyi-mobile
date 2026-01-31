import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NotFound from '@/components/NotFound'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from '@/components/Header'

export default function Care() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fffaef' }}>
      <HeaderComponent title='Cuidados y Tips' />
      <NotFound></NotFound>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})