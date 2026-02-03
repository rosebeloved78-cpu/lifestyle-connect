// Add this import
import ProfileSettings from './pages/ProfileSettings'

// Add this state type
type PageType = 'home' | 'signup' | 'dashboard' | 'diaspora' | 'profile-settings'

// Add this to your page content
{currentPage === 'profile-settings' && userProfile && <ProfileSettings userProfile={userProfile} />}
