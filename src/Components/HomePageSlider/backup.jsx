<section className="hidden sm:block relative -top-40 border-b-2 border-black cursor-pointer bg-customYellow w-screen overflow-hidden ">
<div className="w-screen overflow-hidden hd:h-[593px] fullhd:h-[923px] qhd:h-[2313px] 4k:h-[1713px] relative top-[-90px] hd:top-[60px] fullhd:top-[90px] qhd:top-[-50px] 4k:top-[160px] md:h-[450px] md:top-20">
  <div className="w-screen overflow-hidden scale-150">
    <Carousel
      swipeable={true}
      emulateTouch={true}
      showStatus={false}
      showThumbs={false}
      showIndicators={true}
      centerMode={false}
      infiniteLoop={true}
      showArrows={true}
      transitionTime={8000}
      stopOnHover={true}
      className="scale-125 h-[800px] relative top-[150px] 4k:h-[1513px] 4k:top-[330px]"
    >
      <div>
        {/* Button with an overlay that contains a link */}
        <div>
          <img
            src="/carousel-image.png"
            alt="Image for the Carousel"
            className="w-full h-full inline-block cursor-pointer mt-20"
          />
          {/* Overlay */}
          <button className="absolute top-60 flex items-center justify-center opacity-100 transition-opacity left-[15%] hover:opacity-100">
            <Link
              to="/destination1"
              className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
            >
              Jedi Mind T-Shirts
            </Link>
          </button>
          <button className="absolute top-60 flex items-center justify-center opacity-100 transition-opacity left-[42%] hover:opacity-100">
            <Link
              to="/destination1"
              className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
            >
              Converse All Star
            </Link>
          </button>
          <button className="absolute top-60 flex items-center justify-center opacity-100 transition-opacity left-[62%] hover:opacity-100">
            <Link
              to="/destination1"
              className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
            >
              Converse All Star
            </Link>
          </button>
          <button className="absolute top-60 flex items-center justify-center opacity-100 transition-opacity left-[85%] hover:opacity-100">
            <Link
              to="/destination1"
              className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
            >
              Converse All Star
            </Link>
          </button>
        </div>
      </div>
      <div>
        {/* Cloned image for infinite loop */}
        <div>
          {/* Button with an overlay that contains a link */}
          <div>
            <img
              src="/carousel-image.png"
              alt="Image for the Carousel"
              className="w-full h-full inline-block cursor-pointer mt-20"
            />
            {/* Overlay */}
            <button className="absolute top-60 flex items-center justify-center opacity-100 transition-opacity left-[10%] hover:opacity-100">
              <Link
                to="/destination1"
                className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
              >
                Converse All Star
              </Link>
            </button>
            <button className="absolute top-60 flex items-center justify-center opacity-100 transition-opacity left-[42%] hover:opacity-100">
              <Link
                to="/destination1"
                className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
              >
                Converse All Star
              </Link>
            </button>
            <button className="absolute top-60 flex items-center justify-center opacity-100 transition-opacity left-[62%] hover:opacity-100">
              <Link
                to="/destination1"
                className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
              >
                Converse All Star
              </Link>
            </button>
            <button className="absolute top-60 flex items-center justify-center opacity-100 transition-opacity left-[62%] hover:opacity-100">
              <Link
                to="/destination1"
                className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
              >
                Converse All Star
              </Link>
            </button>
            <button className="absolute top-60 flex items-center justify-center opacity-100 transition-opacity left-[85%] hover:opacity-100">
              <Link
                to="/destination1"
                className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
              >
                Converse All Star
              </Link>
            </button>
            <button className="absolute top-60 flex items-center justify-center opacity-100 transition-opacity left-[8%] hover:opacity-100">
              <Link
                to="/destination1"
                className="text-black text-xl bg-zinc-50 px-4 py-2 rounded-full"
              >
                Converse All Star
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  </div>
</div>
</section>