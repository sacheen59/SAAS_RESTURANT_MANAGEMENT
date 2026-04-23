'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { tenantLogin, saveSession } from "@/lib/auth";

interface Props{
    host: string,
    tenantName: string
}

export default function TenantAdminLogin({host, tenantName}: Props) {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setLoading(true);
        try{
            const data = await tenantLogin(host, username, password);
            saveSession(data)
            router.push('/tenant/dashboard')
        }catch(err: any){
            setError(err.message)
        }finally{
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-100 p-8">
        <div className="mb-6">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Workspace</p>
          <h1 className="text-xl font-semibold text-gray-900 capitalize">{tenantName}</h1>
          <p className="text-xs text-gray-400 mt-1">{host}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-500 mb-1">Username</label>
            <input type="text" required value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter username" />
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Password</label>
            <input type="password" required value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="*********" />
          </div>
          {error && <p className="text-sm text-red-500 bg-red-50 rounded-lg px-3 py-2">{error}</p>}
          <button type="submit" disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg text-sm transition-colors disabled:opacity-50">
            {loading ? 'Signing in...' : 'Sign in to workspace'}
          </button>
        </form>
      </div>
    </main>
    );
}