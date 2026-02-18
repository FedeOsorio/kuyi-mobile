import '@expo/metro-runtime'
import { StatusBar } from 'expo-status-bar'
import { Alert } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen'
import * as Updates from 'expo-updates'

import Home from '@/screens/Home'
import Food from '@/screens/Food'
import Care from '@/screens/Care'
import Cobis from '@/screens/Cobis'
import Health from '@/screens/Health'
import Hay from '@/screens/Hay'
import Cage from '@/screens/Cage'
import Adopt from '@/screens/Adopt'
import Info from '@/screens/Info'
import { useEffect } from 'react'

export type RootStackParamList = {
  Home: undefined
  Alimentacion: undefined
  Henos: undefined
  Salud: undefined
  Recintos: undefined
  Cuidados: undefined
  Razas: undefined
  Adopcion: undefined
  Info: undefined
}

SplashScreen.preventAutoHideAsync()


const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  useEffect(() => {
    async function onFetchUpdateAsync() {
      try {
        const update = await Updates.checkForUpdateAsync()

        if (update.isAvailable) {
          await Updates.fetchUpdateAsync()

          Alert.alert(
            'Actualización disponible',
            'Descargamos mejoras para KuYi App. ¿Deseas aplicarlas ahora?',
            [
              { text: 'Más tarde', style: 'cancel' },
              {
                text: 'Actualizar',
                onPress: async () => await Updates.reloadAsync(),
              },
            ],
          )
        }
      } catch (error) {
        // Si hay error (ej. sin internet), la app sigue normal
        console.log('Error buscando updates: ', error)
      }
    }

    onFetchUpdateAsync()
  }, [])

  if (!fontsLoaded && !fontError) {
    return null
  }
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            animation: 'fade',
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Henos" component={Hay} />
          <Stack.Screen name="Adopcion" component={Adopt} />
          <Stack.Screen name="Alimentacion" component={Food} />
          <Stack.Screen name="Cuidados" component={Care} />
          <Stack.Screen name="Razas" component={Cobis} />
          <Stack.Screen name="Salud" component={Health} />
          <Stack.Screen name="Recintos" component={Cage} />
          <Stack.Screen name="Info" component={Info} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}