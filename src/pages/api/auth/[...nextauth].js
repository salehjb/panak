import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: "c559c7e0ff24be64cfa2",
      clientSecret: "0051fd24cfc403e518e354019fd1ac44ac42ca1c",
    }),
  ],
})