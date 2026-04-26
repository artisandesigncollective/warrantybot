import React from 'react';

/**
 * WarrantyBot: Landing Page
 * 
 * Pain Point: Car dealerships and electronics retailers deny warranty claims using illegal
 * technicalities ("you used aftermarket parts"). The Magnuson-Moss Warranty Act (15 U.S.C. §2301)
 * makes these denials federally illegal.
 * Solution: AI drafts an aggressive demand letter citing the exact Act, threatening FTC action.
 */

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-yellow-50 text-slate-900 font-sans selection:bg-yellow-600 selection:text-white">
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto border-b border-yellow-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-white font-black">W</div>
          <span className="text-xl font-black tracking-tighter">WarrantyBot</span>
        </div>
        <button className="text-sm font-bold text-yellow-700 hover:text-black transition">Claim Status</button>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-32 text-center">
        <div className="inline-block bg-yellow-200 text-yellow-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-8 border border-yellow-300">
          MAGNUSON-MOSS WARRANTY ACT ENFORCER
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05] mb-8 text-slate-900">
          Warranty denied? <span className="text-yellow-600 underline decoration-yellow-300">That's illegal.</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Car dealers and Best Buy deny warranty claims over technicalities like "you used aftermarket oil" or "you didn't buy the extended plan." Under the Magnuson-Moss Warranty Act, these denials are federally illegal. Our AI drafts a legal demand that forces them to honor the repair.
        </p>

        <button className="bg-yellow-500 text-white px-12 py-5 rounded-xl font-black text-xl hover:bg-yellow-600 transition shadow-[0_10px_40px_rgba(234,179,8,0.3)] w-full sm:w-auto">
          Force Warranty Honor ($39)
        </button>
        <p className="text-sm text-slate-500 mt-6 font-medium">Average repair value saved: $1,800. Works for cars, electronics, appliances, and furniture.</p>
      </main>

      <section className="bg-white border-y border-slate-200 py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-left">
          <div>
            <div className="text-4xl mb-4">🚘</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Auto Warranties</h2>
            <p className="text-slate-600 text-sm leading-relaxed">Dealer says "aftermarket parts void the warranty"? Federal law says otherwise. We cite 15 U.S.C. §2302(c) to force compliance.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">💻</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Electronics</h2>
            <p className="text-slate-600 text-sm leading-relaxed">Apple, Samsung, Best Buy — if your device broke within warranty, they must repair it. Our AI drafts the demand they can't ignore.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🏠</div>
            <h2 className="text-lg font-black text-slate-900 mb-3">Home Appliances</h2>
            <p className="text-slate-600 text-sm leading-relaxed">Refrigerator compressor failed at 3 years? Manufacturer warranties are often 5-10 years on sealed systems. We enforce it.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
