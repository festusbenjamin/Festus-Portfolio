import { AboutInfo } from "../typings";

export const fetchAboutInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAboutInfo`
  );

  const data = await res.json();
  const aboutInfo: AboutInfo = data.aboutInfo;

  return aboutInfo;
};
