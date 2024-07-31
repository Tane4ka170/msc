import { LoaderContainer, LoaderLines } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderLines
        color="#9ce3f9"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </LoaderContainer>
  );
};

export default Loader;
