function ProfileFloaterSection({ children }) {
  return (
    <div className="flex flex-col fixed max-w-1/4">
      <p className=" text-6xl mb-3">Mohamed Fathy</p>
      <p className=" text-2xl mb-4">FULL-STACK ENGINEER</p>
      <p className=" text-xl mb-2">
        I design and build innovative , accurate and modern software solutions
        for complex problems .
      </p>
      <p className=" text-xl mb-12">always learning always evolving .</p>

      {children}
    </div>
  );
}

export default ProfileFloaterSection;
