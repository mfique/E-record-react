
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "./Header";
import { Bell } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "info",
    message: "Your request for approval for student school fees have been updated in the system",
    time: "30 min ago",
    color: "bg-blue-500"
  },
  {
    id: 2,
    type: "warning",
    message: "10 Items in the stock are finished please add in more items in stock to be used",
    time: "30 min ago",
    color: "bg-red-500"
  },
  {
    id: 3,
    type: "info",
    message: "Your request for approval for student school fees have been updated in the system",
    time: "30 min ago",
    color: "bg-blue-500"
  },
  {
    id: 4,
    type: "success",
    message: "School Budget being added in the system successfully",
    time: "30 min ago",
    color: "bg-green-500"
  },
  {
    id: 5,
    type: "info",
    message: "Your request for approval for student school fees have been updated in the system",
    time: "30 min ago",
    color: "bg-blue-500"
  },
  {
    id: 6,
    type: "success",
    message: "School Budget being added in the system successfully",
    time: "30 min ago",
    color: "bg-green-500"
  },
  {
    id: 7,
    type: "warning",
    message: "10 Items in the stock are finished please add in more items in stock to be used",
    time: "30 min ago",
    color: "bg-red-500"
  }
];

export const Notifications = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Notifications</h1>
          
          <div className="flex space-x-8 mb-8">
            <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-2">
              All (20)
            </button>
            <button className="text-gray-600 font-medium pb-2">
              Unread
            </button>
            <button className="text-gray-600 font-medium pb-2">
              Spam
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-6">Today</h2>
          
          <div className="space-y-4">
            {notifications.map((notification) => (
              <Card key={notification.id} className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 ${notification.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 text-sm leading-relaxed">
                        {notification.message}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 flex-shrink-0">
                      {notification.time}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
