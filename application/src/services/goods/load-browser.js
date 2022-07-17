export async function getGoods(options) {
  const res = await fetch("/services/goods?pageIndex=" + (options.pageIndex || 0));
  return await res.json();
};
