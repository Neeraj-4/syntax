import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { Link } from 'react-router-dom';
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
@media screen and (min-width: 1200px) {
gap: 20px;
}

`
const Container = styled(Link)`
    padding: 5px 10px;
    text-align: start;
    margin-bottom: 5px;
    color: inherit;
    text-decoration: none;
`
const Text = styled(Typography)`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: 600;
white-space: wrap;
font-size: 14px;
`
const Items = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 2px;
`
const TextWrap = styled(Box)`
min-width: 120px;
display: flex;
flex-direction: column;
gap: 10px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

`
const SadSong = ({ Latest_songs, title }) => {
    return (

        <Component>
            <Heading variant='h5'>{title}</Heading>
            <Wrap>
                {
                    Latest_songs.map((song) => {

                        return (
                            <Container to={`/${song.id}/songs`} key={song.id}>

                                <img src={song.url} alt="connot load" style={{ maxWidth: 160, height: 160, objectFit: 'contain' }} />
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

export default SadSong
