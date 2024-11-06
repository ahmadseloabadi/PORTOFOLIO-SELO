const SasukeMangekyo = () => {
  return (
    <div className="group relative w-16 h-16 transition-all duration-500 hover:scale-110">
      {/* Sharingan */}
      <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
        <div className="relative w-16 h-16 bg-[#e41414] rounded-full  animate-[spin_5s_linear_infinite] shadow-[0_0_15px_5px_rgba(228,20,20,0.7)]">
          {/* Inner Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-[rgba(110,13,13,0.5)]">
            {/* Tomoe 1 */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-black rounded-full 
                before:content-[''] before:absolute before:top-[-0.25em] before:w-[0.95em] before:h-[0.45em] 
                before:border-l-[8px] before:border-l-black before:rounded-tl-full"
            />

            {/* Tomoe 2 */}
            <div
              className="absolute bottom-1 left-[-0.15em] w-2 h-2 bg-black rounded-full rotate-[-120deg]
                before:content-[''] before:absolute before:top-[-0.25em] before:w-[0.95em] before:h-[0.45em] 
                before:border-l-[8px] before:border-l-black before:rounded-tl-full"
            />

            {/* Tomoe 3 */}
            <div
              className="absolute bottom-1 right-[-0.15em] w-2 h-2 bg-black rounded-full rotate-[120deg]
                before:content-[''] before:absolute before:top-[-0.25em] before:w-[0.95em] before:h-[0.45em] 
                before:border-l-[8px] before:border-l-black before:rounded-tl-full"
            />

            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full shadow-[0_0_8px_2px_rgba(0,0,0,0.6)]" />
          </div>
        </div>
      </div>

      {/* Mangekyo */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="relative w-16 h-16 bg-[#050505] rounded-full  animate-[spin_5s_linear_infinite] group-hover:shadow-[0_0_15px_5px_rgba(228,20,20,0.7)]">
          {/* mangekyo point 2 */}
          <div
            className="absolute top-1/2 left-1/2 h-[2.8em] w-[2.8em] -translate-x-1/2 -translate-y-1/2 
              bg-[#e41414] rounded-[0%_100%_0%_100%/0%_100%_0%_100%] rotate-[-15deg] animate-shine"
          />
          <div
            className="absolute z-10 top-1/2 left-1/2 h-[2.8em] w-[2.8em] -translate-x-1/2 -translate-y-1/2 
              bg-transparent border-[1.5px] border-black  rounded-[0%_100%_0%_100%/0%_100%_0%_100%] rotate-[-15deg] animate-shine"
          />

          {/* mangekyo point 2 */}
          <div
            className="absolute top-1/2 left-1/2 h-[2.8em] w-[2.8em] -translate-x-1/2 -translate-y-1/2 
              bg-[#e41414] rounded-[100%_0%_100%_0%/100%_0%_100%_0%] rotate-[15deg] animate-shine"
          />
          <div
            className="absolute z-10 top-1/2 left-1/2 h-[2.8em] w-[2.8em] -translate-x-1/2 -translate-y-1/2 
              bg-tranparent rounded-[100%_0%_100%_0%/100%_0%_100%_0%] rotate-[15deg] border-[1.5px] border-black animate-shine"
          />
          {/* mangekyo point 3 */}
          <div
            className="absolute top-1/2 left-1/2 h-[2.8em] w-[2.8em] -translate-x-1/2 -translate-y-1/2 
              bg-[#e41414] rounded-[100%_0%_100%_0%/100%_0%_100%_0%] rotate-[-45deg] animate-shine 
              "
          />
          <div
            className="absolute z-10 top-1/2 left-1/2 h-[2.8em] w-[2.8em] -translate-x-1/2 -translate-y-1/2 
              bg-transparent border-[1.5px] border-black rounded-[100%_0%_100%_0%/100%_0%_100%_0%] rotate-[-45deg] animate-shine 
              "
          />

          {/* Center Circle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black 
              rounded-full shadow-[0_0_8px_2px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>
    </div>
  );
};

export default SasukeMangekyo;
