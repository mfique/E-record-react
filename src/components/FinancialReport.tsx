
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "./Header";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const statsData = [
  { title: "Total Income", value: "1000000", currency: "Rwf", color: "text-green-600" },
  { title: "Total Expenses", value: "1000000", currency: "Rwf", color: "text-red-600" },
  { title: "Net Profit", value: "1000000", currency: "Rwf", color: "text-orange-600" },
  { title: "Current Cash Balance", value: "1000000", currency: "Rwf", color: "text-gray-900" },
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

const reportTabs = [
  { name: "Profit and Loss Statement", active: true },
  { name: "CashFlow Statement", active: false },
  { name: "Balance Sheet", active: false },
  { name: "Custom Reports", active: false },
];

const reportData = [
  { category: "School Fees", amount: "850000", type: "income" },
  { category: "School Materials", amount: "850000", type: "expense" },
  { category: "School Fees", amount: "850000", type: "income" },
  { category: "School Fees", amount: "850000", type: "expense" },
  { category: "School Fees", amount: "850000", type: "income" },
];

export const FinancialReport = () => {
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
                    {stat.value} <span className="text-sm">{stat.currency}</span>
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
            
            <div className="h-64">
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

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Financial Information</h3>
            
            <div className="flex space-x-1 mb-6">
              {reportTabs.map((tab, index) => (
                <Button
                  key={index}
                  variant={tab.active ? "default" : "ghost"}
                  className={tab.active ? "bg-blue-600 hover:bg-blue-700 text-white" : "text-gray-600"}
                >
                  {tab.name}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left py-3 text-sm font-medium text-gray-600">Category</th>
                        <th className="text-left py-3 text-sm font-medium text-gray-600">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reportData.map((item, index) => (
                        <tr key={index} className="border-b border-gray-50">
                          <td className="py-4 text-sm text-gray-900">{item.category}</td>
                          <td className={`py-4 text-sm font-medium ${item.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                            {item.amount}
                          </td>
                        </tr>
                      ))}
                      <tr className="border-b border-gray-100 font-semibold">
                        <td className="py-4 text-sm text-gray-900">Net Profit</td>
                        <td className="py-4 text-sm text-green-600">850000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Income</span>
                  <span className="text-sm text-gray-900">55%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '55%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Expenses</span>
                  <span className="text-sm text-gray-900">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <div className="text-sm font-medium text-gray-900">Action</div>
                  <div className="flex space-x-2">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Export Report
                    </Button>
                    <Button variant="outline" className="border-blue-600 text-blue-600">
                      Print Report
                    </Button>
                    <Button variant="outline" className="text-gray-600">
                      Share via gmail
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
