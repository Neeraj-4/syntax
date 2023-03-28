import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { categoryData } from '../../../Constant/Data'
import { Link } from 'react-router-dom'

const Heading = styled(Typography)`
  margin-top: 20px;
  text-align: center;
`
const Wrap = styled(Box)`
margin-top: 20px;
display: flex;
flex-wrap: wrap;
gap: 25px;
justify-content: center;
align-items: center;
line-height: 0;
`
const Container = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-transform: capitalize;
  font-size: 18px;
  color: inherit;
`
const TextWrapper = styled(Box)`
 position:relative;
 top: -70px;
 left: 10px;
`

const Category = () => {

  return (
    <>
      <Heading>Category</Heading>
      <Wrap>
        {categoryData.map((category) => (
          <Container to={`/category/${category.id}`} key={category.id}>
              <img src={category.url} alt={category.id} style={{ maxWidth: 160, height: 90, objectFit: 'cover',borderRadius:10 }} />
            <TextWrapper>
              <Typography variant='p'>{category.id}</Typography>
            </TextWrapper>
          </Container>
        ))}
      </Wrap>
    </>
  )
}

export default Category
