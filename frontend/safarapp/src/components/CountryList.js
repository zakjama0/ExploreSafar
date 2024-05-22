import Card from '../components/Card';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const CountryList = ({countries}) => {

    const listCountries = countries.map(country => (
        
        
        <Card 
        key={country.id}
        name={country.name}
        image={country.image}
        />
    ));

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


    return ( <>
    <div>
    <Carousel responsive={responsive}>
             {listCountries}
     </Carousel>
            
    </div>
    
    </> );
}
 
export default CountryList;