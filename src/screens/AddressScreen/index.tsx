import React,{useState} from 'react'
import { View, Text, TextInput ,Alert,ScrollView,KeyboardAvoidingView, Platform,} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import styles from './styles'
import States from './States';
import Button from '../../components/Button';



const AddressScreen = () => {
    const [selectedOption, setSelectedOption] = useState(States.options[0]);
    const [firstName,setFirstName]= useState('');
    const [phone,setPhone]= useState('');
    const [city,setCity]= useState('');
    const [apt,setApt]= useState('');
    const [zip,setZip]= useState('')
    const [lastName,setLastName]= useState('')
    const [AddressLine1,setAddressLine1]= useState('')
    const [AddressLine2,setAddressLine2]= useState('')

    const onCheckOut=()=>{
        if(!firstName||!lastName||!AddressLine1||!AddressLine2||!phone||!AddressLine1||!city||!zip){
            Alert.alert('Please fill all fields');
            return;
        }
    }

   
    return (
        <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 1:0}
       >
        <ScrollView style={styles.root}>
            <View style={styles.row}>
                <Picker
                selectedValue = {selectedOption}
                onValueChange = {(itemValue) =>
                setSelectedOption(itemValue)}
                >
                    {States.options.map(option =>(
                        <Picker.Item label = {option} value = {option}/>
                    ))}
                </Picker>
            </View>
            {/*Full Name*/}
            <View style={styles.row}>
                <Text style={styles.label}>First name</Text>
                <TextInput
                style={styles.input}
                placeholder='First Name*'
                value={firstName}
                onChangeText={setFirstName}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Last name</Text>
                <TextInput
                style={styles.input}
                placeholder='Last Name*'
                value={lastName}
                onChangeText={setLastName}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Adddress Line1</Text>
                <TextInput
                style={styles.input}
                placeholder='Address Line*'
                value={AddressLine1}
                onChangeText={setAddressLine1}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Adress Line2</Text>
                <TextInput
                style={styles.input}
                placeholder='Address Line*'
                value={AddressLine2}
                onChangeText={setAddressLine2}/>
            </View>
            {/*Phone number*/}
            <View style={styles.row}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                style={styles.input}
                placeholder='Phone*'
                value={phone}
                onChangeText={setPhone}
                keyboardType={'phone-pad'}/>
            </View> 
             {/*City*/}
            <View style={styles.row}>
                <Text style={styles.label}>City</Text>
                <TextInput
                style={styles.input}
                placeholder='City*'
                value={city}
                onChangeText={setCity}/>
            </View>
            {/*Zip*/}
            <View style={styles.row}>
                <Text style={styles.label}>Zip</Text>
                <TextInput
                style={styles.input}
                placeholder='Zip Code*'
                value={zip}
                onChangeText={setZip}
                keyboardType={'phone-pad'}/>
            </View> 
            
             {/*Apartment number*/}
             <View style={styles.row}>
                <Text style={styles.label}>Apartment Number</Text>
                <TextInput
                style={styles.input}
                placeholder='Optional'
                value={apt}
                onChangeText={setApt}
                keyboardType={'phone-pad'}/>
            </View>
            <Text style={{fontWeight:'bold'}}>Info</Text>
            <Text>State: {selectedOption}</Text>
            <Text>First Name: {firstName}</Text>
            <Text>Last Name: {lastName}</Text>
            <Text>Address line 1: {AddressLine1}</Text>
            <Text>Address line 2: {AddressLine2}</Text>
            <Text>Phone: {phone}</Text>
            <Text>City: {city}</Text>
            <Text>zip: {zip}</Text>
            <Text>Apartment Number: {apt}</Text>

            <Button text='Checkout' onPress={onCheckOut}/>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddressScreen
