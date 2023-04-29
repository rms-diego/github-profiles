import { z as zod } from "zod";

export const responseApiSchema = zod.object({
  login: zod.string().nullable(),
  id: zod.number().nullable(),
  node_id: zod.string().nullable(),
  avatar_url: zod.string().nullable(),
  gravatar_id: zod.string().nullable(),
  url: zod.string().nullable(),
  html_url: zod.string().nullable(),
  followers_url: zod.string().nullable(),
  following_url: zod.string().nullable(),
  gists_url: zod.string().nullable(),
  starred_url: zod.string().nullable(),
  subscriptions_url: zod.string().nullable(),
  organizations_url: zod.string().nullable(),
  repos_url: zod.string().nullable(),
  events_url: zod.string().nullable(),
  received_events_url: zod.string().nullable(),
  type: zod.string().nullable(),
  site_admin: zod.boolean().nullable(),
  name: zod.string().nullable(),
  company: zod.string().nullable(),
  blog: zod.string().nullable(),
  location: zod.string().nullable(),
  email: zod.string().nullable(),
  hireable: zod.string().nullable(),
  bio: zod.string().nullable(),
  twitter_username: zod.string().nullable(),
  public_repos: zod.number().nullable(),
  public_gists: zod.number().nullable(),
  followers: zod.number().nullable(),
  following: zod.number().nullable(),
});

export type DataType = {
  githubInfo: Zod.infer<typeof responseApiSchema>;
  notFound?: boolean;
};
