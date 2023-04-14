import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import MainRouter from './MainRouter';

import { 
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";

const router = createBrowserRouter (MainRouter);

 createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
 );
