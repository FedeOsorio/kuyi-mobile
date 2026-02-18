import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import HeaderComponent from '@/components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

type FoodItem = {
  id: string
  image: any
  name: string
  description: string
  top: string
  recommended: 'high' | 'medium' | 'low' | 'not'
}

const data: FoodItem[] = [
  {
    id: '1',
    image: require('@/assets/images/food/radicheta.jpg'),
    name: 'Radicheta',
    description: 'Muy recomendada',
    recommended: 'high',
    top: 'Puede darse a diario pero en raciones controladas ya que les genera adicción.'
  },
  {
    id: '2',
    image: require('@/assets/images/food/lechugaR.png'),
    name: 'Lechuga Romana',
    description: 'Recomendada',
    recommended: 'high',
    top: 'La más fibrosa de todas y difícil de conseguir.'
  },
  {
    id: '3',
    image: require('@/assets/images/food/lechugaM.png'),
    name: 'Lechuga Manteca',
    description: 'Recomendada',
    recommended: 'medium',
    top: 'Alternativa a la romana'
  },
  {
    id: '4',
    image: require('@/assets/images/food/lechugaMor.jpg'),
    name: 'Lechuga Morada',
    description: 'Menos recomendada',
    recommended: 'medium',
    top: 'Buena opción para ofrecer en plato variado.'
  },
  {
    id: '5',
    image: require('@/assets/images/food/lechugaC.jpg'),
    name: 'Lechuga Criolla',
    description: 'Menos recomendada',
    recommended: 'low',
    top: 'Más cantidad de agua que las anteriores, si no queda otra quitar el tallo.'
  },
  {
    id: '6',
    image: require('@/assets/images/food/lechugaI.png'),
    name: 'Lechuga Iceberg',
    description: 'NO recomendada',
    recommended: 'not',
    top: 'Es la que mayor cantidad de agua posee, no aporta fibra, como comer agua.'
  }
]

const getRecommendedColor = (level: string) => {
  switch (level) {
    case 'high': return '#10b981'
    case 'medium': return '#94b910'
    case 'low': return '#f59e0b'
    case 'not': return '#dc2626'
    default: return '#6b7280'
  }
}

const ListHeader = () => (
  <View>
    <Image 
      source={require('@/assets/images/kuyiDiet.png')}
      style={styles.headerImage}
      resizeMode='cover'
    />
    
    <View style={styles.introSection}>
      <Text style={styles.sectionTitle}>Consideración General</Text>
      <Text style={styles.paragraph}>
        La alimentación de un Cobayo está compuesta 80% por heno de pastura, 
        el cual es obligatorio en su dieta, 15% por verduras y frutas ocasionales, 
        y el 5% restante corresponde a pellets de alimento balanceado.
      </Text>
      <Text style={styles.paragraph}>
        La dieta se ve ligeramente modificada según la edad del cobayito. A continuación 
        encontrarás mayores detalles, consideraciones a tener en cuenta y todas las verduras 
        tanto permitidas como prohibidas en la dieta de tu mascota.
      </Text>
    </View>

    <View style={styles.tipsSection}>
      <Text style={styles.sectionTitle}>Consejos para todas las edades</Text>
      
      <View style={styles.tipBox}>
        <Text style={styles.tipIcon}>💊</Text>
        <View style={styles.tipContent}>
          <Text style={styles.tipTitle}>Vitamina C</Text>
          <Text style={styles.tipText}>
            Las cobayas no pueden producir Vitamina C, la cual es muy importante en su 
            metabolismo. Su dieta debe incluir fuentes ricas en esta vitamina como el 
            morrón o suplementos específicos.
          </Text>
        </View>
      </View>

      <View style={[styles.tipBox, styles.warningBox]}>
        <Text style={styles.tipIcon}>⚠️</Text>
        <View style={styles.tipContent}>
          <Text style={styles.tipTitle}>Nunca ofrecer</Text>
          <Text style={styles.tipText}>
            Papa, cebolla, ajo, repollo, pan, galletas, chocolate, carne, productos 
            lácteos, ni alimentos con azúcar o sal.
          </Text>
        </View>
      </View>

      <View style={styles.noteBox}>
        <Text style={styles.noteText}>
          Todos los vegetales deben darse crudos, lavados y secados. Es muy importante 
          quitarles las semillas ya que pueden causar daño en su aparato digestivo.
        </Text>
      </View>
    </View>

    <View style={styles.listTitleSection}>
      <Text style={styles.listTitle}>🥬 Hojas Verdes</Text>
      <Text style={styles.listSubtitle}>
        Las lechugas no deben darse en tanta cantidad por su alto contenido en agua. 
        Entre 1 a 2 hojas por cobaya por día es lo más recomendado.
      </Text>
    </View>
  </View>
)

export default function Food() {
  const renderItem = ({ item }: { item: FoodItem }) => (
    <View style={styles.foodCard}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.foodImage} />
      </View>
      
      <View style={styles.foodContent}>
        <Text style={styles.foodName} numberOfLines={2}>{item.name}</Text>
        <View 
          style={[
            styles.recommendedBadge, 
            { backgroundColor: getRecommendedColor(item.recommended) }
          ]}
        >
          <Text style={styles.recommendedText}>
            {item.description}
          </Text>
        </View>
        <Text style={styles.foodDescription} numberOfLines={3}>{item.top}</Text>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title='Alimentación' />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        ListHeaderComponent={<ListHeader />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaef',
  },
  headerImage: {
    width: '100%',
    height: 220,
  },
  listContent: {
    paddingBottom: 20,
  },
  columnWrapper: {
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  introSection: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  tipsSection: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 17,
    color: '#78350f',
  },
  paragraph: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#451a03',
    lineHeight: 22,
    marginBottom: 12,
    textAlign: 'justify',
  },
  tipBox: {
    flexDirection: 'row',
    backgroundColor: '#f0fdf4',
    borderLeftWidth: 4,
    borderLeftColor: '#10b981',
    borderRightColor: '#10b981',
    borderRightWidth: 4,
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  warningBox: {
    backgroundColor: '#fef3c7',
    borderLeftColor: '#f59e0b',
    borderRightColor: '#f59e0b',
  },
  tipIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#78350f',
    marginBottom: 4,
  },
  tipText: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#451a03',
    lineHeight: 20,
    textAlign: 'justify',
  },
  noteBox: {
    backgroundColor: '#f0f9ff',
    borderRadius: 12,
    padding: 14,
    marginTop: 4,
  },
  noteText: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#0c4a6e',
    lineHeight: 20,
    textAlign: 'justify',
    fontStyle: 'italic',
  },
  listTitleSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fef3c7',
    marginBottom: 10
  },
  listTitle: {
    fontSize: 17,
    fontFamily: 'Poppins_600SemiBold',
    color: '#78350f',
    marginBottom: 6,
  },
  listSubtitle: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#92400e',
    lineHeight: 20,
    textAlign: 'justify',
  },
  foodCard: {
    backgroundColor: '#fff',
    flex: 1,
    maxWidth: '49%',
    marginBottom: 10,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'cover',
  },
  recommendedBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  recommendedText: {
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
    fontSize: 9,
    lineHeight: 14,
    textAlign: 'center',
  },
  foodContent: {
    padding: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  foodName: {
    fontSize: 13,
    fontFamily: 'Poppins_600SemiBold',
    color: '#78350f',
    marginBottom: 6,
    textAlign: 'center',
  },
  foodDescription: {
    fontSize: 11,
    fontFamily: 'Poppins_400Regular',
    color: '#451a03',
    lineHeight: 16,
    textAlign: 'justify',
    marginTop: 6,
  },
})