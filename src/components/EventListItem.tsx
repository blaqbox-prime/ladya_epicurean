import React, { HTMLProps } from "react";

export interface IEventListItem{
    alt : string;
    title : string;
    imgUrl : string;
    subtitle: string;
    date : string;

}

const EventListItem = (props: IEventListItem) => {

    const {alt, imgUrl, title, subtitle, date } = props;

  return (
    <li>
      <div className="event-card has-before hover:shine">
        <div className="card-banner img-holder">
          <img
            src={imgUrl}
            width={350}
            height={480}
            loading="lazy"
            alt={alt}
            className="img-cover"
          />
          <time className="publish-date label-2" dateTime={date}>
            {date}
          </time>
        </div>

        <div className="card-content">
          <p className="card-subtitle label-2 text-center">{subtitle}</p>

          <h3 className="card-title title-2 text-center">
            {title}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default EventListItem;