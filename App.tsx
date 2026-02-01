import '@expo/metro-runtime'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '@/screens/Home'
import Food from '@/screens/Food'
import Care from '@/screens/Care'
import Cobis from '@/screens/Cobis'
import Health from '@/screens/Health'
import Hay from '@/screens/Hay'
import Cage from '@/screens/Cage'
import Adopt from '@/screens/Adopt'
import Info from '@/screens/Info'

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

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
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