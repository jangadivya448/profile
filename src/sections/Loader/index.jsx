import { Loader } from "./styles";
import Dsvg from "../../assets/svgs/d-svg";

function InitialLoader() {
  return (
    <Loader>
      {/* <div className="img-wrap"> */}
      <Dsvg />
      <b>Divya Janga</b>
      {/* </div> */}
    </Loader>
  );
}

export default InitialLoader;
