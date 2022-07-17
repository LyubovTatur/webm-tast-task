import { getPageText } from "./load";

export default async (req, res) => {

  try {
    res.json(await getPageText());
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to load page text");
  }
};
