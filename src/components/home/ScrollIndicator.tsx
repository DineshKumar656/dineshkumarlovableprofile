
const ScrollIndicator = () => {
  return (
    <div className="text-center mt-16">
      <div className="inline-block animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-white/70 text-sm mt-2 font-medium">Scroll to explore</p>
      </div>
    </div>
  );
};

export default ScrollIndicator;
