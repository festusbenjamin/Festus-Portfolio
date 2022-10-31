import { ContactsInfo } from "../typings";

export const fetchContactsInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getContactsInfo`
  );

  const data = await res.json();
  const contactsInfo: ContactsInfo = data.contactsInfo;

  return contactsInfo;
};
