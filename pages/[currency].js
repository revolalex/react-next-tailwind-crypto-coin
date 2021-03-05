import Layout from "../components/Layout";

export default function Currency({ res }) {
  console.log(res);
  return (
    <Layout page={"Crypto " + res.name}>
      <div className="relative hover:shadow-md border border-blue-300 sm:rounded-3xl bg-blue-100 md:w-auto flex-1">
        <div className="text-center">
          <img
            src={res.logo_url}
            alt={res.name}
            className="w-20 h-20 mx-auto mb-6 mt-6"
          />
        </div>
        <h2 className="text-2xl mb-6 uppercase tracking-wider">{res.name}</h2>
        <div>
          <h4 className="text-xl mb-6 uppercase tracking-wider">Graphic :</h4>
          <div className="inline-grid grid-cols-2 p-4 items-center">
            <p>1 day :</p>
            <img className="bg-white rounded-2xl hover:shadow-md border-2 border-blue-200" src={`https://nomics.com/images/sparkline/assets/${res.id}-USD-1d.svg`} />
          </div>
          <div className="inline-grid grid-cols-2 p-4 items-center">
            <p>30 day :</p>
            <img className="bg-white rounded-2xl hover:shadow-md border-2 border-blue-200" src={`https://nomics.com/images/sparkline/assets/${res.id}-USD-30d.svg`} />
          </div>
          <div className="inline-grid grid-cols-2 p-4 items-center">
            <p>1 year :</p>
            <img className="bg-white rounded-2xl hover:shadow-md border-2 border-blue-200" src={`https://nomics.com/images/sparkline/assets/${res.id}-USD-365d.svg`} />
          </div>
        </div>
        <p className="mx-4 p-2">{res.description}</p>
        <p className="pt-5">
          Website: <a className="text-blue-500" target="_blank" href={res.website_url}>
            {res.website_url}
          </a>
        </p>
        <p className="pt-5 mb-6">
          Reddit: <a className="text-blue-500" target="_blank" href={res.reddit_url}>
            {res.reddit_url}
          </a>
        </p>

      </div>
    </Layout>
  );
}

// SSR renders on-demand
export async function getServerSideProps({ query }) {
  try {
    const res = await fetch(
      `https://api.nomics.com/v1/currencies?key=1ebf6fcea6f9015499e90b2fb28c7932&ids=${query.currency}&attributes=id,name,logo_url,description,reddit_url,website_url`
    );
    const result = await res.json();

    return {
      props: { res: result[0] },
    };
  } catch (err) {
    console.error(err);
  }
}