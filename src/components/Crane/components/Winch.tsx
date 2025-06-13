const Winch = () => {
  return (
    <div
      id="winch"
      className="rounded-[40%] h-10 aspect-square bg-red-400 bg-alum-texture z-20 relative flex items-center justify-center drop-shadow-crane-shadow"
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-3">
          <div className="w-1 aspect-square bg-gray-300" />
          <div className="w-1 aspect-square bg-gray-300" />
        </div>
        <div className="flex flex-row gap-3">
          <div className="w-1 aspect-square bg-gray-300" />
          <div className="w-1 aspect-square bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Winch;
