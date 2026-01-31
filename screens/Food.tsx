import { StyleSheet, Text, View, ScrollView, Image, FlatList, Dimensions } from 'react-native'
import React from 'react'
import HeaderComponent from '@/components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import H1 from '@/components/H1'
import H2 from '@/components/H2'

const data = [
    {
        id: '1',
        image: require('@/assets/images/food/radicheta.jpg'),
        name: 'Radicheta',
        description: 'Muy recomendada',
        top: 'Reina indiscutida, puede darse todos los días.'
    },
    {
        id: '2',
        image: require('@/assets/images/food/lechugaR.png'),
        name: 'Lechuga Romana',
        description: 'Recomendada',
        top: 'La más fibrosa de todas y dificil de conseguir.'
    },
    {
        id: '3',
        image: require('@/assets/images/food/lechugaM.png'),
        name: 'Lechuga Manteca',
        description: 'Recomendada',
        top: 'Alternativa a la romana'
    },
    {
        id: '4',
        image: require('@/assets/images/food/lechugaMor.jpg'),
        name: 'Lechuga Morada',
        description: 'Menos recomendada',
        top: 'Buena opción para ofrecer en plato variado.'
    },
    {
        id: '5',
        image: require('@/assets/images/food/lechugaC.jpg'),
        name: 'Lechuga Criolla',
        description: 'Menos recomendada',
        top: 'Más cantidad de agua que las anteriores, si no queda otra quitar el tallo.'
    },
    {
        id: '6',
        image: require('@/assets/images/food/lechugaI.png'),
        name: 'Lechuga Iceberg',
        description: 'NO recomendada',
        top: 'Es la que mayor cantidad de agua posee, no aporta fibra, como comer agua.'
    }
];

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 2 - 16;

const ListHeader = () => (
    <ScrollView>
        <View style={styles.imageContainer}>
            <Image source={require('@/assets/images/kuyiDiet.png')}
                style={{ width: '100%', height: 220 }}
                resizeMode='cover'></Image>
        </View>
        <View style={styles.container}>
            <H1 content={'Consideración General'}></H1>
            <Text style={{ textAlign: 'justify' }}>La alimentación de un Cobayo está compuesta 80% por heno de pastura,
                el cual es obligatorio en su dieta, 15% por verduras y frutas ocasionales, y el 5% restante corresponde
                a pellets de alimento balanceado.
            </Text>
            <Text style={{ textAlign: 'justify' }}>
                La dieta se ve ligeramente modificada según la edad del cobayito, a continuación encontraran mayores detalles, consideraciones
                a tener en cuenta y una tabla con todas las verduras tanto permitidas como prohibidas en la dieta de nuestra mascotita.
            </Text>
            <H2 style={{}} content={'Consejos para todas las edades'}></H2>
            <Text style={{ textAlign: 'justify' }}>
                🐹 <Text style={{ fontWeight: 500 }}>Vitamina C:</Text> las cobayas no pueden producir Vitamina C, la cual es muy importante en su metabolismo, por lo tanto su dieta debe
                incluir fuentes ricas en esta vitamina como el Morrón o suplementos especificos (ver como suministrar).
                {`\n`}
                {`\n`}
                ❌ <Text style={{ fontWeight: 500 }}>Nunca ofrecer:</Text> papa, cebolla, ajo, repollo, pan, galletas, chocolate, carne, productos lácteos, ni alimentos con azúcar o sal.
                {`\n`}
                {`\n`}
                Todos los vegetales deben darse crudos, lavados y secados, además es muy importante quitarles las semillas ya que pueden causar daño en su aparato digestivo.
                {`\n`}
            </Text>
        </View>
        <H2 style={{}} content={'Verduras Permitidas'}></H2>
        <H2 style={{}} content={'Hojas verdes:'}></H2>
        <Text style={{marginBottom: 5}}>Las lechugas no deben darse en tanta cantidad por su alto contenido en agua, entre 1 a 2 hojas por cobaya por día es lo más recomendado.
        </Text>
    </ScrollView>
);

export default function Food() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fffaef' }}>
            <HeaderComponent title='Alimentación' />
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.containerGrid}
                ListHeaderComponent={<ListHeader />}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        {/* Contenedor de las 3 columnas */}
                        <View style={styles.columnsContainer}>
                            {/* Primera columna (imagen y nombre) */}
                            <View style={styles.column}>
                                <Image source={item.image} style={styles.image} />
                                <Text style={styles.name}>{item.name}</Text>
                            </View>

                            {/* Segunda columna (descripción) */}
                            <View style={styles.column}>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>

                            {/* Tercera columna (otro string) */}
                            <View style={styles.column}>
                                <Text style={styles.otherText}>{item.top}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%'
    },
    container: {
        backgroundColor: '#fffaef',
    },
    containerGrid: {
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    item: {
        width: '100%', // Ocupa todo el ancho disponible
        borderColor: '#ddd',
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    columnsContainer: {
        flexDirection: 'row', // Disposición horizontal para las columnas
        justifyContent: 'space-between', // Espacio entre columnas
    },
    column: {
        flex: 1, // Cada columna ocupa el mismo espacio
        borderWidth: .5,
        justifyContent: 'center', // Centrado vertical
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 25,
        alignSelf: 'center'
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center', // Texto centrado
    },
    description: {
        fontSize: 12,
        textAlign: 'center',
    },
    otherText: {
        fontSize: 11,
        textAlign: 'center',
        color: '#111',
    },
})