import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NotFound from '@/components/NotFound'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Cobis() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fffaef' }}>
      <NotFound></NotFound>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})