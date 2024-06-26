# PIM Forge Alternate Product System - Mern Stack App

Documentation.

PIM Forge basically a alternative product system platform that serves as an alternative or recommendation to traditional Product Information Management (PIM) systems for managing product data and related processes.

Functional Requirements:

---

Model

### Querie

- user can create new querie
- user can read all querie
- user can delete querie create own
- user can update qurie create own

### recommendation

- user can add recommendation alternate product
- user can delete own recommendation product

### API ENDPOINTS:

---

## base_url = https://pim-forge-server-side-app.vercel.app/api/v1

#### Country

      GET /queries - get all queries
      GET /queries/[id] - get single querie
      POST queries/create-new - post new querie
      PATCH /queries/[id] - update querie
      DELETE /countries/[id] - delete single querie

---

#### recommendation

      GET /recommendations - get all my recommendation based on email
      post /recommendations/create-new - post new recommendation
      delete /recommendations/[id] - delete single recommendation

---

Tech Uses 🔥;

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) : As based programming language.
- [NodeJS](https://nodejs.org/en): That allows to run javascript code in server
- [Express](https://expressjs.com/): A nodeJS minimalist web framework building server-side application
- [Mongoose](https://mongoosejs.com/): That help us to model or collection field schema validation in server-side to store data in mongodb
- [JWT](https://jwt.io/introduction): That help us to secure private resource data.
- [cookieParser](https://www.npmjs.com/package/cookie-parser): Extracts the cookie data from the HTTP request and converts it into a usable format that can be accessed by the server-side code

Please follow the below instructions to run your machine.

1. install nodejs -

   ```sh
   https://nodejs.org/en/download/package-manager
   ```

2. install nodemoen -
   ```sh
   npm i -g nodemon
   ```
3. clone this repository
   ```sh
       https://github.com/ramim-ahmed/pimforge-server-side-app.git
   ```
4. set env variable create [.env] file
   ```sh
   DATABASE_URL = your database_url
   PORT = 8000
   access_token_secret= your accesstoken
   ```
5. install all packages

   ```sh
   npm install
   ```

6. run project
   ```sh
   npm run dev
   ```
