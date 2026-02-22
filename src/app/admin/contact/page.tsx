"use client";

import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

type ContactItem = {
    id: number;
    name: string;
    email: string;
    mobile: string;
    created_at: string;
};

export default function ContactPageClient() {
    const [contacts, setContacts] = useState<ContactItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchContacts() {
            try {
                const res = await fetch("/api/contact", { cache: "no-store" });

                if (!res.ok) {
                    if (res.status === 401) {
                        setError("Unauthorized. Please login as admin.");
                        return;
                    }
                    throw new Error("Failed to fetch Inquiries");
                }

                const data: ContactItem[] = await res.json();
                setContacts(data);
            } catch (err: any) {
                console.error("Error fetching contacts:", err.message);
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        }

        fetchContacts();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">
                    Inquiry Requests
                </h1>

                {loading && <p className="text-gray-600">Loading inquiry requests...</p>}
                {error && <p className="text-red-500">{error}</p>}

                {!loading && !error && (
                    <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-auto max-h-[70vh]">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">S.No</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Email</th>
                                    <th className="px-6 py-4">Mobile</th>
                                    <th className="px-6 py-4">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {contacts.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            className="px-6 py-10 text-center text-gray-500"
                                        >
                                            No inquiry requests found.
                                        </td>
                                    </tr>
                                ) : (
                                    contacts.map((item, i) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-6 py-4 font-medium text-gray-700">
                                                {i + 1}
                                            </td>
                                            <td className="px-6 py-4 text-gray-800">{item.name}</td>
                                            <td className="px-6 py-4 text-blue-600">{item.email}</td>
                                            <td className="px-6 py-4 text-gray-700">{item.mobile}</td>
                                            <td className="px-6 py-4 text-gray-500">
                                                {new Date(item.created_at).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}