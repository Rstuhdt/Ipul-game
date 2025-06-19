import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, HelpCircle, Settings, RotateCcw, Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NavbarProps {
  currentMissionIndex: number;
  totalMissions: number;
  onHelp: () => void;
  onReset: () => void;
  isSandboxMode: boolean;
}

export function Navbar({ currentMissionIndex, totalMissions, onHelp, onReset, isSandboxMode }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderMissionProgress = () => {
    const missions = [];
    const maxMissions = Math.min(totalMissions - 2, 5); // Exclude END and SANDBOX missions
    
    for (let i = 0; i < maxMissions; i++) {
      const isCompleted = i < currentMissionIndex;
      const isCurrent = i === currentMissionIndex && !isSandboxMode;
      
      missions.push(
        <div
          key={i}
          className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm transition-all duration-200 ${
            isCompleted 
              ? 'bg-green-400' 
              : isCurrent 
                ? 'bg-blue-400 ring-2 ring-blue-200' 
                : 'bg-gray-200 text-gray-400'
          }`}
        >
          {i + 1}
        </div>
      );
    }
    
    return missions;
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-lg border-b-4 border-pink-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-yellow-300 rounded-full flex items-center justify-center shadow-md">
              <Heart className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-soft-gray">Cipaa STEI-K</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Learn with Ipul! 🐹</p>
            </div>
          </div>

          {/* Mission Progress - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-soft-gray">
                {isSandboxMode ? 'Sandbox Mode' : 'Mission:'}
              </span>
              {!isSandboxMode && (
                <div className="flex space-x-1">
                  {renderMissionProgress()}
                </div>
              )}
              {isSandboxMode && (
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  Free Play
                </Badge>
              )}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3">
            {/* Help Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onHelp}
              className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors duration-200 group"
            >
              <HelpCircle className="w-4 h-4 text-blue-600 group-hover:scale-110 transform transition-transform duration-200" />
            </Button>
            
            {/* Settings Button */}
            <Button
              variant="ghost"
              size="sm"
              className="p-2 rounded-lg bg-purple-100 hover:bg-purple-200 transition-colors duration-200 group"
            >
              <Settings className="w-4 h-4 text-purple-600 group-hover:rotate-90 transform transition-transform duration-300" />
            </Button>

            {/* Reset Button */}
            <Button
              onClick={onReset}
              className="px-4 py-2 bg-gradient-to-r from-pink-300 to-yellow-300 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-green-100 hover:bg-green-200 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4 text-green-600" />
              ) : (
                <Menu className="w-4 h-4 text-green-600" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Progress Bar */}
      <div className={`md:hidden px-4 pb-3 transition-all duration-200 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-soft-gray">
            {isSandboxMode ? 'Sandbox Mode:' : 'Progress:'}
          </span>
          {!isSandboxMode && (
            <div className="flex space-x-1">
              {renderMissionProgress().map((mission, index) => (
                <div key={index} className="scale-75">
                  {mission}
                </div>
              ))}
            </div>
          )}
          {isSandboxMode && (
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
              Free Play
            </Badge>
          )}
        </div>
      </div>
    </nav>
  );
}
