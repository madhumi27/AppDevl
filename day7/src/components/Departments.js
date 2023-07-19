import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Departments.css';
import { departments } from './departmentData';
import Navbar from './navbar';
import Footer from './Footer';
function Departments() {
  const navigate = useNavigate();
  const [userAuthenticated, setUserAuthenticated] = useState(true);

  
  const handleAddEmployee = (department) => {
    navigate(`/departments/${department.id}`, { state: { department } });
  };
  
  return (
    <div className="departments">
    <Navbar/>
      <h1>Departments</h1>

      <div className="card-container">
        {departments.map((department) => (
          <Link to={`/departments/${department.id}`} key={department.id}>
            <Card
              sx={{ maxWidth: 345 ,
               
                
              }}
            >
              <CardMedia
                component="img"
                alt="Department Image"
                height="140"
                // Replace with your own image source
                image={department.imageUrl}
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  {department.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {department.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleAddEmployee(department)}>
                  Add Employee
                </Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </div>

      {userAuthenticated && <Footer />}
    </div>
  );
}

export default Departments;
