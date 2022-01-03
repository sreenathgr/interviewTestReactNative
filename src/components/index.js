import React from 'react'
import { Text, View } from 'react-native'
import { Colors } from '../attributes/index'
import { Entypo } from '@expo/vector-icons'; 
export const RadioButton = (props) => {
    const {isChecked}=props
    return (
        isChecked?(<View style={{width:20,height:20,backgroundColor:Colors.submitbtn,borderRadius:20,alignItems:'center',justifyContent:'center',}}>
             <Entypo name="check" size={18} color={Colors.white} />
        </View>) : (
             <View style={{width:20,height:20,backgroundColor:Colors.grey,borderRadius:20,alignItems:'center',justifyContent:'center',}}>
            
        </View>   
        )
    )
}

export const CheckBoxButton = (props) => {
    const {isChecked}=props
    return (
        isChecked?(<View style={{width:20,height:20,backgroundColor:Colors.submitbtn,alignItems:'center',justifyContent:'center',borderRadius:5}}>
          <Entypo name="check" size={18} color={Colors.white} />
        </View>) : (
                  <View style={{width:20,height:20,backgroundColor:Colors.grey,alignItems:'center',justifyContent:'center',borderRadius:5}}>
            
                  </View> 
        )
    )
}

export const RadioButtonWithText = (props) => {
    const {radioText,isChecked}=props
    return (
        <View style={{flexDirection:'row',alignItems:'center',paddingTop:15}}>
            <RadioButton isChecked={ isChecked}/>
            <View style={{ paddingStart: 10 }}><Text style={{ color: Colors.white, fontFamily: 'robotoBold', fontSize: 17 }}>{ radioText}</Text></View>
    </View>
    )
}

export const CheckBoxWithText = (props) => {
    const { checkboxtext, isChecked } = props
    return (
        <View style={{flexDirection:'row',alignItems:'center',paddingTop:15}}>
            <CheckBoxButton isChecked={ isChecked}/>
            <View style={{ paddingStart: 10 }}><Text style={{ color: Colors.white, fontFamily: 'robotoBold', fontSize: 17 }}>{ checkboxtext}</Text></View>
    </View>
    )
}
RadioButtonWithText.defaultProps = {
    isChecked:false
}
CheckBoxWithText.defaultProps = {
    isChecked:false
}