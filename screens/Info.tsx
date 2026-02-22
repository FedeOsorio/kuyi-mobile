import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderComponent from '@/components/Header';
import { Image } from 'expo-image';
import { StyledText } from '@/components/StyledText';
import { useFontScale } from '@/hooks/useFontScale';

type DonationButton = {
  platform: string
  icon: string
  url: string
  color: readonly [string, string, ...string[]]
}

const donationOptions: DonationButton[] = [
  {
    platform: 'Sitio Web',
    icon: '🌐',
    url: 'https://fedeosorio.github.io/kuyi-app/', 
    color: ['#0070BA', '#1546A0'] as const
  },
]

export default function Info() {
  const fontScale = useFontScale();

  const openLink = (url: string) => {
    Linking.openURL(url).catch(() => {
      console.log('No se pudo abrir el link')
    })
  }

  const getSectionColor = (title: string) => {
    switch (title) {
      case 'KuYi App': return '#f59e0b'
      case 'Apoyá el Proyecto': return '#10b981'
      case 'Contacto': return '#2563eb'
      default: return '#6b7280'
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title="Info y Contacto" />
      
      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <View style={[styles.sectionHeader, { borderLeftColor: getSectionColor('KuYi App') }]}>
            <StyledText style={[styles.sectionIcon, { fontSize: 22 / fontScale }]}>🐹</StyledText>
            <StyledText variant="title" style={[styles.sectionTitle, { color: getSectionColor('KuYi App'), fontSize: 15 / fontScale }]}>KuYi App</StyledText>
          </View>
          
          <View style={styles.card}>
            <StyledText style={[styles.paragraph, { fontSize: 12 / fontScale, lineHeight: 22 / fontScale }]}>
              KuYi nació debido a la necesidad y a la falta de lugares confiables dónde obtener información a cerca del delicado cuidado de los cobayos.
            </StyledText>
            <StyledText style={[styles.paragraph, { fontSize: 12 / fontScale, lineHeight: 22 / fontScale }]}>
              Esta app reúne todo lo necesario en un solo lugar: 
              desde alimentación correcta hasta cómo actuar en emergencias. {'\n'}Espero que sea 
              de ayuda para todos los que aman a estos pequeños compañeros. 🐹💛
            </StyledText>
            <StyledText style={[styles.paragraph, { fontSize: 12 / fontScale, lineHeight: 22 / fontScale }]}>
              Y ahora les presento a quienes hicieron que esta aplicación fuera posible...
            </StyledText>
            <StyledText style={[styles.highlightBoldText, { fontSize: 18 / fontScale, lineHeight: 22 / fontScale }]}>
              Kumi🐹🪽 y Yuri🐹
            </StyledText>
            <Image
                source={require('@/assets/images/kumiyuri.jpg')}
                style={styles.kumiYuriImage}
            />
          </View>
        </View>

        {/* Sección Donaciones */}
        <View style={styles.section}>
          <View style={[styles.sectionHeader, { borderLeftColor: getSectionColor('Apoyá el Proyecto') }]}>
            <StyledText style={[styles.sectionIcon, { fontSize: 22 / fontScale }]}>💝</StyledText>
            <StyledText variant="title" style={[styles.sectionTitle, { color: getSectionColor('Apoyá el Proyecto'), fontSize: 15 / fontScale }]}>Apoyá el Proyecto</StyledText>
          </View>
          
          <View style={styles.card}>
            <StyledText style={[styles.paragraph, { textAlign: 'justify', fontSize: 12 / fontScale, lineHeight: 22 / fontScale }]}>
              KuYi es una app gratuita y libre de anuncios.
              {'\n'}Si te resulta útil y querés apoyar el desarrollo y mantenimiento de la app, podés realizar una donación.
              {'\n'}¡Cada aporte ayuda a seguir mejorandola! 💛
              {'\n\n'}¡Como agradecimiento a cada donación mi idea es implementar una sección en la cual las fotos de sus Cobis puedan ser parte de la app!
              {'\n\n'}¡Si realizaste una, te pido por favor que me avises por correo con el botón que está más abajo!
            </StyledText>
          </View>

          <View style={styles.donationButtons}>
            {donationOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                onPress={() => openLink(option.url)}
                style={styles.donationButtonWrapper}
              >
                <LinearGradient
                  colors={option.color}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.donationButton}
                >
                  <StyledText style={[styles.donationIcon, { fontSize: 22 / fontScale, lineHeight: 32 / fontScale}]}>{option.icon}</StyledText>
                  <StyledText style={[styles.donationText, { fontSize: 17 / fontScale }]}>{option.platform}</StyledText>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Sección Contacto */}
        <View style={styles.section}>
          <View style={[styles.sectionHeader, { borderLeftColor: getSectionColor('Contacto') }]}>
            <StyledText style={[styles.sectionIcon, { fontSize: 22 / fontScale }]}>📬</StyledText>
            <StyledText variant="title" style={[styles.sectionTitle, { color: getSectionColor('Contacto'), fontSize: 15 / fontScale }]}>Contacto</StyledText>
          </View>
          
          <View style={styles.card}>
            <StyledText style={[styles.paragraph, { fontSize: 12 / fontScale, lineHeight: 22 / fontScale }]}>
              ¿Tenés sugerencias, encontraste algún error o querés aportar información?
            </StyledText>
            
            <TouchableOpacity 
              style={styles.contactButton}
              onPress={() => openLink('mailto:fede.osoriog@gmail.com')} 
            >
              <StyledText style={[styles.contactButtonText, { fontSize: 13 / fontScale }]}>📧 Enviar Email</StyledText>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <StyledText style={[styles.footerText, { fontSize: 12 / fontScale }]}>
            Hecho con 💛 para la comunidad de cobayas
          </StyledText>
          <StyledText style={[styles.versionText, { fontSize: 12 / fontScale }]}>
            Versión 1.0.0
          </StyledText>
        </View>
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
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionIcon: {
    marginRight: 8,
    textAlignVertical: 'center',
  },
  sectionTitle: {
    fontFamily: 'Poppins_800ExtraBold',
    letterSpacing: 0.5,
    textAlignVertical: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    gap: 10,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  paragraph: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#451a03',
  },
  highlightText: {
    fontFamily: 'Poppins_500Medium',
    color: '#78350f',
    fontStyle: 'italic',
  },
  highlightBoldText: {
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    color: '#78350f',
  },
  kumiYuriImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  donationButtons: {
    marginTop: 12,
    gap: 12,
  },
  donationButtonWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  donationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12, // Reducido de 16
    paddingHorizontal: 16, // Reducido de 20
    minHeight: 50, // Reducido de 60
  },
  donationIcon: {
    marginRight: 12,
    textAlignVertical: 'center',
  },
  donationText: {
    fontFamily: 'Poppins_500Medium',
    color: '#fff',
    textAlignVertical: 'center',
    lineHeight: 18,
  },
  contactButton: {
    backgroundColor: '#fef3c7',
    paddingVertical: 10, // Reducido de 14
    paddingHorizontal: 16, // Reducido de 20
    borderRadius: 12,
    marginTop: 8,
    borderWidth: 2,
    borderColor: '#fde68a',
  },
  contactButtonText: {
    fontFamily: 'Poppins_500Medium',
    color: '#78350f',
    textAlign: 'center',
    lineHeight: 18,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#fde68a',
  },
  footerText: {
    fontFamily: 'Poppins_400Regular',
    color: '#92400e',
  },
  versionText: {
    fontFamily: 'Poppins_400Regular',
    color: '#92400e',
    opacity: 0.7,
  },
})