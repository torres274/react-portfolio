import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from '../pages/Main'
import Contact from '../pages/Contact'
import Success from '../pages/Success'
import NotFound from '../pages/NotFound'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/success" element={<Success />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
