import './assets/styles/reset.css';
import './assets/styles/style.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home.js';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}