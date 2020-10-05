import React from 'react';
import { Link } from 'react-router-dom';
import './VolunteerEvent.css'

const VolunteerEvent = (props) => {
    const{name,pic}=props.volunteerEvent;
    return (
        <Link to={`/register/${name}`}>
            <div className="col-md-3 img-container mb-3">
                <img style={{ height: '300px' }} src={require(`../../resources/images/${pic}`)} alt="" />
                <h4 className="content">{name}</h4>
            </div>
        </Link>
    );
};

export default VolunteerEvent;