import Link from "next/link";
import Image from "next/image";

import Linkedin from '@/shared/assets/social/linkedin.svg';
import Github from '@/shared/assets/social/github.svg';
import Telegram from '@/shared/assets/social/telegram.svg';

const Social = () => {
    return (
        <ul className="flex gap-4">
            <Link href="https://www.linkedin.com/in/maks-rychkov-86bb93246/" target="_blank" className="align-center flex">
                <Image 
                    src={Linkedin}
                    width={25}
                    height={25}
                    alt="Linkedin"
                />
            </Link>
            <Link href="https://github.com/flausdr" target="_blank" className="align-center flex">
                <Image 
                    src={Github}
                    width={25}
                    height={25}
                    alt="Github"
                />
            </Link>
            <Link href="https://t.me/Flausdr" target="_blank" className="align-center flex">
                <Image 
                    src={Telegram}
                    width={25}
                    height={25}
                    alt="Telegram"
                />
            </Link>
        </ul>
    )
}

export default Social;