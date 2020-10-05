import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import EventTaskDetails from '../EventTaskDetails/EventTaskDetails';

const EventTask = () => {
    const [loggedInUser] = useContext(UserContext);
    const [eventTasks, setEventTasks] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        fetch('https://mysterious-fjord-17091.herokuapp.com/getEventsByUser?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result=> {
                setEventTasks(result);
                setIsDeleted(false);
            })
    }, [loggedInUser.email, isDeleted]);

    const handleDelete = (id) => {
        fetch(`https://mysterious-fjord-17091.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((result => {
                if (result) {
                    setIsDeleted(true);
                }
            }));
    }

    return (
        <section className="event-list">
            <div className="row">
                {
                   eventTasks && eventTasks.map(task=><EventTaskDetails task={task}  handleDelete={handleDelete}></EventTaskDetails>)
                }
            </div>
        </section>
    );
};

export default EventTask;