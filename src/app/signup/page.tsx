import SignupForm from '@/components/SignupForm';

export default function SignUpPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Sign Up</h1>
      <p className="text-gray-600 mt-4">Create your account to access fully funded scholarships.</p>
      <SignupForm /> {/* Render the SignupForm component here */}
    </main>
  );
}
