import { Box, Heading, FlatList } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
//import { useTranslation } from 'react-i18next';
const MyUserList = (props) => {
    const goToDetail = (item) => {

        props.navigation.navigate('Detail', { user: item })
    }

    //const { t } = useTranslation();
    const formatDate = (date: String) => {
        const perrito = new Date(date).toDateString()
        return perrito
    }
    return <Box w={"100%"} marginBottom={10}>
        <Heading fontSize="xl" mt={4} p="4" pb="3">
            {props.data?.length} {t("users")}
        </Heading>
        <FlatList 
        data={props.data}
        keyExtractor={item => item.id} 
        renderItem={({
            item
        }) => <TouchableOpacity onPress={() => goToDetail(item)}>
                
            </TouchableOpacity>}  />
    </Box>;
};
export default MyUserList;