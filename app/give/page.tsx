import Link from "next/link";
import type { Metadata } from "next";
import GiveForm from "@/components/GiveForm";

export const metadata: Metadata = {
  title: "Give monthly",
  description:
    "Set up a monthly gift to The Bridge of Hope Foundation, a registered children's home in Narok County, Kenya. Give in US dollars or pounds sterling. Cancel any time.",
};

export default function GivePage() {
  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <Link className="mark" href="/">
            The Bridge of Hope Foundation
          </Link>
          <nav className="navlinks" aria-label="Main">
            <Link href="/#work">Our work</Link>
            <Link href="/#safeguarding">Safeguarding</Link>
            <Link href="/#accountability">Accountability</Link>
          </nav>
        </div>
      </header>

      <main id="main" className="page">
        <div className="wrap layout">
          <div>
            <h1>Give every month, and we can plan further ahead than the next crisis.</h1>
            <p className="lede">
              Regular gifts are the only income we can build a school year around. They pay salaries, hold places
              at school, and let our social workers promise a family that support will still be there in six
              months.
            </p>
            <p className="prose">
              You can cancel at any time from the link in every receipt, and we will never phone you to talk you
              out of it. If you would rather give once, you can do that on the same form.
            </p>

            <div className="trust">
              <h2>Before you give, the things you should check</h2>
              <dl>
                <dt>We are a registered organisation, and you can verify it</dt>
                <dd>
                  Registered as a non-profit organisation in Kenya, no. SCH/2026/001, issued by{" "}
                  <span className="fill">[name the issuing body]</span>. Our Charitable Children&apos;s
                  Institution registration with the Directorate of Children&apos;s Services is{" "}
                  <span className="fill">[number — add once issued]</span>. We will send copies of our
                  certificates to anyone who asks.
                </dd>

                <dt>Our accounts are audited and published</dt>
                <dd>
                  Independently audited by Wilson Lemayian. <Link href="/#accountability">See the breakdown of where last year&apos;s money went</Link>.
                </dd>

                <dt>We do not use children&apos;s photographs</dt>
                <dd>
                  No faces, no names, no sponsorship of individual children. <Link href="/#safeguarding">Read why</Link>.
                </dd>

                <dt>Real people are accountable for this money</dt>
                <dd>
                  Our director and board are named on the site with photographs. <Link href="/#people">See who they are</Link>.
                </dd>
              </dl>
            </div>

            <div className="faq" id="faq">
              <h2>Questions donors ask</h2>

              <details>
                <summary>Is my donation tax deductible?</summary>
                <p className="fill">
                  [Answer honestly. If you are not yet registered with a US 501(c)(3) partner or a UK charity, say
                  so plainly: &ldquo;Not at present. We are a Kenyan-registered organisation, so gifts from the US
                  and UK are not currently tax deductible. We are working on a partnership that would change this
                  and will tell our monthly donors when it does.&rdquo; Donors respect a straight answer far more
                  than a vague one.]
                </p>
              </details>

              <details>
                <summary>How do I cancel or change my monthly gift?</summary>
                <p>
                  Every receipt we send contains a cancellation link, and you can also email{" "}
                  <a href="mailto:info@example.org" className="fill">
                    [info@yourdomain.org]
                  </a>{" "}
                  and we will stop it the same week. There is no phone call and no retention script. Changing the
                  amount works the same way.
                </p>
              </details>

              <details>
                <summary>What currency am I charged in, and what about exchange rates?</summary>
                <p className="fill">
                  [Explain what your payment provider actually does. For example: &ldquo;You are charged in US
                  dollars or pounds sterling. Your bank may apply its own conversion fee, which we do not
                  receive.&rdquo; Do not guess — check with your provider first and then write the true answer
                  here.]
                </p>
              </details>

              <details>
                <summary>What proportion of my gift reaches children?</summary>
                <p className="fill">
                  [Give the real figure from your audited accounts, including administration. For example:
                  &ldquo;About [NN]p in every pound goes directly to care, education and family support. The rest
                  pays for governance, audit and the bank charges on international transfers — costs we would
                  rather disclose than hide.&rdquo;]
                </p>
              </details>

              <details>
                <summary>Can I visit, or volunteer with the children?</summary>
                <p>
                  We welcome visits from donors to see the buildings, meet staff and go through our books. We do
                  not place visitors in caregiving roles or allow unsupervised contact with children, however
                  well intentioned, because a stream of temporary adults is harmful to children who have already
                  lost people. If you would like to visit, write to us and we will arrange it properly.
                </p>
              </details>

              <details>
                <summary>What will you send me, and how often?</summary>
                <p>
                  A receipt each month, and one email update roughly every <span className="fill">[month / two months]</span> with
                  what has actually happened here, including the things that went wrong. We do not sell or share
                  your details with anyone. <Link href="/privacy">Read our privacy policy</Link>.
                </p>
              </details>
            </div>
          </div>

          <GiveForm />
        </div>
      </main>

      <footer>
        <div className="wrap colophon">
          <span>The Bridge of Hope Foundation</span>
          <span>Narok, Narok County, Kenya</span>
          <span>Reg. no. SCH/2026/001</span>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/">Back to the site</Link>
        </div>
      </footer>
    </>
  );
}
