import './assets/styles/reset.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import SignInPage from './pages/signIn/index.js';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignInPage />}/>
            </Routes>
        </BrowserRouter>
    )
}