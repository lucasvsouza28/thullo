export type BoardType = {
  name: string;
  createdAt: Date;
  description: string;
  visibility: 'private' | 'public';
  owner: UserType;
  members?: UserType[];
  lists: BoardListType[]
};

export type BoardListType = {
  title: string;
  items?: CardType[] | undefined;
};

export type UserType = {
  id: string;
  name: string;
  avatar?: string;
}

export type CardType = {
  title: string;
  image?: string;
  tags?: string[];
  users: UserType[];
  comments: {}[] | undefined;
  attachments: {}[] | undefined;
}
