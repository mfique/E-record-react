import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "./Header";
import { Search, ChevronDown } from "lucide-react";
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
  { title: "Total Items", value: "50", color: "text-blue-600" },
  { title: "In Stock", value: "30", color: "text-green-600" },
  { title: "Low in Stock", value: "14", color: "text-orange-600" },
  { title: "Finished in Stock", value: "10", color: "text-red-600" },
];

const categoryStats = [
  { title: "Technology Items", value: "50", color: "text-blue-600" },
  { title: "Academic Items", value: "30", color: "text-green-600" },
  { title: "Maintenance", value: "14", color: "text-orange-600" },
];

const inventory = [
  { item: "Computer", category: "Technology", quantity: "100", supplier: "Dushimire aine", status: "High in Stock", date: "10/5/2025" },
  { item: "Computer", category: "Technology", quantity: "100", supplier: "Dushimire aine", status: "Low in Stock", date: "10/5/2025" },
  { item: "Computer", category: "Technology", quantity: "100", supplier: "Dushimire aine", status: "High in Stock", date: "10/5/2025" },
  { item: "Computer", category: "Technology", quantity: "100", supplier: "Dushimire aine", status: "Finished", date: "10/5/2025" },
  { item: "Computer", category: "Technology", quantity: "100", supplier: "Dushimire aine", status: "High in Stock", date: "10/5/2025" },
  { item: "Computer", category: "Technology", quantity: "100", supplier: "Dushimire aine", status: "High in Stock", date: "10/5/2025" },
  { item: "Computer", category: "Technology", quantity: "100", supplier: "Dushimire aine", status: "Low in Stock", date: "10/5/2025" },
  { item: "Computer", category: "Technology", quantity: "100", supplier: "Dushimire aine", status: "High in Stock", date: "10/5/2025" },
];

export const Inventory = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "High in Stock":
        return "bg-green-100 text-green-700";
      case "Low in Stock":
        return "bg-orange-100 text-orange-700";
      case "Finished":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

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
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.title}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Inventory Products Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categoryStats.map((stat, index) => (
                <Card key={index} className="bg-gray-50 border-0">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.title}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Inventory Management</h3>
              <div className="flex space-x-2">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Export Report
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600">
                  Add Item
                </Button>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search product" 
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
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Item Name</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Category</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Quantity</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Supplier</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Date</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((item, index) => (
                    <tr key={index} className="border-b border-gray-50">
                      <td className="py-4 text-sm text-gray-900">{item.item}</td>
                      <td className="py-4 text-sm text-gray-600">{item.category}</td>
                      <td className="py-4 text-sm text-gray-900 font-medium">{item.quantity}</td>
                      <td className="py-4 text-sm text-gray-600">{item.supplier}</td>
                      <td className="py-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-4 text-sm text-gray-600">{item.date}</td>
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
