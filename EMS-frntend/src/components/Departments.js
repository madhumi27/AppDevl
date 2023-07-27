import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Departments.css'; // Create a new CSS file for styling
import Navbar from './navbar';
const departments = [
  {
    name: 'Web Development',
    imageUrl: 'https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg',
    description: 'Responsible for developing and maintaining web applications.'
  },
  {
    name: 'Network Administration',
    description: 'Responsible for managing and maintaining the company\'s network infrastructure.',
    imageUrl: 'https://intellectualpoint.com/wp-content/uploads/2019/04/shutterstock_101000977.jpg'

  },
  {
    name: 'Database Administration',
    description: 'Responsible for managing and maintaining the company\'s databases.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRagZO3HBu_WNRBQKATtbw3EDVl2Hw_-6ZI4DOzEuzbMsr_5QH2ZX_DtP2tKMAV3wCHpw&usqp=CAU'
  },
  {
    name: 'UI/UX Design',
    description: 'Responsible for creating intuitive and user-friendly interfaces.',
    imageUrl: 'https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg',
  },
  {
    name: 'Project Management',
    description: 'Responsible for planning, coordinating, and executing projects.',
    imageUrl: 'https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg'
  },
  {
    name: 'Quality Assurance',
    description: 'Responsible for ensuring the quality of software products.',
    imageUrl: 'https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg'
  },
];


function Departments() {
  const navigate = useNavigate();
  const [userAuthenticated, setUserAuthenticated] = useState(true);

  

  return (
    <div className="departments">
    <Navbar />
      <h1>Departments</h1>

      <div className="card-container">
        {departments.map((department) => (
          <Link to={`/api/empalls/department/${department.name}`} key={department.name}>
          <Card
            key={department.name}
            sx={{
              maxWidth: 345,
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CardMedia
              component="img"
              alt={`Image of ${department.name}`}
              height="140"
              src={department.imageUrl}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {department.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {department.description}
              </Typography>
            </CardContent>
            <CardActions>
            <Link to='/addemp'>
              <Button size="small">
                Add Employee
              </Button>
              </Link>
            </CardActions>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Departments;
