# Autonomni Festival Žena

A website for the Autonomous Women's Festival (originally "Autonomni Festival
Žena") or AFŽ.

## 🚀 Quick Start

This section describes the steps to get the project up and running **locally (in
development environment)** or in **production environment**.

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

4. Configure environment variables:
    - **Development**: If you are running the app in development mode, there's
      nothing you need to do about environment variables (for now). Backend,
      frontend, and database directories have `.env.development` files that are
      enough for development.
    - **Production**: However, if you are setting up the project for production,
      you need to create `.env.production` file in each of the backend,
      frontend, and database directories based on the `.env.development` files.
      You should change the `DATABASE_HOST` variable to the database service
      name defined in `docker-compose.prod.yml`. Service names in
      `docker-compose.yml` and `docker-compose.prod.yml` are different because
      of the potential Docker resource name conflicts. **Also, make sure to
      change values for database credentials, tokens, and other sensitive
      information as needed.**
      <br/><br/>

5. Start the containers:
   <br/><br/>
    - **development** mode:
       ```bash
       docker compose up -d
       ```
    - **production** mode:
        ```bash
        docker compose -f docker-compose.prod.yml up -d
        ```

   Now you should be able to access the app in your web browser
   at http://localhost:3000, and admin panel at http://localhost:1337

### Allow Next.js to communicate with Strapi

You'll need to regenerate the API token in Strapi and set it to an environment
variable for Next.js to allow Next.js communicating with Strapi. Luckily, you
only need to do this once, so **if you already did this, you can skip this
step.**

1. In the Strapi admin panel, go to
   [Settings > API Tokens](http://localhost:1337/admin/settings/api-tokens)
2. Select the "Read Only" token
3. Click on the "Regenerate" button in the top right corner
4. Copy the new token
5. Set the token to the environment variable `NEXT_PUBLIC_API_TOKEN` and restart
   Next.js container:
    - **Development mode**:
        1. Create `.env.development.local` file by copying `.env.development`
           file in the frontend directory:
           ```bash
              cp frontend/.env.development frontend/.env.development.local
              ```
        2. Open the `.env.development.local` file and set the
           `NEXT_PUBLIC_API_TOKEN` variable to the token you copied in step 4.
        3. Restart containers:
           ```bash
           docker compose up -d
           ```

    - **Production mode**:
        1. Open the `.env.production` file and set the
           `NEXT_PUBLIC_API_TOKEN`
           variable to the token you copied in step 4.
        2. Rebuild the frontend container:
           ```bash
           docker compose -f docker-compose.prod.yml build frontend
           --no-cache
           ```
        3. Restart the containers:
           ```bash
            docker compose -f docker-compose.prod.yml up -d
           ```
