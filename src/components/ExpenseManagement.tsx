
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "./Header";
import { Search, ChevronDown } from "lucide-react";

const statsData = [
  { title: "Total School Expenses", value: "1000000", currency: "Rwf", color: "text-blue-600" },
  { title: "Pending approval", value: "1000000", currency: "Rwf", color: "text-orange-600" },
  { title: "Budget Used", value: "85%", currency: "", color: "text-blue-600" },
  { title: "Total transactions", value: "10", currency: "", color: "text-green-600" },
];

const expenses = [
  { date: "10/5/2025", vendor: "Tyaza Ubwenge", purpose: "Buying teacher materials", amount: "850000", status: "Paid" },
  { date: "10/5/2025", vendor: "Tyaza Ubwenge", purpose: "Buying teacher materials", amount: "850000", status: "Paid" },
  { date: "10/5/2025", vendor: "Tyaza Ubwenge", purpose: "Buying teacher materials", amount: "850000", status: "Paid" },
  { date: "10/5/2025", vendor: "Tyaza Ubwenge", purpose: "Buying teacher materials", amount: "850000", status: "Paid" },
  { date: "10/5/2025", vendor: "Tyaza Ubwenge", purpose: "Buying teacher materials", amount: "850000", status: "Paid" },
  { date: "10/5/2025", vendor: "Tyaza Ubwenge", purpose: "Buying teacher materials", amount: "850000", status: "Paid" },
  { date: "10/5/2025", vendor: "Tyaza Ubwenge", purpose: "Buying teacher materials", amount: "850000", status: "Paid" },
  { date: "10/5/2025", vendor: "Tyaza Ubwenge", purpose: "Buying teacher materials", amount: "850000", status: "Paid" },
];

export const ExpenseManagement = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value} {stat.currency && <span className="text-sm">{stat.currency}</span>}
                  </div>
                  <div className="text-sm text-gray-600">{stat.title}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Expenses Management</h3>
              <div className="flex space-x-2">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Export Report
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600">
                  Add new Expense
                </Button>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search expense" 
                  className="pl-10 w-64"
                />
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="text-gray-600">
                  Category <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="text-gray-600">
                  Status <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
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
                  {expenses.map((expense, index) => (
                    <tr key={index} className="border-b border-gray-50">
                      <td className="py-4 text-sm text-gray-600">{expense.date}</td>
                      <td className="py-4 text-sm text-gray-900">{expense.vendor}</td>
                      <td className="py-4 text-sm text-gray-600">{expense.purpose}</td>
                      <td className="py-4 text-sm text-gray-900 font-medium">{expense.amount}</td>
                      <td className="py-4">
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                          {expense.status}
                        </span>
                      </td>
                      <td className="py-4 space-x-2">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="border-blue-600 text-blue-600">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
