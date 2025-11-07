'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Heart, FileText, Shield, CheckCircle, Clock } from 'lucide-react';

export default function DonorDashboard() {
  const [donorProfile, setDonorProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bloodType: 'O+',
    organs: ['Heart', 'Kidneys', 'Liver'],
    status: 'Active',
    registeredDate: '2024-01-15',
  });

  const [donations, setDonations] = useState([
    {
      id: 1,
      organ: 'Heart',
      recipient: 'Anonymous',
      date: '2024-06-20',
      status: 'Completed',
    },
    {
      id: 2,
      organ: 'Kidney',
      recipient: 'Anonymous',
      date: '2024-06-20',
      status: 'Completed',
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Donor Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-2xl font-bold">{donorProfile.status}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Organs Registered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{donorProfile.organs.length}</div>
            <p className="text-xs text-gray-500 mt-1">
              {donorProfile.organs.join(', ')}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Blood Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">{donorProfile.bloodType}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="donations">Donation History</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Donor Profile</CardTitle>
              <CardDescription>Your personal donation information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Full Name</Label>
                  <Input value={donorProfile.name} readOnly className="mt-1" />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input value={donorProfile.email} readOnly className="mt-1" />
                </div>
                <div>
                  <Label>Blood Type</Label>
                  <Input value={donorProfile.bloodType} readOnly className="mt-1" />
                </div>
                <div>
                  <Label>Registration Date</Label>
                  <Input value={donorProfile.registeredDate} readOnly className="mt-1" />
                </div>
              </div>

              <div>
                <Label>Organs for Donation</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {donorProfile.organs.map((organ) => (
                    <Badge key={organ} variant="secondary">
                      {organ}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="bg-red-500 hover:bg-red-600">Update Profile</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="donations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Donation History</CardTitle>
              <CardDescription>Track your organ donations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {donations.map((donation) => (
                  <div key={donation.id} className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{donation.organ}</p>
                      <p className="text-sm text-gray-500">Date: {donation.date}</p>
                    </div>
                    <Badge variant={donation.status === 'Completed' ? 'default' : 'secondary'}>
                      {donation.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Important Documents</CardTitle>
              <CardDescription>Download your donation certificates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Donation Certificate
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Shield className="w-4 h-4 mr-2" />
                Privacy & Consent Form
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Heart className="w-4 h-4 mr-2" />
                Medical History Report
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
