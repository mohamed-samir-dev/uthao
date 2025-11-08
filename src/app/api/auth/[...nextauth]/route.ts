// NextAuth configuration for authentication
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

// Configure NextAuth with Google OAuth provider
const handler = NextAuth({
  providers: [
    // Google OAuth provider configuration
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  pages: {
    // Custom sign-in page route
    signIn: '/login',
  },
})

// Export handler for both GET and POST requests (required for App Router)
export { handler as GET, handler as POST }