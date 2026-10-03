import { useState } from "react"
import { Image, StyleSheet, Text, TextInput, View } from "react-native"
export const Login=()=>{
const [username,setUserName]=useState("")
    return(
        <View>
            <Text>Login</Text>
            <Image source={{uri:"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZyYW5pbWFsX2NhdF9raXR0ZW5fYnJpdGlzaC1pbWFnZS1reWJlYXlrNC5qcGc.jpg"}} style={{width:500,height:300}}/>
            <TextInput value={username} keyboardType="numeric" onChangeText={(a)=>setUserName(a)}/>
        </View>
    )
}
const styles=StyleSheet.create({
    // con:{
    //     flex:1
    // }
})