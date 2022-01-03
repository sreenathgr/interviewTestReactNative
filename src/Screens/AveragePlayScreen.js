import React,{useLayoutEffect,useState} from 'react'
import { View, Text, StyleSheet ,StatusBar,TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { Colors } from '../attributes'
import { ScreenName } from '../screenNames';
import { RadioButton,RadioButtonWithText } from '../components';
const AveragePlayScreen = props => {
    const { navigation } = props
    const [isSubmitDisabled,SetSubmitDisabled]=useState(false)
   
return(
<View style={styles.screen}>
        <View style={{ paddingStart: 20 }}><Ionicons name="arrow-back" size={35} color="white" /></View>
        <View style={{ paddingHorizontal: 35,paddingTop:20 ,flexDirection:'row',}}>
            <View style={{ backgroundColor: Colors.submitbtn, height: 5, borderRadius:2, flex: 1, width: '100%' }} />
            <View style={{flex:0.1}}/>
            <View style={{ backgroundColor: Colors.grey, height: 5, borderRadius:2, flex: 1, width: '100%' }} />
            <View style={{flex:0.1}}/>
         <View style={{backgroundColor:Colors.grey,height:5,borderRadius:2,flex:1,width:'100%'}}/>
        </View>
        <View style={{paddingHorizontal:35}}>
            <View style={{ paddingTop: 30, }}><Text style={{ color: Colors.white, fontFamily: 'robotoBold', fontSize: 20 }}>Average play time</Text></View>
            <View style={{ paddingTop: 15, }}><Text style={{ color: Colors.white, fontFamily: 'robotoThin', fontSize: 17 }}>How many hours in a day you normaly play games?</Text></View>
            <RadioButtonWithText radioText={"I don't play games right now"} />
            <RadioButtonWithText radioText={"Less than an hour" } />
            <RadioButtonWithText radioText={"1-2 hours" } isChecked={ true}/>
            <RadioButtonWithText radioText={"3-5 hours" }/>
            <RadioButtonWithText radioText={"6-10 hours" }/>
            <RadioButtonWithText radioText={"More than 10 Hours"} />
          
        </View>
        <View style={{paddingTop:170,width:'100%',padding:10}}>
            <TouchableOpacity style={{backgroundColor:Colors.submitbtn,alignItems:'center',padding:20,borderRadius:15,opacity:isSubmitDisabled?0.5:1}} onPress={()=>{navigation.navigate(ScreenName.GamesPlayed)}}  >
            <Text style={{color:Colors.white,fontFamily:'robotoBold',fontSize:20}}>Next</Text>
            </TouchableOpacity>
        </View>
</View>
)
}
const styles=StyleSheet.create({
screen:{
flex:1,

        backgroundColor: Colors.background,
paddingTop:StatusBar.currentHeight + 20
}
})
export default AveragePlayScreen