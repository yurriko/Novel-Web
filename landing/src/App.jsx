import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import News from './pages/News'; // Убедись, что этот компонент импортирован
import Main from './pages/Main';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="/news" element={<News />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;

