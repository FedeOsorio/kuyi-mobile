import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import HeaderComponent from '@/components/Header'
import H1 from '@/components/H1'
import H2 from '@/components/H2'

const data = [
  {
    id: '1',
    image: require('@/assets/images/hay/pastura.jpg'),
    name: 'Heno de Pastura',
    desc: '✅'
  },
  {
    id: '2',
    image: require('@/assets/images/hay/avena.jpg'),
    name: 'Heno de Avena',
    desc: '✅'
  },
  {
    id: '3',
    image: require('@/assets/images/hay/alfalfa.jpg'),
    name: 'Heno de Alfalfa',
    desc: '✅'
  },
  {
    id: '4',
    image: require('@/assets/images/hay/pasturaMalo.jpg'),
    name: 'Heno de Pastura Amarillento',
    desc: '🚫🤮'
  },
  {
    id: '5',
    image: require('@/assets/images/hay/cuboHeno.png'),
    name: 'Cubo de Heno',
    desc: '✅'
  },
  {
    id: '6',
    image: require('@/assets/images/hay/cuboAlfa.png'),
    name: 'Cubo de Alfalfa',
    desc: '✅',
  }
];

const HayHeader = () => (
  <ScrollView>
    <View style={styles.container}>
      <H1 content={'Heno'}></H1>
      <Text style={{ textAlign: 'justify' }}>Es obligatorio en la dieta de un cobayo ya que es el 80% de su alimentación diaria,
        tiene que estar disponible en su recinto las 24 horas.
      </Text>
      <Text style={{ textAlign: 'justify' }}>Un Heno de buena calidad es color verde y posee una gran cantidad de hierba, no ramas gruesas.
      </Text>
      <H2 style={{ textAlign: 'center' }} content={'Heno vs Pasto Fresco'}></H2>
      <Text style={{ textAlign: 'justify' }}>Gracias al proceso de secado, en el heno se reduce el porcentaje de humedad a muy bajos niveles.
        {`\n`}Esto es muy importante para el desgaste dental y el tipo de digestión del cobayo. Además se reduce el riesgo de gases, diarrea o hinchazón abdominal.
      </Text>
      <H2 style={{ textAlign: 'center' }} content={'Tipos de Henos'}></H2>
      <Text style={{ textAlign: 'justify' }}>
        <Text style={{ fontWeight: 500 }}>1 - Heno de Alfalfa:</Text> Obligatorio en cobayas bebes de 0 a 6 meses de edad. También se incluye en la dieta de cobayas que
        esten embarazadas y/o que estén en proceso de recuperación.
        {`\n`}
        🚨 <Text style={{ fontStyle: 'italic' }}><Text style={{ fontWeight: 500 }}>Advertencia:</Text> El Heno de alfalfa no debe darse diariamente a cobayos mayores de 6 meses, ya que por su alto contenido en calcio puede generar cálculos renales.</Text>
        {`\n`}
        {`\n`}
        <Text style={{ fontWeight: 500 }}>2 - Heno de Avena:</Text> Buena opción para dar como variedad o mezclar con otro heno. Pero no debe ser su heno principal.
        {`\n`}
        {`\n`}
        <Text style={{ fontWeight: 500 }}>3 - Heno de Pasturas:</Text> El más importante de todos en cobayos adultos, y es el que le vamos a dar a nuestras cobis desde los 7 meses hasta el final de sus vidas.
        Posee un alto contenido de fibra y bajo contenido de calcio, lo que lo hace ideal.
        {`\n`}
        {`\n`}
        <Text style={{ fontWeight: 500 }}>4 - Heno en Cubo:</Text> Muy bueno para el desgaste de los dientes ya que lo pueden roer. Generalmente vienen de heno de pasturas o de alfalfa.
        Ambas opciones son válidas.
        {`\n`}
      </Text>
    </View>
  </ScrollView>
);

export default function Hay() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fffaef' }}>
      <HeaderComponent></HeaderComponent>
      <FlatList
        data={data}
        style={styles.row}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={<HayHeader />}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            {/* Columna izquierda (imagen y nombre) */}
            <View style={styles.column}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
            </View>

            {/* Columna derecha (string) */}
            <View style={styles.column}>
              <Text style={styles.infoText}>{item.desc}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  row: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: 'row', // Disposición en fila para las dos columnas
    borderWidth: .8,
    borderColor: '#555',
    borderRadius: 5,
    width: '100%', // Para que dos items quepan en una fila con espacio entre ellos
  },
  column: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 5,
    alignSelf: 'center'
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#666',
  },
});