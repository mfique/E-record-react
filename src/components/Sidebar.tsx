
import { LayoutDashboard, DollarSign, CreditCard, BarChart3, Users, Package, FileText, Bell, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "fees", label: "Fees Management", icon: DollarSign },
  { id: "expense", label: "Expense Management", icon: CreditCard },
  { id: "budget", label: "Budget Planning", icon: BarChart3 },
  { id: "payroll", label: "Staff Payroll", icon: Users },
  { id: "inventory", label: "Inventory", icon: Package },
  { id: "financial", label: "Financial Report", icon: FileText },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "settings", label: "Settings", icon: Settings },
];

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  return (
    <div className="w-64 bg-white shadow-sm h-screen flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">E-Record</h1>
          </div>
        </div>
        <div className="mt-4">
          <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            Accountant
          </span>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors text-sm",
                    activeTab === item.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
