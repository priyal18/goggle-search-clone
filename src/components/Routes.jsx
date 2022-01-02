import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';

import {Results} from './Results';

export const Routess = () => {
    return (
        <div className="p-6">
            <Routes>
                <Route exact path="/" element={<Navigate to="/search" />}/>
                <Route exact path="/search" element={<Results/>}/>
                <Route exact path="/images" element={<Results/>}/>
                <Route exact path="/videos" element={<Results/>}/>
                <Route exact path="/news" element={<Results/>}/>

            </Routes>
            
        </div>
    )
}