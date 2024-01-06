
export default function Header() {
  return (
    <section
      id="headerContainer"
      className="w-[100vw] h-[100svh] flex justify-center place-content-baseline mb-24"
    >
      <div
        id="header"
        className="w-full h-[100vh] flex place-items-end px-4 md:px-10 rounded-xl"
      >
        <div className="headerTitlesContainer z-10">
          <h5 className="relative text-base md:text-[1.5vw] text-[#FFB950] font-normal w-fit md:w-[30vw] md:-mt-10">
            The best way to understand the magnetic reconnection of the sun.
          </h5>
          <h1 className="text-[15vw] md:text-[10vw] font-semibold text-[#FFB950] h-min md:-mt-6">
            SOLARIS
          </h1>
        </div>
      </div>
    </section>
  );
};
