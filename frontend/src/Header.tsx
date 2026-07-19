import okSeal from "./assets/OK_House_of_Representatives_Seal.png"
import userAvatar from './assets/1.jpg'
import { Stack, Typography, Avatar } from '@mui/material'

export const Header = () => {
    return (
        <Stack direction='row' sx={{
            height: '30px', 
            justifyContent:"space-between", 
            borderBottom: "20px solid #285791",
            padding: '10px',
        }}>
            <OrgLabel />
            <UserLabel />
        </Stack>
    )
}

const OrgLabel = () => (
    <Stack direction='row' sx={{alignItems: 'center'}}>
        <img src={okSeal} style={{height: '100%'}}/>
        <Typography sx={{fontSize:'14px', padding:'10px'}}>Oklahoma House of Representatives</Typography>
    </Stack>
)

const UserLabel = () => (
    <Stack direction='row' sx={{alignItems: 'center'}}>
        <Avatar src={userAvatar}/>
        <Typography sx={{fontSize:'14px', padding:'10px'}}>Rep. Regina Goodwin</Typography>
    </Stack>
)