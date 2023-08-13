import Image from 'next/image';

import styles from '@/shared/styles/Home.module.css';

import FirstMan from '@/shared/assets/first-man.png';
import SecondMan from '@/shared/assets/second-man.png';
import FirstGirls from '@/shared/assets/first-girls.png';
import SecondGirls from '@/shared/assets/second-girls.jpg';

const CentralGridColumns = () => {
    return (
        <section className={styles.container}>
            <div className="grid grid-cols-3 gap-5 my-6">
                <Image
                    src={FirstMan}
                    width={320}
                    height={500}
                    alt="Central grid columns"
                />
                <div className="flex flex-col justify-between">
                    <Image
                        src={FirstGirls}
                        width={400}
                        height={300}
                        alt="Central grid columns"
                    />
                    <div className="flex flex-col text-center gap-10">
                        <h4 className="text-4xl font-bold">New Collection</h4>
                        <button className={`${styles['default-btn']} mx-auto`}>SHOP NOW</button>
                    </div>
                    <Image
                        src={SecondGirls}
                        width={400}
                        height={300}
                        alt="Central grid columns"
                    />
                </div>
                <Image 
                    className="flex mx-auto"
                    src={SecondMan}
                    width={200}
                    height={500}
                    alt="Central grid columns"
                />
            </div>
        </section>
    )
}

export default CentralGridColumns;