import { useState } from 'react'

interface ProfileSettingsProps {
  userProfile: any
}

export default function ProfileSettings({ userProfile }: ProfileSettingsProps) {
  const [profileData, setProfileData] = useState({
    aboutMe: userProfile?.aboutMe || '',
    maritalStatus: userProfile?.maritalStatus || '',
    occupation: userProfile?.occupation || '',
    children: userProfile?.children || ''
  });

  const handleSave = () => {
    // In a real app, you'd save to database
    console.log('Profile updated:', profileData);
    // Go back to dashboard after saving
    window.history.back();
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">About Me</label>
            <textarea
              value={profileData.aboutMe}
              onChange={(e) => handleInputChange('aboutMe', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Tell us more about yourself, your faith journey, interests, and what you're looking for..."
              rows={4}
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Marital Status</label>
            <select
              value={profileData.maritalStatus}
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
              value={profileData.occupation}
              onChange={(e) => handleInputChange('occupation', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your profession"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Number of Children</label>
            <input
              type="number"
              value={profileData.children}
              onChange={(e) => handleInputChange('children', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              min="0"
              max="10"
              placeholder="0"
            />
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={handleSave}
              className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600"
            >
              Save Changes
            </button>
            <button 
              onClick={() => window.history.back()}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
