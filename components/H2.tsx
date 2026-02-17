import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
    content: string;
    style: object
}

const H2 = ({ content, style }: Props) => {
    return (
        <Text style={[styles.h2, style]}>{content}</Text>
    )
}

export default H2

const styles = StyleSheet.create({
    h2: {
        marginVertical: 2,
        fontSize: 17,
        fontFamily: 'Poppins_600SemiBold',
    },
})