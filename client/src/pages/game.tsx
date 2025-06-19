import { useGameState } from "@/hooks/useGameState";
import { Navbar } from "@/components/Navbar";
import { VisualPane } from "@/components/VisualPane";
import { CodeEditor } from "@/components/CodeEditor";
import { DialogueSystem } from "@/components/DialogueSystem";
import { HelpModal } from "@/components/HelpModal";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Game() {
  const {
    currentMission,
    currentMissionIndex,
    isSandboxMode,
    code,
    setCode,
    ipulState,
    showSuccess,
    showHelp,
    setShowHelp,
    resetGame,
    missions
  } = useGameState();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100/20 via-blue-100/20 to-green-100/20">
      <Navbar
        currentMissionIndex={currentMissionIndex}
        totalMissions={missions.length}
        onHelp={() => setShowHelp(true)}
        onReset={resetGame}
        isSandboxMode={isSandboxMode}
      />
      
      {/* Main Game Interface */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[calc(100vh-8rem)]">
          <VisualPane 
            code={code} 
            ipulState={ipulState} 
            showSuccess={showSuccess}
          />
          <CodeEditor 
            code={code} 
            onCodeChange={setCode}
          />
        </div>
      </div>

      {/* Floating Dialogue Box */}
      <DialogueSystem 
        currentMission={currentMission}
        ipulState={ipulState}
        code={code}
      />

      {/* Success Animation Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-green-100/20 backdrop-blur-sm z-50 flex items-center justify-center animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl p-8 shadow-2xl text-center max-w-md mx-4 transform animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle">
              <CheckCircle className="text-white w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-soft-gray mb-2">Amazing work, Cipaa! 🎉</h3>
            <p className="text-gray-600 mb-4">You completed the mission perfectly!</p>
            <Button className="bg-gradient-to-r from-pink-300 to-yellow-300 text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Continue Adventure!
            </Button>
          </div>
        </div>
      )}

      {/* Help Modal */}
      <HelpModal 
        isOpen={showHelp} 
        onClose={() => setShowHelp(false)} 
      />
    </div>
  );
}
