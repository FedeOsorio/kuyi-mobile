import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import HeaderComponent from '@/components/Header'
import { Image } from 'expo-image'

type DonationButton = {
  platform: string
  icon: string
  url: string
  color: readonly [string, string, ...string[]]
}

const donationOptions: DonationButton[] = [
/*   {
    platform: 'Cafecito',
    icon: '☕',
    url: 'https://cafecito.app/tuusuario', // Reemplazar con tu usuario
    color: ['#FF6B35', '#F7931E'] as const
  }, */
  {
    platform: 'Mercado Pago',
    icon: '💳',
    url: 'https://link.mercadopago.com.ar/kuyi', // Reemplazar con tu link
    color: ['#009EE3', '#00B1EA'] as const
  },
  {
    platform: 'PayPal',
    icon: '🌐',
    url: 'https://paypal.me/osoriofederico', // Reemplazar con tu usuario
    color: ['#0070BA', '#1546A0'] as const
  }
]

export default function Info() {
  const openLink = (url: string) => {
    Linking.openURL(url).catch(() => {
      console.log('No se pudo abrir el link')
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title="Info y Contacto" />
      
      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🐹</Text>
            <Text style={styles.sectionTitle}>KuYi App</Text>
          </View>
          
          <View style={styles.card}>
            <Text style={styles.paragraph}>
              KuYi nació debido a la necesidad y a la falta de lugares confiables dónde obtener información a cerca del delicado cuidado de los cobayos.
            </Text>
            <Text style={styles.paragraph}>
              Esta app reúne todo lo necesario en un solo lugar: 
              desde alimentación correcta hasta cómo actuar en emergencias. {'\n'}Espero que sea 
              de ayuda para todos los que aman a estos pequeños compañeros. 🐹💛
            </Text>
            <Text style={styles.paragraph}>
              Y ahora les presento a quienes hicieron que esta aplicación fuera posible...
            </Text>
            <Text style={styles.highlightBoldText}>
              Kumi🐹🪽 y Yuri🐹
            </Text>
            <Image
                source={require('@/assets/images/kumiyuri.jpg')}
                style={styles.kumiYuriImage}
            />
          </View>
        </View>

        {/* Sección Donaciones */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>💝</Text>
            <Text style={styles.sectionTitle}>Apoyá el Proyecto</Text>
          </View>
          
          <View style={styles.card}>
            <Text style={[styles.paragraph, { textAlign: 'justify' }]}>
              KuYi es una app gratuita y libre de anuncios.
              {'\n'}Si te resulta útil y querés apoyar el desarrollo y mantenimiento de la app, podés realizar una donación.
              {'\n'}¡Cada aporte ayuda a seguir mejorandola! 💛
              {'\n\n'}¡Como agradecimiento a cada donación mi idea es implementar una sección en la cual las fotos de sus Cobis puedan ser parte de la app!
            </Text>
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
                  <Text style={styles.donationIcon}>{option.icon}</Text>
                  <Text style={styles.donationText}>{option.platform}</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Sección Contacto */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>📬</Text>
            <Text style={styles.sectionTitle}>Contacto</Text>
          </View>
          
          <View style={styles.card}>
            <Text style={styles.paragraph}>
              ¿Tenés sugerencias, encontraste algún error o querés aportar información?
            </Text>
            
            <TouchableOpacity 
              style={styles.contactButton}
              onPress={() => openLink('mailto:fede.osoriog@gmail.com')} // Reemplazar con tu email
            >
              <Text style={styles.contactButtonText}>📧 Enviar Email</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Hecho con 💛 para la comunidad de cobayas
          </Text>
          <Text style={styles.versionText}>
            Versión 1.0.0
          </Text>
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
    paddingHorizontal: 16,
  },
  section: {
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  sectionIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#78350f',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    gap: 10,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  paragraph: {
    fontSize: 15,
    color: '#451a03',
    lineHeight: 22
  },
  highlightText: {
    fontSize: 15,
    color: '#78350f',
    lineHeight: 22,
    fontWeight: '600',
    fontStyle: 'italic',
  },
    highlightBoldText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#78350f',
    lineHeight: 22,
    fontWeight: '600',
  },
  kumiYuriImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
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
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  donationIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  donationText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#fff'
  },
  contactButton: {
    backgroundColor: '#fef3c7',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 8,
    borderWidth: 2,
    borderColor: '#fde68a',
  },
  contactButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#78350f',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    marginTop: 24,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#fde68a',
  },
  footerText: {
    fontSize: 14,
    color: '#92400e',
    marginBottom: 4,
  },
  versionText: {
    fontSize: 12,
    color: '#92400e',
    opacity: 0.7,
  },
})