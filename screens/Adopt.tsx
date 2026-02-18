import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderComponent from '@/components/Header';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/App';
import { StyledText } from '@/components/StyledText';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>

export default function Adopt() {
  const navigation = useNavigation<NavigationProp>()

  const navigateTo = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen)
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title="Guía de Adopción" />
      
      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Intro */}
        <View style={styles.introSection}>
          <StyledText variant="title" style={styles.introTitle}>¿Pensando en adoptar?</StyledText>
          <StyledText style={styles.introText}>
            Antes de adoptar un cobayo, es importante conocer sus necesidades básicas 
            para asegurar su bienestar.
          </StyledText>
        </View>

        {/* Hábitat */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <StyledText variant="title" style={styles.sectionTitle}>Tamaño del Hábitat</StyledText>
          </View>
          
          <View style={styles.card}>
            <View style={styles.habitatBox}>
              <StyledText style={styles.habitatTitle}>Para 1 cobayo</StyledText>
              <StyledText style={styles.habitatSize}>70cm × 105cm</StyledText>
              <StyledText style={styles.habitatSubtext}>Mínimo recomendado</StyledText>
            </View>

            <View style={[styles.habitatBox, styles.habitatBoxHighlight]}>
              <StyledText style={styles.habitatTitle}>Para 2 cobayos (Recomendado)</StyledText>
              <StyledText style={styles.habitatSize}>70cm × 140cm</StyledText>
              <StyledText style={styles.habitatSubtext}>Opción ideal</StyledText>
            </View>

            <StyledText style={styles.paragraph}>
              <StyledText style={styles.bold}>Tip:</StyledText> Podés armar el hábitat con paneles 
              modulares tipo C&C (Cubes & Coroplast), son económicos y personalizables.
            </StyledText>
          </View>
        </View>

        {/* Compañía */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <StyledText style={styles.sectionIcon}>🐹</StyledText>
            <StyledText variant="title" style={styles.sectionTitle}>¿Uno o Dos?</StyledText>
          </View>
          
          <View style={styles.card}>
            <StyledText style={styles.paragraph}>
              <StyledText style={styles.bold}>Lo ideal son 2 cobayos</StyledText> del mismo sexo, 
              ya que son animales muy sociales y disfrutan de la compañía de su especie.
            </StyledText>

            <View style={styles.infoBox}>
              <StyledText style={styles.infoBoxTitle}>Hembras</StyledText>
              <StyledText style={styles.infoBoxText}>
                Se adaptan mejor en pareja. Son más independientes del humano e ideales si buscás tranquilidad.
              </StyledText>
            </View>

            <View style={styles.infoBox}>
              <StyledText style={styles.infoBoxTitle}>Machos</StyledText>
              <StyledText style={styles.infoBoxText}>
                Pueden vivir solos más fácilmente. Son más apegados al humano y buscan más interacción.
              </StyledText>
            </View>

            <View style={styles.warningBox}>
              <StyledText style={styles.warningIcon}>💡</StyledText>
              <StyledText style={styles.warningText}>
                <StyledText style={styles.bold}>Recordá:</StyledText> Si tu cobayo huye cuando 
                te acercás, no es porque no te quiera. Es su instinto natural de 
                supervivencia ante movimientos bruscos. Con paciencia y tiempo, ganarás su confianza.
              </StyledText>
            </View>
          </View>
        </View>

        {/* Suelo y Manta */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <StyledText style={styles.sectionIcon}>🛏️</StyledText>
            <StyledText variant="title" style={styles.sectionTitle}>Suelo del Hábitat</StyledText>
          </View>
          
          <View style={styles.card}>
            <StyledText style={styles.paragraph}>
              El suelo debe tener una <StyledText style={styles.bold}>manta acolchonada y 
              absorbente</StyledText>. Esto previene la pododermatitis (lesiones en las patas) 
              y mantiene limpio el hábitat.
            </StyledText>

            <View style={styles.tipBox}>
              <StyledText style={styles.tipTitle}>Mantenimiento de la Manta</StyledText>
              <StyledText style={styles.tipText}>
                Barrer cacas cada 1-2 días. Cambiar manta completa cada semana. Si es de buena calidad puede durar hasta 1 semana en condiciones.
              </StyledText>
            </View>

            <StyledText style={styles.highlightText}>
              ⚠️ Nunca uses viruta de pino o cedro - son tóxicas para los cobayos
            </StyledText>
          </View>
        </View>

        {/* Alimentación */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <StyledText style={styles.sectionIcon}>🌾</StyledText>
            <StyledText variant="title" style={styles.sectionTitle}>Alimentación Básica</StyledText>
          </View>
          
          <View style={styles.card}>
            <View style={styles.dietBox}>
              <StyledText style={styles.dietPercentage}>80%</StyledText>
              <StyledText style={styles.dietItem}>HENO</StyledText>
              <StyledText style={styles.dietDescription}>
                Debe estar disponible las 24 horas
              </StyledText>
            </View>

            <View style={styles.dietBox}>
              <StyledText style={styles.dietPercentage}>15%</StyledText>
              <StyledText style={styles.dietItem}>VERDURAS</StyledText>
              <StyledText style={styles.dietDescription}>
                Variedad de vegetales frescos
              </StyledText>
            </View>

            <View style={styles.dietBox}>
              <StyledText style={styles.dietPercentage}>5%</StyledText>
              <StyledText style={styles.dietItem}>PELLETS</StyledText>
              <StyledText style={styles.dietDescription}>
                Alimento balanceado específico
              </StyledText>
            </View>

            <TouchableOpacity 
              style={styles.linkButton}
              onPress={() => navigateTo('Henos')}
            >
              <StyledText style={styles.linkButtonText}>Ver tipos de Heno →</StyledText>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.linkButton}
              onPress={() => navigateTo('Alimentacion')}
            >
              <StyledText style={styles.linkButtonText}>Ver verduras permitidas →</StyledText>
            </TouchableOpacity>

            <View style={styles.warningBox}>
              <StyledText style={styles.warningIcon}>💧</StyledText>
              <StyledText style={styles.warningText}>
                <StyledText style={styles.bold}>Agua:</StyledText> Debe tener acceso ilimitado 
                a agua fresca. Podés usar bebedero o plato limpiándolo diariamente.
              </StyledText>
            </View>
          </View>
        </View>

        {/* Temperatura */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <StyledText style={styles.sectionIcon}>🌡️</StyledText>
            <StyledText variant="title" style={styles.sectionTitle}>Control de Temperatura</StyledText>
          </View>
          
          <View style={styles.card}>
            <StyledText style={styles.paragraph}>
              Los cobayos son sensibles a temperaturas extremas. El rango ideal es 
              <StyledText style={styles.bold}> 18°C a 24°C</StyledText>.
            </StyledText>

            <View style={styles.tempBox}>
              <StyledText style={styles.tempIcon}>❄️</StyledText>
              <View style={styles.tempContent}>
                <StyledText style={styles.tempTitle}>Si hace frío</StyledText>
                <StyledText style={styles.tempText}>
                  Comprale una casita tipo "cunita" o iglú donde puedan refugiarse 
                  y mantenerse calentitos.
                </StyledText>
              </View>
            </View>

            <View style={styles.tempBox}>
              <StyledText style={styles.tempIcon}>🔥</StyledText>
              <View style={styles.tempContent}>
                <StyledText style={styles.tempTitle}>Si hace calor</StyledText>
                <StyledText style={styles.tempText}>
                  NO dejes que se cubran con mantas, aunque ellos lo intenten. 
                  Pueden sufrir un golpe de calor. Mantené el ambiente fresco 
                  y con ventilación.
                </StyledText>
              </View>
            </View>
          </View>
        </View>

        {/* Salud */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <StyledText style={styles.sectionIcon}>🏥</StyledText>
            <StyledText variant="title" style={styles.sectionTitle}>Cuidados Veterinarios</StyledText>
          </View>
          
          <View style={styles.card}>
            <StyledText style={styles.paragraph}>
              Es fundamental encontrar un <StyledText style={styles.bold}>veterinario 
              especializado en animales exóticos</StyledText> antes de adoptar. Los cobayos 
              pueden enfermar rápidamente y necesitan atención especializada.
            </StyledText>

            <TouchableOpacity 
              style={[styles.linkButton, styles.linkButtonHealth]}
              onPress={() => navigateTo('Salud')}
            >
              <StyledText style={styles.linkButtonText}>Ver enfermedades comunes →</StyledText>
            </TouchableOpacity>

            <View style={styles.warningBox}>
              <StyledText style={styles.warningIcon}>⚠️</StyledText>
              <StyledText style={styles.warningText}>
                Los cobayos esconden muy bien sus síntomas. Cualquier cambio en 
                comportamiento, apetito o energía debe ser consultado inmediatamente.
              </StyledText>
            </View>
          </View>
        </View>

        {/* Checklist Final */}
        <View style={styles.section}>
          <LinearGradient
            colors={['#fef3c7', '#fde68a']}
            style={styles.checklistCard}
          >
            <StyledText variant="title" style={styles.checklistTitle}>Checklist antes de adoptar</StyledText>
            
            <View style={styles.checklistItem}>
              <StyledText style={styles.checklistIcon}>✓</StyledText>
              <StyledText style={styles.checklistText}>Hábitat de tamaño adecuado</StyledText>
            </View>
            
            <View style={styles.checklistItem}>
              <StyledText style={styles.checklistIcon}>✓</StyledText>
              <StyledText style={styles.checklistText}>Mantas absorbentes o sustrato apropiado</StyledText>
            </View>
            
            <View style={styles.checklistItem}>
              <StyledText style={styles.checklistIcon}>✓</StyledText>
              <StyledText style={styles.checklistText}>Heno de calidad disponible</StyledText>
            </View>
            
            <View style={styles.checklistItem}>
              <StyledText style={styles.checklistIcon}>✓</StyledText>
              <StyledText style={styles.checklistText}>Bebedero o plato para agua</StyledText>
            </View>
            
            <View style={styles.checklistItem}>
              <StyledText style={styles.checklistIcon}>✓</StyledText>
              <StyledText style={styles.checklistText}>Veterinario de exóticos localizado</StyledText>
            </View>
            
            <View style={styles.checklistItem}>
              <StyledText style={styles.checklistIcon}>✓</StyledText>
              <StyledText style={styles.checklistText}>Presupuesto para alimentación y cuidados</StyledText>
            </View>
            
            <View style={styles.checklistItem}>
              <StyledText style={styles.checklistIcon}>✓</StyledText>
              <StyledText style={styles.checklistText}>Tiempo diario para atención y limpieza</StyledText>
            </View>

            <StyledText style={styles.checklistFooter}>
              Si completaste todo, estás listo para darle un hogar a un cobayo
            </StyledText>
          </LinearGradient>
        </View>

        <View style={styles.spacer} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaef',
  },
  content: {
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  introSection: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  introTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 17,
    color: '#78350f',
  },
  introText: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#451a03',
    lineHeight: 22,
    textAlign: 'auto',
  },
  section: {
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'flex-start',
  },
  sectionIcon: {
    fontSize: 22,
    marginRight: 8,
    lineHeight: 28,
  },
  sectionTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 17,
    color: '#78350f',
    lineHeight: 28,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  paragraph: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#451a03',
    lineHeight: 22,
    textAlign: 'auto',
  },
  bold: {
    color: '#78350f',
    fontFamily: 'Poppins_500Medium',
  },
  habitatBox: {
    backgroundColor: '#fef3c7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  habitatBoxHighlight: {
    backgroundColor: '#fde68a',
    borderWidth: 2,
    borderColor: '#f59e0b',
  },
  habitatTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#92400e',
    marginBottom: 8,
  },
  habitatSize: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 23,
    color: '#78350f',
    marginBottom: 4,
  },
  habitatSubtext: {
    fontSize: 12,
    color: '#92400e',
    fontStyle: 'italic',
    fontFamily: 'Poppins_400Regular',
  },
  infoBox: {
    backgroundColor: '#f0fdf4',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderLeftColor: '#10b981',
    borderRightColor: '#10b981',
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
  },
  infoBoxTitle: {
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
    color: '#065f46',
  },
  infoBoxText: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#064e3b',
    lineHeight: 22,
    textAlign: 'auto',
  },
  warningBox: {
    backgroundColor: '#fef3c7',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderLeftColor: '#f59e0b',
    borderRightColor: '#f59e0b',
    borderRadius: 8,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 7,
    paddingRight: 7,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  warningIcon: {
    fontSize: 15,
    marginRight: 4,
  },
  warningText: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#78350f',
    lineHeight: 22,
    textAlign: 'auto',
  },
  tipBox: {
    backgroundColor: '#f0f9ff',
    borderRadius: 12,
    padding: 14,
    marginVertical: 12,
  },
  tipTitle: {
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
    color: '#0c4a6e',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#0c4a6e',
    lineHeight: 22,
    textAlign: 'auto',
  },
  highlightText: {
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
    color: '#dc2626',
    textAlign: 'center',
  },
  dietBox: {
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 8,
    borderBottomColor: '#fde68a',
  },
  dietPercentage: {
    fontSize: 32,
    marginBottom: -6,
    fontFamily: 'Poppins_600SemiBold',
    color: '#78350f',
  },
  dietItem: {
    fontSize: 13,
    fontFamily: 'Poppins_500Medium',
    color: '#92400e',
    marginTop: 4,
  },
  dietDescription: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#92400e',
    marginTop: 2,
  },
  linkButton: {
    backgroundColor: '#fef3c7',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 2,
    borderColor: '#fde68a',
  },
  linkButtonHealth: {
    backgroundColor: '#fee2e2',
    borderColor: '#fecaca',
  },
  linkButtonText: {
    fontSize: 13,
    fontFamily: 'Poppins_500Medium',
    color: '#78350f',
    textAlign: 'center',
  },
  tempBox: {
    flexDirection: 'row',
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  tempIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  tempContent: {
    flex: 1,
  },
  tempTitle: {
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
    color: '#78350f',
  },
  tempText: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#451a03',
    lineHeight: 22,
    textAlign: 'auto',
  },
  checklistCard: {
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  checklistTitle: {
    fontSize: 17,
    fontFamily: 'Poppins_600SemiBold',
    color: '#78350f',
    marginBottom: 10,
    textAlign: 'center',
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checklistIcon: {
    fontSize: 20,
    marginRight: 12,
    color: '#78350f',
  },
  checklistText: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#78350f',
    lineHeight: 22,
  },
  checklistFooter: {
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
    color: '#78350f',
    textAlign: 'center',
    marginTop: 16,
    fontStyle: 'italic',
  },
  spacer: {
    height: 40,
  },
})