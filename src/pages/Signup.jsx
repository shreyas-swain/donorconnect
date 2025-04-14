// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Button } from '../components/ui/button';
// import { Input } from '../components/ui/input';
// import { Label } from '../components/ui/label';
// import { useToast } from '../components/ui/use-toast';
// // import Footer from '../components/Footer';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
// //   const { signup } = useAuth();
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (password !== confirmPassword) {
//       toast({
//         variant: "destructive",
//         title: "Passwords do not match",
//         description: "Please ensure both passwords match.",
//       });
//       return;
//     }
    
//     setIsLoading(true);

//     try {
//     //   const success = await signup(email, password);
//       if (success) {
//         toast({
//           title: "Signup successful",
//           description: "Please check your email for verification.",
//         });
//         navigate('/login');
//       }
//     } catch (error) {
//       toast({
//         variant: "destructive",
//         title: "Signup failed",
//         description: error.message || "Failed to sign up. Please try again.",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
//           <div className="text-center">
//             <h2 className="text-3xl font-extrabold text-gray-900">Create your account</h2>
//             <p className="mt-2 text-sm text-gray-600">
//               Already have an account?{' '}
//               <Link to="/login" className="font-medium text-donation-orange hover:text-donation-orange/80">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//           <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="email">Email address</Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="mt-1"
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="mt-1"
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="confirmPassword">Confirm Password</Label>
//                 <Input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="mt-1"
//                 />
//               </div>
//             </div>

//             <Button
//               type="submit"
//               className="w-full bg-donation-orange hover:bg-donation-orange/90"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Creating account...' : 'Create account'}
//             </Button>
//           </form>
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../components/ui/use-toast';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    street: '',
    city: '',
    state: '',
    postalCode: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords do not match",
        description: "Please ensure both passwords match."
      });
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        contactNumber: formData.contactNumber,
        address: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          postalCode: formData.postalCode
        }
      };

      // const success = await signup(payload);
      if (success) {
        toast({
          title: "Signup successful",
          description: "Please check your email for verification."
        });
        navigate('/login');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Signup failed",
        description: error.message || "Failed to sign up. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Create your account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-donation-orange hover:text-donation-orange/80">
                Sign in
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" type="text" required value={formData.firstName} onChange={handleChange} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" type="text" required value={formData.lastName} onChange={handleChange} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" autoComplete="new-password" required value={formData.password} onChange={handleChange} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" required value={formData.confirmPassword} onChange={handleChange} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input id="contactNumber" name="contactNumber" type="text" required value={formData.contactNumber} onChange={handleChange} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="street">Street</Label>
                <Input id="street" name="street" type="text" required value={formData.street} onChange={handleChange} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" type="text" required value={formData.city} onChange={handleChange} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" name="state" type="text" required value={formData.state} onChange={handleChange} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input id="postalCode" name="postalCode" type="text" required value={formData.postalCode} onChange={handleChange} className="mt-1" />
              </div>
            </div>

            <Button type="submit" className="w-full bg-donation-orange hover:bg-donation-orange/90" disabled={isLoading}>
              {isLoading ? 'Creating account...' : 'Create account'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
