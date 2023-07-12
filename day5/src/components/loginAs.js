import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
export default function LoginAs() {
    
  return (
  <div>
            
                <h2>Login As</h2>
         
                
        <Button variant="outlined" >Employee</Button>
        
                <Link to='/Login'>
        <Button variant="outlined" style={{color:"black",border:"solid",paddingRight:"10px"}}>Admin</Button>
        </Link>
                    
            
        </div>
  )
}