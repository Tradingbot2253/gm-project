
import { motion } from "framer-motion";




function Ceo(){
    return(
<>
<hr></hr>
<center><u><strong><h1>Our Ceo's</h1></strong></u></center>

<h2><u> <motion.img animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20
        , ease: "linear" }}
      
       src="IMG-20210608-WA0003.jpg" className="ceo" ></motion.img>Visionary Leadership Driving Innovation</u><p><i>Our CEO's visionary leadership is the driving force behind our commitment to innovation and excellence. With a keen eye for emerging technologies and a passion for transforming ideas into reality, they steer our company towards new horizons, ensuring we stay at the forefront of the IoT industry. 

<em>~ENG.PETER KORIR, CEO, GREATMINDS TECH</em></i></p></h2>
<hr></hr>
<h2><img src="WhatsApp Image 2024-10-25 at 7.10.20 AM.jpeg" className="ceo"></img><u>A Message from our CEO</u><p><i>We’re thrilled to launch the Smart Energy project, a key step in our mission to revolutionize energy efficiency and sustainability. This innovative initiative will leverage the latest technology to create smarter, greener solutions for a brighter future. Thank you for your continued support as we lead the charge in transforming the energy landscape.<em>— ENG. DANIEL MIHESO, CEO, GREATMINDS TECH</em> </i></p></h2>
<hr></hr>
<h2> <img src="CEO2.jpeg" className="ceo"></img><u>A Message from Our CEO</u><p><i>We are excited to collaborate on the Smart Energy project, a groundbreaking venture set to redefine the future of energy. Together, we are combining our expertise and vision to drive innovation and sustainability. This partnership exemplifies our shared commitment to delivering smart, efficient solutions that benefit both our industries and the planet. Thank you for joining us on this transformative journey. <em>— ENG. PETER KIBAGENDI, CEO, GREAMINDS TECH</em></i></p></h2>
</>
    );
}
export default Ceo;