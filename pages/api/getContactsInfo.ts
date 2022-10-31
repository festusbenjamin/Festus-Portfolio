import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import  { sanityClient }  from "../../sanity";
import { ContactsInfo } from "../../typings"

const query = groq`
*[_type == "contactsInfo"][0]
`;

type Data = {
  contactsInfo: ContactsInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const contactsInfo: ContactsInfo = await sanityClient.fetch(query)

  res.status(200).json({ contactsInfo });
}
