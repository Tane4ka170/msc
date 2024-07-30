import { LoaderLines } from "./Loader.styled";

const Loader = () => {
  return (
    <div>
      <LoaderLines
        color="#9ce3f9"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
};

export default Loader;
