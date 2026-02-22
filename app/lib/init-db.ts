import { db } from "./mysql";
import bcrypt from "bcryptjs";

export async function initDb() {
    // contact REQUESTS
    await db.query(`
    CREATE TABLE IF NOT EXISTS contact_requests (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      mobile VARCHAR(20) NOT NULL,
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);


    // USERS (ADMINS)
    await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      role ENUM('admin', 'viewer') DEFAULT 'admin',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

    // AUDIT LOGS
    await db.query(`
    CREATE TABLE IF NOT EXISTS audit_logs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      action VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

    // DEFAULT ADMIN
    const adminUsername = "admin";
    const adminPassword = "V7!mQ4$Zk9@P2R#XfA6W";

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    await db.execute(
        `INSERT IGNORE INTO users (username, password, role)
     VALUES (?, ?, 'admin')`,
        [adminUsername, hashedPassword]
    );
}
