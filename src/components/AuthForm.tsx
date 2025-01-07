import React, { useState } from 'react';

interface AuthFormProps {
    mode: 'login' | 'signup';
    onSubmit: (data: { email: string; password: string }) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ email, password });
    };

    return (
        <form
            className="w-full max-w-md p-6 bg-white rounded shadow-md"
            onSubmit={handleSubmit}
        >
            <h1 className="text-xl font-bold mb-4">
                {mode === 'login' ? 'Login' : 'Sign Up'}
            </h1>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                    type="email"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                    type="password"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="w-full bg-blue-500 text-white p-2 rounded">
                {mode === 'login' ? 'Login' : 'Sign Up'}
            </button>
        </form>
    );
};

export default AuthForm;