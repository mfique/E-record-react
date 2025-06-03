import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "./Header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Stats data at the top
const statsCards = [
  {
    value: "1000000",
    suffix: "Rwf",
    label: "Total School Expenses",
    color: "text-blue-600"
  },
  {
    value: "1000000",
    suffix: "Rwf",
    label: "Pending approval",
    color: "text-orange-600"
  },
  {
    value: "85",
    suffix: "%",
    label: "Budget Used",
    color: "text-blue-600"
  },
  {
    value: "10",
    label: "Total transactions",
    color: "text-green-600"
  }
];

// Sample expense data
const expenseData = Array(12).fill({
  date: "10/5/2025",
  vendor: "Tyaza Ubwenge",
  purpose: "Buying teacher materials",
  amount: "850000",
  status: "Paid",
});

export const ExpenseManagement = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6">
                <div className="text-center">
                <div className={`text-xl font-semibold ${stat.color} mb-1`}>
                  {stat.value}{stat.suffix && <span className="text-sm ml-1">{stat.suffix}</span>}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Expense Management Section */}
        <div className="bg-white rounded-lg">
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold">Expenses Management</h2>
              <div className="flex gap-3">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Export Report
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600">
                  Add new Expense
                </Button>
              </div>
            </div>
            
            {/* Search and Filters */}
            <div className="flex items-center justify-between mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search expense" 
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-[280px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-3">
                <Select>
                  <SelectTrigger className="w-[160px] bg-white">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[160px] bg-white">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Table */}
            <div className="w-full">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Date</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Vendor</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Purpose</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Amount</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {expenseData.map((expense, index) => (
                    <tr key={index} className="border-b border-gray-50 last:border-0">
                      <td className="py-4 text-sm">{expense.date}</td>
                      <td className="py-4 text-sm">{expense.vendor}</td>
                      <td className="py-4 text-sm">{expense.purpose}</td>
                      <td className="py-4 text-sm">{expense.amount}</td>
                      <td className="py-4 text-sm">
                        <span className="text-blue-600">{expense.status}</span>
                      </td>
                      <td className="py-4 text-sm">
                        <div className="flex gap-2">
                          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-1 h-8 text-sm">
                            View
                          </Button>
                          <Button variant="outline" className="border-blue-600 text-blue-600 px-4 py-1 h-8 text-sm">
                            Edit
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-4 pt-4">
              <div className="flex items-center gap-1">
                <button className="px-2 py-1 text-sm text-gray-600 hover:text-blue-600 flex items-center">
                  ← Previous
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white bg-blue-600 rounded">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded">
                  3
                </button>
                <span className="text-gray-600 px-1">...</span>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded">
                  67
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded">
                  68
                </button>
                <button className="px-2 py-1 text-sm text-blue-600 hover:text-blue-700 flex items-center">
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
