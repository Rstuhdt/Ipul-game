import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GraduationCap, X } from "lucide-react";

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpModal({ isOpen, onClose }: HelpModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-96 overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-soft-gray flex items-center">
            <GraduationCap className="mr-3 text-purple-500" />
            How to Play Cipaa STEI-K
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-pink-300 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            <div>
              <h4 className="font-semibold text-soft-gray">Listen to Ipul</h4>
              <p className="text-gray-600 text-sm">Ipul will give you coding missions through the dialogue box at the bottom of the screen.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <div>
              <h4 className="font-semibold text-soft-gray">Write Code</h4>
              <p className="text-gray-600 text-sm">Type your HTML, CSS, and JavaScript in the code editor on the right side of the screen.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-300 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">3</span>
            </div>
            <div>
              <h4 className="font-semibold text-soft-gray">See Results</h4>
              <p className="text-gray-600 text-sm">Watch your code come to life in Cipaa's World on the left side!</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">4</span>
            </div>
            <div>
              <h4 className="font-semibold text-soft-gray">Get Feedback</h4>
              <p className="text-gray-600 text-sm">Ipul will help you if you make mistakes and celebrate when you succeed!</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">5</span>
            </div>
            <div>
              <h4 className="font-semibold text-soft-gray">Free Play</h4>
              <p className="text-gray-600 text-sm">After completing all missions, you'll enter Sandbox Mode where you can create anything!</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Don't worry about making mistakes - that's how we learn! Ipul is here to support you every step of the way. 💖
          </p>
          <Button onClick={onClose} className="bg-gradient-to-r from-pink-300 to-yellow-300 text-white">
            Let's Start Coding! 🚀
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
