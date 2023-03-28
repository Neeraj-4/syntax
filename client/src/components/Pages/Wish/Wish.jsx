import React from 'react'
import { Dialog, Box, TextField, styled, Typography, Button } from '@mui/material'
import { useState } from 'react'
import { Authantication } from '../../../Service/api'

const ContainerBox = styled(Box)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    @media screen and (max-width: 600px) {
    max-width:100%;
    height: 40vh;
   }
    @media screen and (min-width: 1200px) {
    min-width:25vw;
   }
`
const Heading = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
&>h5{
    color: black;
    font-weight: bold;
    letter-spacing:.4ch;
    text-align: center;
   } 
`
const Wrap = styled(Box)`
margin-left: 15px;
    &>div,&>p{
        margin-top: 15px;
    }
`
const WrapperButton = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;

`
const WishBtn = styled(Button)`
background:#0099ff;
letter-spacing:.4ch;
margin-top: 10px;
`
const Fields = styled(TextField)`
 width:90%;
`
const Text = styled(Typography)`
 font-size: 12px;
 color:gray;

`
const WishValues = {
    fullname: '',
    song: '',
}
const Wish = ({ open, setOpen}) => {
    const [wish, setWish] = useState(WishValues);

    const handleClose = () => {
        setOpen(false);
    }

    const onValueChange = (e) => {
        setWish({ ...wish, [e.target.name]: e.target.value });
    }
    const wishData = async () => {
        let response = await Authantication(wish);
        if (!response) return;
        handleClose();
    }
    return (

        <>
                <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: "set" } }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,256L48,224C96,192,192,128,288,138.7C384,149,480,235,576,261.3C672,288,768,256,864,208C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <ContainerBox>
                        <Heading>
                            <Typography variant='h5'>Wish</Typography>
                        </Heading>
                        <Wrap>
                            <Fields variant="standard" type="email" label="Enter your name" onChange={(e) => onValueChange(e)} name="fullname" />
                            <Fields variant="standard" label="Enter song name" onChange={(e) => onValueChange(e)} name="song" />
                            <Text>By Send, we will upload that songs</Text>
                            <WrapperButton>
                                <WishBtn variant="contained" onClick={() => wishData()}>Send</WishBtn><br></br>
                            </WrapperButton>
                        </Wrap>
                    </ContainerBox>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,0L48,48C96,96,192,192,288,197.3C384,203,480,117,576,112C672,107,768,181,864,197.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </Dialog>
        </>


    )
}

export default Wish
