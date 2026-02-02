import { Heart, Users, Lock, Video, MapPin, Award } from 'lucide-react'

interface HomeProps {
  onGetStarted: () => void
}

export default function Home({ onGetStarted }: HomeProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Connect with Faith, Connect with Purpose
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Lifestyle Connect is Zimbabwe's premier Christian dating and lifestyle platform. 
          Meet meaningful connections with shared values and faith.
        </p>
        <button
          onClick={onGetStarted}
          className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition"
        >
          Get Started Free
        </button>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Heart className="w-12 h-12 text-rose-500 mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-800">Faith-Based Matching</h3>
          <p className="text-gray-600">Connect based on church attendance, service roles, and shared Christian values.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Video className="w-12 h-12 text-rose-500 mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-800">Video Calls & Messaging</h3>
          <p className="text-gray-600">Safely connect with video calls and instant messaging on our secure platform.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Lock className="w-12 h-12 text-rose-500 mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-800">Safe & Secure</h3>
          <p className="text-gray-600">Your privacy and safety are our top priority. All profiles are verified.</p>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-white rounded-lg shadow-lg p-12 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Lifestyle Connect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <Users className="w-8 h-8 text-rose-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2 text-gray-800">Zimbabwe Community</h3>
              <p className="text-gray-600">Connect only with members living in Zimbabwe.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Award className="w-8 h-8 text-rose-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2 text-gray-800">Church-Based Network</h3>
              <p className="text-gray-600">Filter matches by your church for deeper connections.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin className="w-8 h-8 text-rose-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2 text-gray-800">Diaspora Connect</h3>
              <p className="text-gray-600">For Zimbabweans abroad looking for connections back home.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Heart className="w-8 h-8 text-rose-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-2 text-gray-800">Meaningful Relationships</h3>
              <p className="text-gray-600">Built on shared faith and values, not just swiping.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Simple Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-100 p-6">
              <h3 className="text-2xl font-bold text-gray-800">Free</h3>
              <p className="text-4xl font-bold text-rose-500 mt-2">$0</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Create profile</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Browse profiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Limited messaging</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Optional Diaspora signup</span>
                </li>
              </ul>
              <button className="w-full mt-6 bg-gray-200 text-gray-800 py-2 rounded font-bold hover:bg-gray-300 transition">
                Current
              </button>
            </div>
          </div>

          {/* Premium Tier */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-rose-500">
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-6">
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="text-4xl font-bold mt-2">$9.99</p>
              <p className="text-sm mt-2">per month</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">All Free features</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Unlimited messaging</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Same church filter</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Video calls</span>
                </li>
              </ul>
              <button className="w-full mt-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 rounded font-bold hover:shadow-lg transition">
                Upgrade
              </button>
            </div>
          </div>

          {/* VIP Tier */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-yellow-100 p-6">
              <h3 className="text-2xl font-bold text-gray-800">VIP</h3>
              <p className="text-4xl font-bold text-yellow-600 mt-2">$29.99</p>
              <p className="text-sm text-gray-600 mt-2">per month</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">All Premium features</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Verified badge</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600">Featured profile</span>
                </li>
              </ul>
              <button className="w-full mt-6 bg-yellow-600 text-white py-2 rounded font-bold hover:bg-yellow-700 transition">
                Go VIP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg shadow-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Match?</h2>
        <p className="text-lg mb-8">Join thousands of Zimbabweans looking for meaningful connections.</p>
        <button
          onClick={onGetStarted}
          className="bg-white text-rose-600 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition"
        >
          Sign Up Free
        </button>
      </div>
    </div>
  )
}
