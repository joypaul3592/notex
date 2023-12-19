import Image from "next/image";
import logo from '../../../../assets/image/logo/logowhite.png'

export default function Logo() {
    return (
        <Image
            src={logo}
            alt="logo image"
            className="w-32"
        />
    )
}
