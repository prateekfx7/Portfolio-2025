import Button from "./Button";

export default function PricingSection() {
  return (
    <section className="w-full py-12 px-6">
      <div className="md:max-w-4xl md:ml-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 bg-[#051A24] text-[#F6FCFF] shadow-[inset_0_2px_8px_0_rgba(255,255,255,0.08)] opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h3 className="text-[22px] font-medium mt-8">Web Development</h3>
          <p className="text-[#E0EBF0] mt-3 leading-relaxed">
            Landing pages, portfolios, and full sites.
            <br />
            Designed and built by Prateek.
          </p>
          <div className="mt-8">
            <div className="text-2xl text-[#F6FCFF]">₹15,000</div>
            <div className="text-[#E0EBF0] text-sm mt-1">Starting</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button variant="primary" href="mailto:prateekmaurya862@gmail.com">
              Start a chat
            </Button>
            <Button variant="secondary" href="tel:+916264638602">
              Call me
            </Button>
          </div>
        </div>
        <div
          className="rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="text-[22px] font-medium mt-8 text-[#0D212C]">Video Editing</h3>
          <p className="text-[#273C46] mt-3 leading-relaxed">
            Reels, shorts, YouTube, and ads.
            <br />
            Crafted to keep viewers watching.
          </p>
          <div className="mt-8">
            <div className="text-2xl text-[#0D212C]">₹5,000</div>
            <div className="text-[#273C46] text-sm mt-1">Starting</div>
          </div>
          <div className="mt-8">
            <Button variant="tertiary" href="mailto:prateekmaurya862@gmail.com">
              Start a chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
