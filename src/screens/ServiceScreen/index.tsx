import React, {useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './syles'
import product from '../../data/product'
import {Picker} from '@react-native-picker/picker'
import DaysSelector from '../../components/DaysSelector'
import Button from '../../components/Button'
import ImageCarousel from '../../components/imageCarosel'

const ServiceScreen  = () => {

    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [day, setDay] = useState(1);
    
    return (
        <ScrollView style ={styles.root}>
            <Text style = {styles.title}>{product.title}</Text>
            {/*image*/}
            <ImageCarousel images = {product.images} />

            {/*option selector*/}
            <Picker
            selectedValue = {selectedOption}
            onValueChange = {(itemValue) =>
            setSelectedOption(itemValue)}
            >
                {product.options.map(option =>(
                    <Picker.Item label = {option} value = {option}/>
                ))}

                
            </Picker>
            {/*price*/}
            <Text style ={styles.price} >from ${product.price}
           {product.oldPrice && (<Text style={styles.oldPrice}> ${product.oldPrice}</Text> )}
            </Text>

            {/*description*/}
            <Text style = {styles.description}>
                {product.description}
            </Text>

            {/* quantity*/}
            <DaysSelector day = {day} setDay = {setDay}/>

            {/*button*/}
            <Button text={'Add this to Buddie'} 
            onPress={() => {console.warn('etghsetgbv')}}
            containerStyle = {{
                backgroundColor: '#3e81b8'}}/>
            <Button text={'Make payment'} onPress={() =>{console.warn('eagrstg')}}/>
        </ScrollView>
    )
}

export default ServiceScreen 
