import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
  Pressable,
  Image,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from '@/components/Header'

type HealthIssue = {
  id: string
  name: string
  severity: 'high' | 'medium' | 'low'
  images?: Array<string | number>
  symptoms: string[]
  immediateActions: string
  prevention: string
  category: string
  visible?: boolean
}

const healthIssues: HealthIssue[] = [
  {
    id: 'pododermatitis',
    name: 'Pododermatitis (Pie inflamado)',
    severity: 'high',
    category: 'Infección',
    visible: true,
    images: [
      require('@/assets/images/health/pododermatitis1.jpg'),
      require('@/assets/images/health/pododermatitis2.jpg'),
    ],
    symptoms: [
      'Inflamación en las patas',
      'Enrojecimiento',
      'Costras o llagas en las plantas',
      'Dolor al caminar',
    ],
    immediateActions: 'Mientras se consigue turno veterinario: Limpiar las patitas con toallita humeda, si tiene puede aplicar clorhexidina en spray, luego de esto también puede aplicar Milacrem en cada patita. La cantidad a aplicar de menos del tamaño de un grano de arroz, para formar una capa protectora.',
    prevention: 'Mantener manta y jaula limpia, nunca usar jaulas de alambre, controlar sobrepeso, usar camas y mantas suaves.',
  },
  {
    id: 'resfrio',
    name: 'Resfriado / Infección Respiratoria',
    severity: 'high',
    category: 'Respiratorio',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Estornudos frecuentes',
      'Secreción nasal',
      'Ojos llorosos',
      'Dificultad para respirar',
      'Respiración ruidosa',
      'Letargo',
      'Pérdida de apetito'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Evitar corrientes de aire, mantener temperatura estable (18-24°C), ambiente seco, buena ventilación sin humedad'
  },
  {
    id: 'gases',
    name: 'Gases / Timpanismo',
    severity: 'high',
    category: 'Digestivo',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Abdomen hinchado y duro',
      'Dolor abdominal',
      'Postura encorvada',
      'No come ni bebe',
      'No defeca',
      'Gemidos o chirridos de dolor',
      'Respiración rápida'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Introducir nuevos alimentos gradualmente, evitar alimentos que producen gases (brócoli, repollo), proporcionar heno ilimitado'
  },
  {
    id: 'diarrea',
    name: 'Diarrea',
    severity: 'high',
    category: 'Digestivo',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Heces líquidas o muy blandas',
      'Zona anal sucia',
      'Deshidratación',
      'Pérdida de apetito',
      'Letargo',
      'Abdomen sensible'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Dieta equilibrada alta en fibra, introducir alimentos nuevos gradualmente, agua fresca disponible, higiene de jaula'
  },
  {
    id: 'caca-pastosa',
    name: 'Heces Pastosas / Cecotrofos Anormales',
    severity: 'medium',
    category: 'Digestivo',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Heces blandas pero formadas',
      'Cecotrofos no consumidos',
      'Zona anal sucia',
      'Olor fuerte',
      'Malestar digestivo leve'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Aumentar fibra (heno), reducir pellets y verduras temporalmente, evitar frutas y alimentos ricos en azúcar'
  },
  {
    id: 'escorbuto',
    name: 'Escorbuto (Déficit de Vitamina C)',
    severity: 'high',
    category: 'Nutricional',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Pérdida de apetito',
      'Encías sangrantes o hinchadas',
      'Articulaciones hinchadas',
      'Letargo extremo',
      'Pelaje áspero',
      'Heridas en las patas',
      'Dificultad para moverse'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Proporcionar 30g de pimiento rojo diario, vegetales frescos ricos en vitamina C, suplementos si es necesario'
  },
  {
    id: 'malocusion',
    name: 'Maloclusión Dental',
    severity: 'high',
    category: 'Dental',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Dificultad para comer',
      'Pérdida de peso',
      'Babeo excesivo',
      'Dientes visiblemente largos',
      'Preferencia por alimentos blandos',
      'Heridas en boca o lengua'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Heno ilimitado, juguetes para roer, dieta rica en fibra, revisiones dentales regulares'
  },
  {
    id: 'cistitis',
    name: 'Cistitis / Infección Urinaria',
    severity: 'medium',
    category: 'Urinario',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Zona genital húmeda',
      'Orina con sangre',
      'Dolor al orinar',
      'Micción frecuente',
      'Lamido excesivo del área genital',
      'Pérdida de apetito'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Agua fresca abundante, higiene de jaula, evitar alimentos muy ricos en calcio'
  },
  {
    id: 'calculos',
    name: 'Cálculos Urinarios',
    severity: 'high',
    category: 'Urinario',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Sangre en orina',
      'Esfuerzo para orinar',
      'Anorexia',
      'Postura encorvada',
      'Dolor al tocar abdomen',
      'Imposibilidad de orinar (emergencia)'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Agua abundante, reducir alimentos altos en calcio (acelgas, legumbres, frutos secos), dieta balanceada'
  },
  {
    id: 'parasitos-externos',
    name: 'Parásitos Externos (Ácaros, Piojos, Pulgas)',
    severity: 'medium',
    category: 'Parasitario',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Picazón intensa (peor de noche)',
      'Pérdida de pelo',
      'Costras en la piel',
      'Caspa',
      'Enrojecimiento',
      'Estrés y nerviosismo',
      'Residuos marrones o negros en pelo'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Mantener jaula limpia, cuarentena de animales nuevos, revisiones periódicas, evitar contacto con otros animales infectados'
  },
  {
    id: 'parasitos-internos',
    name: 'Parásitos Internos (Tenias, Lombrices)',
    severity: 'medium',
    category: 'Parasitario',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Abdomen hinchado',
      'Gusanos visibles en heces',
      'Pérdida de peso',
      'Pelaje áspero',
      'Diarrea intermitente',
      'Letargo'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Higiene de jaula, lavar verduras y frutas, agua limpia, evitar contacto con heces de otros animales'
  },
  {
    id: 'hongos',
    name: 'Hongos (Tiña)',
    severity: 'medium',
    category: 'Dermatológico',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Pérdida de pelo circular u ovalada',
      'Especialmente en cabeza',
      'Piel escamosa',
      'Enrojecimiento',
      'Costras',
      'Puede no causar picazón'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Dieta rica en fibra, ambiente limpio y seco, evitar estrés, cuarentena de animales nuevos (puede transmitirse a humanos)'
  },
  {
    id: 'golpe-calor',
    name: 'Golpe de Calor',
    severity: 'high',
    category: 'Emergencia',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Respiración rápida y superficial',
      'Salivación excesiva',
      'Letargo extremo',
      'Temperatura corporal elevada',
      'Pérdida de conciencia',
      'Convulsiones'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Mantener en lugar fresco (18-24°C), nunca exponer al sol directo, proporcionar sombra, agua fresca, evitar altas temperaturas'
  },
  {
    id: 'obesidad',
    name: 'Obesidad',
    severity: 'medium',
    category: 'Nutricional',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Peso superior a 1.5kg',
      'Dificultad para moverse',
      'Respiración agitada',
      'Falta de energía',
      'No puede asearse correctamente',
      'Pododermatitis por sobrepeso'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Dieta controlada, heno ilimitado pero pellets medidos, limitar frutas y vegetales altos en azúcar, ejercicio diario'
  },
  {
    id: 'abscesos',
    name: 'Abscesos',
    severity: 'high',
    category: 'Infección',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Bultos llenos de pus',
      'Hinchazón localizada',
      'Dolor en la zona',
      'Pérdida de apetito',
      'Fiebre',
      'Letargo'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Evitar jaulas con elementos punzantes, mantener higiene, tratar heridas rápidamente, alimentación suave para evitar lesiones bucales'
  },
  {
    id: 'conjuntivitis',
    name: 'Conjuntivitis / Infección Ocular',
    severity: 'medium',
    category: 'Ocular',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Ojos rojos',
      'Secreción ocular',
      'Párpados hinchados',
      'Ojo cerrado o semicerrado',
      'Lagrimeo excesivo',
      'Se rasca los ojos'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Evitar polvo en camas, mantener limpia la jaula, evitar corrientes de aire, usar heno de calidad sin polvo'
  },
  {
    id: 'estreñimiento',
    name: 'Estreñimiento',
    severity: 'medium',
    category: 'Digestivo',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Ausencia de heces',
      'Heces pequeñas y duras',
      'Abdomen hinchado',
      'Cansancio',
      'Pérdida de apetito',
      'Postura encorvada'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Heno ilimitado, agua fresca abundante, ejercicio regular, dieta alta en fibra, vegetales frescos diarios'
  },
  {
    id: 'otitis',
    name: 'Otitis / Infección de Oído',
    severity: 'high',
    category: 'Infección',
    visible: false,
    images: ['https://example.com/placeholder1.jpg', 'https://example.com/placeholder2.jpg'],
    symptoms: [
      'Inclinación de cabeza',
      'Pérdida de equilibrio',
      'Secreción del oído',
      'Rascado de orejas',
      'Sacudidas de cabeza',
      'Dolor al tocar las orejas'
    ],
    immediateActions: 'COMPLETAR: Acciones inmediatas a realizar mientras se consigue turno veterinario',
    prevention: 'Mantener oídos limpios, evitar agua en los oídos, tratar infecciones respiratorias temprano, ambiente sin humedad excesiva'
  }
]

