export async function getBreadcrumbs(options) {
  const res = await fetch("/services/breadcrumbs");
  return await res.json();
};
