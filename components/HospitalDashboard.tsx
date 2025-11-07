'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Building2, Users, Activity, TrendingUp } from 'lucide-react';

export default function HospitalDashboard() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      organ: 'Heart',
      patient: 'Patient A',
      urgency: 'Critical',
      date: '2024-11-07',
      status: 'Pending',
    },
    {
      id: 2,
      organ: 'Kidney',
      patient: 'Patient B',
      urgency: 'High',
      date: '2024-11-06',
      status: 'Matched',
    },
    {
      id: 3,
      organ: 'Liver',
      patient: 'Patient C',
      urgency: 'Medium',
      date: '2024-11-05',
      status: 'Completed',
    },
  ]);

  const [inventory, setInventory] = useState([
    { organ: 'Heart', available: 2, total: 5 },
    { organ: 'Kidney', available: 4, total: 8 },
    { organ: 'Liver', available: 1, total: 3 },
    { organ: 'Pancreas', available: 0, total: 2 },
  ]);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical':
        return 'bg-red-100 text-red-800';
      case 'High':
        return 'bg-orange-100 text-orange-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-blue-100 text-blue-800';
      case 'Matched':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{requests.length}</div>
            <p className="text-xs text-gray-500 mt-1">Active requests</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Critical Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">
              {requests.filter(r => r.urgency === 'Critical').length}
            </div>
            <p className="text-xs text-gray-500 mt-1">Urgent attention needed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Matched Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">
              {requests.filter(r => r.status === 'Matched').length}
            </div>
            <p className="text-xs text-gray-500 mt-1">Ready for transplant</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-500">
              {requests.filter(r => r.status === 'Completed').length}
            </div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="requests" className="w-full">
        <TabsList>
          <TabsTrigger value="requests">Organ Requests</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="matching">Matching Algorithm</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Organ Transplant Requests</CardTitle>
              <CardDescription>Manage and track organ requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Organ</TableHead>
                      <TableHead>Patient</TableHead>
                      <TableHead>Urgency</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.organ}</TableCell>
                        <TableCell>{request.patient}</TableCell>
                        <TableCell>
                          <Badge className={getUrgencyColor(request.urgency)}>
                            {request.urgency}
                          </Badge>
                        </TableCell>
                        <TableCell>{request.date}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(request.status)}>
                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Organ Inventory</CardTitle>
              <CardDescription>Current organ availability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {inventory.map((item) => (
                  <div key={item.organ} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-semibold">{item.organ}</p>
                      <Badge variant={item.available > 0 ? 'default' : 'destructive'}>
                        {item.available}/{item.total} Available
                      </Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${(item.available / item.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="matching" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Smart Matching Algorithm</CardTitle>
              <CardDescription>AI-powered donor-recipient matching</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Matching Criteria</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Blood type compatibility</li>
                  <li>✓ Tissue type matching (HLA)</li>
                  <li>✓ Organ size compatibility</li>
                  <li>✓ Waiting time priority</li>
                  <li>✓ Medical urgency level</li>
                  <li>✓ Geographic proximity</li>
                </ul>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Run Matching Algorithm
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
