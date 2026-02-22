'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError('');

        const form = e.currentTarget;
        const formElements = form.elements as typeof form.elements & {
            username: HTMLInputElement;
            password: HTMLInputElement;
        };

        const username = formElements.username.value;
        const password = formElements.password.value;

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            setLoading(false);
            setError('Invalid credentials');
            return;
        }

        router.push('/admin/contact');
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <Navbar />
            <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                    Admin Login
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Username
                        </label>
                        <input
                            name="username"
                            placeholder="Enter username"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                        />
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black text-white py-2.5 rounded-lg hover:bg-gray-800 transition disabled:opacity-60"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
}