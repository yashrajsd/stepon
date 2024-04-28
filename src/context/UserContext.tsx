/* eslint-disable prettier/prettier */
import React from 'react';


const UserContext = React.createContext('default value');

const UserInfoProvider =({children})=>{
    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [phoneNumber,setPhoneNumber] = React.useState('');
    const [height,setHeight] = React.useState(0);
    const [issue,setIssue] = React.useState('');
    const [user,setUser] = React.useState(null);

    const updateProfile = (value,type)=>{
        switch (type) {
            case 'name':
                setName(value)
                break;
            
            case 'email':
                setEmail(value)
                break;

            case 'number':
                setPhoneNumber(value)
                break;
            
            case 'height':
                setHeight(value)
                break;

            case 'issue':
                setIssue(value);

            default:
                break;
        }
    }

    const updateUser=(data)=>{
        setUser(data);
    }

    return(
        <UserContext.Provider value={{updateUser,user,name,email,height,phoneNumber,issue,updateProfile}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext,UserInfoProvider};

