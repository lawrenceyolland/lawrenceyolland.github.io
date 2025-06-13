import Container from "./Container";
import Rigging from "./Rigging";

const Load = () => {
  return (
    <div className="absolute top-full right-0 rotate-[30deg] origin-top-right">
      <div className="relative w-[4px] h-[200px] ">
        <Rigging />
        <Container />
      </div>
    </div>
  );
};

export default Load;
