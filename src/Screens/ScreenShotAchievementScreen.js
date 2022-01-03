import React,{useLayoutEffect,useState} from 'react'
import { View, Text, StyleSheet ,StatusBar,TouchableOpacity,Image} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { Colors } from '../attributes'
import { ScreenName } from '../screenNames';
import { RadioButton, RadioButtonWithText, CheckBoxWithText } from '../components';
import { ImageList } from '../data';
import { Entypo } from '@expo/vector-icons'; 
const ScreenShotAchievementScreen = props => {
    const { navigation } = props
    const [isSubmitDisabled,SetSubmitDisabled]=useState(false)
   
return(
<View style={styles.screen}>
        <View style={{ paddingStart: 20 }}><Ionicons name="arrow-back" size={35} color="white" /></View>
        <View style={{ paddingHorizontal: 35,paddingTop:20 ,flexDirection:'row',}}>
            <View style={{ backgroundColor: Colors.submitbtn, height: 5, borderRadius:2, flex: 1, width: '100%' }} />
            <View style={{flex:0.1}}/>
            <View style={{ backgroundColor: Colors.submitbtn, height: 5, borderRadius:2, flex: 1, width: '100%' }} />
            <View style={{flex:0.1}}/>
         <View style={{backgroundColor:Colors.submitbtn,height:5,borderRadius:2,flex:1,width:'100%'}}/>
        </View>
        <View style={{paddingHorizontal:35}}>
            <View style={{ paddingTop: 30, }}><Text style={{ color: Colors.white, fontFamily: 'robotoBold', fontSize: 24 }}>Screenshots of Achievement</Text></View>
            <View style={{ paddingTop: 15, }}><Text style={{ color: Colors.white, fontFamily: 'robotoThin', fontSize: 17 }}>Attach screenshots of achievement from the game you've played</Text></View>
            {/* <CheckBoxWithText checkboxtext="I never played games" isChecked={true}/>
            <CheckBoxWithText checkboxtext="Axie Infinity" />
            <CheckBoxWithText checkboxtext="Pokemon" />
            <CheckBoxWithText checkboxtext="Mobile Legends:Bang Bang" />
            <CheckBoxWithText checkboxtext="Dota 2" />
            <CheckBoxWithText checkboxtext="Clash Royale" />
            <CheckBoxWithText checkboxtext="Others,Specify" /> */}
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            {ImageList.map((data) => (
                <View key={data.id} style={{marginHorizontal:10}}>
                    <Image source={data.image} style={{width:120,height:150,borderRadius:30}} resizeMode='contain'/>
                </View>
            ))}
                <View style={{ borderRadius:20,borderWidth:1,borderColor:Colors.grey,width:120,height:90,borderStyle:'dashed',borderRadius:20,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                    <View>
                    <Entypo name="plus" size={29} color={Colors.white} />
                </View>
                    <View>
                        <Text style={{ color: Colors.white,fontSize:18 }}>Upload</Text>
                   </View>
                </View>
          </View>
        </View>
        <View style={{paddingTop:105,width:'100%',padding:10}}>
            <TouchableOpacity style={{backgroundColor:Colors.submitbtn,alignItems:'center',padding:20,borderRadius:15,opacity:isSubmitDisabled?0.5:1}}   >
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
export default ScreenShotAchievementScreen