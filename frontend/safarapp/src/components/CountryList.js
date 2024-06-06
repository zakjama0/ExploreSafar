import Card from '../components/Card';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const CountryList = ({ countries }) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const groupByRegion = (countries) => {
    const regions = {};
    countries.forEach(country => {
      if (!regions[country.region]) {
        regions[country.region] = [];
      }
      regions[country.region].push(country);
    });
    return regions;
  }

  const regions = groupByRegion(countries);

  const listCountries = (region) => {
    return regions[region].map((country) => (
      <Link to={`/countries/${country.id}`}>
        <Card
          key={country.id}
          name={country.name}
          image={country.image}
        />
      </Link>
    ));
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    }
  };


  return (
    <>
      <div className='w-full'>
        {isMobile ? (
          <div className='w-full'>
            {Object.keys(regions).map((region) => (
              <div key={region}>
                <h2 className="text-center my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{region}</h2>
                <div>{listCountries(region)}</div>
              </div>
            ))}
          </div>
        )
          :
          (
            <div className="w-full">
              {Object.keys(regions).map((region) => (
                <div key={region}>
                  <h2 className="text-center my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{region}</h2>
                  <Carousel responsive={responsive}>{listCountries(region)}</Carousel>
                </div>
              ))}
            </div>
          )
        }
      </div>
    </>
  );
}

export default CountryList;