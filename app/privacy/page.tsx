import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How The Bridge of Hope Foundation collects, uses and protects the personal data of donors and website visitors.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <Link className="mark" href="/">
            The Bridge of Hope Foundation
          </Link>
          <nav className="navlinks">
            <Link href="/">Back to the site</Link>
            <Link href="/give">Give monthly</Link>
          </nav>
        </div>
      </header>

      <main>
        <div className="wrap doc">
          <h1>Privacy policy</h1>
          <p className="updated">
            Last updated <span className="fill">[Month YEAR]</span>
          </p>

          <div className="note">
            This is a working template, not legal advice. Read every paragraph and change anything that is not
            true of your organisation. Because you will hold data on UK donors, the UK GDPR applies to you, and
            Kenya&apos;s Data Protection Act 2019 applies as well. If you can afford an hour of a Kenyan
            data-protection lawyer&apos;s time before publishing, take it. Delete this box when you are done.
          </div>

          <p>
            This policy explains what personal information The Bridge of Hope Foundation collects, why we
            collect it, and what you can ask us to do with it. We are a non-profit organisation registered in
            Kenya, no. SCH/2026/001, at <span className="fill">[full address]</span>, Narok, Narok County.
          </p>

          <h2>Who is responsible for your data</h2>
          <p>
            We are the data controller. Our data protection contact is <span className="fill">[FULL NAME]</span>,
            reachable at <span className="fill">[email@yourdomain.org]</span>. We are registered with
            Kenya&apos;s Office of the Data Protection Commissioner under{" "}
            <span className="fill">[registration number, or delete this sentence if you are not yet registered]</span>.
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <b>If you donate:</b> your name, email address, postal address if you give one, the amount and
              date of your gift, and a record of your communication preferences. Your card details are handled
              by our payment provider and never reach our servers.
            </li>
            <li><b>If you subscribe to updates:</b> your name and email address.</li>
            <li><b>If you contact us:</b> whatever you choose to put in your message.</li>
            <li>
              <b>If you visit this website:</b> anonymised traffic data through{" "}
              <span className="fill">[Google Analytics / your analytics tool — or delete this line if you use none]</span>.
            </li>
          </ul>

          <h2>Why we use it, and on what legal basis</h2>
          <p>
            We process your donation details to take the payment, send you a receipt and keep accurate financial
            records — this is necessary to perform our agreement with you and to meet our legal accounting
            obligations. We send you updates about our work on the basis of your consent, which you can withdraw
            at any time. We use anonymised website analytics on the basis of our legitimate interest in
            understanding what people read.
          </p>

          <h2>Who we share it with</h2>
          <p>
            Our payment provider, <span className="fill">[PROVIDER NAME]</span>, and our email provider,{" "}
            <span className="fill">[PROVIDER NAME]</span>. Our auditors see donation records as part of the
            annual audit. We are sometimes required to share financial information with Kenyan regulators. We do
            not sell, rent, swap or otherwise share your details with any other organisation, ever.
          </p>
          <p>
            Your data may be stored on servers outside Kenya and outside the UK, because our providers are
            international. We only use providers that offer appropriate safeguards for international transfers.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep donation records for <span className="fill">[seven]</span> years to meet accounting and
            audit requirements. If you unsubscribe or ask us to delete your details, we remove you from all
            mailing lists immediately and keep only the minimum financial record we are legally required to
            hold.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask us for a copy of the information we hold about you, ask us to correct it, ask us to
            delete it, ask us to stop using it for a particular purpose, or object to how we are using it. Write
            to <span className="fill">[email@yourdomain.org]</span> and we will respond within 30 days. There is
            no charge.
          </p>
          <p>
            If you are unhappy with how we have handled your data, you can complain to Kenya&apos;s Office of the
            Data Protection Commissioner. If you are in the UK, you can also complain to the Information
            Commissioner&apos;s Office at ico.org.uk.
          </p>

          <h2>Cookies</h2>
          <p className="fill">
            [Describe exactly what this site sets. If you use no cookies at all, say so — it is a genuine
            selling point. If you add Google Analytics or a Meta pixel, you must list them here and, for UK and
            EU visitors, ask for consent before they load.]
          </p>

          <h2>Children&apos;s data</h2>
          <p>
            We do not publish identifying information, photographs or personal details of the children in our
            care. Records about children are held confidentially in line with our child protection policy and
            Kenyan law, and are never used in fundraising.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If we change this policy we will update the date at the top of the page, and we will email monthly
            donors if the change is significant.
          </p>
        </div>
      </main>

      <footer>
        <div className="wrap">
          The Bridge of Hope Foundation · <Link href="/">Home</Link> · <Link href="/give">Give monthly</Link>
        </div>
      </footer>
    </>
  );
}
