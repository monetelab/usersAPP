import React from 'react'
import {  Button } from '@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {  faUndo } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet } from 'react-native';
interface Props{
  action : ()=>void;
  icon: any;
  disabled: Boolean;
  styleButt: any
  styleCont: any
}

const MyButton:React.FC<Props>=(props)=> {
  const externalStyle=()=>{
    return props.styleButt? props.styleButt :{backgroundColor: 'rgba(99, 39, 49, 1), borderRadius:50'}
  } 
  return( 
  <Button
  icon={<FontAwesomeIcon size={20} style={{color:"white"}} icon={props.icon} />}
  disabled={props.disabled}
  title={''}
  buttonStyle={externalStyle()}
  containerStyle={[{
    height:40,
    width:40,
    
  }, props.styleCont ]}
  onPress={props.action}
/>
  )
}

export default MyButton