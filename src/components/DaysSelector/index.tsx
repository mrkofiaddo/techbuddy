import React from 'react'
import { View,Pressable,Text, StyleSheet} from 'react-native'

const DaysSelector = ({day, setDay}) => {
    const onMinus = () =>{
        setDay(Math.max(0, day-1))

    }
    const onPlus = () =>{
        setDay(Math.min(14,day+1))
    }


    return (
        <View style={styles.root}>
           <Pressable onPress={onMinus} style={styles.button}>
               <Text style={styles.buttonText}>-</Text>
           </Pressable> 
           <Text style={styles.days}>{day}</Text>

           <Pressable onPress={onPlus} style={styles.button}>
               <Text style={styles.buttonText}>+</Text>
           </Pressable> 
        </View>
    );
};

const styles = StyleSheet.create({
root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    width: 130
},

button:{
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1d1d1'

},

buttonText:{
    fontSize: 18
},

days:{
    color:'#007eb9'

}

});

export default DaysSelector
