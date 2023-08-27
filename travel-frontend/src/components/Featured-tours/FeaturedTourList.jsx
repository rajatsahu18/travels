import React from 'react'
import  tourData from '../../assets/data/tours';
import { TourCard } from '../../shared/TourCard';
import { Col } from 'reactstrap'

export const FeaturedTourList = () => {
  return (
    <>
        {tourData?.map((tour) => (
            <Col lg='3' className='mb-4' key={tour.id}>
                <TourCard tour={tour} />
            </Col>
        ))}
    </>
  )
}
