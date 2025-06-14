# Autonomni Festival Žena

A website for the Autonomous Women's Festival (originally "Autonomni Festival
Žena") or AFŽ.

## 🚀 Quick Start

1. Install [Docker Engine](https://docs.docker.com/engine/) and
   [Docker Compose](https://docs.docker.com/compose/) if you're using
   Linux, or [Docker Desktop](https://docs.docker.com/desktop/) if you're
   using Windows or macOS.
   <br/><br/>

2. Clone the repository:

   ```bash
   git clone git@github.com:vegaitglobal/autonomni-festival-zena-app.git
   ```

   If you don't have SSH access to the repository, you can use HTTPS:

    ```bash
    git clone https://github.com/vegaitglobal/autonomni-festival-zena-app.git
    ```
3. Change into the project directory:

   ```bash
   cd autonomni-festival-zena-app
   ```

4. Create a `.env` file based on the provided `.env.example` file:

   ```bash
   cp .env.example .env
   ```

   You can customize the environment variables in the `.env` file, but the
   defaults should work fine for most users.
   <br/><br/>

5. Start the containers:

   ```bash
   docker compose up -d
   ```

   Now you should be able to access the app in your web browser
   at http://localhost:3000, and admin panel at http://localhost:1337

### Allow Next.js to communicate with Strapi

You'll need to regenerate the API token in Strapi and set it to an environment
variable for Next.js to allow Next.js to communicate with Strapi. Luckily, you
only need to do this once, so **if you already did this, you can skip this
step.**

1. In the Strapi admin panel, go to
   [Settings > API Tokens](http://localhost:1337/admin/settings/api-tokens)
2. Select the "Read Only" token
3. Click on the "Regenerate" button in the top right corner
4. Copy the new token
5. Set the token to the environment variable `NEXT_PUBLIC_API_TOKEN` in the
   `.env` file
6. Restart containers:

   ```bash
   docker compose down && docker compose up -d
   ```
