import { StyleSheet, Text } from 'react-native'
import React from 'react'

type Props = {
    content: string;
}

const H1 = ({ content }: Props) => {
    return (
        <Text style={[styles.h1]}>{content}</Text>
    )
}

export default H1

const styles = StyleSheet.create({
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
    },
})