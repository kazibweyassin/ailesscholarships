"use client";

import React, { useState } from 'react';
import { Bell, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    setError('');
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-black-100 to-white-200  py-16 sm:py-24">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />
        <div className="absolute -right-4 bottom-1/4 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-white">
            <Bell className="h-8 w-8" />
          </div>

          {/* Header */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Start Your Academic Journey Today
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
            Join our thriving community of scholars and unlock exclusive resources, scholarship opportunities, 
            and personalized guidance for your academic success.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className={`block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 
                    ring-inset placeholder:text-gray-400 
                    focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 
                    ${status === 'error' ? 'ring-red-500 focus:ring-red-500' : 'ring-gray-300'}`}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={!email}
                className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm 
                  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 
                  ${!email ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-600'}`}
              >
                Get Started
              </button>
            </div>
          </form>

          {/* Alerts */}
          {status === 'success' && (
            <Alert className="mx-auto mt-6 max-w-xl bg-green-50 text-green-800">
              <AlertDescription>
                Thank you for signing up! Check your email for next steps.
              </AlertDescription>
            </Alert>
          )}
          {status === 'error' && error && (
            <Alert className="mx-auto mt-6 max-w-xl bg-red-50 text-red-800">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Features List */}
          <div className="mx-auto mt-12 max-w-2xl">
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                { title: 'Scholarship Database', description: 'Access thousands of opportunities' },
                { title: 'Expert Guidance', description: 'Get personalized support' },
                { title: 'Resource Library', description: 'Study materials and guides' },
                { title: 'Community Support', description: 'Connect with fellow scholars' }
              ].map((feature) => (
                <div key={feature.title} className="rounded-lg bg-white/50 p-6 text-left">
                  <dt className="font-semibold text-gray-900">{feature.title}</dt>
                  <dd className="mt-1 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Learn More Link */}
          <div className="mt-10">
            <button
              type="button"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
            >
              Learn more about our programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
