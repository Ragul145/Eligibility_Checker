import { NavContainer,NavProfile,ProfileIcon } from '../../Styles/Navbar'
import { Box, Typography} from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../Root'
import { useNavigate } from 'react-router-dom'
import { routePath } from '../../Routes/routePath'

function Navbar() {
  const {userDetail} = useContext(AppContext)
  const navigate = useNavigate()
  return (
    <>
        <NavContainer  >
            <Typography variant='h6'>Eligibility Checker</Typography>
            <NavProfile>
              <Box>{userDetail?.name?.toUpperCase()}</Box>
                <ProfileIcon onClick={()=> navigate(routePath.profile)}/>
            </NavProfile>
        </NavContainer>
    </>
  )
}

export default Navbar