import React, { useState } from 'react';
import { CheckCircle, Upload, Clock, Shield, Star } from 'lucide-react';

const PromptRegistryDemo = () => {
  const [step, setStep] = useState(1);
  const [prompt, setPrompt] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [email, setEmail] = useState('');

  const steps = [
    { id: 1, title: "Submit Prompt", icon: Upload },
    { id: 2, title: "Verify Identity", icon: Shield },
    { id: 3, title: "Generate Certificate", icon: CheckCircle },
    { id: 4, title: "Public Showcase", icon: Star }
  ];

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Register Your Innovative Prompt</h3>
            <textarea
              className="w-full h-32 p-3 border rounded-lg resize-none"
              placeholder="Enter your innovative prompt here... 

Example: 'Analyze the intersection of climate policy and economic incentives in developing nations, focusing on carbon credit systems and their effectiveness in reducing emissions while promoting sustainable development.'"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="student"
                checked={isStudent}
                onChange={(e) => setIsStudent(e.target.checked)}
                className="rounded"
              />
              <label htmlFor="student" className="text-sm">I'm a student (.edu email)</label>
            </div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-700">
                <strong>Cost:</strong> {isStudent ? 'FREE' : '$5'} 
                {isStudent && ' (Students with .edu emails get free registration)'}
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Identity Verification</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Verifying...</span>
              </div>
              {isStudent ? (
                <div className="space-y-2">
                  <p className="text-sm">✓ .edu email confirmed</p>
                  <p className="text-sm">✓ Student status verified</p>
                  <p className="text-sm">✓ University: ***ford.edu (masked for privacy)</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm">✓ Email verified</p>
                  <p className="text-sm">✓ Payment processed ($5)</p>
                  <p className="text-sm">✓ Identity confirmed</p>
                </div>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Certificate Generated</h3>
            <div className="bg-white border-2 border-green-200 rounded-lg p-4">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-lg">Prompt Certificate</h4>
                <div className="bg-gray-50 p-3 rounded text-sm font-mono">
                  PromptID: PACS-PUB-20250710-001
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Registered:</strong> July 10, 2025, 3:42 PM UTC</p>
                  <p><strong>Owner:</strong> {isStudent ? 'Student @***ford.edu' : 'Public User'}</p>
                  <p><strong>Verification:</strong> Cryptographically Signed</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-sm">
                  <p className="font-medium mb-1">Share your verified expertise:</p>
                  <p>✓ Add to LinkedIn profile</p>
                  <p>✓ Include in portfolio</p>
                  <p>✓ Reference in applications</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Public Showcase</h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Climate Policy Analysis Framework</h4>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">VERIFIED</span>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  "Analyze the intersection of climate policy and economic incentives..."
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>By: Student @***ford.edu</span>
                  <span>Registered: July 10, 2025</span>
                </div>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Policy Analysis</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Academic</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-3 rounded-lg">
              <p className="text-sm font-medium text-yellow-800 mb-1">Instant Verification</p>
              <p className="text-xs text-yellow-700">
                Anyone can verify this prompt's authenticity at: 
                <br />
                <span className="font-mono">verify.promptid.com/PACS-PUB-20250710-001</span>
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">PromptID Public Registry</h1>
        <p className="text-gray-600">Register innovative prompts • Build verified portfolios • Protect IP</p>
      </div>
