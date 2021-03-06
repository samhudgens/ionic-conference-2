export interface Track {
  id?: string;
  name: string;
}

export interface Speaker {
  id?: string;
  name: string;
  profilePic?: string;
  twitter?: string;
  about?: string;
  location?: string;
  email: string;
  phone?: string;
  sessions?: string[];   // session id
}

export interface Session {
  id?: string;
  name: string;
  date: string;         // 2018-12-06
  timeStart: string;    // 15:30 for 3:30pm
  timeEnd?: string;
  location?: string;
  description?: string;
  speakerIDs: string[];   // speaker's id
  tracks: string[];     //  name of track
}

export interface User {
  id?: string;
  username: string;
  password: string;
  email: string;
  favorites?: string[]; // session id's
}
