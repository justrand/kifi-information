import { LibraryPhoto } from './library-photo';
import { LibraryAddress } from './library-address';

export class Library {
  id: Number;
  name: String;
  city: Number;
  slug: String;
  type: String;
  slogan: String;
  address: LibraryAddress;
  created: String;
  modified: String;
  shortName: String;
  consortium: Number;
  coverPhoto: LibraryPhoto;
  coordinates: {
    lat: String;
    lon: String;
  };
  description: String;
}
