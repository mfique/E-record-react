import { LayoutGrid, DollarSign, ImageIcon, ChartBar, Users2, Package, FileText, Bell, Settings } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutGrid },
  { id: "fees", label: "Fees Management", icon: DollarSign },
  { id: "expense", label: "Expense Management", icon: ImageIcon },
  { id: "budget", label: "Budget Planning", icon: ChartBar },
  { id: "payroll", label: "Staff Payroll", icon: Users2 },
  { id: "inventory", label: "Inventory", icon: Package },
  { id: "financial", label: "Financial Report", icon: FileText },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "settings", label: "Settings", icon: Settings },
];

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-100">
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-blue-600 font-semibold text-xl">E-Record</span>
        </div>
        <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-md inline-block">
          Accountant
        </div>
      </div>

      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
