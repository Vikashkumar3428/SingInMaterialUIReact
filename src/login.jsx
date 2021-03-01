import React from 'react';
import { Grid,Paper,Avatar,Button, TextField, Checkbox ,FormControlLabel,Link, Typography} from "@material-ui/core";
import LockOpenOutlined from '@material-ui/icons/LockOpenOutlined'


const Login =()=>{
    const paperStyle= { padding: 20, height:'60vh',width: '35vh' ,margin:"5vw auto"}
    const avatarStyle= {backgroundColor:"#1bbd7e"}
    const btnStyle= {margin:"10px 0"}
return(

    <Grid>
        
        <Grid align="center">
            <Paper elevation ={10} style={paperStyle}>
                <Avatar style={avatarStyle}><LockOpenOutlined/></Avatar>
                <h2>Sign in</h2>
                <TextField style={{float:'left'}} fullWidth required label="Username" placeholder= "Enter Your Name here...."/>
                <TextField style={{float:'left'}} fullWidth required  label="Password" type="Password" placeholder= "Enter Your Password....."/>
                <FormControlLabel style={{float:'left'}} 
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember Me!"
                />
                <Button type="Submit" color="primary" variant="contained" style={btnStyle} fullWidth>Sign In</Button>
                <Typography  style={{float:'left'}} >  
                    <Link href="forgotpassword" fullWidth required>
                        Forgot Password ?
                    </Link>
                    </Typography>
                <Typography style={{float:'left'}} fullWidth required> Have an account ?
                    <Link href="signup">
                        Sign Up Here
                    </Link>
                </Typography>
            </Paper>
             
        </Grid>

    </Grid>
)
}
export default Login;