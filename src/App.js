import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home/Home';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { AuthContextProvider } from './Context/AuthContext/AuthContext';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <AuthContextProvider>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route
                            path='/home'
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </AuthContextProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;
