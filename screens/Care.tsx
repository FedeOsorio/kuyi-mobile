import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from '@/components/Header'

type CareTip = {
  id: string
  title: string
  category: string
  summary: string
  content: string
}

const careTips: CareTip[] = [
  {
    id: 'primera-visita',
    title: 'Primera visita al veterinario',
    category: 'Salud',
    summary: 'Lo primero que debés hacer al adoptar un cobayo.',
    content: 'Lo primero que debés hacer al adoptar un cobayo es llevarlo a un veterinario especializado en animales exóticos. No sabés en qué condiciones lo tenían anteriormente, y muchas enfermedades no se notan a simple vista. El veterinario va a hacer un chequeo general, revisar dientes, peso, pelaje y descartará parásitos. Este primer chequeo es fundamental para arrancar con el pie derecho.'
  },
  {
    id: 'rutina-diaria',
    title: 'Rutina diaria',
    category: 'Rutina',
    summary: 'Qué debés revisar y hacer todos los días.',
    content: 'Todos los días debés:\n\n• Revisar que el heno esté disponible y fresco. Es el alimento más importante.\n• Cambiar el agua del bebedero o plato. El agua sucia puede generar bacterias.\n• Ofrecer las verduras del día, lavadas y secadas.\n• Observar brevemente su comportamiento: si come, se mueve y vocaliza normalmente.\n• Barrer o retirar las cacas más visibles de la manta.\n\nEsta rutina no lleva más de 10 minutos y marca una gran diferencia en la salud de tu cobayo.'
  },
  {
    id: 'manipulacion',
    title: 'Cómo manipularlo correctamente',
    category: 'Manejo',
    summary: 'La forma correcta de alzarlo para que no se lastime.',
    content: 'Para alzar un cobayo correctamente:\n\n• Nunca lo agarres por la espalda de golpe, los asusta mucho.\n• Usá las dos manos: una por debajo del pecho y otra sosteniendo la cola y las patas traseras.\n• Mantenelo cerca de tu cuerpo para que se sienta seguro.\n• Nunca lo dejes solo en lugares altos, pueden caerse y lastimarse gravemente.'
  },
  {
    id: 'señales-felicidad',
    title: 'Señales de que está feliz',
    category: 'Comportamiento',
    summary: 'Cómo saber que tu cobayo está contento.',
    content: 'Los cobayos expresan felicidad de formas muy particulares:\n\n• Popcorning: saltos bruscos y espontáneos hacia arriba. Es la señal más clara de alegría.\n• Purring: un ronroneo suave cuando los acariciás. Significa que están cómodos y felices.\n• Wheeks: vocalizaciones agudas cuando te escuchan llegar o cuando esperan comida.\n• Exploración activa: cuando caminan libremente, husmean y exploran su entorno con curiosidad.\n• Comer con entusiasmo y hacer ruidos al masticar.\n\nSi ves estas conductas regularmente, estás haciendo las cosas bien.'
  },
  {
    id: 'señales-estres',
    title: 'Señales de estrés',
    category: 'Comportamiento',
    summary: 'Cómo detectar que algo no está bien.',
    content: 'Prestá atención si notás:\n\n• Dientes chillantes (teeth chattering): ruido agudo y rápido con los dientes, señal de enojo o estrés.\n• Esconderse constantemente y no querer salir.\n• No comer o beber durante más de 12 horas.\n• Pelo erizado sin motivo aparente.\n• Movimientos repetitivos o circulares en la jaula.\n• Morderse a sí mismo o arrancarse pelo.\n\nEl estrés crónico baja las defensas y puede generar enfermedades. Revisá el ambiente: ruidos fuertes, otras mascotas, temperatura, espacio insuficiente.'
  },
  {
    id: 'tiempo-libre',
    title: 'Tiempo fuera de la jaula',
    category: 'Rutina',
    summary: 'El tiempo libre es fundamental para su bienestar.',
    content: 'Los cobayos necesitan tiempo fuera de su hábitat todos los días. Lo ideal es al menos 1 hora de "floor time" (tiempo en el suelo) diario.\n\nConsejos para el tiempo libre:\n\n• Cerrá la habitación o usá un corral portátil para delimitarlo.\n• Revisá que no haya cables al alcance, los roen sin problema.\n• Poné escondites, túneles y objetos para explorar.\n• Nunca los dejés solos durante el tiempo libre.\n• Si tenés dos cobayos, este es el momento ideal para que socialicen y jueguen.\n\nEl tiempo libre mejora notablemente su humor y salud física.'
  },
  {
    id: 'limpieza-uñas',
    title: 'Corte de uñas',
    category: 'Higiene',
    summary: 'Las uñas largas pueden causarles problemas al caminar.',
    content: 'Las uñas de los cobayos crecen constantemente y deben cortarse cada 4 a 6 semanas aproximadamente.\n\nCómo hacerlo:\n\n• Usá tijeras o cortauñas específicos para animales pequeños.\n• Buscá la parte rosada de la uña (el "quick" o vena). Nunca la cortés, sangra y duele.\n• Cortá solo la punta blanca, de a poco.\n• Si el cobayo se mueve mucho, pedile a alguien que lo sostenga mientras vos cortás.\n• Si no te animás, el veterinario puede hacerlo por muy poco dinero.\n\nUñas largas deforman la postura y pueden causar pododermatitis.'
  },
  {
    id: 'baños',
    title: 'Baños: casi nunca',
    category: 'Higiene',
    summary: 'Los cobayos son animales muy limpios por naturaleza.',
    content: 'Los cobayos se limpian solos, como los gatos. En condiciones normales NO necesitan baños.\n\n¿Cuándo bañarlos?\n\n• Solo si tienen la zona anal muy sucia y no pueden limpiarse solos.\n• Si tienen parásitos externos y el veterinario lo indica.\n• En casos de pelaje muy enredado o sucio por algún accidente.\n\nSi debés bañarlos:\n\n• Usá agua tibia, nunca fría ni caliente.\n• Shampoo especial para animales pequeños.\n• Secalos completamente con toalla y secador en temperatura baja. Nunca los dejes mojados.\n• Evitá mojarles la cabeza y las orejas.'
  },
/*   {
    id: 'limpieza-orejas',
    title: 'Limpieza de orejas',
    category: 'Higiene',
    summary: 'Revisión periódica para prevenir infecciones.',
    content: 'Las orejas de los cobayos deben revisarse cada 2 a 4 semanas.\n\nQué buscar:\n\n• Acumulación de cera marrón oscura o negra (puede indicar ácaros).\n• Mal olor.\n• El cobayo se rasca las orejas con frecuencia.\n• Costras o enrojecimiento en el interior.\n\nCómo limpiarlas:\n\n• Usá un hisopo o gasa húmeda con solución limpiadora para oídos de animales pequeños.\n• Solo limpiá la parte visible, nunca introduzcas nada profundo.\n• Si notás algo anormal, consultá al veterinario. Las infecciones de oído no tratadas pueden afectar el equilibrio.'
  }, */
  {
    id: 'socialización',
    title: 'Socialización y vínculo',
    category: 'Comportamiento',
    summary: 'Cómo ganarte la confianza de tu cobayo.',
    content: 'Generar un vínculo con un cobayo lleva tiempo y paciencia. Algunos consejos:\n\n• Hablales con voz suave y tranquila. Se acostumbran a tu voz y la asocian con seguridad.\n• Ofreceles verduras de tu mano para que asocien tu presencia con algo positivo.\n• No los fuerces a ser alzados al principio. Dejá que se acerquen solos.\n• Pasá tiempo cerca de su hábitat aunque no los estés manipulando.\n• Evitá movimientos bruscos o ruidos fuertes cerca de ellos.\n\nCon el tiempo van a empezar a buscarte, vocalizarte cuando llegás y relajarse en tus brazos. La paciencia es la clave.'
  },
  {
    id: 'dientes',
    title: 'Salud dental',
    category: 'Salud',
    summary: 'Los dientes crecen toda la vida y hay que mantenerlos.',
    content: 'Los cobayos tienen dientes de crecimiento continuo durante toda su vida. Si no los desgastan correctamente, pueden sufrir maloclusión dental, una condición muy seria.\n\nCómo prevenir problemas dentales:\n\n• Heno ilimitado: el principal desgastador natural de los dientes.\n• Juguetes para roer: madera sin tratar, ramas de manzano, sauce o álamo.\n• Revisá sus incisivos (los dientes delanteros) regularmente: deben ser parejos y de color amarillo/naranja normal.\n• Llevalo al veterinario si notetás que babea, pierde peso o come menos.\n\nLa detección temprana de problemas dentales puede salvar su vida.'
  },
  {
    id: 'temperatura-ambiente',
    title: 'Control del ambiente',
    category: 'Rutina',
    summary: 'El ambiente donde viven afecta directamente su salud.',
    content: 'El ambiente ideal para un cobayo:\n\n• Temperatura: entre 18°C y 24°C. Son muy sensibles al calor y al frío.\n• Sin corrientes de aire directas: alejados de ventiladores, aires acondicionados y ventanas abiertas.\n• Sin luz solar directa: puede causarles golpe de calor rápidamente.\n• Lugar tranquilo: lejos de televisores a alto volumen, parlantes y mascotas que los puedan asustar.\n• Buena ventilación: el ambiente debe circular el aire pero sin corrientes directas.\n\nUn ambiente inadecuado es una de las principales causas de enfermedades respiratorias en cobayos.'
  }
]

