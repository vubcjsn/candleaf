import LogoImage from "@/assets/images/logo.png";
import Image from "next/image";

function Logo() {
  return (
    <>
      <Image src={LogoImage} alt="Candle Leaf" width={126} height={34} />
    </>
  );
}

export default Logo;
