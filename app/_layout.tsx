import {Stack} from "expo-router";

const stacklayout=()=>{
  return(
    <Stack>
      <Stack.Screen name="(tabs)"  options={{ headerShown: false }} />
    </Stack>
  );
};
export default stacklayout