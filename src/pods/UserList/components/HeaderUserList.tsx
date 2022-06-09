import { faAdd, faFilterCircleXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import MyButton from '../../../common/MyButton';
import { User } from '../../userDetail/UserContext';
interface Props{
    setShowFilter:(isShow:Boolean)=>Boolean;
    selectUser:(user:User)=>void;
    cleanFilter:()=>void;
    search:[User]; 
    data:[User];
}
 function HeaderUsersList(props: Props) {
    const { t } = useTranslation();
    const { setShowFilter, cleanFilter, search, selectUser, data } = props;
    const NoItem = {
        "name": "New User",
        "birthdate": "",
        "id": 0
    };

    return (
        <View style={{ backgroundColor: "snow", padding: 8, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontWeight: "bold", fontSize: 30, marginLeft: 20 }}>{data.length} {t("Users")}</Text>
            <View style={{ width: "50%", justifyContent: "space-around", flexDirection: "row" }}>
                <MyButton
                    styleCont={{}}
                    disabled={false}
                    styleButt={{ backgroundColor: "black", borderRadius: 40 }}
                    icon={faAdd}
                    action={() => selectUser(NoItem)} />
                {search.length < data.length ?
                    <MyButton
                        styleCont={{}}
                        disabled={false}
                        styleButt={{ backgroundColor: "black", borderRadius: 40 }}
                        icon={faFilterCircleXmark}
                        action={() => cleanFilter()} />
                    :
                    null}
                <MyButton
                    styleCont={{}}
                    disabled={false}
                    styleButt={{ backgroundColor: "black", borderRadius: 40 }}
                    icon={faSearch}
                    action={() => setShowFilter(true)} />

            </View>
        </View>
    );
}
  export default HeaderUsersList;