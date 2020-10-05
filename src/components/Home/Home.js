import React from 'react';
import VolunteerEvent from '../VolunteerEvent/VolunteerEvent';

const VolunteerEvents=[
    {
        name:'Clean Water', 
        pic:'cleanWater.png'
    },
    {
        name:'Food Charity', 
        pic:'foodCharity.png'
    },
    {
        name:'Animal Shelter', 
        pic:'animalShelter.png'
    },
    {
        name:'Share Books', 
        pic:'libraryBooks.png'
    },
    {
        name:'Bird House', 
        pic:'birdHouse.png'
    },
    {
        name:'River Clean', 
        pic:'riverClean.png'
    },
    {
        name:'Child Support', 
        pic:'childSupport.png'
    },
    {
        name:'Music Lessons', 
        pic:'musicLessons.png'
    },
    {
        name:'Cloth Swap ', 
        pic:'clothSwap.png'
    },
    {
        name:'ITHelp', 
        pic:'ITHelp.png'
    },
    {
        name:'New Books', 
        pic:'newBooks.png'
    },
    {
        name:'Drive Safety', 
        pic:'driveSafety.png'
    }
]

const Home = () => {
    return (
        <div className="container">
            <div className="row">
            {
                VolunteerEvents.map(volunteerEvent=><VolunteerEvent volunteerEvent={ volunteerEvent} ></VolunteerEvent>)
            } 
            </div>       
        </div>
    );
};

export default Home;