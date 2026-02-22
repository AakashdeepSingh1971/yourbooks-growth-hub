
export default function AdminLayout({ children }: { children: React.ReactNode }) {

    return (
        <> 
            <main className="flex-1 overflow-auto p-6">{children}</main>
        </>
    );
}
