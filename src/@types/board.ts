export type BoardType = {
  name: string,
  createdAt: Date,
  description: string,
  owner: {
    id: string,
    name: string,
    avatar?: string,
  },
  members?: {
    id: string,
    name: string,
    avatar?: string,
  }[]
};
