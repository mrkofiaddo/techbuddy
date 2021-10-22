import React from 'react'
import { View, Text,Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './style'

interface ServiceProps{
item:{
    id: string;
    title: string;
    image: any;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?:number;   
}

}
const Services = ({item}: ServiceProps) => {
    
    return (
        <View style = {styles.root} > 
        <Image style = {styles.image} source={item.image}/>
        <View style = {styles.rightHandSide}>
            <Text style ={styles.title} numberOfLines={2} >{item.title}</Text>
            {/*ratings*/}
            <View style={styles.ratingGroup}>
                {[0,0,0,0,0].map((el , i)=>
                <FontAwesome 
                key = {`${item.id}-${i}`} 
                style={styles.star} 
                name ={i<Math.floor(item.avgRating) ? "star":"star-o"} 
                size={18} 
                color={"#e47911"}
                />
    )}
             
                <Text>{item.ratings}</Text>
               
            </View>
            <Text style ={styles.price} >from ${item.price}
           {item.oldPrice &&(
                <Text style={styles.oldPrice}> ${item.oldPrice}</Text> 
           )}
            </Text>
           
        </View>
    </View>
    )
}

export default Services
