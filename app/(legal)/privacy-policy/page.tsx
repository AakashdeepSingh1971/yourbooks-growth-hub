export const metadata = {
    title: "Privacy Policy | YOURBOOKS",
    description: "Privacy Policy of YOURBOOKS",
}

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="container max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-muted-foreground mb-8">
                    <strong>YOURBOOKS</strong><br />
                    Effective Date: 27 Oct 2021
                </p>

                <p className="mb-6">
                    Yourbooks (“we”, “our”, or “us”) operates the Yourbooks mobile
                    application and the website at www.yourbooks.in (collectively, the
                    “Services”).
                </p>

                <p className="mb-10">
                    This Privacy Policy explains how we collect, use, disclose, and
                    safeguard your information when you use our App or Website, in
                    compliance with Google Play’s User Data Policy, GDPR, and other
                    applicable privacy laws.
                </p>

                {/* Section 1 */}
                <SectionTitle>1. Information We Collect</SectionTitle>

                <SubTitle>a. Information You Provide</SubTitle>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Name, email address, and contact details</li>
                    <li>Account login credentials</li>
                    <li>Payment or billing information (if applicable)</li>
                    <li>Information shared via support or in-app forms</li>
                </ul>

                <SubTitle>b. Automatically Collected Information</SubTitle>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Device information (model, OS, identifiers)</li>
                    <li>Log data (IP address, browser type, usage time)</li>
                    <li>Usage data (features used, crash logs)</li>
                    <li>Approximate location (if enabled)</li>
                </ul>

                <SubTitle>c. Cookies and Tracking</SubTitle>
                <p className="mb-8">
                    We use cookies and similar technologies to improve user experience,
                    analytics, and personalization.
                </p>

                {/* Section 2 */}
                <SectionTitle>2. How We Use Your Information</SectionTitle>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>Provide and maintain the App and features</li>
                    <li>Personalize user experience</li>
                    <li>Improve performance and security</li>
                    <li>Send notifications or updates</li>
                    <li>Process subscriptions or payments</li>
                    <li>Prevent fraud or misuse</li>
                    <li>Comply with legal obligations</li>
                </ul>

                {/* Section 3 */}
                <SectionTitle>3. Data Sharing and Disclosure</SectionTitle>
                <p className="mb-4">
                    We do not sell personal information. We may share limited data with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>Service providers (hosting, analytics, crash reporting)</li>
                    <li>Google services (Firebase, AdMob, Maps)</li>
                    <li>Legal authorities when required by law</li>
                </ul>

                {/* Section 4 */}
                <SectionTitle>4. Permissions Used by the App</SectionTitle>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li><strong>Storage Access:</strong> Save files or book data</li>
                    <li><strong>Camera Access:</strong> Scan barcodes or upload images</li>
                    <li><strong>Internet Access:</strong> Sync with servers</li>
                    <li><strong>Location (optional):</strong> Improve functionality</li>
                </ul>

                <p className="mb-8">
                    You can manage or revoke permissions anytime in your device settings.
                </p>

                {/* Section 5 */}
                <SectionTitle>5. Data Retention and Deletion</SectionTitle>
                <p className="mb-8">
                    We retain data only as long as necessary for providing services and
                    legal compliance. You may request account deletion by contacting
                    support@yourbooks.in.
                </p>

                {/* Section 6 */}
                <SectionTitle>6. User Rights</SectionTitle>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>Access, correct, or delete personal data</li>
                    <li>Withdraw consent</li>
                    <li>Request data portability</li>
                    <li>Opt out of analytics or marketing</li>
                </ul>

                {/* Section 7 */}
                <SectionTitle>7. Security of Your Information</SectionTitle>
                <p className="mb-8">
                    We use appropriate technical and organizational safeguards to protect
                    your information.
                </p>

                {/* Section 8 */}
                <SectionTitle>8. Children’s Privacy</SectionTitle>
                <p className="mb-8">
                    Our services are not intended for children under 13. If you believe a
                    child has provided personal data, please contact us.
                </p>

                {/* Section 9 */}
                <SectionTitle>9. Changes to This Policy</SectionTitle>
                <p className="mb-8">
                    We may update this Privacy Policy periodically. The latest version
                    will always be available at:
                    <br />
                    https://www.yourbooks.in/privacy-policy
                </p>

                {/* Section 10 */}
                <SectionTitle>10. contact Us</SectionTitle>
                <p className="mb-2">📧 support@yourbooks.in</p>
                <p>🌐 www.yourbooks.in</p>
            </div>
        </div>
    )
}

/* Reusable Components */
function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-2xl font-semibold mt-10 mb-4">
            {children}
        </h2>
    )
}

function SubTitle({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="text-lg font-semibold mt-6 mb-2">
            {children}
        </h3>
    )
}
