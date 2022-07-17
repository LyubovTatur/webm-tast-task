import { getNav } from "./load";

export default async (req, res) => {

  try {
    res.json(await getNav());
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to load nav");
  }
};
