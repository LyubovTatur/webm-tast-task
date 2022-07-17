export async function getNav(options) {
  const res = await fetch("/services/nav");
  return await res.json();
};
