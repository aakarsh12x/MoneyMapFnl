import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";

function Hero() {
  return (
    <section className="relative bg-white flex items-center flex-col overflow-hidden">
      {/* Decorative elements for visual interest */}
      <div className="absolute top-24 left-12 w-16 h-16 rounded-full border-[3px] border-indigo-200 opacity-60" />
      <div className="absolute top-40 right-20 w-10 h-10 rounded-lg border-[3px] border-amber-300 opacity-50 rotate-12" />
      <div className="absolute top-72 left-[8%] w-6 h-6 bg-emerald-400 rounded-full opacity-40" />
      <div className="absolute top-56 right-[12%] w-4 h-4 bg-indigo-400 rounded-full opacity-30" />
      <div className="absolute top-96 right-[6%] w-8 h-8 rounded-full border-[3px] border-rose-300 opacity-40" />
      <div className="absolute top-[28rem] left-[5%] w-5 h-5 bg-amber-400 rounded-sm rotate-45 opacity-35" />

      {/* Dot grid pattern */}
      <div className="absolute top-32 right-32 grid grid-cols-4 gap-2.5 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400" />
        ))}
      </div>
      <div className="absolute top-80 left-24 grid grid-cols-3 gap-2 opacity-15">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
        ))}
      </div>

      <div className="flex flex-col overflow-hidden relative z-10">
        <ContainerScroll
          titleComponent={
            <>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-semibold text-indigo-700 tracking-wide">
                  Smart budgeting for real life
                </span>
              </div>
              <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Where your money
                <br />
                <span className="relative inline-block text-primary">
                  actually makes sense
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8.5C50 2.5 100 2 150 5.5C200 9 250 4 298 7" stroke="#4845d2" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.4" />
                  </svg>
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-xl mx-auto font-normal leading-relaxed">
                Track spending, set budgets, and hit your goals, with a dashboard that&apos;s actually enjoyable to use.
              </p>

              {/* Trust row */}
              <div className="flex items-center justify-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-indigo-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-indigo-700">A</div>
                    <div className="w-7 h-7 rounded-full bg-amber-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-amber-700">R</div>
                    <div className="w-7 h-7 rounded-full bg-emerald-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-emerald-700">S</div>
                  </div>
                  <span className="text-sm text-slate-500">Trusted by <strong className="text-slate-700">2,000+</strong> users</span>
                </div>
                <div className="h-4 w-px bg-slate-200" />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-slate-500 ml-1">4.9/5</span>
                </div>
              </div>
            </>
          }
        >
          <Image
            src={`/dashboard.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}

export default Hero;
