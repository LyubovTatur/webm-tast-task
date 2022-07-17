export async function getPageMeta(options) {
  const res = await fetch("/services/page-meta");
  return await res.json();
};
