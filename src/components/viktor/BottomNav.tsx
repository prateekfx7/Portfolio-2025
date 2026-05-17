import Button from "./Button";

export default function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-white rounded-full px-8 py-2 shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.12),inset_0_2px_8px_0_rgba(255,255,255,0.5)]">
        <span className="font-mondwest text-2xl font-semibold text-[#051A24]">P</span>
        <Button variant="primary" href="mailto:prateekmaurya862@gmail.com">
          Start a chat
        </Button>
      </div>
    </div>
  );
}
