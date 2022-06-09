
import React, { useEffect, useState } from 'react'
import { View,SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import MyFilterBar from '../common/MyFilterBar';
import { useQuery } from 'react-query'
import { getUsers } from '../pods/UserList/UserListApi'
import HeaderUsersList from '../pods/UserList/components/HeaderUserList';
import RowList from '../pods/UserList/components/RowList';
import { User } from '../core/interfaces';

const UsersList: React.FC = ({ navigation }) => {
  const { data, error, status, isFetching, isLoading } = useQuery(["users"], getUsers)
  const [search, setSearch] = useState(data?data:[{}])
  const [showFilter, setShowFilter] = useState(false)

  useEffect(()=>{
   setSearch(data)
   
},[])
  const selectUser = (item:User) => {
    navigation.navigate('UserDetail', { item })
  }
  const cleanFilter = () => {
    console.log(data);

    setSearch(data)
  }
  React.useEffect(() => {
    setSearch(data)
    }, [data])
  return (

    <SafeAreaView>
      {isLoading ?
         <View style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
         <ActivityIndicator size="large" color="#141414" />
       </View>
        :
        <FlatList
        ListHeaderComponent={<HeaderUsersList data={data} search={search?search:data} selectUser={selectUser} cleanFilter={cleanFilter} setShowFilter={setShowFilter} />}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 400 }}
        stickyHeaderIndices={[0]}
        data={data}
        renderItem={({ item }) => (
         <RowList selectUser={selectUser} item={item}/>
        )}
        />
      }
      {showFilter ?
        <MyFilterBar data={data} changeSearh={setSearch} setShowFilter={setShowFilter} />
        :
        null
      }
    </SafeAreaView>

  )
}
export default UsersList;