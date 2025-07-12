import { useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const HEADER_MAX_HEIGHT = 320; // Altura máxima del header
const HEADER_MIN_HEIGHT = 120; // Al0tura mínima del header (la parte que quedará visible)
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -90],
    extrapolate: 'clamp',
  });

  const imageScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0.3], // 1 = tamaño original, 0.8 = 80% al final
    extrapolate: 'clamp'
  });

  return (
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
          style={{ width: '100%', height: HEADER_MAX_HEIGHT, transform: [{ translateY: imageTranslateY }, { scale: imageScale }] }}
          resizeMode="cover"
        />
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{ height:1000, paddingTop: HEADER_MAX_HEIGHT, backgroundColor: '#fffaef' }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Contenido de tu scroll */}
        <View style={[styles.textContainer]}>
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
    </View >
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 2000,
  },
  textContainer: {
    padding: 12,
    paddingHorizontal: 34,
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
