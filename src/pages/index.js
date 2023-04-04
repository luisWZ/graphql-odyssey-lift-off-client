import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Module } from './module';
import { Track } from './track';
import Tracks from './tracks';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Tracks />} path='/' />
        <Route element={<Track />} path='/track/:trackId' />
        <Route element={<Module />} path='/track/:trackId/module/:moduleId' />
      </Routes>
    </BrowserRouter>
  );
}
