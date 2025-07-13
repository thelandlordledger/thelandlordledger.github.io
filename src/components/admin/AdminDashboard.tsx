import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  FileText,
  Calendar,
  TrendingUp,
  MessageSquare,
  Eye,
  ArrowUpRight,
  Activity
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "2,847",
    change: "+12.5%",
    icon: Users,
    color: "text-blue-600"
  },
  {
    title: "Published Articles",
    value: "156",
    change: "+8",
    icon: FileText,
    color: "text-green-600"
  },
  {
    title: "Upcoming Events",
    value: "24",
    change: "+3",
    icon: Calendar,
    color: "text-purple-600"
  },
  {
    title: "AI Chat Sessions",
    value: "1,203",
    change: "+23.1%",
    icon: MessageSquare,
    color: "text-orange-600"
  }
];

const recentActivity = [
  {
    action: "New article published",
    item: "Q1 2025 Market Outlook",
    time: "2 minutes ago",
    type: "content"
  },
  {
    action: "Event updated",
    item: "Inman Connect New York 2025",
    time: "15 minutes ago",
    type: "event"
  },
  {
    action: "User registered",
    item: "Premium subscription",
    time: "1 hour ago",
    type: "user"
  },
  {
    action: "Market data updated",
    item: "NYC Housing Index",
    time: "2 hours ago",
    type: "data"
  }
];

const popularContent = [
  {
    title: "2025 Real Estate Investment Strategies",
    views: "12.4K",
    engagement: "High"
  },
  {
    title: "Market Trends: What to Watch",
    views: "8.9K",
    engagement: "Medium"
  },
  {
    title: "AI in Real Estate Analytics",
    views: "6.2K",
    engagement: "High"
  }
];

export const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your Landlord Ledger platform from this central hub
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Latest updates across your platform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="font-medium text-sm">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.item}</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="text-xs">
                    {activity.type}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Popular Content */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Popular Content
            </CardTitle>
            <CardDescription>
              Top performing articles and insights
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {popularContent.map((content, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-sm">{content.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Eye className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{content.views} views</span>
                  </div>
                </div>
                <Badge 
                  variant={content.engagement === "High" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {content.engagement}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common administrative tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <FileText className="h-5 w-5" />
              <span className="text-sm">New Article</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Calendar className="h-5 w-5" />
              <span className="text-sm">Add Event</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm">Update Data</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">User Report</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};