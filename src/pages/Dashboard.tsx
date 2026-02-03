import { useState } from 'react'
import { Heart, X, Filter, MapPin, Church, Users } from 'lucide-react'
<button 
  onClick={() => setCurrentPage('profile-settings')}
  className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600"
>
  Edit Profile Details
</button>
interface DashboardProps {
  userProfile: any
}

const mockProfiles = [
  {
    id: 1,
    name: 'Grace',
    age: 26,
    churchName: 'Mount of Olives Worship Centre',
    churchAttendance: 'attend',
    serviceDepartment: 'Choir',
    serviceRole: 'serve',
    bio: 'Passionate about worship and community service. Love hiking and cooking.',
    photo: '👩‍🦰',
  },
  {
    id: 2,
    name: 'Faith',
    age: 24,
    churchName: 'Harvest Chapel International',
    churchAttendance: 'attend',
    serviceDepartment: 'Deaconry',
    serviceRole: 'serve',
    bio: 'Social worker with a heart for helping others. Enjoy reading and prayer.',
    photo: '👩',
  },
  {
    id: 3,
    name: 'Blessing',
    age: 28,
    churchName: 'Living Water Church',
    churchAttendance: 'home',
    bio: 'Dedicated to personal growth and faith. Love nature and good conversation.',
    photo: '👩‍🦱',
  },
]

export default function Dashboard({ userProfile }: DashboardProps) {
  const [profiles] = useState(mockProfiles)
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0)
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [sameChurchOnly, setSameChurchOnly] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [diasporaVisible, setDiasporaVisible] = useState(userProfile.diasporaOptIn || false)

  const currentProfile = profiles[currentProfileIndex]

  const handleLike = () => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1)
    }
  }

  const handlePass = () => {
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(currentProfileIndex + 1)
    }
  }

  const filteredProfiles = sameChurchOnly
    ? profiles.filter(p => p.churchName === userProfile.churchName)
    : profiles

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - User Profile */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{userProfile.gender === 'male' ? '👨' : '👩'}</div>
              <h2 className="text-2xl font-bold text-gray-800">{userProfile.name}</h2>
              <p className="text-gray-600">{userProfile.age} years old</p>
            </div>

            {/* Church Info */}
            {userProfile.churchAttendance === 'attend' && (
              <div className="mb-4 p-4 bg-rose-50 rounded-lg border border-rose-200">
                <div className="flex items-start gap-2">
                  <Church className="w-5 h-5 text-rose-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-700">{userProfile.churchName}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      {userProfile.serviceRole === 'serve' ? `Serves: ${userProfile.serviceDepartment}` : 'Member'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Subscription Badge */}
            <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold text-blue-900">
                {userProfile.subscription === 'free' ? '🎁 Free Tier' : '⭐ ' + userProfile.subscription}
              </p>
            </div>

            {/* Diaspora Settings (for women) */}
            {userProfile.gender === 'female' && userProfile.churchAttendance === 'attend' && (
              <div className="mb-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-xs font-semibold text-gray-600 mb-2">DIASPORA CONNECT</p>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={diasporaVisible}
                    onChange={(e) => setDiasporaVisible(e.target.checked)}
                    className="w-4 h-4 text-purple-600"
                  />
                  <span className="text-sm text-gray-700">Visible to diaspora men</span>
                </label>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Settings
              </button>
              {userProfile.subscription === 'free' && (
                <button
                  onClick={() => setShowUpgrade(true)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition"
                >
                  Upgrade
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Main Content - Profiles */}
        <div className="lg:col-span-3">
          {/* Filter Bar */}
          {userProfile.subscription !== 'free' && (
            <div className="mb-6 p-4 bg-white rounded-lg shadow-lg flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={sameChurchOnly}
                  onChange={(e) => {
                    setSameChurchOnly(e.target.checked)
                    setCurrentProfileIndex(0)
                  }}
                  className="w-4 h-4 text-rose-500"
                  disabled={!userProfile.churchName}
                />
                <span className="text-gray-700 font-semibold">
                  Same church only {userProfile.churchName && `(${userProfile.churchName})`}
                </span>
              </label>
            </div>
          )}

          {/* Profile Card */}
          {currentProfile && filteredProfiles.includes(currentProfile) ? (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="text-center py-16 bg-gradient-to-b from-rose-100 to-pink-100">
                <div className="text-8xl mb-4">{currentProfile.photo}</div>
              </div>

              <div className="p-8">
                <div className="mb-6 border-b border-gray-200 pb-6">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {currentProfile.name}, {currentProfile.age}
                  </h3>

                  {/* Church Info */}
                  {currentProfile.churchAttendance === 'attend' && (
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Church className="w-5 h-5 text-rose-500" />
                      <span className="font-semibold">{currentProfile.churchName}</span>
                    </div>
                  )}

                  {currentProfile.serviceRole === 'serve' && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5 text-rose-500" />
                      <span className="text-sm">Serves: {currentProfile.serviceDepartment}</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">{currentProfile.bio}</p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={handlePass}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition"
                  >
                    <X className="w-6 h-6" />
                    Pass
                  </button>
                  <button
                    onClick={handleLike}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-bold hover:shadow-lg transition"
                  >
                    <Heart className="w-6 h-6 fill-white" />
                    Like
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <p className="text-gray-600 text-lg">No more profiles to browse!</p>
              <button
                onClick={() => setCurrentProfileIndex(0)}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition"
              >
                Start Over
              </button>
            </div>
          )}

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <a href="#diaspora" className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition cursor-pointer">
              <MapPin className="w-8 h-8 text-rose-500 mx-auto mb-2" />
              <p className="font-bold text-gray-800">Diaspora Connect</p>
              <p className="text-sm text-gray-600">Connect with diaspora members</p>
            </a>
            <a href="#messages" className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition cursor-pointer">
              <Heart className="w-8 h-8 text-rose-500 mx-auto mb-2" />
              <p className="font-bold text-gray-800">My Matches</p>
              <p className="text-sm text-gray-600">View your likes</p>
            </a>
          </div>
        </div>
      </div>

      {/* Upgrade Modal */}
      {showUpgrade && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Upgrade to Premium</h3>
            
            <div className="space-y-4 mb-8">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Premium - $9.99/month</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Unlimited messaging</li>
                  <li>✓ Same church filter</li>
                  <li>✓ Video calls</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">VIP - $29.99/month</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ All Premium features</li>
                  <li>✓ Verified badge</li>
                  <li>✓ Priority support</li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => setShowUpgrade(false)}
              className="w-full px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition mb-2"
            >
              Choose Plan
            </button>
            <button
              onClick={() => setShowUpgrade(false)}
              className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}

      {/* Settings Panel */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Settings</h3>
            
            <div className="space-y-4 mb-8">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-3">Account Information</p>
                <p className="text-sm text-gray-600 mb-2">Name: {userProfile.name}</p>
                <p className="text-sm text-gray-600 mb-2">Email: {userProfile.email}</p>
                <p className="text-sm text-gray-600">Member Since: {userProfile.joinDate}</p>
              </div>

              {userProfile.gender === 'female' && userProfile.diasporaOptIn !== null && (
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-3">Diaspora Connect</p>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={diasporaVisible}
                      onChange={(e) => setDiasporaVisible(e.target.checked)}
                      className="w-4 h-4 text-purple-600"
                    />
                    <span className="text-sm text-gray-700">Visible to diaspora men</span>
                  </label>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowSettings(false)}
              className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
