import React from 'react';

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form className="w-full max-w-md p-6 bg-white rounded shadow-md">
                <h1 className="text-xl font-bold mb-4">Login</h1>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full p-2 border rounded"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded"
                        placeholder="Enter your password"
                    />
                </div>
                <button className="w-full bg-blue-500 text-white p-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
}