import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
 return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.text}>
          Lorem ipsum cacatua dolor sit, amet consectetur adipisicing elit. In eos eum nobis reiciendis aliquam sapiente eaque,
          magnam nam, facere fugit mollitia soluta nihil, doloremque illum quam animi nemo modi amet!
          Dolores ipsa eius nobis pariatur, soluta nemo ipsam iure explicabo quae rem labore corrupti ratione quam illum
          commodi ducimus harum enim ipsum repellendus itaque est maxime magni architecto? Id, repudiandae.
        </Text>
      </View>

      <View style={styles.section}>
        <Image
          source={require('@/assets/images/Kuyi.png')}  // asumiendo que la imagen está en assets
          style={styles.image}
          resizeMode="contain"
          accessibilityLabel="Kuyi"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  section: {
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
  image: {
    width: 300,
    height: 150,
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 30,
  },
  logo: {
    width: 40,
    height: 40,
  },
  vanillaLogo: {
    // algo para diferenciar si querés
  },
});