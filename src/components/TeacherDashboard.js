import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const TeacherDashboard = () => {
    return (
        <div>
            <Typography variant="h4">Teacher Dashboard</Typography>
            <Link to="/marks-entry">
                <Button variant="contained">Enter Marks</Button>
            </Link>
            <Link to="/result-summary">
                <Button variant="contained">View Results</Button>
            </Link>
            <Link to="/subject-management">
                <Button variant="contained">Manage Subjects</Button>
            </Link>
        </div>
    );
};

export default TeacherDashboard;