export default function Care() {
  const [selected, setSelected] = useState<string | null>(null)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Salud': return '#dc2626'
      case 'Rutina': return '#2563eb'
      case 'Higiene': return '#10b981'
      case 'Comportamiento': return '#f59e0b'
      case 'Manejo': return '#8b5cf6'
      default: return '#6b7280'
    }
  }

  const selectedTip = careTips.find((t) => t.id === selected) || null

  const categories = [...new Set(careTips.map((t) => t.category))]

  const ListHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerSubtitle}>
        - Todo lo que necesitás saber para el día a día -
      </Text>
    </View>
  )

  const renderItem = ({ item }: { item: CareTip }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => setSelected(item.id)}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
      <Text style={styles.cardSummary}>{item.summary}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title='Cuidados y Tips' />
      <ScrollView
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      >
        <ListHeader />
        {categories.map((category) => (
          <View key={category} style={styles.categorySection}>
            <View style={[styles.categoryHeader, { borderLeftColor: getCategoryColor(category) }]}>
              <Text style={[styles.categoryTitle, { color: getCategoryColor(category) }]}>
                {category}
              </Text>
            </View>
            {careTips
              .filter((t) => t.category === category)
              .map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.card}
                  activeOpacity={0.8}
                  onPress={() => setSelected(item.id)}
                >
                  <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                  </View>
                  <Text style={styles.cardSummary}>{item.summary}</Text>
                </TouchableOpacity>
              ))}
          </View>
        ))}
      </ScrollView>

      <Modal
        visible={!!selectedTip}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setSelected(null)}
      >
        <Pressable style={styles.modalBackdrop} onPress={() => setSelected(null)} />
        <View style={styles.modalContainer}>
          <ScrollView
            contentContainerStyle={styles.modalScroll}
            showsVerticalScrollIndicator={false}
          >
            {selectedTip && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{selectedTip.title}</Text>
                </View>

                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>{selectedTip.content}</Text>
                </View>
              </>
            )}
          </ScrollView>

          <Pressable style={styles.closeButton} onPress={() => setSelected(null)}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaef',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#92400e',
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: 'Poppins_400Regular',
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  categorySection: {
    marginBottom: 8,
  },
  categoryHeader: {
    borderLeftWidth: 4,
    paddingLeft: 12,
    paddingVertical: 6,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 14,
    letterSpacing: 0.5,
    fontFamily: 'Poppins_800ExtraBold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    marginBottom: 2,
  },
  cardTitle: {
    fontSize: 14,
    color: '#78350f',
    fontFamily: 'Poppins_600SemiBold',
  },
  cardSummary: {
    fontSize: 12,
    color: '#92400e',
    lineHeight: 18,
    fontFamily: 'Poppins_400Regular',
  },
  modalBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '90%',
    overflow: 'hidden',
  },
  modalScroll: {
  },
  modalHeader: {
    backgroundColor: '#fef3c7',
    padding: 20,
  },
  modalTitle: {
    fontSize: 17,
    color: '#78350f',
    fontFamily: 'Poppins_800ExtraBold',
  },
  modalContent: {
    padding: 20,
  },
  modalText: {
    fontSize: 12,
    color: '#451a03',
    lineHeight: 22,
    textAlign: 'left',
    fontFamily: 'Poppins_400Regular',
  },
  closeButton: {
    padding: 14,
    backgroundColor: '#fef3c7',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#fde68a',
  },
  closeButtonText: {
    fontSize: 14,
    color: '#78350f',
    fontFamily: 'Poppins_600SemiBold',
  },
})