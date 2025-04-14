import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/text-area'

const CenterRegistrationForm = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    contactInfo: {
      email: '',
      phone: '',
      address: '',
    },
    website: '',
    verification: {
      documents: [null, null]
    },
    location: {
      longitude: '',
      latitude: ''
    }
  })

  const handleChange = (e, field, nested = null) => {
    const value = e.target.value
    if (nested) {
      setForm({ ...form, [nested]: { ...form[nested], [field]: value } })
    } else {
      setForm({ ...form, [field]: value })
    }
  }

  const handleFileChange = (e, index) => {
    const files = [...form.verification.documents]
    files[index] = e.target.files[0]
    setForm({ ...form, verification: { documents: files } })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8 space-y-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold">Register Charitable Center</h2>

      <div>
        <Label>Name</Label>
        <Input value={form.name} onChange={(e) => handleChange(e, 'name')} required />
      </div>

      <div>
        <Label>Description</Label>
        <Textarea value={form.description} onChange={(e) => handleChange(e, 'description')} required />
      </div>

      <div>
        <Label>Email</Label>
        <Input value={form.contactInfo.email} onChange={(e) => handleChange(e, 'email', 'contactInfo')} required />
      </div>

      <div>
        <Label>Phone</Label>
        <Input value={form.contactInfo.phone} onChange={(e) => handleChange(e, 'phone', 'contactInfo')} required />
      </div>

      <div>
        <Label>Address</Label>
        <Textarea value={form.contactInfo.address} onChange={(e) => handleChange(e, 'address', 'contactInfo')} required />
      </div>

      <div>
        <Label>Website</Label>
        <Input value={form.website} onChange={(e) => handleChange(e, 'website')} />
      </div>

      <div>
        <Label>Verification Document 1</Label>
        <Input type="file" accept=".pdf,.jpg,.png" onChange={(e) => handleFileChange(e, 0)} required />
      </div>

      <div>
        <Label>Verification Document 2</Label>
        <Input type="file" accept=".pdf,.jpg,.png" onChange={(e) => handleFileChange(e, 1)} required />
      </div>

      <div>
        <Label>Longitude</Label>
        <Input value={form.location.longitude} onChange={(e) => handleChange(e, 'longitude', 'location')} required />
        <Label>Latitude</Label>
        <Input value={form.location.latitude} onChange={(e) => handleChange(e, 'latitude', 'location')} required />
      </div>

      <Button type="submit" className="bg-donation-orange hover:bg-donation-orange/90 w-full">
        Submit
      </Button>
    </form>
  )
}

export default CenterRegistrationForm;