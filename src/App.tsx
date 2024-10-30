import React, { useState } from 'react';
import { MessageSquare, Moon, Sun } from 'lucide-react';
import InsightsIcon from '@mui/icons-material/Insights';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Sidebar from './components/Sidebar.tsx';
import ChatInterface from './components/ChatInterface.tsx';

function App() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: message }]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'This is a simulated response. Connect your backend API here.'
      }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Sidebar isOpen={isSidebarOpen} onToggle={() => setSidebarOpen(!isSidebarOpen)} isDarkMode={isDarkMode} />
        <main className="flex-1 flex flex-col">
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <InsightsIcon fontSize="large" className="text-indigo-600 dark:text-indigo-400" />
                <h1 className="text-3xl font-bold font-Urbanist tracking-wide text-gray-700 dark:text-white">Guided Operations</h1>
              </div>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </header>
          <Card className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700  transition-colors mt-4 ml-4 w-1/2">
            {/* You can add content to your card here */}
            <CardContent>
              <Typography variant="h6" component="div" fontFamily={"Urbanist"} fontWeight={600} marginBottom={1}>
                Welcome to Guided Operations !
              </Typography>
              <Typography variant="body2" color="text.secondary" font-family="Urbanist">
              Speak the solution into existence. Elevate your workflow with guided operations where intelligent, real-time assistance transforms challenges into streamlined success.
              </Typography>
            </CardContent>
          </Card>
          <ChatInterface
            messages={messages}
            loading={loading}
            input={input}
            setInput={setInput}
            onSendMessage={handleSendMessage}
            isDarkMode={isDarkMode}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
