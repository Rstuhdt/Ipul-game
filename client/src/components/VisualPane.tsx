import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Code } from "lucide-react";
import { IpulState } from "@/hooks/useGameState";

interface VisualPaneProps {
  code: string;
  ipulState: IpulState;
  showSuccess: boolean;
}

export function VisualPane({ code, ipulState, showSuccess }: VisualPaneProps) {
  const worldRef = useRef<HTMLDivElement>(null);
  const customStyleRef = useRef<HTMLStyleElement | null>(null);

  const getIpulImage = () => {
    switch (ipulState) {
      case 'happy':
        return "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300";
      case 'confused':
        return "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300";
      default:
        return "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300";
    }
  };

  const getIpulClasses = () => {
    switch (ipulState) {
      case 'happy':
        return 'animate-bounce-gentle transform translate-y-2 rotate-3';
      case 'confused':
        return 'transform -rotate-2';
      default:
        return '';
    }
  };

  useEffect(() => {
    if (!worldRef.current) return;

    // Create or update custom style element
    if (!customStyleRef.current) {
      customStyleRef.current = document.createElement('style');
      document.head.appendChild(customStyleRef.current);
    }

    // Parse code for HTML and CSS
    const fullCode = code;
    let htmlCode = fullCode;
    let cssCode = '';

    const styleRegex = /<style>([\s\S]*?)<\/style>/;
    const match = fullCode.match(styleRegex);

    if (match && match[1]) {
      cssCode = match[1];
      htmlCode = fullCode.replace(styleRegex, '');
    }
    
    // Remove script tags from HTML output
    htmlCode = htmlCode.replace(/<script>[\s\S]*?<\/script>/, '');

    // Update the world and styles
    worldRef.current.innerHTML = htmlCode;
    customStyleRef.current.innerHTML = cssCode;

    return () => {
      if (customStyleRef.current) {
        document.head.removeChild(customStyleRef.current);
        customStyleRef.current = null;
      }
    };
  }, [code]);

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden transition-all duration-500 ${showSuccess ? 'bg-green-50 ring-2 ring-green-200' : ''}`}>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-blue-300 to-green-300"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-soft-gray flex items-center">
          <Sparkles className="mr-3 text-purple-400" />
          Cipaa's World
        </h2>
        <Badge variant="secondary" className="bg-green-100 text-green-700">
          Live Preview
        </Badge>
      </div>

      {/* Ipul Character Area */}
      <div className="flex flex-col items-center mb-8">
        <img 
          src={getIpulImage()}
          alt="Ipul the hamster" 
          className={`w-32 h-32 rounded-full object-cover shadow-lg mb-4 transition-all duration-300 ${getIpulClasses()}`}
        />
        
        <div className="text-center">
          <h3 className="text-xl font-bold text-soft-gray mb-1">Ipul</h3>
          <Badge variant="secondary" className="bg-pink-100 text-pink-700">
            Your Coding Buddy 🐹
          </Badge>
        </div>
      </div>

      {/* Code Output Area */}
      <div 
        ref={worldRef}
        className="bg-gray-50 rounded-xl p-6 min-h-48 border-2 border-dashed border-gray-200"
      >
        {/* Default empty state */}
        {!code.trim() && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-400">
              <Code className="text-4xl mb-4 opacity-50 mx-auto" />
              <p className="text-lg font-medium">Your creations will appear here!</p>
              <p className="text-sm">Start typing to see the magic happen ✨</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
