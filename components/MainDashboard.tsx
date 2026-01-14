"use client";
import React from "react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, LayoutDashboard } from "lucide-react";

const dashboardItems = [
  { title: "Home", url: "/main", icon: Home },
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
];

const MainDashboard = () => {
  return (
    <Sidebar className="" variant="floating" collapsible="icon">
      <SidebarContent className="bg-muted">
        <SidebarMenu>
          {dashboardItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                render={(props) => <Link {...props} href={item.url} />}
              >
                <item.icon />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default MainDashboard;
