import React from 'react'
import Image from 'next/image'


export default function contact() {
  return (
    <div className="min-h-screen bg-[#f6f2e0] py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <header className="text-center mb-16">
          <h1 className="text-[clamp(4rem,18vw,12rem)] font-black text-[#41393c] [text-shadow:_8px_8px_1px_#cb9917] italic uppercase leading-[0.8] tracking-tighter">
            Contract <br /> Project
          </h1>
          <div className="mt-8 h-2 w-32 bg-[#41393c] mx-auto rounded-full"></div>
        </header>

        <div className="w-full bg-white rounded-[3rem] shadow-2xl border-b-[12px] border-[#b6a29c] p-10 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <h2 className="text-5xl font-black text-[#41393c] uppercase italic leading-tight">
              Verified <br /> Agreements.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-semibold">
              Automated deployment and real-time verification for digital contracts. 
            </p>
            
            <div className="space-y-4 font-bold text-[#41393c]">
              <div className="flex items-center gap-4">
                <span>🛡️</span> <span>Encrypted Core</span>
              </div>
              <div className="flex items-center gap-4">
                <span>⚡</span> <span>Instant Deployment</span>
              </div>
              <div className="flex items-center gap-4">
                <span>✅</span> <span>Smart Templates</span>
              </div>
            </div>

            <button className="bg-[#41393c] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-xl">
              GET STARTED →
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#cb9917] rounded-[2.5rem] rotate-6 opacity-20"></div>
            <div className="relative bg-[#41393c] p-12 rounded-[2.5rem] border-4 border-white shadow-xl flex flex-col items-center text-center">
              <span className="text-[5rem] mb-4">📄</span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-widest">System.Active</h3>
              <p className="text-white/60 mt-2 italic font-mono uppercase">Dev-Mode-2026</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}