import { Redirect } from "expo-router";
import home from "./(tabs)/home";
import firstlanding from "./firstlandingpage";
export default()=>{
    return(
       <Redirect href="/firstlandingpage" /> // when the page is loaded, it will redirect to the home page
    )
}
