import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DatePicker } from 'react-native-woodpicker'


const MyDatePicker = (props): JSX.Element => {
    const {dateBirthdate}=props
    const [pickedDate, setPickedDate] = useState<Date>(dateBirthdate);

    const handleText = (): string => pickedDate
        ? pickedDate.toLocaleDateString()
        : new Date().toLocaleDateString();
 
 
    const handleDateChange= (value)=>{
      const valor=  new Date(value)
     console.log(typeof valor);
      
      setPickedDate(value);
      console.log("valueee", value);
      
     props.setDateBirtdate(value) 
  }
  
    return (
      <View style={{ paddingBottom:20}}>
        <DatePicker
          value={pickedDate}
          onDateChange={(valor)=>handleDateChange(new Date(valor))}
          title="Date Picker"
          text={handleText()}
          isNullable={false}
          iosDisplay="inline"
          maximumDate={new Date(Date.now())}
        />
        </View>
    );
}
export default MyDatePicker;