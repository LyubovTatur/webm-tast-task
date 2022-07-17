import dataset from "../dataset.json";

export async function getPageMeta(options) {

  const pageMeta = dataset.page_meta;
  const results = {
    pageMeta,
  };

  await sleep(1000);

  return results;
};

function sleep(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}