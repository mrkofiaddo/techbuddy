import React from 'react'
import { View, StyleSheet,FlatList,Text} from 'react-native'
import Services from '../../components/Services'
import products from '../../data/cart'
import CartServices from '../../components/CartService'
import Button  from '../../components/Button'
    

const BuddieScreen = () => {
    const totalPrice = products.reduce(
        (summedPrice, product) =>
        summedPrice + product.item.price *product.quantity,
        0,
    );
    
    return (
        <View style = {styles.page}>
            <View>
                <Text style = {{fontSize: 18, fontWeight: 'bold'}}>
                    Estimated Subtotal ({products.length} services):{' '}
                    <Text style = {{color:'#e47911'}}>${totalPrice.toFixed(2)}</Text>
                </Text>
                <Button text="Proceed to make payment" 
                onPress={()=> console.warn("Fior I'm not done")}/>
            </View>
            {/*render service component*/}
        <FlatList
            data ={products} 
            renderItem={({item})=> <CartServices Cartitem={item}/>}
            showsVerticalScrollIndicator= {false}
        />
        
            
         </View> 
    );
        }


 const styles = StyleSheet.create({
    page:{
        padding:10,
     }
 })


export default BuddieScreen
