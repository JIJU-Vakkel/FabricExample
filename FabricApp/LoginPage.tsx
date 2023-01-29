import React, {FC} from 'react'
import { Text, View } from "react-native"

interface MainProps{
    loading:boolean,
    isError:boolean
}
type User = {
    name:string,
    password:string
}
interface LoginProps{
    user: User
}

const Login:FC<LoginProps> =({user})=>{
    return(<Text>{user.name}</Text>)
}

export default Login