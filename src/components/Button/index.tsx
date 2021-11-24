import { tSTypeAliasDeclaration } from '@babel/types';
import React from 'react'
import { Pressable, StyleSheet, Text} from 'react-native'

interface ButtonProps{
    text: string;
    onPress: () => void;
    containerStyle?: object;
}

const Button = ({text, onPress, containerStyle}: ButtonProps) => {
    return (
        <Pressable onPress = {onPress} style={[styles.root, containerStyle]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    root:{
        backgroundColor:'#063e6b',
        marginVertical : 10,
        height: 35,
        width: '100%',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:5,
        borderWidth: 1,
        borderColor: '#063e6b'
    },
    text:{
        fontSize:16,
        color:'white'
    }
})

export default Button
