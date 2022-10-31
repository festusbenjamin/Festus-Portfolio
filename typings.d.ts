interface sanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface HeroInfo extends sanityBody {
  _type: "heroInfo";
  heroImage: Image;
  name: string;
  role: string;
  captionone: string;
  captiontwo: string;
}

export interface AboutInfo extends sanityBody {
  _type: "aboutInfo";
  backgroundInformation: string;
  profilePicture: Image;
}

export interface ContactsInfo extends sanityBody {
  _type: "contactsInfo";
  address: string;
  email: string;
  phoneNumber: string;
}

export interface Skill extends sanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Experience extends sanityBody {
  _type: "experience";
  companyImage: Image;
  companyName: string;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: skill[];
}

export interface Project extends sanityBody {
  _type: "project";
  image: Image;
  summary: string;
  technologies: skill[];
  title: string;
}

export interface Social extends sanityBody {
  _type: "social";
  title: string;
  url: string;
}
