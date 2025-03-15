import {Tabs} from "expo-router";
import List from "./List";
export default()=>{
    return(
      
           <Tabs>
                <Tabs.Screen name="List"  />
                <Tabs.Screen name="TabTwo"  />
           </Tabs>
        
    )
}