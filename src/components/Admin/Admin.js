import React, { useEffect, useState } from 'react';

const Admin = () => {

    const [volunteerList, setVolunteerList] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        fetch('https://mysterious-fjord-17091.herokuapp.com/getVolunteers')
            .then(res => res.json())
            .then(result => {
                setVolunteerList(result);
                setIsDeleted(false);
            })
    }, [isDeleted])

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
        <div className="mt-3">
            <table className="table table-striped volunteer">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Registration Date</th>
                        <th scope="col">Volunteer list</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        volunteerList && volunteerList.map(item =>
                            <tr key={item._id}>
                                <th>{item.fullName}</th>
                                <td>{item.email}</td>
                                <td>{item.date}</td>
                                <td>{item.eventName}</td>
                                <td><img className="w-50" onClick={() => handleDelete(item._id)} src="https://icon-library.com/images/delete-icon/delete-icon-4.jpg" alt="delete" height="40px" width="5px" /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Admin;