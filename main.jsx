import react from 'react';
import reactDOM from 'react-dom/client';
import app from './app';
import movielist from './movielist'; //import the movielist component
import './style.css'; // import your css styles

reactDOM.createRoot(document.getElementById('root')).render(
    <react.StrictMode>
        <movielist/> {/* Render the movielist component */}
    </react.StrictMode>
);