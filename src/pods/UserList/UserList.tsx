import { Avatar, ListItem } from '@rneui/base';
import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, FlatList, TouchableHighlight, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next';
import { getUsers } from './UserListApi';
import RowList from './components/RowList';
import HeaderUsersList from './components/HeaderUserList';
import MyFilterBar from '../../common/MyFilterBar';

function UsersList({ navigation }): JSX.Element {
    const { data, error, status, isFetching, isLoading } = useQuery(["users"], getUsers);
    const [search, setSearch] = useState(data ? data : [{}]);
    const [showFilter, setShowFilter] = useState(false);

    useEffect(() => {
        setSearch(data);

    }, []);
    const selectUser = (item) => {
        console.log(item);
        navigation.navigate('UserDetail', { item });
    };
    const cleanFilter = () => {
        console.log(data);

        setSearch(data);
    };
    React.useEffect(() => {
        setSearch(data);
    }, [data]);
    return (

        <SafeAreaView>
     
                <FlatList
                    ListHeaderComponent={<HeaderUsersList data={data} search={search ? search : data} selectUser={selectUser} cleanFilter={cleanFilter} setShowFilter={setShowFilter} />}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 400 }}
                    stickyHeaderIndices={[0]}
                    data={data}
                    renderItem={({ item }) => (
                        <RowList selectUser={selectUser} item={item} />
                    )} />


            {showFilter ?
                <MyFilterBar data={data} changeSearh={setSearch} setShowFilter={setShowFilter} />
                :
                null}
        </SafeAreaView>

    );
}
export default UsersList;