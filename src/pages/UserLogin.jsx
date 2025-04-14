import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from '../components/ui/use-toast'
import axios from 'axios'
import { loginUser } from '../api/api'

const Login = () => {
  const [candidateEmail, setCandidateEmail] = useState('')
  const [candidatePassword, setCandidatePassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const data = await loginUser(candidateEmail, candidatePassword)

      toast({ title: 'Login successful' })
      localStorage.setItem('token', data.tokens?.accessToken)
      navigate('/dashboard')
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Login error',
        description: err.response?.data?.message || 'Login failed',
      })
    } finally {
      setIsLoading(false)
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
                <Label htmlFor="candidateEmail">Email address</Label>
                <Input
                  id="candidateEmail"
                  name="candidateEmail"
                  type="email"
                  autoComplete="email"
                  required
                  value={candidateEmail}
                  onChange={(e) => setCandidateEmail(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="candidatePassword">Password</Label>
                <Input
                  id="candidatePassword"
                  name="candidatePassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={candidatePassword}
                  onChange={(e) => setCandidatePassword(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="#" className="font-medium text-donation-orange hover:text-donation-orange/80">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <Button
              type={'submit'}
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

export default Login


