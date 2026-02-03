import { useState } from 'react'
import { Heart, Settings, Video, MessageCircle, Zap } from 'lucide-react'
import ProfileSettings from './ProfileSettings'

interface DashboardProps {
  userProfile: any
  onProfileUpdate: (profile: any) => void
}

export default function Dashboard({ userProfile, onProfileUpdate }: DashboardProps) {
  const [showProfileSettings, setShowProfileSettings] = useState(false)
  const [currentProfile, setCurrentProfile] = useState(userProfile)
  const [currentBrowseIndex, setCurrentBrowseIndex] = useState(0)
  const [subscription, setSubscription] = useState('free')

  // Sample profiles to browse
  const browseProfiles = [
    {
      id: 1,
      name: 'Faith M.',
      age: 28,
      gender: 'female',
      churchName: 'Grace Assembly',
      churchAttendance: 'attend',
      serviceRole: 'serve',
      serviceDepartment: 'Choir',
      bio: 'Love singing and serving God. Looking for someone who shares my faith.',
      aboutMe: 'Passionate about music and ministry',
      maritalStatus: 'never-married',
      occupation: 'Teacher',
      children: '0',
    },
    {
      id: 2,
      name: 'David C.',
      age: 32,
      gender: 'male',
      churchName: 'Mount Zion Church',
      churchAttendance: 'attend',
      serviceRole: 'serve',
      serviceDepartment: 'Usher',
      bio: 'Business owner, devoted Christian. Family oriented.',
      aboutMe: 'Entrepreneur with strong faith',
      maritalStatus: 'never-married',
      occupation: 'Business Owner',
      children: '0',
    },
    {
      id: 3,
      name: 'Grace S.',
      age: 26,
      gender: 'female',
      churchName: 'Resurrection Church',
      churchAttendance: 'attend',
      serviceRole: 'member',
      bio: 'Nurse, love helping people. Seeking genuine connection.',
      aboutMe: 'Healthcare professional with big heart',
      maritalStatus: 'never-married',
      occupation: 'Nurse',
      children: '0',
    },
  ]

  const handleProfileSettingsSave = (updatedProfile: any) => {
    setCurrentProfile(updatedProfile)
    onProfileUpdate(updatedProfile)
    setShowProfileSettings(false)
  }

  const handleLike = () => {
    setCurrentBrowseIndex((prev) => (prev + 1) % browseProfiles.length)
  }

  const handlePass = () => {
    setCurrentBrowseIndex((prev) => (prev + 1) % browseProfiles.length)
  }

  const currentBrowsingProfile = browseProfiles[currentBrowseIndex]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT PANEL - User Profile */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                {currentProfile.name?.charAt(0)}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{currentProfile.name}</h2>
              <p className="text-gray-600">{currentProfile.age} years old</p>
            </div>

            {/* Basic Info */}
            <div className="space-y-3 mb-6 border-b pb-6">
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Gender</p>
                <p className="text-gray-800 font-semibold capitalize">{currentProfile.gender}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold">Email</p>
                <p className="text-gray-800 text-sm">{currentProfile.email}</p>
              </div>
            </div>

            {/* Church Info */}
            {currentProfile.churchAttendance === 'attend' && (
              <div className="space-y-3 mb-6 border-b pb-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Church</p>
                  <p className="text-gray-800 font-semibold">{currentProfile.churchName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Role</p>
                  <p className="text-gray-800 font-semibold capitalize">{currentProfile.serviceRole}</p>
                </div>
                {currentProfile.serviceRole === 'serve' && (
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Department</p>
                    <p className="text-gray-800 font-semibold">{currentProfile.serviceDepartment}</p>
                  </div>
                )}
              </div>
            )}

            {/* Extended Profile Info */}
            <div className="space-y-3 mb-6 border-b pb-6">
              {currentProfile.aboutMe && (
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">About Me</p>
                  <p className="text-gray-800 text-sm">{currentProfile.aboutMe}</p>
                </div>
              )}
              {currentProfile.occupation && (
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Occupation</p>
                  <p className="text-gray-800 font-semibold">{currentProfile.occupation}</p>
                </div>
              )}
              {currentProfile.maritalStatus && (
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Marital Status</p>
                  <p className="text-gray-800 font-semibold capitalize">{currentProfile.maritalStatus.replace('-', ' ')}</p>
                </div>
              )}
              {currentProfile.children && (
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Children</p>
                  <p className="text-gray-800 font-semibold">{currentProfile.children}</p>
                </div>
              )}
            </div>

            {/* Edit Profile Button */}
            <button
              onClick={() => setShowProfileSettings(true)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition"
            >
              <Settings className="w-5 h-5" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* CENTER PANEL - Browse Profiles */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-5xl font-bold">
                  {currentBrowsingProfile.name?.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{currentBrowsingProfile.name}, {currentBrowsingProfile.age}</h3>
                <p className="text-gray-600 mt-2">{currentBrowsingProfile.churchName}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold mb-1">About</p>
                  <p className="text-gray-800">{currentBrowsingProfile.bio}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Church</p>
                    <p className="text-gray-800 font-semibold text-sm">{currentBrowsingProfile.churchName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Role</p>
                    <p className="text-gray-800 font-semibold text-sm capitalize">{currentBrowsingProfile.serviceRole}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-4">
                <button
                  onClick={handlePass}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition"
                >
                  Pass
                </button>
                <button
                  onClick={handleLike}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition"
                >
                  <Heart className="w-5 h-5 fill-white" />
                  Like
                </button>
              </div>

              {/* Diaspora Connect Link */}
              <div className="text-center pt-4 border-t">
                <p className="text-sm text-gray-600 mb-2">Looking for diaspora connections?</p>
                <a href="#diaspora" className="text-rose-500 font-semibold hover:text-rose-600">
                  Visit Diaspora Connect →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - Subscriptions */}
        <div className="lg:col-span-1">
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Your Subscription</h3>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
                <p className="text-sm text-gray-600">Current Plan</p>
                <p className="text-2xl font-bold text-green-600 capitalize">{subscription}</p>
              </div>

              {/* Subscription Options */}
              <div className="space-y-3">
                <div
                  onClick={() => setSubscription('free')}
                  className={`p-4 rounded-lg cursor-pointer transition border-2 ${
                    subscription === 'free'
                      ? 'border-rose-500 bg-rose-50'
                      : 'border-gray-200 hover:border-rose-300'
                  }`}
                >
                  <p className="font-bold text-gray-800">Free</p>
                  <p className="text-sm text-gray-600">Basic browsing</p>
                </div>

                <div
                  onClick={() => setSubscription('premium')}
                  className={`p-4 rounded-lg cursor-pointer transition border-2 ${
                    subscription === 'premium'
                      ? 'border-rose-500 bg-rose-50'
                      : 'border-gray-200 hover:border-rose-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-bold text-gray-800">Premium</p>
                      <p className="text-sm text-gray-600">Enhanced features</p>
                    </div>
                    <Zap className="w-5 h-5 text-yellow-500" />
                  </div>
                  <p className="font-bold text-rose-500">$9.99/month</p>
                  <ul className="text-xs text-gray-600 mt-2 space-y-1">
                    <li>✓ Same church filter</li>
                    <li>✓ Unlimited likes</li>
                    <li>✓ See who liked you</li>
                  </ul>
                </div>

                <div
                  onClick={() => setSubscription('vip')}
                  className={`p-4 rounded-lg cursor-pointer transition border-2 ${
                    subscription === 'vip'
                      ? 'border-rose-500 bg-rose-50'
                      : 'border-gray-200 hover:border-rose-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-bold text-gray-800">VIP</p>
                      <p className="text-sm text-gray-600">All premium + more</p>
                    </div>
                    <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                  </div>
                  <p className="font-bold text-rose-500">$29.99/month</p>
                  <ul className="text-xs text-gray-600 mt-2 space-y-1">
                    <li>✓ All Premium features</li>
                    <li>✓ Verified badge</li>
                    <li>✓ Priority matches</li>
                    <li>✓ Video calls</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Same Church Filter */}
            {subscription !== 'free' && (
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg shadow-lg p-6 border border-rose-200">
                <h4 className="font-bold text-gray-800 mb-3">Premium Feature</h4>
                <p className="text-sm text-gray-700 mb-4">
                  Filter matches by your church for deeper connections with people who share your faith community.
                </p>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition">
                  Enable Same Church Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile Settings Modal */}
      {showProfileSettings && (
        <ProfileSettings
          userProfile={currentProfile}
          onClose={() => setShowProfileSettings(false)}
          onSave={handleProfileSettingsSave}
        />
      )}
    </div>
  )
}

