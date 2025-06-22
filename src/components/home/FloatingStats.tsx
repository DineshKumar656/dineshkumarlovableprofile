
import { Card, CardContent } from "@/components/ui/card";

const FloatingStats = () => {
  return (
    <>
      <Card className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
        <CardContent className="p-6">
          <div className="text-center">
            <div className="text-sm text-blue-600 font-medium">Cross-Domain</div>
            <div className="font-bold text-gray-800 text-lg">Professional</div>
            <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mt-2"></div>
          </div>
        </CardContent>
      </Card>

      <Card className="absolute bottom-8 -left-10 bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            <div className="text-sm text-gray-600 font-medium">Great Projects</div>
          </div>
          <div className="font-bold text-2xl text-gray-800 mt-1">10+ Done</div>
          <div className="text-xs text-green-600 font-medium">95% success rate</div>
        </CardContent>
      </Card>

      <Card className="absolute bottom-20 -right-10 bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <div>
              <div className="text-xs text-gray-600">Google</div>
              <div className="text-sm font-semibold text-gray-800">Certified Pro</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default FloatingStats;
