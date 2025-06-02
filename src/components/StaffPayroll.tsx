import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "./Header";
import { Search, ChevronDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const statsData = [
  { title: "Total Payroll", value: "1000000", currency: "Rwf", color: "text-blue-600" },
  { title: "Paid This Month", value: "1000000", currency: "Rwf", color: "text-green-600" },
  { title: "Pending Payments", value: "1000000", currency: "Rwf", color: "text-orange-600" },
  { title: "Total Staff", value: "10", currency: "", color: "text-gray-900" },
];

const chartData = [
  { month: 'Jan', amount: 150 },
  { month: 'Feb', amount: 150 },
  { month: 'Mar', amount: 150 },
  { month: 'Apr', amount: 150 },
  { month: 'May', amount: 150 },
  { month: 'Jun', amount: 150 },
  { month: 'July', amount: 150 },
  { month: 'Aug', amount: 150 },
  { month: 'Sept', amount: 150 },
  { month: 'Oct', amount: 150 },
  { month: 'Nov', amount: 150 },
  { month: 'Dec', amount: 150 },
];

const staff = [
  { name: "Dushimire Aine", department: "Teacher", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", department: "Discipline staff", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", department: "Doctor", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", department: "Teacher", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", department: "Cook", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", department: "Cleanliness", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", department: "Teacher", amount: "850000", date: "10/5/2025", status: "Paid" },
];

export const StaffPayroll = () => {
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
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Payroll Trend Overview</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} barCategoryGap="20%">
                  <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-xs" />
                  <YAxis axisLine={false} tickLine={false} className="text-xs" />
                  <Bar dataKey="amount" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Staff Payroll</h3>
                <p className="text-sm text-gray-600">Total amount : 1000000 Rwf</p>
              </div>
              <div className="flex space-x-2">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Export Report
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Add new Staff
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600">
                  Generate payroll
                </Button>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search staff" 
                  className="pl-10 w-64"
                />
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="text-gray-600">
                  Department <ChevronDown className="w-4 h-4 ml-2" />
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
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Staff Name</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Department</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Amount</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Date</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Payment Method</th>
                  </tr>
                </thead>
                <tbody>
                  {staff.map((member, index) => (
                    <tr key={index} className="border-b border-gray-50">
                      <td className="py-4 text-sm text-gray-900">{member.name}</td>
                      <td className="py-4 text-sm text-gray-600">{member.department}</td>
                      <td className="py-4 text-sm text-gray-900 font-medium">{member.amount}</td>
                      <td className="py-4 text-sm text-gray-600">{member.date}</td>
                      <td className="py-4">
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                          {member.status}
                        </span>
                      </td>
                      <td className="py-4 text-sm text-gray-600">Bank Account</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">67</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">68</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
