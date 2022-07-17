import dataset from "../dataset.json";

export async function getPageText(options) {

  const pageText = dataset.page_text;
  const results = {
    pageText,
  };

  await sleep(1000);

  return results;
};

function sleep(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}