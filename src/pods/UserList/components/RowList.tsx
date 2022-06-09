import { Avatar, ListItem, Text } from "@rneui/base"
import React from "react"
import { TouchableHighlight, View } from "react-native"
import { User } from "../../../core/interfaces";


interface Props{
    item:[User] 
    selectUser:(item:User)=>void;
}
function RowList(props: Props) {

    const { item, selectUser } = props;
    return (
        <TouchableHighlight
            key={item.id}
            onPress={() => selectUser(item)}>
            <View style={{ backgroundColor: 'red' }}>
                <ListItem
                    Component={TouchableHighlight}
                    containerStyle={{}}
                    disabledStyle={{ opacity: 0.5 }}
                    onPress={() => selectUser(item)}
                    pad={20}
                >
                    <Avatar
                        source={{
                            uri: `https://robohash.org/${item.id}? gravatar = hash`
                        }} />
                    <ListItem.Content>
                        <ListItem.Title>
                            <Text>{item.name}</Text>
                        </ListItem.Title>
                        <ListItem.Subtitle>
                            <Text>{new Date(item.birthdate).toLocaleDateString()}</Text>
                        </ListItem.Subtitle>
                    </ListItem.Content>

                </ListItem>
            </View>
        </TouchableHighlight>);
}
export default RowList;