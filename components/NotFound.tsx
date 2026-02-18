import { Button, StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/core';
import { RootStackParamList } from '@/App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyledText } from './StyledText';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function NotFound() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.container}>
            <StyledText variant='title'>Sitio en Construcción</StyledText>
            <Image style={styles.imageNF} source={require('@/assets/images/kuyWorking.png')}></Image>
            <Button title={'Regresar'} onPress={() => navigation.navigate('Home')}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    imageNF: {
        width: '100%',
        height: 300,
        resizeMode: 'contain'
    }
})