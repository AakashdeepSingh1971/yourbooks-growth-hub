export const metadata = {
    title: "Cancellation & Refund Policy | YOURBOOKS",
    description: "Cancellation and Refund Policy of YOURBOOKS",
}

export default function CancellationRefundPolicyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="container max-w-4xl mx-auto px-6 py-16">

                <h1 className="text-4xl font-bold mb-10">
                    Cancellation & Refund Policy
                </h1>

                {/* ---------------- CANCELLATION POLICY ---------------- */}
                <SectionTitle>Cancellation Policy of YOURBOOKS</SectionTitle>

                <p className="mb-6">
                    You may wish to cancel your order after placing an order for any
                    product or service. Some services allow cancellation provided that
                    the request is made within a specific time period after the order
                    was placed.
                </p>

                <p className="mb-6">
                    Cancellations may not be permitted for plans purchased during
                    promotional or sale periods such as Diwali Sale, End of Season Sale,
                    or other limited-time offers.
                </p>

                <p className="mb-10">
                    This Cancellation Policy describes all conditions regarding
                    cancellation of placed orders. Please review these conditions
                    carefully before making a purchase.
                </p>

                {/* ---------------- REFUND POLICY ---------------- */}
                <SectionTitle>Refund Policy of YOURBOOKS</SectionTitle>

                <p className="mb-6">
                    Thank you for purchasing our services. We value your trust and assure
                    you of the best service at all times. By purchasing any product or
                    service on our platform, you agree to this Refund Policy.
                </p>

                <p className="mb-6">
                    Refunds can only be initiated in the following cases:
                </p>

                <ul className="list-disc pl-6 space-y-4 mb-10">
                    <li>
                        If you purchased the wrong plan and our team advises you to
                        purchase another plan, 100% of the original plan value will be
                        refunded provided no service has been delivered under the previous
                        plan.
                    </li>

                    <li>
                        If you purchased a plan but Yourbooks is unable to assign an expert
                        or process your order, you will receive a 100% refund.
                    </li>

                    <li>
                        If your payment was processed successfully but Yourbooks did not
                        receive it, you must contact your financial service provider
                        directly for a refund.
                    </li>

                    <li>
                        If Yourbooks determines that an order cannot be processed within
                        the country’s legal or regulatory framework, a 100% refund will be
                        issued.
                    </li>
                </ul>

                <SubTitle>Refund Processing</SubTitle>
                <p className="mb-6">
                    Once you are eligible for a refund, our team will confirm via email.
                    Refunds will be processed within 10 working days from the date of
                    confirmation.
                </p>

                <SubTitle>Non-Refundable Conditions</SubTitle>
                <ul className="list-disc pl-6 space-y-4 mb-10">
                    <li>
                        If you fail to submit requested documents within 30 days without
                        reasonable cause, Yourbooks reserves the right to cancel your
                        order. In such cases, all payments made will be forfeited.
                    </li>

                    <li>
                        If you fail to respond to phone calls or emails from our team
                        within 30 days from the date of purchase, Yourbooks reserves the
                        right to cancel your order and forfeit payments made.
                    </li>

                    <li>
                        If you withhold necessary information required to process your
                        order, you will not be entitled to a refund.
                    </li>

                    <li>
                        If our experts are unable to fulfill your order due to missing
                        documents or information from your side, no compensation will be
                        provided and payments will be forfeited.
                    </li>

                    <li>
                        Any payments made by the Department will not be refunded.
                    </li>
                </ul>

                <SubTitle>Mode of Refund</SubTitle>
                <p className="mb-4">
                    All refunds will be issued in the form of credit notes unless stated
                    otherwise.
                </p>

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
