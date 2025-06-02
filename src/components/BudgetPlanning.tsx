
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "./Header";
import { TrendingUp } from "lucide-react";

const statsData = [
  { title: "Total School Budget", value: "1000000", currency: "Rwf", change: "15%", icon: "📊" },
  { title: "Total Spend", value: "1000000", currency: "Rwf", change: "15%", icon: "💳" },
  { title: "Total Remaining", value: "1000000", currency: "Rwf", change: "15%", icon: "💰" },
];

const budgetCategories = [
  { name: "Academic", percentage: 55, color: "bg-green-500" },
  { name: "Maintenance", percentage: 25, color: "bg-orange-500" },
  { name: "Technology", percentage: 20, color: "bg-blue-500" },
];

export const BudgetPlanning = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((stat, index) => (
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
                  <div className="text-2xl">{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Budget Overview</h3>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Add new category
              </Button>
            </div>
            
            <div className="space-y-6">
              {budgetCategories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">{category.name}</span>
                    <span className="text-sm text-gray-600">{category.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${category.color} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
