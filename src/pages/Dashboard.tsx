import { useState, useEffect } from 'react'
import { Heart, MapPin, Calendar, Users, Edit } from 'lucide-react'

interface DashboardProps {
  userProfile: any
}

export default function Dashboard({ userProfile }: DashboardProps) {
  const [profileEdit, setProfileEdit] = useState({
    aboutMe: userProfile?.aboutMe || '',
    maritalStatus: userProfile?.maritalStatus || '',
    occupation: userProfile?.occupation || '',
    children: userProfile?.children || ''
  });
  
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveProfile = () => {
    // In a real app, you'd save this to a database
    // For now, we'll just update the local state
    console.log('Profile updated:', profileEdit);
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileEdit(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition"
          >
            <Edit className="w-4 h-4" />
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Basic Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500" />
              Basic Information
            </h2>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600"><strong>Name:</strong> {userProfile?.name}</p>
              <p className="text-gray-600"><strong>Age:</strong> {userProfile?.age}</p>
              <p className="text-gray-600"><strong>Gender:</strong> {userProfile?.gender}</p>
              <p className="text-gray-600"><strong>Email:</strong> {userProfile?.email}</p>
            </div>

            {userProfile?.churchAttendance && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  <strong>Church Attendance:</strong> {userProfile.churchAttendance === 'attend' ? 'Attends church' : 'Prays from home'}
                </p>
                {userProfile.churchName && (
                  <p className="text-gray-600"><strong>Church Name:</strong> {userProfile.churchName}</p>
                )}
                {userProfile.serviceRole && (
                  <p className="text-gray-600">
                    <strong>Service Role:</strong> {userProfile.serviceRole === 'serve' ? 'Serves in church' : 'Church member'}
                  </p>
                )}
                {userProfile.serviceDepartment && (
                  <p className="text-gray-600"><strong>Service Department:</strong> {userProfile.serviceDepartment}</p>
                )}
              </div>
            )}
          </div>

          {/* Additional Profile Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Users className="w-5 h-5 text-rose-500" />
              Additional Details
            </h2>
            
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">About Me</label>
                  <textarea
                    value={profileEdit.aboutMe}
                    onChange={(e) => handleInputChange('aboutMe', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Tell us more about yourself, your faith journey, interests, and what you're looking for..."
                    rows={4}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Marital Status</label>
                  <select
                    value={profileEdit.maritalStatus}
                    onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select</option>
                    <option value="never-married">Never been married</option>
                    <option value="divorced">Divorced</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Occupation</label>
                  <input
                    type="text"
                    value={profileEdit.occupation}
                    onChange={(e) => handleInputChange('occupation', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Your profession"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Number of Children</label>
                  <input
                    type="number"
                    value={profileEdit.children}
                    onChange={(e) => handleInputChange('children', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    min="0"
                    max="10"
                    placeholder="0"
                  />
                </div>
                
                <button 
                  onClick={handleSaveProfile}
                  className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Save Profile
                </button>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>About Me:</strong> {profileEdit.aboutMe || 'Not provided yet'}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Marital Status:</strong> {profileEdit.maritalStatus || 'Not provided yet'}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Occupation:</strong> {profileEdit.occupation || 'Not provided yet'}
                </p>
                <p className="text-gray-600">
                  <strong>Children:</strong> {profileEdit.children || 'Not provided yet'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Subscription Info */}
        <div className="mt-8 p-4 bg-rose-50 rounded-lg border border-rose-200">
          <h3 className="text-lg font-bold text-rose-800 mb-2">Subscription</h3>
          <p className="text-rose-700">
            Current Plan: <strong>{userProfile?.subscription || 'Free'}</strong>
          </p>
          {userProfile?.diasporaOptIn && (
            <p className="text-rose-700 mt-2">
              ✅ Visible in Diaspora Connect
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
