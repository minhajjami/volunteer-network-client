import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import './VolunteerRegister.css'
import { UserContext } from '../../App';

const VolunteerRegister = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name } = useParams();
    const [selectedFromDate, setSelectedFromDate] = useState(null);
    const [volunteer, setVolunteer] = useState({ fullName: '', email: '', date: '', description: '', eventName: ''});
    let history = useHistory();

    const handleChange = (e) => {
        const newVolunteer = { ...volunteer };
        newVolunteer[e.target.name] = e.target.value;
        setVolunteer(newVolunteer);
    }

    const handleRegister = (e) => {
        const newVolunteer = { ...volunteer};
        newVolunteer.fullName = loggedInUser.name;
        newVolunteer.email = loggedInUser.email;
        newVolunteer.eventName = name;
        newVolunteer.date=selectedFromDate;

        fetch('https://mysterious-fjord-17091.herokuapp.com/addVolunteer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newVolunteer)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    history.push('/event');
                }
            })
            e.preventDefault();
    }
    return (
        <div className="register-form p-3">
            <Form className="container" onSubmit={handleRegister}>
                <h4>Register as a volunteer</h4>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>FullName</Form.Label>
                    <Form.Control type="text" value={loggedInUser.name} />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control type="text" value={loggedInUser.email} />
                </Form.Group>
                <Form.Group controlId="formGridEmail">
                    <Form.Label style={{ display: 'block' }}>Date</Form.Label>
                    <DatePicker
                        selected={selectedFromDate}
                        onChange={date => setSelectedFromDate(date)}
                        dateFormat='dd/MM/yyyy'
                        minDate={new Date()}
                        placeholderText="Date"
                    ></DatePicker>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="textarea"  name="description" onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Event</Form.Label>
                    <Form.Control type="text" value={name} />
                </Form.Group>
                <button className="btn btn-primary w-100">Register</button>
            </Form>
        </div>
    );
};

export default VolunteerRegister;