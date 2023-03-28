import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
const Component = styled(Box)`
height: auto;
`
const Wrap = styled(Box)`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
gap:10px;

@media screen and (min-width: 1200px) {
justify-content: flex-start;
align-items: flex-end;
margin:30px 0 0 30px;
}
`
const Heading = styled(Typography)`
color: inherit;
font-weight: 600;
font-size: 20px;
margin:20px 0 20px 20px;
@media screen and (min-width: 1200px) {
margin: 30px 0 0 30px;
}
`
const Containers = styled(Box)`
    padding: 5px 15px;
    text-align: start;
    margin-bottom: 5px;
    cursor: pointer;
&>img{
  width: 160px;
  height: 160px;
  object-fit: inherit;
  aspect-ratio: 3/2;
}


`
const Text = styled(Typography)`
font-size: 12px;
font-weight: 600;

`
const Items = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
`
const Wrapper = styled(Box)`
padding: 10px;
display: flex;
gap: 5px;
`
const TextWrap = styled(Box)`
margin-top: 5px;
display: flex;
flex-direction: column;
white-space: nowrap;
gap: 5px;
text-overflow: ellipsis;
overflow: hidden;
max-width: 120px;
`
const Error = styled(Box)`
width: 100%;
height: 20vh;
margin-top: 10px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
text-align: center;
justify-content: center;
align-items: center;
gap: 5px;
`
const ErrorMessage = styled(Typography)`
font-size: 18px;
`
const CategoryRoute = ({ CategoryItems, handleDownload, handleData }) => {
    const { id } = useParams();
    const filterCategory = CategoryItems.filter(category => category.id === id);
    return (
        <Component>
            {filterCategory.map((category) => (
                <Box key={category.id}>
                    <Heading>{category.id}</Heading>
                    <Wrap>
                        {category.playlist.map((song, index) => (
                            <Containers key={song.id}>
                                    <img src={song.url} alt={song.title}
                                        onClick={() => handleData(song, index, category.playlist)}
                                       />
                                    <Items>
                                        <TextWrap>
                                            <Text variant='p'>{song.title}</Text>
                                            <Text variant='p' style={{ fontSize: 10 }}>{song.artist}</Text>
                                        </TextWrap>
                                        <Wrapper>
                                            <FileDownloadOutlinedIcon style={{ fontSize: 24 }} onClick={() => handleDownload(song.file, song.title)} />
                                        </Wrapper>
                                    </Items>

                            </Containers>
                        ))}
                    </Wrap>
                </Box>
            ))}
            
         {(filterCategory.length === 0) 
         &&
         (
         <Error>
         <Typography variant='h5'>Something's wrong</Typography>
         <ErrorMessage variant='p'>Please Try again later</ErrorMessage>

          </Error> 
         )
         }
        </Component>
    )
}

export default CategoryRoute
