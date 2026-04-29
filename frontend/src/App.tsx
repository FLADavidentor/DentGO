import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './components/layout/MainLayout';
import './styles/variables.css';
import './styles/reset.css';

const PatientDashboard = lazy(() => import('./pages/Patient/PatientDashboard'));
const StudentDashboard = lazy(() => import('./pages/Student/StudentDashboard'));
const AdminDashboard = lazy(() => import('./pages/Admin/AdminDashboard'));
const Login = lazy(() => import('./pages/Auth/Login'));
const DevPage = lazy(() => import('./pages/DevPage'));

const Loading = () => <div style={{ padding: '20px' }}>Cargando...</div>;

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dev" element={<DevPage />} />
            
            {/* Patient Routes */}
            <Route path="/patient" element={
              <MainLayout>
                <PatientDashboard />
              </MainLayout>
            } />

            {/* Student Routes */}
            <Route path="/student" element={
              <MainLayout>
                <StudentDashboard />
              </MainLayout>
            } />

            {/* Admin Routes */}
            <Route path="/admin" element={
              <MainLayout>
                <AdminDashboard />
              </MainLayout>
            } />

            {/* Default Route */}
            <Route path="/" element={<Navigate to="/patient" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
