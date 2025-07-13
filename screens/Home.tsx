import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import Card from '@/components/Card';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/App';


const HEADER_MAX_HEIGHT = 290; // Altura máxima del header
const HEADER_MIN_HEIGHT = 120; // Al0tura mínima del header (la parte que quedará visible)
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
    const navigation = useNavigation<NavigationProp>();

    const scrollY = useRef(new Animated.Value(0)).current;

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    });

    const imageTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -80],
        extrapolate: 'clamp',
    });

    const imageScale = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0.7, 0.3], // 1 = tamaño original, 0.8 = 80% al final
        extrapolate: 'clamp'
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fffaef' }} edges={['top', 'bottom']}>
            <View style={{ flex: 1 }}>
                <Animated.View style={{
                    height: headerHeight,
                    backgroundColor: '#fff7e4',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    overflow: 'hidden',
                }}>
                    <Animated.Image
                        source={require('@/assets/images/kuyiEssence.jpg')}
                        style={{ width: '100%', height: 300, transform: [{ translateY: imageTranslateY }, { scale: imageScale }] }}
                        resizeMode="cover"
                    />
                </Animated.View>

                <Animated.ScrollView
                    contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT, backgroundColor: '#fffaef' }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={16}
                >
                    <View style={[styles.cardContainer]}>
                        <Card title={'Alimentación'} content={''} onPress={() => navigation.navigate('Alimentacion')}>

                        </Card>
                        <Card title={'Henos'} content={''} onPress={() => navigation.navigate('Hay')}>

                        </Card>
                        <Card title={'Cuidados Generales'} content={''} onPress={() => navigation.navigate('Care')}>

                        </Card>
                        <Card title={'Razas'} content={''} onPress={() => navigation.navigate('care')}>
                        </Card>
                        <Card title={'Salud'} content={''} onPress={() => navigation.navigate('care')}>

                        </Card>
                        <Card title={'Recintos'} content={''} onPress={() => navigation.navigate('care')}>

                        </Card>
                        <Text>
                            Kumi Yuri Kumi Yuri
                            Kumi Yuri Kumi Yuri
                            Kumi Yuri Kumi Yuri
                            Kumi Yuri Kumi Yuri
                            Kumi Yuri Kumi Yuri
                            Kumi Yuri Kumi Yuri
                            Kumi Yuri Kumi Yuri
                            Kumi Yuri Kumi Yuri
                            Kumi Yuri Kumi Yuri
                            Kumi Yuri Kumi Yuri
                            Kumi Yuri Kumi Yuri
                            Kumi Yuri Kumi Yuri
                            Kumi Yuri Kumi Yuri
                            Kumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi YuriKumi Yuri Kumi Yuri
                        </Text>

                    </View>
                </Animated.ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: 2000,
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20,
        gap: 35,
        paddingHorizontal: 30,
        marginBottom: 60,
    },
    textContainer: {
        padding: 12,
        paddingHorizontal: 34,
        marginBottom: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    titleText: {
        flex: 1,
        margin: 0,
        fontSize: 26,
        padding: 0,
        fontWeight: 500,
        textAlign: 'center'
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 250,
        width: '100%',
        resizeMode: 'cover'
    },
});
