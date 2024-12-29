import "./NavigationBar.css"
import { motion } from "framer-motion";



function  NavigationBar(){
return (
<>


<h1 className="Title"><u><strong 
> <motion.img       animate={{ rotate: 360 }} // Counter-clockwise rotation
      transition={{ repeat: Infinity, duration: 100, ease: "linear" }} className="logo" src="vite.svg"></motion.img>GREATMINDS TECH</strong></u></h1>


    

</>

)

}
export default NavigationBar;