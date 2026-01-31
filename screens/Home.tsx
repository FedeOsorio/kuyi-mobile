import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View, Image } from 'react-native';
import Card from '@/components/Card';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/App';
import { SharedElement } from 'react-navigation-shared-element';

const HEADER_MAX_HEIGHT = 160;
const HEADER_MIN_HEIGHT = 80;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
    const navigation = useNavigation<NavigationProp>();
    const scrollY = useRef(new Animated.Value(0)).current

    // Interpolaciones de Animación
    const headerHeight = scrollY.interpolate({
        inputRange: [25, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    })

    const logoScale = scrollY.interpolate({
        inputRange: [25, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 0.50],
        extrapolate: 'clamp'
    })

    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
            <View style={{ flex: 1 }}>
                <Animated.View style={[styles.header, { height: headerHeight, overflow: 'hidden' }]}>
                    <Animated.View style={{ 
                        transform: [{ scale: logoScale }]
                    }}>
                        <SharedElement id="logo-kuyi">
                            <Image
                                source={require('@/assets/images/kuyiEssence.jpg')}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </SharedElement>
                    </Animated.View>
                </Animated.View>
               
                <Animated.ScrollView
                    contentContainerStyle={styles.scrollContent}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                >
                        <View style={styles.grid}>
                        <Card 
                            title={'Adopción'} 
                            imgBackground={require('@/assets/images/kuyiAdopt2.jpg')} 
                            onPress={() => navigation.navigate('Adopcion')} 
                            content={'Guía completa'} 
                        />
                        <Card 
                            title={'Alimentación'} 
                            imgBackground={require('@/assets/images/kuyiFood.jpg')} 
                            onPress={() => navigation.navigate('Alimentacion')} 
                            content={'Dieta saludable'} 
                        />
                        <Card 
                            title={'Cuidados'} 
                            imgBackground={require('@/assets/images/kuyiCare2.jpg')} 
                            onPress={() => navigation.navigate('Cuidados')} 
                            content={'Tips esenciales'} 
                        />
                        <Card 
                            title={'Heno'} 
                            imgBackground={require('@/assets/images/cuyiHeno.jpg')} 
                            onPress={() => navigation.navigate('Henos')} 
                            content={'Tipos y calidad'} 
                        />
                        <Card 
                            title={'Razas'} 
                            imgBackground={require('@/assets/images/kuyiCobis.jpg')} 
                            onPress={() => navigation.navigate('Razas')} 
                            content={'Razas y variantes'} 
                        />
                        <Card 
                            title={'Salud'} 
                            imgBackground={require('@/assets/images/kuyiHealth.jpg')} 
                            onPress={() => navigation.navigate('Salud')} 
                            content={'Enfermedades'} 
                        />
                        <Card 
                            title={'Galería'} 
                            imgBackground={require('@/assets/images/kuyiCage.jpg')} 
                            onPress={() => navigation.navigate('Recintos')} 
                            content={'Recintos'} 
                        />
                        <Card 
                            title={'Contácto'} 
                            imgBackground={require('@/assets/images/kuyiInfo.jpg')} 
                            onPress={() => navigation.navigate('Info')} 
                            content={'Info útil'} 
                        />
                    </View>
                    <View style={styles.footerSpacer} />
                </Animated.ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FAF9F6',
    },
    header: {
        backgroundColor: '#fff7e4',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    logo: {
        width: 180,
        height: 160,
    },
    scrollContent: {
        paddingTop: HEADER_MAX_HEIGHT + 20,
        paddingHorizontal: 16,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 15,
    },
    footerSpacer: {
        height: 40,
    }
})