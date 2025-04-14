import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link, useNavigate, useParams } from 'react-router-dom'

const CenterLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedCenter, setSelectedCenter] = useState('')
  const [showCenters, setShowCenters] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const centers = ['Hope Center', 'Peace Shelter', 'Sunrise Aid']

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (email === 'admin@example.com') {
      setShowCenters(true)
    } else {
      navigate('/dashboard')
    }
    setIsLoading(false)
  }

  const handleFinalLogin = () => {
    if (selectedCenter) {
      navigate(`/center-login/${selectedCenter}`)
    }
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className="w-1/2 hidden lg:flex flex-col justify-between p-10 bg-donation-orange text-white">
        <div className="text-xl font-bold">CharityConnect</div>
        <div className="flex-grow flex items-center justify-center">
          <img src="/illustrations/charity-illustration.svg" alt="Charity Illustration" className="max-w-full h-auto" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Or{' '}
              <Link to="/signup" className="font-medium text-donation-orange hover:text-donation-orange/80">
                create a new account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1"
                />
              </div>
              {showCenters && (
                <div>
                  <Label htmlFor="center">Select Center</Label>
                  <select
                    id="center"
                    name="center"
                    value={selectedCenter}
                    onChange={(e) => setSelectedCenter(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-donation-orange focus:ring focus:ring-donation-orange/50"
                  >
                    <option value="">Select a center</option>
                    {centers.map((center) => (
                      <option key={center} value={center}>{center}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="#" className="font-medium text-donation-orange hover:text-donation-orange/80">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <Button
              type={showCenters ? 'button' : 'submit'}
              onClick={showCenters ? handleFinalLogin : undefined}
              className="w-full bg-donation-orange hover:bg-donation-orange/90"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CenterLogin;
