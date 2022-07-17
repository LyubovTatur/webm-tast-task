import dataset from "../dataset.json";

export async function getBreadcrumbs(options) {

  const breadcrumbs = dataset.breadcrumbs;
  const results = {
    breadcrumbs,
  };

  await sleep(1000);

  return results;
};

function sleep(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}