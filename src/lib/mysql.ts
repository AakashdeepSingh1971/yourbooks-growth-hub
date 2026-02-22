import mysql from "mysql2/promise";

const config = {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "defaultpassword",
    database: process.env.MYSQL_DATABASE || "kashin_staging",
    port: Number(process.env.MYSQL_PORT || 3306),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

// ⚠️ Log the config (mask password)
console.log("DB config:", {
    ...config,
    password: config.password,
});

export const db = mysql.createPool(config);
