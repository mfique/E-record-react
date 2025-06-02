
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className="bg-white border-b border-gray-100 px-8 py-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg text-gray-900">Welcome to our platform John</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="text-gray-600">
            2025 <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" className="text-gray-600">
            First Term <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
