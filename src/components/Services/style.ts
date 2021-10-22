import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    root:{
        flexDirection : 'row',
        margin: 10,
        borderWidth:1,
        borderColor: 'd1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginTop:5,
      },

    ratingGroup:{
        flexDirection: 'row',
     },

     star:{
         margin:2,
         alignItems:'center',
         marginVertical: 5
     },

     oldPrice:{
         fontSize:12,
         fontWeight:'normal',
         textDecorationLine:'line-through',

     },

    page:{
        padding:10,
     },

    rightHandSide:{
        padding:10,
        flex:3 
    },

    image:{
        flex:2,
        height:150,  
        resizeMode: 'contain'
    },
    title:{
        fontSize:18
    },
    price:{
        fontSize:18,
        fontWeight:'bold'

    }

});

export default styles;