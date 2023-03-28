import React from 'react'
import { Box,Typography,styled } from '@mui/material'
import { Link } from 'react-router-dom'
const Component = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: 50%;
    &>div::-webkit-scrollbar{
        overflow: hidden;
    }

`
const Heading = styled(Typography)`
margin-left: 20px;
font-weight: 600;
letter-spacing:.1cm;
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
margin-bottom: 10px;
box-shadow: 15px 0px 10px -15px rgb(0 0 0 / 20%);

`
const Wrap = styled(Box)`
overflow-x: auto;
overflow-y: hidden;
display: flex;
flex-wrap: nowrap;
gap: 5px;
justify-content: flex-start;
align-items: center;
padding: 10px;
&>:hover
{
  transform: translateY(-4px);
}
@media screen and (min-width: 1200px) {
gap: 20px;
}

`
const Container = styled(Link)`
color: inherit;
text-decoration: none;
    padding: 5px 10px;
    text-align: start;
    margin-bottom: 5px;
   // box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 25%), 0px 4px 5px 0px rgb(0 0 0 / 20%), 0px 1px 10px 0px rgb(0 0 0 / 16%);
`
const Text = styled(Typography)`
font-size: 12px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: 600;
font-size: 14px;
white-space: wrap;
`
const Items = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 2px;

`
const Wrapper = styled(Box)`
padding: 10px;
display: flex;
gap: 5px;
`
const TextWrap = styled(Box)`
width: 30%;
min-width: 120px;
display: flex;
flex-direction: column;
gap: 10px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`
const OldSongs = ({party_songs,title}) => {    
  return (
       <Component>
            <Heading variant='h5'>{title}</Heading>
            <Wrap>
                {
                    party_songs.map((song) => {
                        return (
                            <Container to={`/${song.id}/Partysongs`} key={song.id}>
                                <img src={song.url} alt="connot load" style={{maxWidth:160,height:160,objectFit:'contain' }} />                                    
                                <Items>
                                    <TextWrap>
                                        <Text variant='p'>{song.id}</Text>
                                    </TextWrap>
                                </Items>
                            </Container>
                        )
                    })
                }
            </Wrap>

        </Component>
    )
}

export default OldSongs
