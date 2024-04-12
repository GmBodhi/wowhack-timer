import {
  BBAnchor,
  Center,
  Edges,
  GradientTexture,
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
      <Plane args={[2.5, 1.3]} rotation={rotation}>
        {/* <Center> */}
        <BBAnchor anchor={[0, 0, 0]}>
          <Text fontSize={1} rotation={rotation} textAlign="center">
            <meshBasicMaterial>
              <GradientTexture
                stops={[0, 1]}
                colors={["blue", "red"]}
                size={1024}
              />
            </meshBasicMaterial>
            {children}
          </Text>
        </BBAnchor>
        {/* </Center> */}
      </Plane>
    </group>
  );
}

export default Digits;
