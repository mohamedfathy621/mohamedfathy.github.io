function ProfileFloaterSection({ children }) {
  return (
    <div className="flex flex-col fixed max-w-1/3">
      <p className=" text-sm sm:text-xl md:text-6xl mb-3 font-bold">
        Mohamed Fathy
      </p>
      <p className=" text-xs sm:text-lg md:text-2xl mb-4">
        FULL-STACK ENGINEER
      </p>
      <p className=" text-xs sm:text-base md:text-xl mb-2">
        I design and build innovative , accurate and modern software solutions
        for complex problems .
      </p>
      <p className="text-xs sm:text-base md:text-xl mb-12">
        always learning always evolving .
      </p>

      {children}
    </div>
  );
}

export default ProfileFloaterSection;
