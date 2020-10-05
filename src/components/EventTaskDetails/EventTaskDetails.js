import React from 'react';
import './EventTaskDetails.css';

const EventTaskDetails = ({ task, handleDelete }) => {
    return (
        <div className="col-md-6 mt-3">
            <div className="row single-event">
                <div className="col-md-4">
                    <img src={task.eventImg || "https://img.freepik.com/free-vector/volunteers-with-charity-icons-illustration_53876-43180.jpg?size=626&ext=jpg"} className=" ml-5 mt-3 w-50" alt="img" />
                </div>
                <div className="col-md-6 mt-3">
                    <div className="">
                        <div><h5>{task.eventName}</h5>
                            <p>{(new Date(task.date)).toDateString('dd/MM/yyyy')}</p></div>
                        <div className="text-right">
                            <button className="btn btn-primary" onClick={() => handleDelete(task._id)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventTaskDetails;