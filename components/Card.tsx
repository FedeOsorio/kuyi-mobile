import { ImageBackground } from "expo-image";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useFontScale } from "@/hooks/useFontScale";

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_MARGIN = 12;
const CARD_WIDTH = (SCREEN_WIDTH - (CARD_MARGIN * 2 + 26)) / 2; // 32 = padding horizontal del grid

type Props = {
    title: string;
    content: string;
    onPress?: () => void;
    imgBackground: any;
    icon?: string;
};

const Card = ({ title, content, onPress, imgBackground, icon }: Props) => {
    const fontScale = useFontScale();

    // Adjust font sizes based on fontScale
    const titleFontSize = (SCREEN_WIDTH < 360 ? 14 : 14) / fontScale;
    const subtitleFontSize = (SCREEN_WIDTH < 360 ? 10 : 9) / fontScale;

    return (
        <Pressable
            onPress={onPress}
            style={styles.cardWrapper}
        >
            <View style={styles.card}>
                <ImageBackground
                    source={imgBackground}
                    style={styles.cardBackground}
                    contentFit="cover"
                >
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,0.7)']}
                        style={styles.gradient}
                    />
                </ImageBackground>

                {icon && (
                    <Text style={styles.cardIcon}>{icon}</Text>
                )}

                <View style={styles.cardContent}>
                    <Text style={[styles.cardTitle, { fontSize: titleFontSize }]}>{title}</Text>
                    {content ? (
                        <Text style={[styles.cardSubtitle, { fontSize: subtitleFontSize }]}>{content}</Text>
                    ) : null}
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    cardWrapper: {
        width: CARD_WIDTH,
        marginBottom: CARD_MARGIN,
    },
    card: {
        height: SCREEN_WIDTH < 360 ? 100 : 120, 
        backgroundColor: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
    },
    cardPressed: {
        opacity: 0.9,
        transform: [{ scale: 0.98 }],
    },
    cardBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '70%',
    },
    cardIcon: {
        position: 'absolute',
        top: 12,
        right: 12,
        fontSize: 28,
    },
    cardContent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 12,
    },
    cardTitle: {
        fontSize: SCREEN_WIDTH < 360 ? 14 : 14,
        fontFamily: 'Poppins_600SemiBold',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
        lineHeight: 20,
    },
    cardSubtitle: {
        fontSize: SCREEN_WIDTH < 360 ? 10 : 9,
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        opacity: 0.9,
    },
})

export default Card