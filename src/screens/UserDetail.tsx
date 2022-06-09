import { faUndo, faEdit, faTrash, faSave } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Card, Input } from '@rneui/themed';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MyButton from '../common/MyButton';
import MyDatePicker from '../common/MyDatePicker';
import { deleteUserById, UpdateUserById, createUserAPI } from '../pods/UserList/UserListApi';
import { useTranslation } from 'react-i18next';
export enum ModeComponent {
  EditUser,
  CreateUser,
  ReadUser,
  UndoUser
}
export const CardDetails = (props) => {
  const { id, name, birthdate } = props.data
  const { mode } = props
  return (<Card containerStyle={{}} wrapperStyle={{}}>
    <Card.Title>{name}</Card.Title>
    <View
      style={{
        position: "relative",
        alignItems: "center"
      }}
    >
      <Avatar
        avatarStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 80 }}
        size="large"
        source={{
          uri:
            "https://robohash.org/" + id
        }}
      />
      <Text style={{ marginTop: 20 }}>{new Date(birthdate)?.toLocaleDateString()}</Text>
    </View>
  </Card>)
}
export const ButtonsBar = (props) => {
  const { mode, enumMode,actions, user } = props
  var configButtons = [
    {
      disabled: true,
      action: actions.saveUserAction,
      icon: faSave
    }
    ,
    {
      disabled: false,
      action: actions.editUserAction,
      icon: faEdit
    }
    ,
    {
      disabled: true,
      action: actions.undoUserAction,
      icon: faUndo
    }
    ,
    {
      disabled: false,
      action: actions.deleteUserAction,
      icon: faTrash
    }
  ]; 
   
   switch (mode) {
      case enumMode.ReadUser:
        console.log("readuser");
        configButtons = [
          {
            disabled: true,
            action: actions.saveUserAction,
            icon: faSave
          }
          ,
          {
            disabled: false,
            action: actions.editUserAction,
            icon: faEdit
          }
          ,
          {
            disabled: true,
            action: actions.undoUserAction,
            icon: faUndo
          }
          ,
          {
            disabled: false,
            action: actions.deleteUserAction,
            icon: faTrash
          }
        ];
        break;
      case enumMode.EditUser:
        configButtons = [
          {
            disabled: false,
            action: actions.saveUserAction,
            icon: faSave
          }
          ,
          {
            disabled: false,
            action: actions.editUserAction,
            icon: faEdit
          }
          ,
          {
            disabled: false,
            action: actions.undoUserAction,
            icon: faUndo
          }
          ,
          {
            disabled: false,
            action: actions.deleteUserAction,
            icon: faTrash
          }
        ];
        break;
      case enumMode.CreateUser:
        configButtons = [
          {
            disabled: false,
            action: actions.saveUserAction,
            icon: faSave
          }
          ,
          {
            disabled: true,
            action: actions.editUserAction,
            icon: faEdit
          }
          ,
          {
            disabled: true,
            action: actions.undoUserAction,
            icon: faUndo
          }
          ,
          {
            disabled: true,
            action: actions.deleteUserAction,
            icon: faTrash
          }
        ];
        break;
      case enumMode.UndoUser:
        configButtons = [
          {
            disabled: false,
            action: actions.saveUserAction,
            icon: faSave
          }
          ,
          {
            disabled: false,
            action: actions.editUserAction,
            icon: faEdit
          }
          ,
          {
            disabled: true,
            action: actions.undoUserAction,
            icon: faUndo
          }
          ,
          {
            disabled: false,
            action: actions.deleteUserAction,
            icon: faTrash
          }
        ];
        break;
      default:
        console.log("erro buttons");
        break;
    }
    return (
      <Card containerStyle={{}} wrapperStyle={{ flexDirection: "row", justifyContent: "space-around" }}>
        {configButtons.map((button) =>
          <MyButton styleCont={{}} disabled={button.disabled} styleButt={styles.buttonSearch} icon={button.icon} action={() => button.action(user)} />
        )}
      </Card>)
  }
export const FormUserDetail = (props) => {
  const { id, name, birthdate, setDateBirtdate, mode, enumMode } = props.data
  const [workUser, setWorkUser]= useState(id==0?"new user":name);
  return (
    <Card containerStyle={{}} wrapperStyle={{}}>
      <Input inputContainerStyle={{}} inputStyle={styles.input} value={workUser} onChangeText={(name)=> setWorkUser(name)} placeholder="Name" />
      <MyDatePicker dateBirthdate={birthdate} setDateBirtdate={setDateBirtdate} />
    </Card>)
}


const UserDetail: React.FC = ({ route, navigation }) => {
  const { id, name, birthdate } = route.params.item;
  console.log(id, name, birthdate);
  const defaultUser={ id: id, name:name, birthdate:birthdate }
  const [infoUser, setInfoUser]= useState({name:"", birthdate:""})
  const [dateBirthdate, setDateBirtdate]= useState(id==0?new Date():new Date(birthdate))
  const [mode, setMode] = useState(id==0?ModeComponent.CreateUser :ModeComponent.ReadUser);
  const [user, setUser]= useState(defaultUser)
  const { t } = useTranslation();
const saveUser=(user)=>{
    
    if(user.id ==0 ){
      
      console.log("CREATE");
      createUserAPI(user);
    }
    else{ 
      console.log("UPDATE");
      UpdateUserById(user);
    }
    navigation.goBack()
  }
const editUser=(user)=>{
  console.log("const editUser=(user)=>");
    console.log("edit user:", user);
    setMode(ModeComponent.EditUser)

  }
  const undoUser=(user)=>{
    console.log("const undoUser=(user)=>");
    setUser(defaultUser)
    console.log("undo user:", user);
    setMode(ModeComponent.UndoUser)

  }
const deleteUser=(user)=>{
    console.log("delete user:", user);
    deleteUserById(user.id)
    navigation.goBack()

  }
 const actionsUser={
  "saveUserAction" :saveUser,
  "editUserAction" :editUser,
  "undoUserAction" :undoUser,
  "deleteUserAction" :deleteUser
}
  return (
    <ScrollView style={{flexGrow:1}}>
      <CardDetails data={user} mode={mode} />
      <ButtonsBar mode={mode} actions={actionsUser} delete={deleteUser} user={user} enumMode={ModeComponent} />
      {mode == ModeComponent.EditUser || mode == ModeComponent.UndoUser || mode == ModeComponent.CreateUser ?
        <Card containerStyle={{flexGrow:1}} wrapperStyle={{}}>
          <Text>{t("name")}</Text>
        <Input inputContainerStyle={{}} inputStyle={styles.input} value={user.name} onChangeText={(name)=> setUser({name:name, id:user.id, birthdate:user.birthdate})} placeholder="Name" />
        <Text>{t("birthdate")}</Text>
        <MyDatePicker dateBirthdate={dateBirthdate} setDateBirtdate={(birthdate)=> setUser({name:user.name, id:user.id, birthdate:birthdate})} />
      </Card>
        :
        null
      }
    </ScrollView>
  )
}
export default UserDetail;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    zIndex: 99,
    position: "absolute",
    height: "100%",
    backgroundColor: "rgba(34,34,34,0.90)"
  },
  container2: {
    backgroundColor: "white",
    borderRadius: 40,
    marginHorizontal: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",

  },
  input: {
    borderWidth:1, padding:4, marginTop:8, borderColor:"gray"
  },
  buttonSearch: {
    backgroundColor: "black",
    borderRadius: 40,
    alignSelf: "flex-start",
    marginRight: 40,
    width: 40
  },
  buttonClose: {
    backgroundColor: "red",
    borderRadius: 40
  },
});