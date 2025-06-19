import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Keyboard, Save } from "lucide-react";

interface CodeEditorProps {
  code: string;
  onCodeChange: (code: string) => void;
}

export function CodeEditor({ code, onCodeChange }: CodeEditorProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col h-full">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-300 via-blue-300 to-pink-300"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-soft-gray flex items-center">
          <Keyboard className="mr-3 text-blue-400" />
          Code Editor
        </h2>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </div>

      {/* Code Editor */}
      <div className="flex-1 flex flex-col">
        <div className="bg-gray-800 rounded-t-lg px-4 py-2 flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-300 text-sm ml-2">cipaa-code.html</span>
        </div>
        
        <textarea 
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          className="flex-1 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-b-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-96"
          placeholder={`<!-- Welcome to coding, Cipaa! 
Start typing your HTML, CSS, and JavaScript here.
Ipul will guide you through each step! 💖 -->`}
          spellCheck={false}
        />
      </div>

      {/* Code Editor Tools */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="flex space-x-2">
          <Badge variant="outline" className="bg-pink-50 text-pink-600 hover:bg-pink-100">
            HTML
          </Badge>
          <Badge variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
            CSS
          </Badge>
          <Badge variant="outline" className="bg-yellow-50 text-yellow-600 hover:bg-yellow-100">
            JS
          </Badge>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Save className="w-4 h-4" />
          <span>Auto-saved</span>
        </div>
      </div>
    </div>
  );
}
