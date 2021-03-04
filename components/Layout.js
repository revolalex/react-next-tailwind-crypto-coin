// Next component
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Layout({ children, page }) {
    return (
        <div className="bg-green-200 pt-5 text-center min-h-screen">
            <Head>
                <title>{page}</title>
                {/* todo  add SEO*/}
            </Head>
            <header className="container-lg">
                <h1 className="text-5xl mb-2">CRYPTO INFO</h1>
                <div className="inline-grid grid-cols-2 gap-x-10 p-4">
                    <Link href="/">
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
                            Home
                        </button>
                    </Link>
                    <Link href="/about">
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
                            About
                        </button>
                    </Link>
                </div>
                <div>
                    <Image className="rounded-3xl object-cover" src="/crypto.jpg" alt="header pic" width="400" height="40">

                    </Image>
                </div>
            </header>
            <main className="pt-4 mx-20">
                {children}
            </main>
            <footer className="p-10">
                <Image className="rounded-3xl object-cover" src="/crypto.jpg" alt="footer pic" width="1200" height="160">

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