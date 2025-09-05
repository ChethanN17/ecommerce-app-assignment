import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
// Later we can add Credentials or Google

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login", // custom login page
  },
});

export { handler as GET, handler as POST };
