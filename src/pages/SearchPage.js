import { Button } from "@material-ui/core";
import React from "react";
import SearchResults from "../components/SearchResults";
import "./searchPage.css";

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>62 stays · 26th August to 30th August · 2 guests</p>
        <h1>Stays Nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filter</Button>
      </div>
      <SearchResults
        img='https://a0.muscache.com/im/pictures/56d7fa4b-8b94-4635-a885-40e7c23d101a.jpg?im_w=320'
        location='Entire room in Karjat'
        title='Shanti Van'
        description='6 guests · 2 Bedrooms · 6 Beds · 2 Bathrooms · Pool · Kitchen · Wifi · Air Conditioning'
        star={4.56}
        price='₹909 / night'
        reviews={62}
      />
      <SearchResults
        img='https://a0.muscache.com/im/pictures/960cbd39-b1a8-4c1f-902c-bb9e8c71439a.jpg?im_w=320'
        location='Resort room in Pune'
        title='Sunny Side Cottage with lake view'
        description='4 guests · 1 Bedroom · 1 Bed · 1 Bathroom · Air Conditioning'
        star={4.81}
        price='₹4,634 / night'
        reviews={11}
      />
      <SearchResults
        img='https://a0.muscache.com/im/pictures/532f9c4e-4466-4c94-a2b6-a3a233af1534.jpg?im_w=320'
        location='Entire Cottage in lonavala'
        title="The Artist's Adventure Cottage"
        description='2 guests · 1 Bedroom · 2 Bed · 1 Bathroom '
        star={4.49}
        price='₹4,043 / night'
        reviews={113}
      />
      <SearchResults
        img='https://a0.muscache.com/im/pictures/3b59167d-f107-4101-b4b6-a077c1f5349d.jpg?im_w=320'
        location='Entire flat in Lonavala'
        title='Skies, Lonavala ( Khandala )'
        description='4 guests · 1 Bedroom · 1 Bed · 2 Bathroom · Kitchen · Wifi · Air Conditioning'
        star={4.69}
        price='₹3,350 / night'
        reviews={32}
      />
      <SearchResults
        img='https://a0.muscache.com/im/pictures/99455cbf-bb13-4cc7-b375-6b8d77808076.jpg?im_w=320'
        location='Entire flat in Mapusa'
        title='Cozy Hillside Apartment'
        description='4 guests · 1 Bedroom · 1 Bed · 2 Bathroom · Kitchen · Pool · Air Conditioning'
        star={4.64}
        price='₹1,500 / night'
        reviews={47}
      />
    </div>
  );
}

export default SearchPage;
