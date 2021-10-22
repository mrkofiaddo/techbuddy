import React from 'react'
import { View, StyleSheet,FlatList} from 'react-native'
import Services from '../../components/Services'
import products from '../../data/products'
    

const BuddieScreen = () => {
    return (
        <View style = {styles.page}>
            {/*render service component*/}
        <FlatList
            data ={products} 
            renderItem={({item})=> <Services item={item}/>}
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
