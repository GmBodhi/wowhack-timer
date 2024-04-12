import {
  BBAnchor,
  Center,
  Edges,
  GradientTexture,
  Html,
  Plane,
  Text,
} from "@react-three/drei";

function Digits({
  children,
  position,
  rotation,
}: {
  children: React.ReactNode;
  position?: [number, number, number];
  rotation?: [number, number, number];
}) {
  return (
    <group position={position} rotation={[0, 0, 0]}>
      {/* <Center> */}
      <Text fontSize={1.5} rotation={rotation} textAlign="center">
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]}
            colors={["blue", "red"]}
            size={1024}
          />
        </meshBasicMaterial>
        <BBAnchor anchor={[0, 0, -5]}>
          {/* <Html center position={[0,0,0]} style={{ color: "white" }}>
            <div className="w-[450px] h-56 bg-white opacity-5 rounded-2xl -z-10">

            </div>
          </Html> */}
        </BBAnchor>
        {children}
      </Text>
      {/* </Center> */}
    </group>
  );
}

export default Digits;
