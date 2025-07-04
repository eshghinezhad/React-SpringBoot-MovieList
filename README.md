# Movie Project

This is a React app with a mock backend using `json-server`.

## Prerequisites

- Node.js and npm installed

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo/app
   ```

2. **Install dependencies:**
   ```bash
  
   cd client
   npm install

   ```

## Running the App locally

### 1. Start the Backend (json-server)

cd clinet

In the project `client` folder, run:

```bash
npm run server
```

This will start `json-server` at [http://localhost:3001](http://localhost:3001) using `db.json` as the database.


### 2. Start the Frontend (React)

Open a new terminal in the same folder 
In the project `client` folder, run: 

```bash
npm start
```

This will start the React app at [http://localhost:3000](http://localhost:3000).

## Usage

- The frontend will fetch data from the backend (`json-server`).
- Make sure both servers are running for full functionality.

---

**Enjoy your movie app!**
