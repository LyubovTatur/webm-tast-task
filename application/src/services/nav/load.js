import dataset from "../dataset.json";

export async function getNav(options) {

  const nav = dataset.nav;
  const results = {
    nav,
  };

  await sleep(1000);

  return results;
};

function sleep(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}