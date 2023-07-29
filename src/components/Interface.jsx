import { Affix, Button, Stack } from "@mantine/core";
import { useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "../context/context";
// import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Interface = () => {
  // const { animations, animationIndex, setAnimationIndex } =
    // useCharacterAnimations();
    const { animations1, animationIndex, setAnimationIndex }= useCharacterAnimations();

    // console.log(animations);
  return (
    <Affix position={{ bottom: 50, right: 10 }}>
    <Stack>
      {animations1.map((animation, index)=> (
        <Button
        key={animation}
        variant={index === animationIndex ? 'filled' : 'light'}
        onClick={()=> setAnimationIndex(index)}
        >
          {animation === "GuitarPlaying" && " Guitar Playing"}
          {animation === "Idle" && "Idle"}
          {animation === "Running" && "Running"}
          {animation === "SalsaDancing" && "Salsa Dancing"}
          {animation === "TPose" && "T Pose"}
          
        </Button>
      ))}
    </Stack>
    </Affix>
  );
};

export default Interface;
