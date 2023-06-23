import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect } from 'react';
type Props = {};

const Logout = (props: Props) => {
  const navigate = useNavigate();

  useEffect(()=>{
    navigate('/login')
    window.location.reload();
  },[])

  return (
    <div>
      
    </div>
  );
};

export default Logout;