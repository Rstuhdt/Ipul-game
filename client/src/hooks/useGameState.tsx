import { useState, useEffect } from "react";

export interface Mission {
  id: number;
  type: 'HTML' | 'CSS' | 'JS' | 'END' | 'SANDBOX';
  dialog: string;
  hint: string;
  validation: (code: string) => boolean;
}

const missions: Mission[] = [
  {
    id: 1,
    type: 'HTML',
    dialog: "Brrr, it's cold here, Cipaa... Could you build me a house? Try typing <div id='rumah-ipul'></div>!",
    hint: "Hmm, that doesn't look quite right. Make sure you type exactly <div id='rumah-ipul'></div> with both opening and closing tags!",
    validation: (code) => {
      const cleanedCode = code.replace(/\s/g, '');
      return cleanedCode.includes("<divid='rumah-ipul'></div>");
    }
  },
  {
    id: 2,
    type: 'CSS',
    dialog: "Yess! The house is built! But it looks so plain... Let's become interior designers! Color my house with a lovely pink pastel. Type this: <style> #rumah-ipul { background-color: #ffc0cb; } </style>",
    hint: "Almost there! Make sure you have the <style> tag, then #rumah-ipul, and the background-color property, Cipaa.",
    validation: (code) => {
      const hasStyleTag = code.includes('<style>') && code.includes('</style>');
      const hasSelector = code.includes('#rumah-ipul');
      const hasProperty = code.includes('background-color');
      return hasStyleTag && hasSelector && hasProperty;
    }
  },
  {
    id: 3,
    type: 'CSS',
    dialog: "Wow, so beautiful! To make it even cuter, how about we make the corners rounded? Add border-radius: 15px; inside the curly braces.",
    hint: "Just a bit more! Try adding the line `border-radius: 15px;` inside the curly braces { } that are already there.",
    validation: (code) => {
      return code.includes('border-radius');
    }
  },
  {
    id: 4,
    type: 'JS',
    dialog: "Perfect! The house looks so aesthetic now. Let's try some JavaScript 'magic' to make it interactive. Create a magic button! Type <button id='tombol-sihir'>Change Color</button> below Ipul's house.",
    hint: "Almost there, Cipaa! Try typing exactly <button id='tombol-sihir'>Change Color</button>",
    validation: (code) => {
      return code.includes("<button id='tombol-sihir'>Change Color</button>");
    }
  },
  {
    id: 5,
    type: 'JS',
    dialog: "Yes, the button is there! Now let's give the button some magic. Type this code to make my house change color when the button is clicked: <script> document.getElementById('tombol-sihir').addEventListener('click', function() { document.getElementById('rumah-ipul').style.backgroundColor = '#add8e6'; }); </script>",
    hint: "Almost done, Cipaa! Make sure you have the <script> tag, then call addEventListener on 'tombol-sihir'.",
    validation: (code) => {
      const hasScript = code.includes('<script>') && code.includes('</script>');
      const hasListener = code.includes(".addEventListener('click'");
      const hasTarget = code.includes("getElementById('tombol-sihir')");
      const hasAction = code.includes("getElementById('rumah-ipul')");
      return hasScript && hasListener && hasTarget && hasAction;
    }
  },
  {
    id: 6,
    type: 'END',
    dialog: "SUPER AWESOME, CIPAA! You now know HTML, CSS, and basic JavaScript! The magic button is now really active - try clicking it! You're truly talented at game development!",
    hint: "",
    validation: () => true
  },
  {
    id: 7,
    type: 'SANDBOX',
    dialog: "All tutorial missions complete! Now it's Free Mode. You can try building anything you want. Happy creating!",
    hint: "",
    validation: () => false
  }
];

export type IpulState = 'normal' | 'happy' | 'confused';

export function useGameState() {
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);
  const [isSandboxMode, setIsSandboxMode] = useState(false);
  const [code, setCode] = useState('');
  const [ipulState, setIpulState] = useState<IpulState>('normal');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const currentMission = missions[currentMissionIndex];

  const resetGame = () => {
    setCurrentMissionIndex(0);
    setIsSandboxMode(false);
    setCode('');
    setIpulState('normal');
    setShowSuccess(false);
  };

  const validateCode = (inputCode: string) => {
    if (isSandboxMode) return;

    const mission = missions[currentMissionIndex];
    if (!mission) return;

    if (mission.validation(inputCode)) {
      setIpulState('happy');
      setShowSuccess(true);
      
      // Handle special case for mission 5 (JavaScript button)
      if (mission.id === 5) {
        setTimeout(() => {
          const tombolSihir = document.querySelector('#tombol-sihir') as HTMLButtonElement;
          if (tombolSihir) {
            const colors = ['#add8e6', '#ffc0cb', '#90ee90', '#fadf98', '#dda0dd'];
            let colorIndex = 0;
            tombolSihir.onclick = function() {
              const rumahIpul = document.querySelector('#rumah-ipul') as HTMLElement;
              if (rumahIpul) {
                rumahIpul.style.backgroundColor = colors[colorIndex];
                colorIndex = (colorIndex + 1) % colors.length;
              }
            };
          }
        }, 100);
      }
      
      setTimeout(() => {
        setShowSuccess(false);
        setCurrentMissionIndex(prev => prev + 1);
        
        if (currentMissionIndex + 1 >= missions.length - 1) {
          setIsSandboxMode(true);
        }
      }, 2000);
    } else {
      setIpulState(inputCode.length > 0 ? 'confused' : 'normal');
    }
  };

  useEffect(() => {
    validateCode(code);
  }, [code, currentMissionIndex]);

  return {
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
    missions,
    validateCode
  };
}