/* Header component moved out of main function for reuse */
const HealthHeader = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerSubtitle}>
      Guía de problemas comunes en cobayas y primeros auxilios
    </Text>
    <View style={styles.warningBox}>
      <Text style={styles.warningText}>
        ⚠️ Esta información NO reemplaza la consulta veterinaria. Ante
        cualquier síntoma, contacta a tu veterinario de exóticos lo antes
        posible.
      </Text>
    </View>
  </View>
)

export default function Health() {
  const [selected, setSelected] = useState<string | null>(null)

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return '#dc2626'
      case 'medium':
        return '#f59e0b'
      case 'low':
        return '#10b981'
      default:
        return '#6b7280'
    }
  }

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'URGENTE'
      case 'medium':
        return 'Moderada'
      case 'low':
        return 'Leve'
      default:
        return ''
    }
  }

  const renderItem = ({ item }: { item: HealthIssue }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => setSelected(item.id)}
      >
        <View style={styles.cardHeader}>
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardCategory}>{item.category}</Text>
          </View>
          <View
            style={[
              styles.severityBadge,
              { backgroundColor: getSeverityColor(item.severity) },
            ]}
          >
            <Text style={styles.severityText}>
              {getSeverityText(item.severity)}
            </Text>
          </View>
        </View>
        <Text style={styles.cardSubtitle} numberOfLines={2}>
          {item.symptoms.slice(0, 3).join(' • ')}
        </Text>
      </TouchableOpacity>
    )
  }

  const selectedIssue = healthIssues.find((h) => h.id === selected) || null

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title="Salud 🩺" />
      <FlatList
        data={healthIssues}
        renderItem={renderItem}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HealthHeader />}
      />

      {selectedIssue?.visible ? (
        <Modal
          visible={true}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setSelected(null)}
        >
          <View style={styles.modalOverlay}>
            <Pressable
              style={styles.modalBackdrop}
              onPress={() => setSelected(null)}
            />

            <View style={styles.modalContainer}>
              <ScrollView
                contentContainerStyle={styles.modalScroll}
                showsVerticalScrollIndicator={false}
              >
                {selectedIssue && (
                  <>
                    <View style={styles.modalHeader}>
                      <Text style={styles.modalTitle}>{selectedIssue.name}</Text>
                      <View
                        style={[
                          styles.severityBadgeLarge,
                          {
                            backgroundColor: getSeverityColor(
                              selectedIssue.severity
                            ),
                          },
                        ]}
                      >
                        <Text style={styles.severityTextLarge}>
                          {getSeverityText(selectedIssue.severity)}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.modalContent}>
                      <View style={styles.section}>
                        <Text style={styles.sectionTitle}>
                          🔍 Síntomas a observar
                        </Text>
                        {selectedIssue.symptoms.map((symptom, index) => (
                          <Text key={index} style={styles.symptomItem}>
                            • {symptom}
                          </Text>
                        ))}
                      </View>

                      <View style={styles.divider} />

                      <View style={styles.section}>
                        <Text style={styles.sectionTitle}>
                          ⚡ Acciones Inmediatas
                        </Text>
                        <View style={styles.actionsBox}>
                          <Text style={styles.actionsText}>
                            {selectedIssue.immediateActions}
                          </Text>
                        </View>
                      </View>

                      <View style={styles.divider} />
                      <View style={styles.section}>
                        <Text style={styles.sectionTitle}>🛡️ Prevención</Text>
                        <Text style={styles.preventionText}>
                          {selectedIssue.prevention}
                        </Text>
                      </View>

                      <View style={styles.divider} />

                      <Text style={styles.sectionTitle}>Imágenes</Text>
                      <View style={styles.section}>
                        {selectedIssue.images && selectedIssue.images.length > 0 && (
                          <View style={styles.imagesContainer}>
                            {selectedIssue.images.map((img, idx) => {
                              const source =
                                typeof img === 'string' ? { uri: img } : img
                              return (
                                <Image
                                  key={idx}
                                  source={source}
                                  style={styles.issueImage}
                                  resizeMode="cover"
                                />
                              )
                            })}
                          </View>
                        )}
                      </View>
                    </View>
                  </>
                )}
              </ScrollView>

              <Pressable
                style={styles.closeButton}
                onPress={() => setSelected(null)}
              >
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      ) : null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaef',
  },
  headerContainer: {
    padding: 10,
    paddingBottom: 8,
  },
  header: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 17,
    color: '#78350f',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#92400e',
    marginBottom: 10,
  },
  warningBox: {
    backgroundColor: '#fef3c7',
    padding: 12,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
    borderRightColor: '#f59e0b',
    borderRightWidth: 4,
  },
  warningText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#78350f',
    lineHeight: 18,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  cardTitleContainer: {
    flex: 1,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 13,
    fontFamily: 'Poppins_600SemiBold',
    color: '#78350f',
    marginBottom: 2,
  },
  cardCategory: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#92400e',
  },
  cardSubtitle: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#451a03',
    lineHeight: 18,
  },
  severityBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  severityText: {
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
    fontSize: 11,
    lineHeight: 14,
  },
  severityBadgeLarge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  severityTextLarge: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 13,
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '90%',
    overflow: 'hidden',
  },
  modalScroll: {
    paddingBottom: 20,
  },
  modalHeader: {
    backgroundColor: '#fef3c7',
    padding: 20,
    paddingBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#78350f',
    marginBottom: 8,
  },
  modalContent: {
    padding: 20,
  },
  section: {
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    color: '#78350f',
    marginBottom: 5,
  },
  symptomItem: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#451a03',
    lineHeight: 24,
    marginBottom: 4,
  },
  actionsBox: {
    backgroundColor: '#fef3c7',
    padding: 14,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
    borderRightWidth: 4,
    borderRightColor: '#f59e0b',
  },
  actionsText: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#78350f',
    lineHeight: 22,
  },
  preventionText: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#6b5f59',
    lineHeight: 22,
  },
  imagesContainer: {
    flexDirection: 'column',
    gap: 12,
    marginTop: 12,
  },
  issueImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    backgroundColor: '#e5e7eb',
  },
  divider: {
    height: 1,
    backgroundColor: '#fde68a',
    marginVertical: 16,
  },
  closeButton: {
    padding: 16,
    backgroundColor: '#fef3c7',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#fde68a',
  },
  closeButtonText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,
    color: '#78350f',
  },
})