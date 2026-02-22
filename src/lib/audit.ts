import { db } from './mysql';

export async function logAction(userId: number | null, action: string) {
    await db.execute(
        `INSERT INTO audit_logs (user_id, action) VALUES (?, ?)`,
        [userId, action]
    );
}
