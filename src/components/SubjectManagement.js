import React, { useState } from "react";
import { Container, Typography, Button } from "@mui/material";

const SubjectManagement = ({ subjects }) => {
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [components, setComponents] = useState([]);

    // Define subject components based on your requirements.
    const subjectComponents = {
        DMGT: ["Component 1", "Component 2", "Component 3", "Component 4", "End Semester Exam"],
        PP: ["Component A", "Component B", "Component C", "End Semester Exam"],
        SAM: ["Component D", "Component E", "Component F", "End Semester Exam"],
        CO: ["Component G", "Component H", "Component I", "End Semester Exam"],
        DS: ["Component J", "Component K", "Component L", "End Semester Exam"],
        FOE: ["Component M", "Component N"],
        EV: ["Component O", "Component P"],
        FlexiCreditCourse: ["Component Q", "Component R"]
    };

    const fetchComponents = (subject) => {
        setComponents(subjectComponents[subject] || []);
        setSelectedSubject(subject);
    };

    return (
        <Container>
            <Typography variant="h4">Manage Subjects</Typography>
            <Typography variant="h5">Current Subjects:</Typography>
            <ul>
                {subjects.length > 0 ? (
                    subjects.map((subject) => (
                        <li key={subject}>
                            {subject} 
                            <Button onClick={() => fetchComponents(subject)}>View Components</Button>
                        </li>
                    ))
                ) : (
                    <Typography>No subjects available.</Typography>
                )}
            </ul>

            {selectedSubject && (
                <>
                    <Typography variant="h6">Components for {selectedSubject}:</Typography>
                    <ul>
                        {components.map((component) => (
                            <li key={component}>{component}</li>
                        ))}
                    </ul>
                </>
            )}
        </Container>
    );
};

export default SubjectManagement;