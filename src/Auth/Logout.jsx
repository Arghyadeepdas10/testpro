import { IconButton } from '@mui/material'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux Toolkit/Slice/AuthSlice';

const Logout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleclick = ()=>{
        dispatch(logout());
        navigate("/login")
    }

  return (

    <div>
        <IconButton style={{color:"red"}} onClick={handleclick}><LogoutIcon/></IconButton>
    </div>
  )
}

export default Logout