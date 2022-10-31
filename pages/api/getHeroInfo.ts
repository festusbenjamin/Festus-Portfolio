import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import  { sanityClient }  from "../../sanity";
import { HeroInfo } from "../../typings"

const query = groq`
*[_type == "heroInfo"][0]
`;

type Data = {
  heroInfo: HeroInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const heroInfo: HeroInfo = await sanityClient.fetch(query)

  res.status(200).json({ heroInfo });
}
