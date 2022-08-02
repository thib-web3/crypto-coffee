import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StartInput from '../components/buttons/startInput'
import StartButton from '../components/buttons/startButton'
import Navbar from '../components/Navbar/navbar'
import Links from '../components/steps/links'
import Steps from '../components/steps/steps'
const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Crypto coffee</title>

                <meta name="description" content="Fund your articles" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <main className={styles.main}>
                <div className={styles.section1}>

                    <h1 className={styles.main__title}>
                        1 supporter <br></br>is worth 1000 readers
                    </h1>
                    <p className={styles.main__description}>Accept crypto-coffee donations<br></br>👉 quickly improve your articles, blogs, tutorials, socials, ...</p>
                    <div className={styles.gap}></div>
                    <div className={styles.buttons}>

                        <StartInput />
                        <StartButton />
                    </div>
                    <div className={styles.buttons__desc}>It’s <span className={styles.bold}>free</span> & <span className={styles.bold}>easy</span> . Takes less than 1 minute.</div>
                    <div className={styles.gap}></div>
                    <div className={styles.trust__logos}>
                        <p className={styles.small__text}>available on</p>
                        <Image src="/logos/medium__logo.png" alt="Logo" width={200} height={50} style={{ opacity: 0.5 }} />
                    </div>
                </div>

                <div className={styles.section2}>
                    <h1 className={styles.title}>
                        Give your readers a <br></br>chance to thank you easily
                    </h1>

                    <p className={styles.description}>Crypto Coffee Me gives the ability to your readers to say thanks. In a few clics, they can send you a donation (a crypto coffee) and leave an on-chain message.<br></br><br></br> No account required everything is made from their crypto wallet, in a decentralized way.</p>


                    <div className={styles.gap}></div>
                    <div className={styles.images}>

                        <Image src="/images/send_cryptocoffee.png" alt="Logo" width={314} height={361.56} />
                        <Image src="/images/received_cryptocoffee.png" alt="Logo" width={314} height={91.63} />
                        <Image src="/images/received_cryptocoffee_desc.png" alt="Logo" width={314} height={198.32} />
                    </div>
                </div>
                <div className={styles.section3}>
                    <h1 className={styles.title}>
                        Easy 3 steps process
                    </h1>
                    <div className={styles.gap}></div>
                    {/* <div className={styles.top}>
                        <div className={styles.number1}>01</div>
                        <div className={styles.link}></div>
                        <div className={styles.number2}>02</div>
                        <div className={styles.link}></div>
                        <div className={styles.number3}>03</div>
                    </div> */}

                    <div className={styles.bottom}>
                        <Steps
                            image={'gear'}
                            title={'Set your page up.'}
                            desc1={'Name, Description, Socials, '}
                            desc2={'Profile & Background picture'}

                            step={'01'}
                        />
                        <Links />
                        <Steps
                            image={'clap'}
                            title={'Choose your cryptos.'}
                            desc1={'Ethereum, Bitcoin, Avalanche, '}
                            desc2={'Near, Fuze, Aurora'}

                            step={'02'}
                        />
                        <Links />
                        <Steps
                            image={'rocket'}
                            title={'Share your page !'}
                            desc1={'Share it at the end of your'}
                            desc2={'articles, in your bio, on twitter'}
                            desc3={'everywhere !'}
                            step={'03'}
                        />
                    </div>

                </div>
                <div className={styles.section4}>
                    <h1 className={styles.title}>
                        Designed for writers
                    </h1>

                    <p className={styles.description} style={{ marginBottom: 30 }}>93,4% of active crypto writers earn less than a hundred dollars per month.<br></br><br></br> 96% of crypto articles readers are investors and truly belivers.<br></br><br></br>They will have more facility to become your supporters thanks to a crypto-coffee donation. </p>


                    <Image src="/images/btc_wallet.svg" alt="Logo" width={303.71} height={303.71} />
                </div>

            </main >

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    My footer
                    <span className={styles.logo}>
                        <Image src="/logos/logo.png" alt="Logo" width={50} height={45} />
                    </span>
                </a>
            </footer>
        </div >
    )
}

export default Home
