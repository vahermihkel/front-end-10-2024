import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AdminHome(props) {
    return (
        <div>
             <Button as={Link} to="/native">Native</Button>
             <Button as={Link} to="/motion">Motion</Button>
        </div>
    );
}

export default AdminHome;