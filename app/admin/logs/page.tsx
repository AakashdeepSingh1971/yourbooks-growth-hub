"use client";

import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

type LogEntry = {
    name?: string;
    email?: string;
    mobile?: string;
    message?: string;
    created_at?: string;
    error?: string;
};

export default function LogsPageClient() {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchLogs() {
            try {
                const res = await fetch("/api/logs", { cache: "no-store" });

                if (!res.ok) {
                    if (res.status === 401) {
                        setError("Unauthorized. Please login as admin.");
                        return;
                    }
                    throw new Error("Failed to fetch logs");
                }

                const data: LogEntry[] = await res.json();
                setLogs(data);
            } catch (err: any) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        }

        fetchLogs();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">
                    Server Logs
                </h1>

                {loading && <p className="text-gray-600">Loading logs...</p>}
                {error && <p className="text-red-500">{error}</p>}

                {!loading && !error && (
                    <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-auto max-h-[70vh]">
                        {logs.length === 0 ? (
                            <p className="p-4 text-gray-500 text-center">No logs found.</p>
                        ) : (
                            <table className="w-full text-sm text-left font-mono">
                                <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
                                    <tr>
                                        <th className="px-4 py-2">S.No</th>
                                        <th className="px-4 py-2">Name</th>
                                        <th className="px-4 py-2">Email</th>
                                        <th className="px-4 py-2">Mobile</th>
                                        <th className="px-4 py-2">Message</th>
                                        <th className="px-4 py-2">Error</th>
                                        <th className="px-4 py-2">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {logs.map((log, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-4 py-2 font-medium text-gray-700">{i + 1}</td>
                                            <td className="px-4 py-2 text-gray-800">{log.name || "-"}</td>
                                            <td className="px-4 py-2 text-blue-600">{log.email || "-"}</td>
                                            <td className="px-4 py-2 text-gray-700">{log.mobile || "-"}</td>
                                            <td className="px-4 py-2 text-gray-700">{log.message || "-"}</td>
                                            <td className="px-4 py-2 text-red-500">{log.error || "-"}</td>
                                            <td className="px-4 py-2 text-gray-500">
                                                {log.created_at ? new Date(log.created_at).toLocaleString() : "-"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}