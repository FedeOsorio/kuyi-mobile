import '@expo/metro-runtime'
import { StatusBar } from 'expo-status-bar';
import { Easing, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from '@/screens/Home';
import Food from '@/screens/Food';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import Care from './screens/Care';
import Cobis from './screens/Cobis';
import Health from './screens/Health';
import Hay from './screens/Hay';
import Cage from './screens/Cage';
import Adopt from './screens/Adopt';
import createSharedElementStackNavigator from 'react-navigation-shared-element/build/createSharedElementStackNavigator';
import Info from './screens/Info';

export type RootStackParamList = {
  Home: undefined;
  Alimentacion: undefined;
  Henos: undefined;
  Salud: undefined;
  Recintos: undefined;
  Cuidados: undefined;
  Razas: undefined;
  Adopcion: undefined;
  Info: undefined;
};

enableScreens();

const Stack = createSharedElementStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            transitionSpec: {
              open: { animation: 'timing', config: { duration: 300, easing: Easing.inOut(Easing.ease) } },
              close: { animation: 'timing', config: { duration: 300, easing: Easing.inOut(Easing.ease) } }
            },
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: { opacity: progress }
            }),
          }}
        >
          <Stack.Screen name="Home" component={Home} />

          {/* Todas las pantallas que usen el logo pequeño deben declararlo aquí */}
          <Stack.Screen
            name="Henos"
            component={Hay}
            sharedElements={() => [{ id: 'logo-kuyi', animation: 'move' }]}
          />

          <Stack.Screen
            name="Adopcion"
            component={Adopt}
            sharedElements={() => [{ id: 'logo-kuyi', animation: 'move' }]}
          />

          <Stack.Screen
            name="Alimentacion"
            component={Food}
            sharedElements={() => [{ id: 'logo-kuyi', animation: 'move' }]}
          />

          <Stack.Screen
            name="Cuidados"
            component={Care}
            sharedElements={() => [{ id: 'logo-kuyi', animation: 'move' }]}
          />

          <Stack.Screen
            name="Razas"
            component={Cobis}
            sharedElements={() => [{ id: 'logo-kuyi', animation: 'move' }]}
          />

          <Stack.Screen
            name="Salud"
            component={Health}
            sharedElements={() => [{ id: 'logo-kuyi', animation: 'move' }]}
          />

          <Stack.Screen
            name="Recintos"
            component={Cage}
            sharedElements={() => [{ id: 'logo-kuyi', animation: 'move' }]}
          />

          <Stack.Screen
            name="Info"
            component={Info}
            sharedElements={() => [{ id: 'logo-kuyi', animation: 'move' }]}
          />


        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
