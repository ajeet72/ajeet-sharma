"use client";

import {
  Bot,
  Users,
  Cpu,
  Wrench,
  Activity,
  MessageSquareText,
  LayoutDashboard,
  BadgeCheck,
  Cloud,
  CreditCard,
  TrendingUp,
  Globe,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";
import CenterButton from "./centerButton";



export function ServiceSection() {
  return (
    <div>
      <CenterButton name="Services"/>
      <FeatureCards/>
      <AIDashboard/>
    </div>
  )
}


export function FeatureCards() {
  return (
    <div className="flex items-center justify-center px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
        <div className="bg-gradient-to-br from-[#1A0E2A] via-[#1C112D] to-[#11071F] text-white rounded-2xl p-6 border border-gray-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
          <div>
            <div className="mb-3 text-sm text-gray-400 flex items-center gap-2">
              <Bot className="text-green-400" size={20} />
              Smart Interaction Layer
            </div>

            {/* AI Chat Simulation */}
            <div className="bg-[#1e1e1e] p-4 rounded-lg space-y-3 border border-gray-700">
              {/* Chat Bubbles */}
              <div className="bg-[#2a2a2a] px-3 py-2 rounded-lg w-4/5 text-sm">
                👋 Hi! Need help choosing a plan?
              </div>
              <div className="bg-[#005f73] px-3 py-2 rounded-lg w-3/5 text-sm ml-auto text-white">
                Show me options
              </div>
              <div className="bg-[#2a2a2a] px-3 py-2 rounded-lg w-4/5 text-sm">
                Here are 3 based on your usage 👇
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 text-xs text-gray-400 pt-2 border-t border-gray-700">
                <span className="bg-[#222] px-2 py-1 rounded-full flex items-center gap-1">
                  <Zap size={12} className="text-yellow-400" /> GPT-4 Response
                </span>
                <span className="bg-[#222] px-2 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck size={12} className="text-blue-400" /> End-to-End
                  Encrypted
                </span>
                <span className="bg-[#222] px-2 py-1 rounded-full flex items-center gap-1">
                  <MessageSquareText size={12} className="text-green-400" />{" "}
                  Multilingual
                </span>
              </div>

              {/* Confidence Scores */}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-1">Business Chatbot</h3>
            <p className="text-sm text-gray-400">
              Engage users 24/7 with intelligent AI chatbots that automate
              onboarding, support, and product recommendations — all
              multilingual and secure.
            </p>
          </div>
        </div>

        {/* MVP & Web App Development */}
        {/* MVP & Web App Development */}
        <div className="bg-gradient-to-br from-[#1A0E2A] via-[#1C112D] to-[#11071F] text-white rounded-2xl p-6 border border-gray-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
          <div>
            <div className="mb-3 text-sm text-gray-400 flex items-center gap-2">
              <LayoutDashboard className="text-cyan-400" size={20} />
              Build Engine + Dev Metrics
            </div>

            {/* Build Terminal Logs */}
            <div className="bg-[#1e1e1e] rounded-lg p-4 space-y-2 border border-gray-700 text-xs font-mono text-green-400">
              <p>&gt; npm run build</p>
              <p>✔ Optimizing images & fonts</p>
              <p>✔ Bundling 4 routes (SSG)</p>
              <p className="text-yellow-400">
                ⚠ LCP: 1.9s - Optimization Needed
              </p>
            </div>

            {/* Progress & Feature Blocks */}
            <div className="grid grid-cols-2 gap-3 text-sm mt-3 text-gray-300">
              <div className="bg-[#1a1a1a] p-3 rounded-lg flex flex-col text-center">
                <Users size={18} className="mx-auto text-purple-400" />
                <span>Client-Ready MVP</span>
                <span className="text-green-400 text-xs">~30 days</span>
              </div>
              <div className="bg-[#1a1a1a] p-3 rounded-lg flex flex-col text-center">
                <Cpu size={18} className="mx-auto text-orange-400" />
                <span>Scalable Backend</span>
                <span className="text-yellow-400 text-xs">Auto Scaling</span>
              </div>
            </div>

            {/* Feature Checklist */}
            <div className="text-xs text-gray-400 mt-3 border-t border-gray-700 pt-2 space-y-1">
              <div className="flex items-center gap-2">
                <BadgeCheck size={14} className="text-green-400" /> CI/CD
                Pipeline Setup
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck size={14} className="text-green-400" /> Auth + Role
                Access
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck size={14} className="text-green-400" /> REST &
                GraphQL APIs
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-1">
              MVP & Web App Development
            </h3>
            <p className="text-sm text-gray-400">
              From dev metrics to deploy — get a robust, scalable MVP or web app
              tailored to your startup’s goals, fast.
            </p>
          </div>
        </div>

        {/* Maintenance & Support */}
        <div className="bg-gradient-to-br from-[#1A0E2A] via-[#1C112D] to-[#11071F] text-white rounded-2xl p-6 border border-gray-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
          <div>
            <div className="mb-3 text-sm text-gray-400 flex items-center gap-2">
              <Wrench className="text-yellow-400" size={20} />
              Maintenance Tracker
            </div>

            <div className="bg-[#1e1e1e] p-4 rounded-lg space-y-3 border border-gray-700 text-sm text-gray-300">
              {/* Top Status Row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#1a1a1a] p-2 rounded-lg flex items-center justify-between">
                  <span>📁 DB Backups</span>
                  <BadgeCheck className="text-green-400" size={16} />
                </div>
                <div className="bg-[#1a1a1a] p-2 rounded-lg flex items-center justify-between">
                  <span>🔒 SSL Renewed</span>
                  <BadgeCheck className="text-green-400" size={16} />
                </div>
              </div>

              {/* Logs & Events */}
              <div className="bg-[#161616] p-2 rounded-md text-xs font-mono text-gray-400 space-y-1 border border-gray-700">
                <p className="text-green-400">
                  [INFO] Deploy v3.4 → success ✅
                </p>
                <p className="text-yellow-400">[WARN] Memory usage 82%</p>
                <p className="text-red-400">[ERROR] API latency spike</p>
                <p className="text-blue-400">[PING] Health check OK</p>
              </div>

              {/* Uptime */}
              <div className="bg-[#1a1a1a] p-2 rounded-md flex justify-between items-center text-sm">
                <span className="flex items-center gap-2">
                  <Activity size={16} className="text-green-500" />
                  Uptime
                </span>
                <span className="text-green-300">99.97%</span>
              </div>

              {/* Scheduled Tasks */}
              <div className="text-xs text-gray-400 pt-2 space-y-1 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    📅 Patch Update
                  </span>
                  <span>25 May, 2AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    🧼 Cache Cleanup
                  </span>
                  <span>Weekly</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-1">
              Maintenance & Support
            </h3>
            <p className="text-sm text-gray-400">
              From uptime monitoring to scheduled patches and deployment logs —
              we make sure your app runs smoothly 24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export function AIDashboard() {
  return (
    <div className="flex flex-col items-center justify-center px-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">

        {/* API & Payment Gateway Integrations */}
        <div className="bg-gradient-to-br from-[#1A0E2A] via-[#1C112D] to-[#11071F] rounded-2xl p-6 border border-gray-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
          <div>
            <div className="mb-3 text-sm text-gray-400 flex items-center gap-2">
              <CreditCard className="text-purple-400" size={20} />
              Third-Party Integrations
            </div>

            {/* API Keys & Transactions */}
            <div className="bg-[#1e1e1e] rounded-lg p-4 space-y-2 border border-gray-700 text-sm text-gray-300">
              <div className="flex justify-between items-center">
                <span>🔑 API Key Valid</span>
                <BadgeCheck className="text-green-400" size={16} />
              </div>
              <div className="flex justify-between items-center">
                <span>💳 Razorpay Linked</span>
                <BadgeCheck className="text-green-400" size={16} />
              </div>
              <div className="flex justify-between items-center">
                <span>📦 Stripe Connected</span>
                <BadgeCheck className="text-green-400" size={16} />
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 text-sm mt-3 text-gray-300">
              <div className="bg-[#1a1a1a] p-3 rounded-lg flex flex-col text-center">
                <Cloud size={18} className="mx-auto text-blue-400" />
                <span>Cloud Sync</span>
                <span className="text-green-400 text-xs">Real-time</span>
              </div>
              <div className="bg-[#1a1a1a] p-3 rounded-lg flex flex-col text-center">
                <Zap size={18} className="mx-auto text-yellow-400" />
                <span>Fast Payments</span>
                <span className="text-yellow-400 text-xs">1s Avg Time</span>
              </div>
            </div>

            {/* Feature Checklist */}
            
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-1">
              API & Payment Gateway
            </h3>
            <p className="text-sm text-gray-400">
              Integrate industry-standard gateways like Stripe, Razorpay, and
              Amazon Pay to handle payments securely and seamlessly — fully
              managed, scalable, and developer-ready.
            </p>
          </div>
        </div>

        {/* AI-Powered Analytics & Insights */}
        <div className="bg-gradient-to-br from-[#1A0E2A] via-[#1C112D] to-[#11071F] rounded-2xl p-6 border border-gray-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
          <div>
            <div className="mb-3 text-sm text-gray-400 flex items-center gap-2">
              <TrendingUp className="text-pink-400" size={20} />
              AI Insights Engine
            </div>

            {/* Insight Cards */}
            <div className="bg-[#1e1e1e] p-4 rounded-lg space-y-3 border border-gray-700 text-sm text-gray-300">
              <div className="flex justify-between items-center">
                <span>📊 Conversion Rate</span>
                <span className="text-green-400">+18.3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🔍 Top Keyword</span>
                <span className="text-yellow-400">"best deals"</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🌍 Global Reach</span>
                <span className="text-blue-400">37 countries</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 text-sm mt-3 text-gray-300">
              <div className="bg-[#1a1a1a] p-3 rounded-lg flex flex-col text-center">
                <Search size={18} className="mx-auto text-teal-400" />
                <span>SEO Intelligence</span>
                <span className="text-green-400 text-xs">Auto Insights</span>
              </div>
              <div className="bg-[#1a1a1a] p-3 rounded-lg flex flex-col text-center">
                <Globe size={18} className="mx-auto text-orange-400" />
                <span>Geo Trends</span>
                <span className="text-yellow-400 text-xs">Live Feed</span>
              </div>
            </div>

            {/* Feature Checklist */}
            
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-1">AI Analytics Suite</h3>
            <p className="text-sm text-gray-400">
              Leverage real-time insights with GPT-powered analytics, SEO
              automation, global user behavior mapping, and performance forecasts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
