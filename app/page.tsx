'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Users, FileText, Shield, LogIn, UserPlus } from 'lucide-react';
import DonorDashboard from '@/components/DonorDashboard';
import HospitalDashboard from '@/components/HospitalDashboard';
import AdminDashboard from '@/components/AdminDashboard';
import LoginForm from '@/components/LoginForm';

export default function Home() {
  const [userRole, setUserRole] = useState<'donor' | 'hospital' | 'admin' | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <LoginForm 
        onLogin={(role) => {
          setUserRole(role);
          setIsLoggedIn(true);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-800">Organ Donation System</h1>
          </div>
          <Button 
            variant="outline"
            onClick={() => {
              setIsLoggedIn(false);
              setUserRole(null);
            }}
          >
            Logout
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {userRole === 'donor' && <DonorDashboard />}
        {userRole === 'hospital' && <HospitalDashboard />}
        {userRole === 'admin' && <AdminDashboard />}
      </main>
    </div>
  );
}
