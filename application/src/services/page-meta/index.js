import { getPageMeta } from "./load";

export default async (req, res) => {

  try {
    res.json(await getPageMeta());
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to load page meta");
  }
};
