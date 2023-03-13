import dotenv from 'dotenv';

dotenv.config();

const config = {
    app: {
        port: process.env.APP_PORT || 3000,
    },
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
        port: process.env.DB_PORT,
    },
};

export default config;