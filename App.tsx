import React, { useState, useEffect, useCallback } from 'react';
import { AppLauncher } from './components/AppLauncher';
import { GabyInterface } from './components/GabyInterface';
import { PhoneShell } from './components/PhoneShell';
import { AppScreen } from './components/AppScreen';
// FIX: Switched from deepseekService to geminiService to use the Gemini API.
import { getAutomationAction } from './services/geminiService';
import { MOCK_APPS } from './constants';
import type { AppDefinition, AutomationAction, ChatMessage, ScreenElement } from './types';
import { CommandType } from './types';

const App: React.FC = () => {
  // FIX: Removed API key state management to align with guidelines to use environment variables.
  const [currentAppId, setCurrentAppId] = useState<string>('home');
  const [currentScreenId, setCurrentScreenId] = useState<string>('main');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [simulatedAction, setSimulatedAction] = useState<AutomationAction | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const currentApp: AppDefinition = MOCK_APPS[currentAppId] || MOCK_APPS['home'];
  const currentScreen = currentApp.screens[currentScreenId];

  useEffect(() => {
    if (simulatedAction) {
      const timer = setTimeout(() => setSimulatedAction(null), 1000); // Animation duration
      return () => clearTimeout(timer);
    }
  }, [simulatedAction]);

  const navigateTo = useCallback((appId: string, screenId: string) => {
    setCurrentAppId(appId);
    setCurrentScreenId(screenId);
  }, []);

  const handleCommand = async (command: string) => {
    if (!command.trim()) return;

    setIsLoading(true);
    setErrorMessage('');
    const userMessage: ChatMessage = { sender: 'user', text: command };
    setChatHistory(prev => [...prev, userMessage]);

    try {
      const screenDescription = currentScreen.elements.map(e => `- ${e.type} com descrição "${e.description}" em (${e.x}, ${e.y}) com tamanho ${e.width}x${e.height}. ID: ${e.id}`).join('\n');
      // FIX: Removed apiKey argument as the service now uses the environment variable.
      const action = await getAutomationAction(command, screenDescription);

      if (action) {
        setSimulatedAction(action);
        const gabyMessage: ChatMessage = { sender: 'gaby', text: `OK, vou tocar em "${action.elementDescription}".` };
        setChatHistory(prev => [...prev, gabyMessage]);

        if (action.type === CommandType.TAP) {
            const tappedElement = currentScreen.elements.find(
                e => Math.abs(e.x - action.x) < e.width / 2 && Math.abs(e.y - action.y) < e.height / 2
            );

            if (tappedElement?.navigateTo) {
                setTimeout(() => {
                    navigateTo(tappedElement.navigateTo!.appId, tappedElement.navigateTo!.screenId);
                }, 500);
            }
        }
      } else {
        const gabyMessage: ChatMessage = { sender: 'gaby', text: "Não tenho certeza de como fazer isso. Você pode ser mais específico?" };
        setChatHistory(prev => [...prev, gabyMessage]);
      }
    } catch (error) {
      console.error(error);
      // FIX: Updated error message to be more generic since API key is not user-provided.
      const errorMessageText = 'Ocorreu um erro ao processar sua solicitação. Verifique se sua chave de API está configurada corretamente e tente novamente.';
      setErrorMessage(errorMessageText);
      const gabyMessage: ChatMessage = { sender: 'gaby', text: errorMessageText };
      setChatHistory(prev => [...prev, gabyMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectApp = (appId: string) => {
    setCurrentAppId(appId);
    setCurrentScreenId(MOCK_APPS[appId]?.initialScreen || 'main');
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-700/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
      
      {/* FIX: Removed ApiKeyModal to adhere to the guideline of not prompting the user for an API key. */}
      <div className="w-full max-w-6xl mx-auto z-10">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">Gaby Automação com IA</h1>
          <p className="text-gray-400 mt-2">Seu assistente pessoal de IA para automação de aplicativos.</p>
        </header>
        
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-2">
            <AppLauncher onSelectApp={handleSelectApp} selectedAppId={currentAppId} />
          </aside>
          
          <section className="lg:col-span-5 flex justify-center">
            <PhoneShell>
              <AppScreen screen={currentScreen} simulatedAction={simulatedAction} />
            </PhoneShell>
          </section>
          
          <section className="lg:col-span-5">
            <GabyInterface 
              chatHistory={chatHistory} 
              onSendCommand={handleCommand} 
              isLoading={isLoading}
              errorMessage={errorMessage}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
