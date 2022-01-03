import React from 'react'
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import { Colors } from '../attributes'
import { ScreenName } from '../screenNames'
const StartScreen = props => {
    const {navigation}=props
return(
<View style={styles.screen}>
        <View><Image source={require('../images/SuccesIcon.png')} style={{ width: 124, height: 124 }} resizeMode='contain' /></View>
        <View style={{paddingTop:15}}><Text style={{ color: 'white', fontFamily: 'robotoBold', fontSize: 20 }}>Are you a gamer?</Text></View>
        <View style={{paddingTop:15}}><Text style={{ color: 'white', fontFamily: 'robotoThin', fontSize: 18, textAlign: 'center' }}>We will ask you a set of questions to prove that you're a gamer.</Text></View>
        <View style={{paddingTop:30,width:'100%',padding:20}}>
            <TouchableOpacity style={{backgroundColor:Colors.submitbtn,alignItems:'center',padding:20,borderRadius:15}} onPress={()=>{navigation.navigate(ScreenName.AveragePlay)}}>
            <Text style={{color:Colors.white,fontFamily:'robotoBold',fontSize:20}}>Start</Text>
            </TouchableOpacity>
        </View>
</View>
)
}
const styles=StyleSheet.create({
screen:{
flex:1,
alignItems:'center',
        justifyContent: 'center',
backgroundColor:Colors.background
}
})
export default StartScreen