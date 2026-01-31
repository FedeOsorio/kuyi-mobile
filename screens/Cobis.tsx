import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
  Pressable,
  Linking,
  Image,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import breeds from '@/data/breeds'
import HeaderComponent from '@/components/Header'

export default function Cobis() {
  const [selected, setSelected] = useState<string | null>(null)

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.cardWrapper}>
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => setSelected(item.id)}
        >
          <Image
            source={item.image}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardText}>
            <Text style={styles.cardTitle} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.cardSubtitle} numberOfLines={1}>
              {item.coat}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const selectedBreed = breeds.find((b) => b.id === selected) || null



  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title='Razas y Variantes' />
      <FlatList
        data={breeds}
        renderItem={renderItem}
        keyExtractor={(i) => i.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      />

      <Modal
        visible={!!selectedBreed}
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
              {selectedBreed && (
                <>
                  <Image
                    source={selectedBreed.image}
                    style={styles.modalImage}
                    resizeMode="cover"
                  />

                  <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>{selectedBreed.name}</Text>

                    <View style={styles.infoRow}>
                      <Text style={styles.infoLabel}>Pelaje:</Text>
                      <Text style={styles.infoValue}>{selectedBreed.coat}</Text>
                    </View>

                    <View style={styles.infoRow}>
                      <Text style={styles.infoLabel}>Origen:</Text>
                      <Text style={styles.infoValue}>{selectedBreed.location}</Text>
                    </View>

                    <View style={styles.infoRow}>
                      <Text style={styles.infoLabel}>Colores:</Text>
                      <Text style={styles.infoValue}>
                        {selectedBreed?.colors?.join(', ')}
                      </Text>
                    </View>

                    <View style={styles.divider} />

                    <Text style={styles.descriptionTitle}>Descripción</Text>
                    <Text style={styles.modalDescription}>
                      {selectedBreed.description}
                    </Text>
                  </View>
                </>
              )}
            </ScrollView>

            <Pressable style={styles.closeButton} onPress={() => setSelected(null)}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaef',
    overflow: 'hidden'
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    padding: 16,
    paddingBottom: 8,
    color: '#78350f'
  },
  list: {
    paddingHorizontal: 8,
    paddingBottom: 24
  },
  cardWrapper: {
    flex: 1,
    margin: 6,
    maxWidth: '50%'
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardImage: {
    width: '100%',
    height: 130,
    backgroundColor: '#fef3c7'
  },
  cardText: {
    padding: 12
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#78350f'
  },
  cardSubtitle: {
    marginTop: 4,
    fontSize: 12,
    color: '#92400e'
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
    maxHeight: '85%',
    overflow: 'hidden',
  },
  modalScroll: {
    paddingBottom: 20
  },
  modalImage: {
    width: '100%',
    height: 250,
    backgroundColor: '#fef3c7'
  },
  modalContent: {
    padding: 20
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 16,
    color: '#78350f'
  },
  infoRow: {
    marginBottom: 10
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#92400e',
    marginBottom: 2
  },
  infoValue: {
    fontSize: 15,
    color: '#451a03',
    lineHeight: 20
  },
  divider: {
    height: 1,
    backgroundColor: '#fde68a',
    marginVertical: 16
  },
  descriptionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#92400e',
    marginBottom: 8
  },
  modalDescription: {
    fontSize: 15,
    color: '#451a03',
    lineHeight: 22
  },
  closeButton: {
    padding: 16,
    backgroundColor: '#fef3c7',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#fde68a'
  },
  closeButtonText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#78350f'
  },
})