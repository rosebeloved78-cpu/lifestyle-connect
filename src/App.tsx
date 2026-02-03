import { useState } from 'react'
import { Menu, X, Heart, MapPin } from 'lucide-react'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import DiasporaConnect from './pages/DiasporaConnect'
import ProfileSettings from './pages/ProfileSettings'

type PageType = 'home' | 'signup' | 'dashboard' | 'diaspora' | 'profile-settings'

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userProfile, setUserProfile] = useState<any>(null)

  const handleSignUpComplete = (profile: any) => {
    setUserProfile(profile)
    setCurrentPage('dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-400 via-rose-200 to-rose-100">
      {/* Navigation Header */}
      <nav className="bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <Heart className="w-8 h-8 fill-white" />
              <span className="text-2xl font-bold">Lifestyle Connect</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => setCurrentPage('home')} className="hover:text-rose-100 transition">Home</button>
              {!userProfile && (
                <button onClick={() => setCurrentPage('signup')} className="hover:text-rose-100 transition">Sign Up</button>
              )}
              {userProfile && (
                <>
                  <button onClick={() => setCurrentPage('dashboard')} className="hover:text-rose-100 transition">Dashboard</button>
                  <button onClick={() => setCurrentPage('diaspora')} className="hover:text-rose-100 transition">Diaspora</button>
                  <button onClick={() => setCurrentPage('profile-settings')} className="hover:text-rose-100 transition">Profile Settings</button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-rose-400">
              <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:text-rose-100">Home</button>
              {!userProfile && (
                <button onClick={() => { setCurrentPage('signup'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:text-rose-100">Sign Up</button>
              )}
              {userProfile && (
                <>
                  <button onClick={() => { setCurrentPage('dashboard'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:text-rose-100">Dashboard</button>
                  <button onClick={() => { setCurrentPage('diaspora'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:text-rose-100">Diaspora</button>
                  <button onClick={() => { setCurrentPage('profile-settings'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 hover:text-rose-100">Profile Settings</button>
                </>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main className="min-h-[calc(100vh-64px)]">
        {currentPage === 'home' && <Home onGetStarted={() => setCurrentPage('signup')} />}
        {currentPage === 'signup' && <SignUp onSignUpComplete={handleSignUpComplete} />}
        {currentPage === 'dashboard' && userProfile && <Dashboard userProfile={userProfile} />}
        {currentPage === 'diaspora' && <DiasporaConnect />}
        {currentPage === 'profile-settings' && userProfile && <ProfileSettings userProfile={userProfile} />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                Lifestyle Connect
              </h3>
              <p className="text-gray-300">Connect with faith, connect with purpose.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white">Home</button></li>
                {!userProfile && (
                  <li><button onClick={() => setCurrentPage('signup')} className="hover:text-white">Sign Up</button></li>
                )}
                {userProfile && (
                  <>
                    <li><button onClick={() => setCurrentPage('dashboard')} className="hover:text-white">Dashboard</button></li>
                    <li><button onClick={() => setCurrentPage('profile-settings')} className="hover:text-white">Profile Settings</button></li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Location</h4>
              <p className="text-gray-300 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Zimbabwe
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <p className="text-gray-300">Contact: support@lifestyleconnect.zw</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Lifestyle Connect. All rights reserved. Zimbabwe only.</p>
          </div>
        </div>
      </footer>
    </div>
  )
  
}
