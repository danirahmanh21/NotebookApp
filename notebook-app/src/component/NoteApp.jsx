/* eslint-disable no-unused-vars */
import React from "react";
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPages";
import { Route, Routes } from "react-router-dom";
import ArchivedPage from "../pages/ArchivedPages";
import DetailPageWrapper from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";

function NoteApp() {
    return (
        <div className="note-app">
            <header  className="note-app__header">
                <h1>Aplikasi Catatan</h1>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add" element={<AddPage />} />
                    <Route path="/archived" element = {<ArchivedPage />} />
                    <Route path="/notes/:id" element={<DetailPageWrapper />} />
                    <Route path="*" element={<NotFoundPage />}/>
                </Routes>
            </main>
        </div>
    );
}


export default NoteApp;
