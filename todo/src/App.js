import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TodoPage } from './pages/TodoPage/TodoPage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { Layout } from './components/Layout/Layout'

export default function App() {
    return (
    <div className='App'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<TodoPage />} />
                    <Route path='todo' element={<TodoPage />} />
                    <Route path='about' element={<AboutPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
    )
}