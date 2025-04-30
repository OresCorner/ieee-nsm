import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import IEEE_NSM from './components/IEEE_NSM';
import Events from './components/events/EventsPage';
import About from './components/about/AboutPage';
function App() {
    return( 
        <Router>
            <Routes>
                <Route path="/" element={<IEEE_NSM/>}/>
                <Route path="/events" element={<Events/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </Router>
    );
}
export default App;