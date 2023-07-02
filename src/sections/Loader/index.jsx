import { Loader } from "./styles";
import Vsvg from "../../assets/svgs/d.jpg";

function InitialLoader() {
  return (
    <Loader>
      {/* <div className="img-wrap">
        <img src="/logo512.png" alt="logo" className="loding-logo" />
      </div> */}
      <Vsvg />
    </Loader>
  );
}

export default InitialLoader;
