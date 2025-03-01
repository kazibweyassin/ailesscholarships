'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth0 } from '@auth0/nextjs-auth0';

const Login = () => {
  const {loginWithRedirect} = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };




  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here, call your backend or Auth0 login logic
    // For example, after successful login:
    // router.push('/dashboard');

    // Reset error if no error
    setError('');
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
          onClick={handleLogin}
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-700">
          Don't have an account?{' '}
          <span
            className="text-purple-600 cursor-pointer"
            onClick={() => router.push('/signup')}
          >
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
