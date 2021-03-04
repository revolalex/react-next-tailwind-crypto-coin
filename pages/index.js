import Layout from "../components/Layout";
import Link from "next/link";

export default function Home({ res }) {
  return (
    <Layout page="Crypto Watch - Accueil">
      <ul className="flex flex-wrap justify-around py-10">
        {res.map((crypto, index) => (
          <li
            key={index}
            className="hover:shadow-md relative  p-8 border border-blue-300 rounded-3xl bg-blue-100  mx-5 m-4"
          >
            <Link href={`/${crypto.id}`}>
              {/* <Link href={`/${crypto.name}?id=${crypto.id}`}> */}
              <a className="rounded-md">
                <div className="text-center">
                  <img
                    src={crypto.logo_url}
                    alt={crypto.name}
                    className="w-20 h-20 mx-auto mb-6"
                  />
                </div>
                <h2 className="text-2xl mb-6 uppercase tracking-wider">
                  {crypto.name}
                </h2>
                <h3 className="font-bold text-2xl mb-4">
                  {parseFloat(crypto.price).toFixed(2)} USD
                </h3>
                <p>
                  1 day :{" "}
                  <span className="font-bold">
                    {Math.round(crypto["1d"].price_change_pct * 100).toFixed(
                      2
                    ) + "%"}{" "}
                  </span>
                  {crypto["1d"].price_change_pct < 0 ? (
                    <span className="text-red-500">&#x2798;</span>
                  ) : (
                    <span className="text-green-500">&#x279A;</span>
                  )}
                </p>
                <p>
                  1 month :{" "}
                  <span className="font-bold">
                    {Math.round(crypto["30d"].price_change_pct * 100) + "%"}{" "}
                  </span>
                  {crypto["30d"].price_change_pct < 0 ? (
                    <span className="text-red-500">&#x2798;</span>
                  ) : (
                    <span className="text-green-500">&#x279A;</span>
                  )}
                </p>
                <p>
                  1 year :{" "}
                  <span className="font-bold">
                    {Math.round(crypto["365d"].price_change_pct * 100) + "%"}{" "}
                  </span>
                  {crypto["365d"].price_change_pct < 0 ? (
                    <span className="text-red-500">&#x2798;</span>
                  ) : (
                    <span className="text-green-500">&#x279A;</span>
                  )}
                </p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
//server side rendered
export async function getStaticProps(context) {
  try {
    const res = await fetch("https://api.nomics.com/v1/currencies/ticker?key=1ebf6fcea6f9015499e90b2fb28c7932&ids=BTC,ETH,XRP,BNB,ADA&interval=1d,30d,365d&convert=EUR&per-page=100&page=1")
      .then(res => res.json())
    return {
      props: { res }
    }

  } catch (error) {
    console.log(error);
  }
}
