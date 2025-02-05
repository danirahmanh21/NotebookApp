/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";
import NoteApp from "./component/NoteApp";
import './style/styles.css';
import { BrowserRouter } from "react-router-dom";


const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <NoteApp />
    </BrowserRouter>
);