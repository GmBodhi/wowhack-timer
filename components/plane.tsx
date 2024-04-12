import { Plane, useTexture } from "@react-three/drei";
import Devfolio from "../sponsors/Polygon.png";

function Sponsor() {
    const devfolio = useTexture(Devfolio.src);
    
    console.log(devfolio);

  return (
    <Plane args={[8, 6]} position={[0, 0, -2]}>
      <meshBasicMaterial alphaMap={devfolio}></meshBasicMaterial>
    </Plane>
  );
}

export default Sponsor;
