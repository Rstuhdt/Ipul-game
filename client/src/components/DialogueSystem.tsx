import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Code, Lightbulb, Volume2 } from "lucide-react";
import { Mission, IpulState } from "@/hooks/useGameState";

interface DialogueSystemProps {
  currentMission: Mission;
  ipulState: IpulState;
  code: string;
}

export function DialogueSystem({ currentMission, ipulState, code }: DialogueSystemProps) {
  const getDialogText = () => {
    if (!currentMission) return "Hi Cipaa! Ready to start our coding adventure?";
    
    if (code.length > 0 && ipulState === 'confused') {
      return currentMission.hint;
    }
    
    return currentMission.dialog;
  };

  const getMissionTypeIcon = () => {
    switch (currentMission?.type) {
      case 'HTML':
        return <Code className="w-4 h-4 text-pink-500" />;
      case 'CSS':
        return <Code className="w-4 h-4 text-blue-500" />;
      case 'JS':
        return <Code className="w-4 h-4 text-yellow-600" />;
      case 'SANDBOX':
        return <Code className="w-4 h-4 text-purple-500" />;
      default:
        return <Target className="w-4 h-4 text-purple-500" />;
    }
  };

  const getMissionTypeName = () => {
    switch (currentMission?.type) {
      case 'HTML':
        return 'HTML Basics';
      case 'CSS':
        return 'CSS Styling';
      case 'JS':
        return 'JavaScript Magic';
      case 'SANDBOX':
        return 'Free Play';
      case 'END':
        return 'Mission Complete';
      default:
        return 'Tutorial';
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 max-w-2xl w-full mx-4 z-40">
      <div className="bg-white rounded-2xl shadow-2xl p-6 border-4 border-pink-200 relative animate-in slide-in-from-bottom-4 duration-300">
        {/* Speech bubble tail */}
        <div className="absolute -top-4 left-8 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
        
        <div className="flex items-start space-x-4">
          {/* Mini Ipul avatar */}
          <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-yellow-300 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
            <Heart className="text-white w-5 h-5" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <h4 className="font-bold text-soft-gray mr-2">Ipul</h4>
              <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                Your Mentor
              </Badge>
            </div>
            
            <p className="text-soft-gray leading-relaxed mb-4">
              {getDialogText()}
            </p>
            
            {/* Mission indicators */}
            {currentMission && currentMission.type !== 'SANDBOX' && (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Target className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium text-gray-600">
                    Mission {currentMission.id}: {currentMission.type === 'HTML' && 'Build Ipul\'s House'}
                    {currentMission.type === 'CSS' && currentMission.id === 2 && 'Color the House'}
                    {currentMission.type === 'CSS' && currentMission.id === 3 && 'Round the Corners'}
                    {currentMission.type === 'JS' && currentMission.id === 4 && 'Add a Button'}
                    {currentMission.type === 'JS' && currentMission.id === 5 && 'Make it Interactive'}
                    {currentMission.type === 'END' && 'Tutorial Complete!'}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  {getMissionTypeIcon()}
                  <span className="text-sm text-gray-500">{getMissionTypeName()}</span>
                </div>
              </div>
            )}
            
            {currentMission?.type === 'SANDBOX' && (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Code className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium text-gray-600">Sandbox Mode - Create Anything!</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col space-y-2">
            <Button 
              variant="ghost" 
              size="sm"
              className="p-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors duration-200 group"
            >
              <Lightbulb className="w-4 h-4 text-green-600 group-hover:animate-pulse" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors duration-200"
            >
              <Volume2 className="w-4 h-4 text-blue-600" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
