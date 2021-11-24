import React,{useState, useCallback} from 'react'
import { View,
     Image, 
     FlatList,
     StyleSheet,
     useWindowDimensions,
     
    } from 'react-native'


const ImageCarousel = ({images}: {images : string[]}) => {
    const [activeIndex, setActiveIndex]= useState(0);
    const windowWidth = useWindowDimensions().width;
   
    return (
        <View >
            <FlatList
                data = {images}
                renderItem = {({item}) => (
                    <Image 
                    style={[styles.image, {width: windowWidth - 20}]} 
                    source = {{uri: item}}
                />)}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentageThreshold: 50,
                    
                }}
               />
            
        </View>
    );
};


const styles = StyleSheet.create({
    image:{
        height: 250,
        resizeMode: 'contain',
        margin: 10
    },
    
   

})




export default ImageCarousel
