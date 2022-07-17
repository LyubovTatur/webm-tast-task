export async function getPageText(options) {
  const res = await fetch("/services/page-text");
  return await res.json();
};
