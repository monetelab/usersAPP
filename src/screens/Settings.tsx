import React from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";

export default function Settings({ navigation }) {
    const {t, i18n}=useTranslation();
    const [language, setLanguage]= React.useState("En")
    const selectLanguage=(language:String)=>{
        console.log(language);
        i18n.changeLanguage(language)
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor:"#E1DEDD", alignItems: 'center' }}>
            <Text>{t("SelectLanguage")}</Text>
        <View style={{flexDirection:"row", marginTop:20}}>
            
        <View style={{alignItems:"center",  flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>selectLanguage("en")} style={{backgroundColor:"white", marginHorizontal:4, borderWidth:2, padding:14, justifyContent:"center",alignItems:"center", borderColor:"black", width:50, marginHorizontal:8, height:40}}>
                <View style={{position:"absolute",width:50, zIndex:2,height:10, backgroundColor:"red", alignSelf:"center"}}></View>
                <View style={{width:10, zIndex:100, height:40, backgroundColor:"red", alignSelf:"center"}}></View>
            </TouchableOpacity>
            
        </View>                
            <View style={{alignItems:"center",marginLeft:20, flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>selectLanguage("es")} style={{backgroundColor:"white", marginHorizontal:4, justifyContent:"center",alignItems:"center", borderColor:"black", width:50, height:40}}>
                    <View style={{backgroundColor:"red", width:50, flex:1}}></View>
                    <View style={{backgroundColor:"yellow",width:50, flex:1}}></View>
                    <View style={{backgroundColor:"red",width:50, flex:1}}></View>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
