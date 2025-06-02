
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "./Header";
import { DollarSign, CreditCard, TrendingUp, Percent } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const stats = [
  { 
    title: "Total School Fees", 
    value: "1000000", 
    currency: "Rwf", 
    change: "15%", 
    icon: DollarSign,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  { 
    title: "Staff Payments", 
    value: "1000000", 
    currency: "Rwf", 
    change: "15%", 
    icon: CreditCard,
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  { 
    title: "Term Expenses", 
    value: "1000000", 
    currency: "Rwf", 
    change: "15%", 
    icon: TrendingUp,
    bgColor: "bg-red-50",
    iconColor: "text-red-600"
  },
  { 
    title: "Total Budget Usage", 
    value: "85%", 
    currency: "", 
    change: "Used", 
    icon: Percent,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600"
  },
];

const chartData = [
  { month: 'Jan', income: 180, expenses: 160 },
  { month: 'Feb', income: 170, expenses: 200 },
  { month: 'Mar', income: 180, expenses: 170 },
  { month: 'Apr', income: 160, expenses: 210 },
  { month: 'May', income: 200, expenses: 220 },
  { month: 'Jun', income: 220, expenses: 200 },
  { month: 'July', income: 230, expenses: 180 },
  { month: 'Aug', income: 210, expenses: 160 },
  { month: 'Sept', income: 240, expenses: 150 },
  { month: 'Oct', income: 250, expenses: 170 },
  { month: 'Nov', income: 200, expenses: 180 },
  { month: 'Dec', income: 190, expenses: 150 },
];

const recentPayments = [
  { name: "Dushimire Aine", class: "Senior 1 B", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", class: "Senior 1 B", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", class: "Senior 1 B", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", class: "Senior 1 B", amount: "850000", date: "10/5/2025", status: "Paid" },
  { name: "Dushimire Aine", class: "Senior 1 B", amount: "850000", date: "10/5/2025", status: "Paid" },
];

export const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-bold text-gray-900">
                          {stat.value}
                        </span>
                        {stat.currency && (
                          <span className="text-lg text-blue-600 font-medium">
                            {stat.currency}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center mt-3">
                        <TrendingUp className="w-4 h-4 text-blue-600 mr-1" />
                        <span className="text-sm text-blue-600">{stat.change}</span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">School Fees Management</h3>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View All
                  </Button>
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
                      {recentPayments.map((payment, index) => (
                        <tr key={index} className="border-b border-gray-50">
                          <td className="py-4 text-sm text-gray-900">{payment.name}</td>
                          <td className="py-4 text-sm text-gray-600">{payment.class}</td>
                          <td className="py-4 text-sm text-gray-900 font-medium">{payment.amount}</td>
                          <td className="py-4 text-sm text-gray-600">{payment.date}</td>
                          <td className="py-4">
                            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                              {payment.status}
                            </span>
                          </td>
                          <td className="py-4 text-sm text-gray-600">Bank Account</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-white border-0 shadow-sm h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Income Expenses chart</h3>
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-600">Income</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-gray-600">Expenses</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <div className="text-xs text-gray-500 mb-1">This Month</div>
                  <div className="text-2xl font-bold text-gray-900">220,342,123</div>
                  <div className="text-xs text-gray-500">May</div>
                </div>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-xs" />
                      <YAxis axisLine={false} tickLine={false} className="text-xs" />
                      <Line 
                        type="monotone" 
                        dataKey="income" 
                        stroke="#10b981" 
                        strokeWidth={3}
                        dot={false}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="expenses" 
                        stroke="#ef4444" 
                        strokeWidth={3}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
