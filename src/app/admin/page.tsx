
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Activity, Users, Eye } from "lucide-react";

const pageViewsData = [
  { name: 'Mon', views: 2400 },
  { name: 'Tue', views: 1398 },
  { name: 'Wed', views: 9800 },
  { name: 'Thu', views: 3908 },
  { name: 'Fri', views: 4800 },
  { name: 'Sat', views: 3800 },
  { name: 'Sun', views: 4300 },
];

const userSignupsData = [
    { name: 'Jan', users: 12 },
    { name: 'Feb', users: 19 },
    { name: 'Mar', users: 32 },
    { name: 'Apr', users: 28 },
    { name: 'May', users: 45 },
    { name: 'Jun', users: 55 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <h1 className="text-3xl font-bold font-headline tracking-tight text-primary">Dashboard</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Page Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,231</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users Now</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+201 since last hour</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Page Views Over Time</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
             <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={pageViewsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="views" stroke="hsl(var(--primary))" />
                    </LineChart>
                </ResponsiveContainer>
             </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">New User Sign-ups</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={userSignupsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="users" stroke="hsl(var(--accent))" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
       <Card>
        <CardHeader>
          <CardTitle className="font-headline">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Users className="h-5 w-5 text-muted-foreground"/>
              <p className="text-sm">New user <span className="font-semibold">John Doe</span> signed up.</p>
              <p className="text-xs text-muted-foreground ml-auto">15 minutes ago</p>
            </div>
            <div className="flex items-center gap-4">
              <Eye className="h-5 w-5 text-muted-foreground"/>
              <p className="text-sm">User <span className="font-semibold">Jane Smith</span> viewed the <span className="font-semibold">Services</span> page.</p>
              <p className="text-xs text-muted-foreground ml-auto">30 minutes ago</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
