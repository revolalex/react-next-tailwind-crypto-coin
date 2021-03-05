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
            </Head>

            <header className="container-lg headerBg">
                    <h1 className="text-5xl mb-2 text-blue-700 font-bold myTitle">CRYPTO INFO</h1>
                    <div className="inline-grid grid-cols-2 gap-x-10 p-4">
                        <Link href="/">
                            <button className="bg-green-400 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-500">
                                Home
                        </button>
                        </Link>
                        <Link href="/about">
                            <button className="bg-green-400 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-500">
                                About
                        </button>
                        </Link>
                    </div>
            </header>
            <main className="pt-4 mx-8">
                {children}
            </main>
            <footer className="p-10">
                <Image className="rounded-3xl object-cover" src="/crypto1.jpg" alt="footer pic" width="1200" height="100">

                </Image>
                <ul className="pt-10 pb-4 flex justify-around">
                    <li className="text-blue-500"><Link href="https://www.linkedin.com/in/alexandre-rodrigueza/">Linkedin</Link></li>
                    <li className="text-blue-500"><Link href="https://github.com/revolalex">GitHub</Link></li>
                    <li className="text-blue-500"><Link href="https://revol-cv.netlify.app/">Portofolio</Link></li>
                </ul>
                <p>Website made by Alexandre - Techno : react, next , tailwind - Api: https://nomics.com/ </p>

            </footer>

        </div>
    )
}