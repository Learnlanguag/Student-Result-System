import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import TeacherDashboard from './components/TeacherDashboard';
import MarksEntry from './components/MarksEntry';
import ResultSummary from './components/ResultSummary';
import SubjectManagement from './components/SubjectManagement';
import './App.css';

const App = () => {
    const [token, setToken] = useState('');
    const [userType, setUserType] = useState('');
    const [teacherId, setTeacherId] = useState('');
    const [subjects, setSubjects] = useState([]);

    // Mock login function to authenticate user
    const handleLogin = async (username, password) => {
        // Mock teacher data for authentication
        const teachers = [
            { id: '1', username: 'teacher1', password: 'password1', subjects: ['DMGT', 'CO'] },
            { id: '2', username: 'teacher2', password: 'password2', subjects: ['PP', 'SAM'] },
            { id: '3', username: 'teacher3', password: 'password3', subjects: ['DS', 'FOE'] },
            { id: '4', username: 'teacher4', password: 'password4', subjects: ['EV', 'Flexi credit course'] },
        ];

        const teacher = teachers.find(t => t.username === username && t.password === password);
        
        if (teacher) {
            setToken('mock-token'); // Simulate token
            setUserType('teacher');
            setTeacherId(teacher.id);
            setSubjects(teacher.subjects); // Set subjects for the logged-in teacher
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <Router>
            <div className="container">
                <Routes>
                    {!token ? (
                        <Route path="/" element={<Login handleLogin={handleLogin} />} />
                    ) : (
                        <>
                            <Route path="/dashboard" element={<TeacherDashboard />} />
                            <Route path="/marks-entry" element={<MarksEntry />} />
                            <Route path="/result-summary" element={<ResultSummary />} />
                            <Route path="/subject-management" 
                                   element={<SubjectManagement subjects={subjects} />} />
                        </>
                    )}
                </Routes>
            </div>
        </Router>
    );
};

export default App;