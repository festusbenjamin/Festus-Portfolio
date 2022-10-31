import { HeroInfo } from "../typings";

export const fetchHeroInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getHeroInfo`
  );

  const data = await res.json();
  const heroInfo: HeroInfo = data.heroInfo;

  return heroInfo;
};
