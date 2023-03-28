import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { styled} from '@mui/material'
import { Link } from 'react-router-dom';
const Wrapper= styled(Link)`
height: 250px;
display: flex;
padding: 10px 5px;
align-items: center;
justify-content: center;

@media screen and (max-width: 600px) {
img{
  width: 90%;
  height: 260px;
  object-fit: inherit;
  aspect-ratio: 3/2;
}
}
@media screen and (min-width: 1200px) {
  img{
  height: 250px;
  aspect-ratio: 3/2;
  object-fit: inherit;
}
}
@media screen and (min-width: 550px) and (max-width: 1199px) {
  img{
    min-width: 160px;
    max-width: 260px;
  height: 250px;
  aspect-ratio: 3/2;
  object-fit: inherit;
}
}
`


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 490 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 490, min: 0 },
    items: 1
  }
};
const Slider = ({Latest_songs,}) => {
  return (
<Carousel 
responsive={responsive}
swipeable={false}
draggable={false}
infinite={true}
autoPlay={true}
autoPlaySpeed={2000}
keyBoardControl={true}
slidesToSlide={1}
containerClass="carousel-container"
removeArrowOnDeviceType={["tablet","mobile"]}
itemClass="carousel-item-padding-40-px"
>
 
 {
  Latest_songs.map((song)=>{
    return(
      <Wrapper to={`/${song.id}/songs`}  key={song.id} >
      <img src={song.url} alt={song.id} />
      </Wrapper>
    )
  })

 }
 </Carousel>
  )
}
export default Slider
