import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import  { sanityClient }  from "../../sanity";
import { AboutInfo } from "../../typings"

const query = groq`
*[_type == "aboutInfo"][0]
`;

type Data = {
  aboutInfo: AboutInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const aboutInfo: AboutInfo = await sanityClient.fetch(query)

  res.status(200).json({ aboutInfo });
}
