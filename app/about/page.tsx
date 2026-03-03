import Image from "next/image";
import React from 'react'

export default function Aboutpage() {
    return <div className="max-w-5xl mx-auto py-16 px-6">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold [text-shadow:_3px_3px_1px_#cb9917] uppercase mb-4">
          About Me
        </h1>
        <p className="text-[clamp(1rem,3vw,1.5rem)] text-[#41393c] max-w-2xl mx-auto">
          Passionate Computer Science student at PSU Phuket, exploring the world of 
          Natural Language Processing and modern Web Development.
        </p>
      </section>

      {/* Profile & Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Image - Placeholder for your photo */}
        <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#b6a29c]">
           <Image 
             src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070" 
             alt="Workspace" 
             fill 
             className="object-cover"
           />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#41393c] border-b-2 border-[#b6a29c] pb-2 inline-block ">
            Education & Projects
          </h2>
          <p className="text-lg leading-relaxed text-[#41393c]">
            I am currently pursuing my degree at the <strong>College of Computing, PSU Phuket</strong>. 
            My academic journey involves solving complex problems through code, ranging from 
            Calculus to System Architecture.
          </p>
          <p className="text-lg leading-relaxed text-[#41393c]">
            One of my major focuses is <strong>Natural Language Processing (NLP)</strong>. 
            I am currently developing the <em>"Tos translator"</em> project, which aims 
            to make legal documents easier for everyone to understand.
          </p>
          
          {/* Interests Tags */}
          <div className="flex flex-wrap gap-3 pt-4">
            {['Next.js', 'Tailwind CSS', 'NLP', 'Python', 'UI/UX'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-[#41393c] text-white rounded-full text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hobbies / Personal Section */}
      <section className="mt-20 p-8 bg-[#b6a29c]/10 rounded-3xl">
        <h3 className="text-2xl font-bold mb-6 text-center text-[#41393c]">Beyond the Code</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <span className="text-4xl ">🎮</span>
            <p className="mt-2 font-semibold text-[#41393c]">Gaming enthusiast (Minecraft & Simulators)</p>
          </div>
          <div>
            <span className="text-4xl">🚗</span>
            <p className="mt-2 font-semibold text-[#41393c]">Classic & Affordable Car Culture</p>
          </div>
          <div>
            <span className="text-4xl">🎵</span>
            <p className="mt-2 font-semibold text-[#41393c]">Electronic Music & DJ History</p>
          </div>
        </div>
      </section>
    </div>
}