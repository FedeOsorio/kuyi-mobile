import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import HeaderComponent from '@/components/Header'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/App'

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
          <Text style={styles.introTitle}>¿Pensando en adoptar?</Text>
          <Text style={styles.introText}>
            Antes de adoptar un cobayo, es importante conocer sus necesidades básicas 
            para asegurar su bienestar.
          </Text>
        </View>

        {/* Hábitat */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Tamaño del Hábitat</Text>
          </View>
          
          <View style={styles.card}>
            <View style={styles.habitatBox}>
              <Text style={styles.habitatTitle}>Para 1 cobayo</Text>
              <Text style={styles.habitatSize}>70cm × 105cm</Text>
              <Text style={styles.habitatSubtext}>Mínimo recomendado</Text>
            </View>

            <View style={[styles.habitatBox, styles.habitatBoxHighlight]}>
              <Text style={styles.habitatTitle}>Para 2 cobayos (Recomendado)</Text>
              <Text style={styles.habitatSize}>70cm × 140cm</Text>
              <Text style={styles.habitatSubtext}>Opción ideal</Text>
            </View>

            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Tip:</Text> Podés armar el hábitat con paneles 
              modulares tipo C&C (Cubes & Coroplast), son económicos y personalizables.
            </Text>
          </View>
        </View>

        {/* Compañía */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🐹</Text>
            <Text style={styles.sectionTitle}>¿Uno o Dos?</Text>
          </View>
          
          <View style={styles.card}>
            <Text style={styles.paragraph}>
              <Text style={styles.bold}>Lo ideal son 2 cobayos</Text> del mismo sexo, 
              ya que son animales muy sociales y disfrutan de la compañía de su especie.
            </Text>

            <View style={styles.infoBox}>
              <Text style={styles.infoBoxTitle}>Hembras</Text>
              <Text style={styles.infoBoxText}>
                Se adaptan mejor en pareja. Son más independientes del humano e ideales si buscás tranquilidad.
              </Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoBoxTitle}>Machos</Text>
              <Text style={styles.infoBoxText}>
                Pueden vivir solos más fácilmente. Son más apegados al humano y buscan más interacción.
              </Text>
            </View>

            <View style={styles.warningBox}>
              <Text style={styles.warningIcon}>💡</Text>
              <Text style={styles.warningText}>
                <Text style={styles.bold}>Recordá:</Text> Si tu cobayo huye cuando 
                te acercás, no es porque no te quiera. Es su instinto natural de 
                supervivencia ante movimientos bruscos. Con paciencia y tiempo, ganarás su confianza.
              </Text>
            </View>
          </View>
        </View>

        {/* Suelo y Manta */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🛏️</Text>
            <Text style={styles.sectionTitle}>Suelo del Hábitat</Text>
          </View>
          
          <View style={styles.card}>
            <Text style={styles.paragraph}>
              El suelo debe tener una <Text style={styles.bold}>manta acolchonada y 
              absorbente</Text>. Esto previene la pododermatitis (lesiones en las patas) 
              y mantiene limpio el hábitat.
            </Text>

            <View style={styles.tipBox}>
              <Text style={styles.tipTitle}>Mantenimiento de la Manta</Text>
              <Text style={styles.tipText}>
                Barrer cacas cada 1-2 días. Cambiar manta completa cada semana. Si es de buena calidad puede durar hasta 1 semana en condiciones.
              </Text>
            </View>

            <Text style={styles.highlightText}>
              ⚠️ Nunca uses viruta de pino o cedro - son tóxicas para los cobayos
            </Text>
          </View>
        </View>

        {/* Alimentación */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🌾</Text>
            <Text style={styles.sectionTitle}>Alimentación Básica</Text>
          </View>
          
          <View style={styles.card}>
            <View style={styles.dietBox}>
              <Text style={styles.dietPercentage}>80%</Text>
              <Text style={styles.dietItem}>HENO</Text>
              <Text style={styles.dietDescription}>
                Debe estar disponible las 24 horas
              </Text>
            </View>

            <View style={styles.dietBox}>
              <Text style={styles.dietPercentage}>15%</Text>
              <Text style={styles.dietItem}>VERDURAS</Text>
              <Text style={styles.dietDescription}>
                Variedad de vegetales frescos
              </Text>
            </View>

            <View style={styles.dietBox}>
              <Text style={styles.dietPercentage}>5%</Text>
              <Text style={styles.dietItem}>PELLETS</Text>
              <Text style={styles.dietDescription}>
                Alimento balanceado específico
              </Text>
            </View>

            <TouchableOpacity 
              style={styles.linkButton}
              onPress={() => navigateTo('Henos')}
            >
              <Text style={styles.linkButtonText}>Ver tipos de Heno →</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.linkButton}
              onPress={() => navigateTo('Alimentacion')}
            >
              <Text style={styles.linkButtonText}>Ver verduras permitidas →</Text>
            </TouchableOpacity>

            <View style={styles.warningBox}>
              <Text style={styles.warningIcon}>💧</Text>
              <Text style={styles.warningText}>
                <Text style={styles.bold}>Agua:</Text> Debe tener acceso ilimitado 
                a agua fresca. Podés usar bebedero o plato limpiándolo diariamente.
              </Text>
            </View>
          </View>
        </View>

        {/* Temperatura */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🌡️</Text>
            <Text style={styles.sectionTitle}>Control de Temperatura</Text>
          </View>
          
          <View style={styles.card}>
            <Text style={styles.paragraph}>
              Los cobayos son sensibles a temperaturas extremas. El rango ideal es 
              <Text style={styles.bold}> 18°C a 24°C</Text>.
            </Text>

            <View style={styles.tempBox}>
              <Text style={styles.tempIcon}>❄️</Text>
              <View style={styles.tempContent}>
                <Text style={styles.tempTitle}>Si hace frío</Text>
                <Text style={styles.tempText}>
                  Comprale una casita tipo "cunita" o iglú donde puedan refugiarse 
                  y mantenerse calentitos.
                </Text>
              </View>
            </View>

            <View style={styles.tempBox}>
              <Text style={styles.tempIcon}>🔥</Text>
              <View style={styles.tempContent}>
                <Text style={styles.tempTitle}>Si hace calor</Text>
                <Text style={styles.tempText}>
                  NO dejes que se cubran con mantas, aunque ellos lo intenten. 
                  Pueden sufrir un golpe de calor. Mantené el ambiente fresco 
                  y con ventilación.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Salud */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🏥</Text>
            <Text style={styles.sectionTitle}>Cuidados Veterinarios</Text>
          </View>
          
          <View style={styles.card}>
            <Text style={styles.paragraph}>
              Es fundamental encontrar un <Text style={styles.bold}>veterinario 
              especializado en animales exóticos</Text> antes de adoptar. Los cobayos 
              pueden enfermar rápidamente y necesitan atención especializada.
            </Text>

            <TouchableOpacity 
              style={[styles.linkButton, styles.linkButtonHealth]}
              onPress={() => navigateTo('Salud')}
            >
              <Text style={styles.linkButtonText}>Ver enfermedades comunes →</Text>
            </TouchableOpacity>

            <View style={styles.warningBox}>
              <Text style={styles.warningIcon}>⚠️</Text>
              <Text style={styles.warningText}>
                Los cobayos esconden muy bien sus síntomas. Cualquier cambio en 
                comportamiento, apetito o energía debe ser consultado inmediatamente.
              </Text>
            </View>
          </View>
        </View>

        {/* Checklist Final */}
        <View style={styles.section}>
          <LinearGradient
            colors={['#fef3c7', '#fde68a']}
            style={styles.checklistCard}
          >
            <Text style={styles.checklistTitle}>Checklist antes de adoptar</Text>
            
            <View style={styles.checklistItem}>
              <Text style={styles.checklistIcon}>✓</Text>
              <Text style={styles.checklistText}>Hábitat de tamaño adecuado</Text>
            </View>
            
            <View style={styles.checklistItem}>
              <Text style={styles.checklistIcon}>✓</Text>
              <Text style={styles.checklistText}>Mantas absorbentes o sustrato apropiado</Text>
            </View>
            
            <View style={styles.checklistItem}>
              <Text style={styles.checklistIcon}>✓</Text>
              <Text style={styles.checklistText}>Heno de calidad disponible</Text>
            </View>
            
            <View style={styles.checklistItem}>
              <Text style={styles.checklistIcon}>✓</Text>
              <Text style={styles.checklistText}>Bebedero o plato para agua</Text>
            </View>
            
            <View style={styles.checklistItem}>
              <Text style={styles.checklistIcon}>✓</Text>
              <Text style={styles.checklistText}>Veterinario de exóticos localizado</Text>
            </View>
            
            <View style={styles.checklistItem}>
              <Text style={styles.checklistIcon}>✓</Text>
              <Text style={styles.checklistText}>Presupuesto para alimentación y cuidados</Text>
            </View>
            
            <View style={styles.checklistItem}>
              <Text style={styles.checklistIcon}>✓</Text>
              <Text style={styles.checklistText}>Tiempo diario para atención y limpieza</Text>
            </View>

            <Text style={styles.checklistFooter}>
              Si completaste todo, estás listo para darle un hogar a un cobayo
            </Text>
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