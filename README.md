# DevFinder

DevFinder is an application built with Next.js, Drizzle, PostgreSQL, GeStream.io, Vercel, Shadcn, Tailwind CSS, and TypeScript. It allows developers to connect online, collaborate on coding projects, and solve problems together in real-time through video calls and screen sharing.

## Features

- **Create Rooms:** Create new coding rooms with descriptions, GitHub repo links, and tags (languages).
- **Browse Rooms:** View all available rooms and filter them by tags.
- **Join Rooms:** Join existing rooms to collaborate with other developers.
- **Video Calls:** Have video calls with all participants in the room.
- **Screen Sharing:** Share your screen during video calls for better collaboration.
- **Interactive Features:** Talk, react, and perform various actions during video calls.
- **Edit and Delete Rooms:** Manage your created rooms by editing or deleting them.
- **Authentication:** Uses Next Auth for secure authentication.

## Technologies Used

- **Next.js:** Frontend framework for React applications.
- **Drizzle:** Ethereum development framework.
- **PostgreSQL:** Database for storing room and user information.
- **GeStream.io:** Enables video calls and screen sharing.
- **Vercel:** Deployment platform for hosting the application.
- **Shadcn:** (Assuming this is a library or tool, please replace with correct information)
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **TypeScript:** Typed superset of JavaScript for improved code quality and developer experience.

## Getting Started

To get started with DevFinder, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/beny996/dev-finder.git
npm install
```

**Set up environment variables:**

Create a `.env` file in the root directory and add your environment variables:

    DATABASE_URL="your database url"
    GOOGLE_CLIENT_ID="your google client it"
    GOOGLE_CLIENT_SECRET="your google client secret"
    NEXTAUTH_SECRET="your nextauth secret"
    NEXT_PUBLIC_GET_STREAM_API_KEY="your stream api key"
    GET_STREAM_SECRET_KEY="your stream secret key"

```bash
npm run dev
```

open http://localhost:3000

## You can access live version of the app on :

[DevFinder](https://dev-finder-amber-two.vercel.app/){:target="\_blank"}
