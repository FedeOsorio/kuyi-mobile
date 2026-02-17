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
import { HealthIssue, healthIssues } from '@/data/healthIssues'

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
    const isVisible = item.visible ?? true
    return (
      <TouchableOpacity
        style={[
          styles.card,
          !isVisible && { opacity: 0.4 }, // make hidden issues more transparent
        ]}
        activeOpacity={isVisible ? 0.8 : 1}
        onPress={() => {
          if (isVisible) {
            setSelected(item.id)
          }
        }}
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
                        <Text style={styles.sectionTitle}>🚨 Causas</Text>
                        <Text style={styles.preventionText}>
                          {selectedIssue.reasons}
                        </Text>
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
    lineHeight: 16,
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