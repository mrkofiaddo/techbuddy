import React,{useState} from 'react'
import { View,SafeAreaView, Text, StyleSheet, ImageBackground,} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Button from '../../components/Button'




const ServiceScreen = ({navigation, route}) => {
    const products = route.params;

    

    return (
        
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground source={products.image} style={styles.backgroundImage}>
                    
                </ImageBackground>
                
                <View style={styles.detailsContainer}>
                    <Text style={{
                        fontWeight: 'bold', 
                        fontSize: 17, 
                        color: 'black'}} >
                            {products.title}
                    </Text>
                    <Text style={{
                        fontWeight: 'bold', 
                        fontSize: 15, color: 'black', 
                        marginTop: 20, 
                        marginVertical: 20}}>
                            Description
                    </Text>
                    <Text style={{
                        fontWeight: 'normal', 
                        fontSize: 15, 
                        color: 'black', 
                        lineHeight: 20,
                        }}>{products.description}
                    </Text>
                    <View style={{
                        marginVertical: 20,
                        flexDirection:'row',
                        justifyContent: 'space-between',
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: 'black',
                                fontWeight: 'bold'}}>
                                from ${products.price}
                            </Text>
                    </View>
                    <View style={{flexDirection: 'row',  alignItems: 'center'}}>
                                
                                
                                
                                        
                                <Button
                                 text="Proceed to Payment"
                                    onPress={() => navigation.navigate('AddressScreen')}
                                        />
                                         
                                
                                
                    </View> 
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    haddToCartBtn: {
        height: 50,
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    quantityBtn: {
        height: 22,
        width: 26,
        backgroundColor: 'black',
        borderRadius: 9,
        marginHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityContainer: {
        height: 25,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'space-between', 
        flexDirection: 'row',
    },
    detailsContainer:{
        flex: 1,
        paddingHorizontal: 20,
        marginTop:40,
    },
    backgroundImage: {
        marginHorizontal: 20,
        height: 300,
        borderRadius: 15,
        overflow: 'hidden',
    },
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,   
        alignItems: 'center',
    },
   headerbtn: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default ServiceScreen

/*const ServiceScreen  = () => {

    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [day, setDay] = useState(1);
    
    return (
        <ScrollView style ={styles.root}>
            <Text style = {styles.title}>{product.title}</Text>
           
            <ImageCarousel images = {product.images} />

           
            <Picker
            selectedValue = {selectedOption}
            onValueChange = {(itemValue) =>
            setSelectedOption(itemValue)}
            >
                {product.options.map(option =>(
                    <Picker.Item label = {option} value = {option}/>
                ))}

                
            </Picker>
            
            <Text style ={styles.price} >from ${product.price}
           {product.oldPrice && (<Text style={styles.oldPrice}> ${product.oldPrice}</Text> )}
            </Text>

            
            <Text style = {styles.description}>
                {product.description}
            </Text>

            
            <DaysSelector day = {day} setDay = {setDay}/>

            <Button text={'Add this to Buddie'} 
            onPress={() => {console.warn('etghsetgbv')}}
            containerStyle = {{
                backgroundColor: '#3e81b8'}}/>
            <Button text={'Make payment'} onPress={() =>{console.warn('eagrstg')}}/>
        </ScrollView>
    )
}

export default ServiceScreen 
*/