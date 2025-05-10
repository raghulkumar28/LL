import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { AdminAuthProvider } from './context/AdminAuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import CheckoutPage from './pages/CheckoutPage';
import AdminLoginPage from './pages/admin/LoginPage';
import AdminDashboardPage from './pages/admin/DashboardPage';
import ProtectedRoute from './components/admin/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <AdminAuthProvider>
            <Router>
              <Routes>
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute>
                      <AdminDashboardPage />
                    </ProtectedRoute>
                  }
                />
                
                {/* Public Routes */}
                <Route
                  path="*"
                  element={
                    <div className="min-h-screen flex flex-col bg-brand-darkBlue-900 text-white">
                      <Header />
                      <main className="flex-grow">
                        <Routes>
                          <Route path="/" element={<HomePage />} />
                          <Route path="/products" element={<ProductsPage />} />
                          <Route path="/product/:id" element={<ProductDetailPage />} />
                          <Route path="/about" element={<AboutPage />} />
                          <Route path="/contact" element={<ContactPage />} />
                          <Route path="/login" element={<LoginPage />} />
                          <Route path="/register" element={<RegisterPage />} />
                          <Route path="/track-order" element={<OrderTrackingPage />} />
                          <Route path="/checkout" element={<CheckoutPage />} />
                        </Routes>
                      </main>
                      <Footer />
                    </div>
                  }
                />
              </Routes>
            </Router>
          </AdminAuthProvider>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;