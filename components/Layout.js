// Next component
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Layout({ children, page }) {
    return (
        <div className="text-center min-h-screen generalBack">
            <Head>
                <title>{page}</title>
                {/* todo  add SEO*/}
                <meta
                    name="description"
                    content="Check last info about crypto coin. You can check the value of the bitcoin or ethereum and others. check the progression by day, by month or per year"
                    />
                    <meta
                        name="keywords"
                        content="Bitcoin, crypto, monnaie, crypto monnaie, ethereum, cardano, binance coin, coin, dollar, month, day, year"
                    />
                    <meta name="author" content="Alexandre Rodriguez" />
            </Head>

            <header className="container-lg headerBg">
                <h1 className="text-5xl mb-2 text-blue-400 font-bold myTitle">CRYPTO INFO</h1>
                <div className="inline-grid grid-cols-2 gap-x-10 p-4">
                    <Link href="/">
                        <button className="bg-blue-400 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-green-700 text-blue-700 myButton">
                            Home
                        </button>
                    </Link>
                    <Link href="/about">
                        <button className="bg-blue-400 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-green-700 text-blue-700 myButton">
                            About
                        </button>
                    </Link>
                </div>
            </header>
            <main className="pt-10 mx-12">
                {children}
            </main>
            <footer className="p-10">
                <Image className="rounded-3xl object-cover" src="/crypto1.jpg" alt="footer pic" width="1200" height="100">

                </Image>
                <ul className="pt-10 pb-4 flex justify-around">
                    <li className="myLink"><Link href="https://www.linkedin.com/in/alexandre-rodrigueza/">Linkedin</Link></li>
                    <li className="myLink"><Link href="https://github.com/revolalex">GitHub</Link></li>
                    <li className="myLink"><Link href="https://revol-cv.netlify.app/">Portofolio</Link></li>
                </ul>
                <p>Website made by <a className="myLink" href="https://revol-cv.netlify.app/">Alexandre</a> - Techno : react, next , tailwind - API: https://nomics.com/ </p>

            </footer>

        </div>
    )
}