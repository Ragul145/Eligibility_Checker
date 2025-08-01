import React, { useContext } from 'react'
import { ProfileChip, ProfileContainer, Profilewrapper, UserImage } from '../../Styles/profile'
import { Typography } from '@mui/material'
import { AppContext } from '../Root'

import Men from "/src/assets/men.jpg"
import Women from "/src/assets/women.jpg"

function Profile() {
    const {userDetail} = useContext(AppContext)

  return (
    <ProfileContainer>
        <Profilewrapper>
            <UserImage src={userDetail?.gender == "male" ?Men:Women}/>
            <Typography fontSize="20px" fontWeight={600}>
                My Profile
            </Typography>
            <ProfileChip>Name :{userDetail?.name}</ProfileChip>
            <ProfileChip>Age :{userDetail?.age}</ProfileChip>
            <ProfileChip>Location :{userDetail?.location}</ProfileChip>
            <ProfileChip>Gender :{userDetail?.gender}</ProfileChip>
            <ProfileChip>Annual Income :{userDetail?.income}</ProfileChip>
        </Profilewrapper>
    </ProfileContainer>
  )
}

export default Profile