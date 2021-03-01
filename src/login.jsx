import React from 'react';
import { Grid,Paper,Avatar } from "@material-ui/core";
import LockOpenOutlined from '@material-ui/icons/LockOpenOutlined'


const Login =()=>{
    const paperStyle= { padding: 20, height:'60vh',width: '35vh' ,margin:"5vw auto"}
    const avatarStyle= {backgroundColor:"#1bbd7e"}
return(

    <Grid>
        
        <Grid align="center">
            <Paper elevation ={10} style={paperStyle}>
                <Avatar style={avatarStyle}><LockOpenOutlined/></Avatar>
                Sign in
             </Paper>
        </Grid>

    </Grid>
)
}
export default Login;