import Image from "next/image";
import Button from "../../components/Button";
import FancyButton from "../../components/FancyButton";


export default function Home() {
  return (
    <div>
      {/* <Image src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6" alt=""   fill  style= {{objectFit: 'cover'}}/> */}
      <div>
      <Button/>
      <FancyButton/>
      </div>
      
    </div>
   
  )
}
