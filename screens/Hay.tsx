import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import HeaderComponent from '@/components/Header';
import { StyledText } from '@/components/StyledText';

const data = [
  { id: '1', image: require('@/assets/images/hay/pastura.jpg'), name: 'Heno de Pastura', desc: 'Ideal' },
  { id: '2', image: require('@/assets/images/hay/avena.jpg'), name: 'Heno de Avena', desc: 'Variedad' },
  { id: '3', image: require('@/assets/images/hay/alfalfa.jpg'), name: 'Heno de Alfalfa', desc: 'Bebés/Embarazo/Recup.' },
  { id: '4', image: require('@/assets/images/hay/pasturaMalo.jpg'), name: 'Heno Amarillento', desc: 'Evitar' },
  { id: '5', image: require('@/assets/images/hay/cuboHeno.png'), name: 'Cubo de Heno', desc: 'Dental' },
  { id: '6', image: require('@/assets/images/hay/cuboAlfa.png'), name: 'Cubo de Alfalfa', desc: 'Ocasional' }
];

const HayHeader = () => (
  <View style={styles.headerContent}>
    <View style={styles.mainInfoCard}>
      <StyledText style={styles.mainText}>
        Es <StyledText style={styles.bold}>obligatorio</StyledText> en la dieta de un cobayo ya que es el <StyledText style={styles.highlight}>80% de su alimentación diaria</StyledText>. Debe estar disponible en su recinto las 24 horas.
      </StyledText>
      <View style={styles.qualityBadge}>
        <StyledText style={styles.qualityText}>💡 Calidad: Color verde, mucha hierba, sin ramas gruesas.</StyledText>
      </View>
    </View>

    <StyledText variant="title" style={styles.sectionTitle}>Heno vs Pasto Fresco</StyledText>
    <View style={styles.comparisonCard}>
      <StyledText style={styles.paragraph}>
        Gracias al proceso de secado, se reduce la humedad a niveles muy bajos. {'\n'}
      </StyledText>
      
      <StyledText style={styles.paragraph}>
        Esto es vital para el <StyledText style={styles.bold}>desgaste dental</StyledText> y la digestión. Además, reduce el riesgo de gases, diarrea o hinchazón abdominal.
      </StyledText>
    </View>

    <StyledText variant="title" style={styles.sectionTitle}>Tipos de Henos</StyledText>
    
    {/* Sección Detallada de Tipos */}
    <View style={styles.typesContainer}>
      <View style={styles.typeItem}>
        <StyledText style={styles.typeTitle}>1 - Heno de Pasturas</StyledText>
        <StyledText style={styles.typeDesc}>El más importante. Alto en fibra y bajo en calcio. Para cobayos de todas las edades.</StyledText>
      </View>
      <View style={styles.typeItem}>
        <StyledText style={styles.typeTitle}>2 - Heno de Avena</StyledText>
        <StyledText style={styles.typeDesc}>Buena opción para dar como variedad o mezclar. No debe ser el principal.</StyledText>
      </View>

      <View style={styles.typeItem}>
        <StyledText style={styles.typeTitle}>3 - Heno de Alfalfa</StyledText>
        <StyledText style={styles.typeDesc}>Complementario en cobayas bebés (0 a 6 meses), embarazadas o en recuperación.</StyledText>
        <StyledText style={styles.typeDesc}>En la dieta acompaña al heno de pasturas, pero no lo reemplaza.</StyledText>
        <View style={styles.warningBox}>
          <StyledText style={styles.warningText}>🚨 <StyledText style={styles.bold}>Advertencia:</StyledText> No debe darse diariamente en grandes cantidades por su alto contenido de calcio (riesgo de cálculos renales). Es un complemento.</StyledText>
        </View>
      </View>

      <View style={styles.typeItem}>
        <StyledText style={styles.typeTitle}>4 - Heno en Cubo</StyledText>
        <StyledText style={styles.typeDesc}>Excelente para roer y desgastar dientes. Vienen de pasturas o alfalfa, ambos válidos.</StyledText>
      </View>
    </View>

    <StyledText variant="title" style={[styles.sectionTitle, { textAlign: 'center', marginTop: -6, marginBottom: 4 }]}>Catálogo Visual</StyledText>
  </View>
);

export default function Hay() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9F6' }}>
      <HeaderComponent title="Heno 🌱" />
      <FlatList
        data={data}
        contentContainerStyle={styles.listPadding}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<HayHeader />}
        numColumns={2}
        columnWrapperStyle={styles.rowWrapper}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} contentFit="cover" />
            <View style={styles.cardInfo}>
              <StyledText style={styles.name}>{item.name}</StyledText>
              <View style={[styles.badge, { backgroundColor: item.desc === 'Evitar' ? '#ffebee' : '#e8f5e9' }]}>
                <StyledText style={[styles.badgeText, { color: item.desc === 'Evitar' ? '#c62828' : '#2e7d32' }]}>{item.desc}</StyledText>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  listPadding: { paddingHorizontal: 16, paddingBottom: 30 },
  headerContent: { paddingVertical: 10 },
  sectionTitle: { fontFamily: 'Poppins_600SemiBold', fontSize: 17, color: '#78350f', marginTop: 18, marginBottom: 10, textAlign: 'left' },
  
  // Tarjeta Principal
  mainInfoCard: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    marginTop: 10
  },
  mainText: { fontFamily: 'Poppins_400Regular', fontSize: 12, lineHeight: 22, color: '#333' },
  highlight: { fontFamily: 'Poppins_600SemiBold', color: '#795548' },
  bold: { fontFamily: 'Poppins_600SemiBold' },
  qualityBadge: {
    marginTop: 12,
    backgroundColor: '#f1f8e9',
    padding: 10,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#8bc34a',
    borderRightWidth: 4,
    borderRightColor: '#8bc34a',
  },
  qualityText: { fontFamily: 'Poppins_400Regular', fontSize: 12, color: '#33691e', fontStyle: 'italic' },

  // Comparación
  comparisonCard: { paddingHorizontal: 5 },
  paragraph: { fontFamily: 'Poppins_400Regular', fontSize: 12, color: '#555', lineHeight: 22 },

  // Lista de Tipos
  typesContainer: { marginBottom: 10 },
  typeItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#d7ccc8'
  },
  typeTitle: { fontFamily: 'Poppins_600SemiBold', fontSize: 14, color: '#5d4037', marginBottom: 4 },
  typeDesc: { fontFamily: 'Poppins_400Regular', fontSize: 12, color: '#666', lineHeight: 20 },
  warningBox: {
    marginTop: 8,
    padding: 10,
    backgroundColor: '#fff5f5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffcdd2'
  },
  warningText: { fontSize: 12, color: '#b71c1c', lineHeight: 18 },
  rowWrapper: { justifyContent: 'space-between' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 16,
    flex: 1,
    maxWidth: '48%',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2
  },
  image: { width: '100%', height: 110 },
  cardInfo: { padding: 10, alignItems: 'center' },
  name: { fontFamily: 'Poppins_600SemiBold', fontSize: 13, textAlign: 'center', color: '#333', marginBottom: 2 },
  badge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  badgeText: { fontFamily: 'Poppins_500Medium', fontSize: 9, lineHeight: 14, textTransform: 'uppercase' },
});