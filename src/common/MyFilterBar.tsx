import { Input} from '@rneui/themed';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MyButton from './MyButton';
import { faClose, faSearch, faUndo } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
/* interface Props{
    action: ()=>void;
    filterTerm: String;
    placeHolder: String;
    data: any
} */
const MyFilterBar = (props) => {
    const [filter, setFilter]= useState("")
   const{setShowFilter, data, changeSearh} = props
   const { t } = useTranslation();
    const filterByName=( data, filterTern: string)=>{    
        const filterUppercase= filterTern.toUpperCase()
        const result = data?.filter( user => user.name.toUpperCase().includes(filterUppercase) );  
        changeSearh(result)
        setShowFilter(false)
    } 
    return (
        <View style={styles.container}>
            <View style={{ width:"100%"}}>
                <MyButton disabled={false} styleCont={{ marginTop:60}} styleButt={styles. buttonClose} icon={faClose} action={()=>setShowFilter(false)} />
            </View>
        <View style={styles.container2}>
            <Input  inputContainerStyle={{width:"60%", marginLeft:40 }}	inputStyle={styles.input} onChangeText={(term)=> setFilter(term)} placeholder={t("Filter by Name")} />
            <MyButton disabled={false}  styleCont={{ marginRight:60}} styleButt={styles.buttonSearch} icon={faSearch} action={()=>filterByName(data, filter)} />
        </View>
        </View>)
};

export default MyFilterBar;
const styles = StyleSheet.create({
    container: {
        flex:1,
        width:"100%",
        alignItems:"center",
        zIndex: 99,
        position: "absolute",
        height:"100%",
        backgroundColor:"rgba(34,34,34,0.90)"
    },
    container2: {
        backgroundColor: "white",
        borderRadius:40,
        marginHorizontal:40,
        width:"100%",
        alignItems:"center",
        justifyContent: "space-around",
        flexDirection: "row",   
    },
    input:{
       
    },
    buttonSearch:{
      backgroundColor:"black",
      borderRadius:40,
      alignSelf:"flex-start",
      marginRight:40,
      width:40
    },
    buttonClose:{
     backgroundColor:"red",
     borderRadius:40
    },
});