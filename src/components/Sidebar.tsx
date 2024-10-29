import React, { useState } from 'react';
import { FileText, Upload, FolderOpen, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  isDarkMode: boolean;
}

export default function Sidebar({ isOpen, onToggle, isDarkMode }: SidebarProps) {
  const [pdfs, setPdfs] = useState<string[]>([
    'Documentation.pdf',
    'User Guide.pdf'
  ]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdfs(prev => [...prev, file.name]);
    }
  };

  if (!isOpen) {
    return (
      <div className="w-16 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 relative">
        <button
          onClick={onToggle}
          className="w-full p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300 mt-2 ml-1" />
        </button>
      </div>
    );
  }

  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 relative">
      <button
        onClick={onToggle}
        className="absolute -right-3 top-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-1 shadow-sm hover:shadow-md transition-shadow"
      >
        <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
      </button>

      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <label className="flex items-center justify-center w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg cursor-pointer transition-colors">
          <Upload className="w-5 h-5 mr-2" />
          Upload PDF
          <input
            type="file"
            className="hidden"
            accept=".pdf"
            onChange={handleFileUpload}
          />
        </label>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3 flex items-center">
          <FolderOpen className="w-4 h-4 mr-2" />
          Your PDFs
        </h2>
        <div className="space-y-2">
          {pdfs.map((pdf, index) => (
            <div
              key={index}
              className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer group transition-colors"
            >
              <FileText className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
              <span className="text-sm text-gray-700 dark:text-gray-300 truncate">{pdf}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}