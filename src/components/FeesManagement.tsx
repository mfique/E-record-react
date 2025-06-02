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
  { title: "Total School Fees Paid", value: "1000000", currency: "Rwf", color: "text-blue-600" },
  { title: "Total School UnPaid Fees", value: "1000000", currency: "Rwf", color: "text-red-600" },
  { title: "Total Student Paid", value: "1000000", currency: "", color: "text-blue-600" },
  { title: "Total Student UnPaid", value: "1000000", currency: "", color: "text-red-600" },
];

const chartData = [
  { name: 'Senior One', paid: 150, unpaid: 100 },
  { name: 'Senior Two', paid: 150, unpaid: 95 },
  { name: 'Senior Three', paid: 150, unpaid: 100 },
  { name: 'Senior Four', paid: 150, unpaid: 95 },
  { name: 'Senior Five', paid: 150, unpaid: 85 },
  { name: 'Senior Six', paid: 150, unpaid: 90 },
];

const students = [
  { name: "Dushimire Aine", class: "Senior 1 B", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", class: "Senior 1 B", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", class: "Senior 1 B", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", class: "Senior 1 B", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", class: "Senior 1 B", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", class: "Senior 1 B", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", class: "Senior 1 B", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", class: "Senior 1 B", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", class: "Senior 1 B", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", class: "Senior 1 B", amount: "850000", date: "10/5/2025", status: "Paid" },
];

export const FeesManagement = () => {
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
              <h3 className="text-lg font-semibold text-gray-900">Promotions Payment Statistics</h3>
              <div className="flex items-center space-x-4 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-gray-600">Paid Students</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">UnPaid Students</span>
                </div>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} barCategoryGap="20%">
                  <XAxis dataKey="name" axisLine={false} tickLine={false} className="text-xs" />
                  <YAxis axisLine={false} tickLine={false} className="text-xs" />
                  <Bar dataKey="paid" fill="#2563eb" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="unpaid" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">School Fees Management</h3>
              <div className="flex space-x-2">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Export Report
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600">
                  Add new Fees
                </Button>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search student" 
                  className="pl-10 w-64"
                />
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="text-gray-600">
                  Senior One <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="text-gray-600">
                  Paid <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Student Names</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Class</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Amount</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Date</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Payment Method</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index} className="border-b border-gray-50">
                      <td className="py-4 text-sm text-gray-900">{student.name}</td>
                      <td className="py-4 text-sm text-gray-600">{student.class}</td>
                      <td className="py-4 text-sm text-gray-900 font-medium">{student.amount}</td>
                      <td className="py-4 text-sm text-gray-600">{student.date}</td>
                      <td className="py-4">
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                          {student.status}
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
