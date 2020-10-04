import React from "react";
import Banner from "../components/Banner";
import HomeCard from "../components/HomeCard";
import "./home.css";

function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className='home__section'>
        <HomeCard
          src='https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720'
          title='Online Experiences'
          description='Unique activities we can do together, lead by a world of hosts'
        />
        <HomeCard
          src='https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720'
          title='Unique stays'
          description='Spaces that are more than just a place to sleep'
        />
        <HomeCard
          src='https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720'
          title='Entire homes'
          description='Comfortable private places, with room for friends or family'
        />
      </div>
      <div className='home__section'>
        <HomeCard
          src='https://a0.muscache.com/im/pictures/c03a23b4-47a4-45aa-a5bd-901170271831.jpg?im_w=720'
          title='Farm Stay · Daman'
          description='Sunset Bliss'
          price='₹13,977 / night'
        />
        <HomeCard
          src='https://a0.muscache.com/im/pictures/698e8d96-b882-4201-8753-612d0faf8a0f.jpg?im_w=720'
          title='Entire villa · Guhagar'
          description='Koyari Vacation Home'
          price='₹4,977 / night'
        />
        <HomeCard
          src='https://a0.muscache.com/im/pictures/3fead9af-3ed1-46c0-b6e9-b7248cf9aff4.jpg?im_w=720'
          title='Farm stay · Damkhind'
          description='Amchi Wadi'
          price='₹1,200 / night'
        />
      </div>
    </div>
  );
}

export default Home;
