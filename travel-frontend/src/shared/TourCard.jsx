import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./tour-card.css";
import { calculateAvgRating } from "../utils/avgRating";
import { TEXT } from "../utils/text";

export const TourCard = ({ tour }) => {
  const { _id, title, city, photo, price, featured, reviews, maxGroupSize } =
    tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour-img" />
          {featured && <span>{TEXT.FEATURED}</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>

            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}{" "}
              {totalRating === 0 ? (
                "Not Rated"
              ) : (
                <span>({reviews?.length})</span>
              )}
            </span>
          </div>

          <div className="d-flex justify-content-between ">
            <h6 className="tour__title">
              <Link to={`/tours/${_id}`}>{title}</Link>
            </h6>
            <h6 className="tour__title">{maxGroupSize} person</h6>
          </div>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ₹ {price} <span> {TEXT.PER_PERSON}</span>
            </h5>

            <button className="btn booking__btn">
              <Link to={`/tours/${_id}`}>{TEXT.BOOK_NOW}</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
