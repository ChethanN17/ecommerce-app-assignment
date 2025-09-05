import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // 🔹 Fake user list for demo
        const user = { id: "1", name: "Test User", email: "test@example.com" };

        if (
          credentials?.email === "test@example.com" &&
          credentials?.password === "password"
        ) {
          return user;
        }
        return null; // ❌ Invalid login
      },
    }),
  ],
  pages: {
    signIn: "/login", // custom login page
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
