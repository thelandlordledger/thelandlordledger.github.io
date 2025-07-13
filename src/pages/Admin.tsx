import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { ContentManagement } from "@/components/admin/ContentManagement";
import { EventsManagement } from "@/components/admin/EventsManagement";
import { MarketDataManagement } from "@/components/admin/MarketDataManagement";
import { TeamManagement } from "@/components/admin/TeamManagement";
import { AIChatManagement } from "@/components/admin/AIChatManagement";
import { UsersManagement } from "@/components/admin/UsersManagement";
import { AnalyticsManagement } from "@/components/admin/AnalyticsManagement";
import { AdminSettings } from "@/components/admin/AdminSettings";
import { AdminLogin } from "@/components/admin/AdminLogin";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for admin authentication
    const adminToken = localStorage.getItem('admin_token');
    if (adminToken) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/content/*" element={<ContentManagement />} />
        <Route path="/events" element={<EventsManagement />} />
        <Route path="/market-data" element={<MarketDataManagement />} />
        <Route path="/team" element={<TeamManagement />} />
        <Route path="/ai-chat" element={<AIChatManagement />} />
        <Route path="/users" element={<UsersManagement />} />
        <Route path="/analytics" element={<AnalyticsManagement />} />
        <Route path="/settings" element={<AdminSettings />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </AdminLayout>
  );
};

export default Admin;