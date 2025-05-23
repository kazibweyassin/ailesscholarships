'use client'; // Mark the file as a Client Component

import React, { useState, FormEvent } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupForm: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:1337/api/auth/local/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: `${firstName} ${lastName}`,
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData?.message?.[0]?.messages?.[0]?.message || 'Error signing up!');
        return;
      }

      alert('Signup successful!');
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="flex justify-center items-center mt-6 gap-4">
          <button
            onClick={() => loginWithRedirect({ authorizationParams: { connection: 'google' } })}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => loginWithRedirect({ authorizationParams: { connection: 'facebook' } })}
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Sign in with Facebook
          </button>
        </div>

        <div className="mt-4 text-center">
          <a href="/signin" className="text-blue-500 hover:underline">
            Already have an account? Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
