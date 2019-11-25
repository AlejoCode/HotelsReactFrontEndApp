import React from 'react'
import FilterResults from 'react-filter-search';

const Hotels = ({ hotels }) => {

  return (
    <div className="container">
        <div className="row">
        <div className="col-12">

          {hotels.docs.map((hotel) => (
                <div class="card mt-4">
                <div class="card-body">
                    <h5 class="card-title">{hotel.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted ml-2">{hotel.city}</h6>
                    <h6 class="card-subtitle mb-2 text-muted ml-2 mt-1">{hotel.address}</h6>

                    <p class="card-text ml-2">{hotel.stars} &#9733;</p>
                </div>
                </div>
            ))}
        </div>

        </div>
    </div>

  )
};

export default Hotels