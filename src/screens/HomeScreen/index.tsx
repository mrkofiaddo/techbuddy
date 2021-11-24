import React from "react";
import { SafeAreaView} from "react-native-safe-area-context";
import {
    View,
    Text,
    FlatList,
    Dimensions,
    StyleSheet,
    Image,
    Pressable,
} from "react-native";


import products from "../../data/products"
const {width} = Dimensions.get('screen');
const Homescreen = ({navigation}) => {
    

    
    
    const Card = ({products})=>{
        return (
            <Pressable
            
            onPress={() => navigation.navigate('ServiceScreen', products)}>
            <View style={styles.card}>
              
              <Image
                source={products.image}
                style={{height: 120, width: '100%', borderRadius: 10}}
              />
    
              <Text style={styles.cardName}>{products.title}</Text>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.price}>from ${products.price}</Text>
              </View>
            </View>
          </Pressable>
            
    )};
  
    return (
        
        <SafeAreaView style={{backgroundColor: 'white', flex: 1}} >
           
            
               
                <FlatList 
                    contentContainerStyle={{paddingLeft: 20}}
                    showsVerticalScrollIndicator= {false}
                    data={products}
                    renderItem={({item})=> <Card products={item} />}
                />
            
        </SafeAreaView>
       
        
    )
}
const styles = StyleSheet.create({
    card:{
        height: 200,
        backgroundColor: 'lightgrey',
        elevation: 10,
        marginRight: 20,
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    cardName: {
        marginTop: 10,
        fontSize: 12,
        color: "black",
        fontWeight: 'bold',
    },
    price: {fontWeight: 'bold', color: 'black', fontSize: 12},
        rating: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 12,
    },
    categoryText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 5,
    },
    categoryItemBtn: {
        flexDirection: 'row',
        backgroundColor: '#5451d6',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 7,
        alignItems: 'center',
      
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent:  'space-between',
        padding: 20,

    },
    imageStyle:{
        resizeMode:'contain',
        width: '100%',
        height: '100%'
        },
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        color: 'white',    
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '55%',
        lineHeight: 30,
        paddingHorizontal: 20,
        color: 'white',
    },
    searchInputContainer: {
        height: 40,
        backgroundColor: '#dbe9f6',
        flex: 1,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    sortBtn: {
        backgroundColor: '#5451d6',
        height: 40,
        width: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
   title: {
       fontSize: 18,
       fontWeight: 'bold',
       paddingHorizontal: 20,
       color: 'white',
   },
   iconContainer: {
       height: 25,
       width: 25,
       backgroundColor: 'white',
       position: "absolute",
       elevation: 2,
       right: 15,
       top: 15,
       borderRadius: 20,
       justifyContent: 'center',
       alignItems: 'center',
   },
   categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  categoryItemBtn: {
    flexDirection: 'row',
    backgroundColor: 'ash',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5,
    
},
popularItemCard: {
    height: 90,
    width: width - 100,
    backgroundColor: '#5451d6',
    elevation: 10,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
});
export default Homescreen
