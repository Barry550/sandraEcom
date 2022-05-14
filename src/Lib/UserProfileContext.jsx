import React,{createContext, useState} from 'react';

export const UserProfileContext = createContext({
  firstname: "",
  lastname: "",
  email: "",
  address: "",
  zipCode: "",
  city: "",
  setUserProfileContext: info => {}
})

export default function UserProfileContextProvider({children}) {
  const userProfileState = {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
    setUserProfileContext: info => setUserProfile(prevState =>({
      ...prevState,
      [Object.keys(info)]: Object.values(info)[0]
    }))
  }

  const [userProfile, setUserProfile] = useState(userProfileState)
  return(
    <UserProfileContext.Provider value={ userProfile}>
      {children}
    </UserProfileContext.Provider>
  )
  
}
