import Link from "next/link";
import type { Metadata } from "next";
import { listPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const posts = await listPosts().catch(() => []);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="topbar">
        <div className="wrap">
          <Link className="mark" href="/">
            The Bridge of Hope Foundation
          </Link>
          <nav className="navlinks" aria-label="Main">
            <a href="#work">Our work</a>
            <a href="#safeguarding">Safeguarding</a>
            <a href="#people">Who we are</a>
            <a href="#accountability">Accountability</a>
            <Link className="btn" href="/give">
              Give monthly
            </Link>
          </nav>
        </div>
      </header>

      <main id="main">
        <div className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>Connecting vulnerable children to care, opportunity and a brighter future.</h1>
              <p className="lede">
                The Bridge of Hope Foundation is a registered non-profit children&apos;s home in Narok, Narok
                County. We provide food, clothing, school fees and medical cover for the children who live with
                us, and support to the families working to bring them home.
              </p>
              <div className="actions">
                <Link className="btn big" href="/give">
                  Give monthly
                </Link>
                <a className="btn big ghost" href="#work">
                  See what we do
                </a>
              </div>
            </div>

            <aside className="verify">
              <h2>Registration and oversight</h2>
              <dl>
                <dt>Registered as</dt>
                <dd>A non-profit organisation in Kenya</dd>
                <dt>Registration number</dt>
                <dd>SCH/2026/001</dd>
                <dt>Issued by</dt>
                <dd className="fill">[Name the exact body that issued the number above]</dd>
                <dt>Charitable Children&apos;s Institution</dt>
                <dd className="fill">[DCS registration no. — add once issued]</dd>
                <dt>Accounts audited by</dt>
                <dd>Wilson Lemayian</dd>
                <dt>Safeguarding lead</dt>
                <dd className="fill">[Full name] — [email]</dd>
              </dl>
              <p className="note">We will send copies of any of our registration documents to anyone who asks.</p>
            </aside>
          </div>
        </div>

        <section id="work">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-name">Our work</div>
              <h2>Four things a child needs, and one thing that matters more.</h2>
            </div>
            <div className="indent">
              <div aria-hidden="true"></div>
              <div>
                <div className="prog">
                  <div>
                    <h3>Food and clothing</h3>
                    <p>
                      Three meals a day, every day, and clothes that fit and are the child&apos;s own. This is the
                      least glamorous line in our budget and the largest. Children who arrive underfed spend their
                      first months here catching up physically before anything else is possible.
                    </p>
                  </div>
                  <div className="stat">
                    <b className="fill">[NN]</b> children fed daily
                  </div>
                </div>

                <div className="prog">
                  <div>
                    <h3>School fees and learning</h3>
                    <p>
                      We pay fees, buy uniforms and books, and cover the costs that quietly keep poor children out
                      of Kenyan classrooms. Children who arrive having missed a year or more get catch-up tuition
                      so they can rejoin a class at the right level rather than sitting far behind their age group.
                    </p>
                  </div>
                  <div className="stat">
                    <b className="fill">[NN]</b> children in full-time school
                  </div>
                </div>

                <div className="prog">
                  <div>
                    <h3>Medical cover</h3>
                    <p>
                      Registration with the national health insurance scheme, routine check-ups, dental care and
                      treatment when a child is ill. In Narok County the nearest facility is not always close, so
                      we also cover transport, which is often the real barrier to a child getting seen.
                    </p>
                  </div>
                  <div className="stat">
                    <b className="fill">[NN]</b> children covered
                  </div>
                </div>

                <div className="prog">
                  <div>
                    <h3>Safe daily care</h3>
                    <p>
                      Somewhere to sleep, trained caregivers, and the same adults present week after week.
                      Consistency is the part that cannot be bought in a single donation and is the reason we ask
                      for regular giving rather than one-off gifts.
                    </p>
                  </div>
                  <div className="stat">
                    <b className="fill">[N]</b> caregivers on staff
                  </div>
                </div>

                <div className="prog">
                  <div>
                    <h3>Working with families</h3>
                    <p className="fill">
                      [Confirm or delete this whole block. If you trace and work with children&apos;s extended
                      families so that children can eventually return home, describe what you actually do here —
                      it is the single strongest thing you can say to a US or UK donor. If you do not do this yet,
                      delete the block rather than claiming it.]
                    </p>
                  </div>
                  <div className="stat">
                    <b className="fill">[NN]</b> children returned to family
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="safeguarding">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-name">Safeguarding</div>
              <h2>You will not find photographs of our children on this website.</h2>
            </div>
            <div className="indent">
              <div aria-hidden="true"></div>
              <div>
                <p className="prose">
                  Children&apos;s faces raise more money. We have decided not to use them. A child in our care
                  cannot meaningfully consent to having their photograph, their name and their worst year
                  published to strangers on the internet, and that image will outlast their childhood by decades.
                  So we show you our staff, our buildings and our accounts instead, and we ask you to judge us on
                  those.
                </p>
                <div className="safe-cols">
                  <div>
                    <h3 className="subhead">What we do</h3>
                    <ul>
                      <li>Vetting and reference checks on every member of staff and every volunteer before any contact with children.</li>
                      <li>Child protection training for all staff, with a named safeguarding lead the children know by face.</li>
                      <li>A way for a child to raise a concern without going through their own caregiver.</li>
                      <li>A written child protection policy, reviewed each year and available to anyone who asks.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="subhead">What we do not do</h3>
                    <ul>
                      <li>Publish children&apos;s faces, full names, medical details or family histories.</li>
                      <li>Offer sponsorship of a named individual child, or pass a child&apos;s contact details to a donor.</li>
                      <li>Host short-term volunteer trips that place strangers in caregiving roles.</li>
                      <li>Allow any visitor unsupervised contact with children, donors and film crews included.</li>
                    </ul>
                  </div>
                </div>
                <p className="prose" style={{ marginTop: 28, fontSize: "0.95rem" }}>
                  <span className="fill">
                    [Read this list carefully and make sure every line is already true of Bridge of Hope. Where
                    one is not yet true, either put it in place this month or remove the line. A safeguarding
                    promise you cannot keep is worse than no promise at all.]
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="people">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-name">Who we are</div>
              <h2>The people responsible, by name.</h2>
            </div>
            <div className="indent">
              <div aria-hidden="true"></div>
              <div>
                <p className="prose" style={{ marginBottom: 36 }}>
                  The Bridge of Hope Foundation is a Kenyan organisation, run from Narok by Kenyan staff. Our
                  board holds the director to account for how money is spent and for the safety of the children
                  in our care.
                </p>
                <div className="people">
                  <div className="person">
                    <div className="portrait">
                      Photograph of your director. A plain head-and-shoulders shot against a wall is fine. It does
                      not need to look professional, it needs to look real.
                    </div>
                    <h3 className="fill">[Full name]</h3>
                    <p className="role">Director</p>
                    <p className="fill">
                      [Two sentences: how long they have led Bridge of Hope, what they did before, any relevant
                      training or qualification.]
                    </p>
                  </div>
                  <div className="person">
                    <div className="portrait">Photograph of your head of care or senior social worker.</div>
                    <h3 className="fill">[Full name]</h3>
                    <p className="role fill">[Head of care]</p>
                    <p className="fill">[Two sentences on their background and what they are responsible for day to day.]</p>
                  </div>
                  <div className="person">
                    <div className="portrait">Photograph of your board chair.</div>
                    <h3 className="fill">[Full name]</h3>
                    <p className="role">Chair of the board</p>
                    <p className="fill">[Two sentences: their profession, how long they have served, why they are involved.]</p>
                  </div>
                </div>
                <p style={{ marginTop: 32, fontSize: "0.94rem", color: "var(--slate)" }}>
                  Our accounts are independently audited by Wilson Lemayian.{" "}
                  <a href="#accountability">See where the money went</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="accountability">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-name">Accountability</div>
              <h2>Where the money went.</h2>
            </div>
            <div className="indent">
              <div aria-hidden="true"></div>
              <div>
                <p className="prose">
                  Our accounts are independently audited by Wilson Lemayian. The breakdown below comes from those
                  audited figures for <span className="fill">[year]</span>, when our total income was{" "}
                  <span className="fill">[KSh figure]</span>.
                </p>

                <div className="money">
                  {[
                    ["Food, clothing and daily care", 38],
                    ["School fees and learning", 24],
                    ["Medical cover and treatment", 14],
                    ["Caregiver salaries", 16],
                    ["Administration and governance", 8],
                  ].map(([label, pct]) => (
                    <div className="money-row" key={label as string}>
                      <div className="label">{label}</div>
                      <div className="bar">
                        <span style={{ width: `${pct}%` }}></span>
                      </div>
                      <div className="pct fill">[{pct}%]</div>
                    </div>
                  ))}
                </div>

                <p className="prose">
                  <span className="fill">
                    [The five percentages above are illustrative placeholders, not your figures. Replace each one
                    with your real audited number, and change the bar widths in the code to match. If your
                    administration cost is higher than you would like, publish it anyway and explain why — donors
                    forgive an honest number and walk away from a missing one. If your accounts have not been
                    audited yet, delete this whole breakdown until they have.]
                  </span>
                </p>

                <h3 className="subhead" style={{ margin: "36px 0 14px" }}>
                  Documents
                </h3>
                <ul className="docs">
                  <li>
                    <a href="#" className="fill">
                      [Annual report — add PDF]
                    </a>
                  </li>
                  <li>
                    <a href="#" className="fill">
                      [Audited accounts — add PDF]
                    </a>
                  </li>
                  <li>
                    <a href="#" className="fill">
                      [Child protection policy — add PDF]
                    </a>
                  </li>
                  <li>
                    <a href="#" className="fill">
                      [Certificate of registration — add PDF]
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="updates">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-name">Updates</div>
              <h2>What has actually happened here recently.</h2>
            </div>
            <div className="indent">
              <div aria-hidden="true"></div>
              <div>
                {posts.length > 0 ? (
                  <div className="updates">
                    {posts.slice(0, 3).map((post) => (
                      <article className="update" key={post.slug}>
                        <div className="shot">Photograph — see CONTENT-TODO.md.</div>
                        <p className="date">
                          {post.published_at
                            ? new Date(post.published_at).toLocaleDateString("en-GB", {
                                month: "long",
                                year: "numeric",
                              })
                            : ""}
                        </p>
                        <h3>
                          <Link href={`/updates/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p>{post.excerpt}</p>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="prose fill">
                    [No updates published yet. Add real, dated updates via the admin dashboard — see
                    CONTENT-TODO.md.]
                  </p>
                )}
                <p style={{ marginTop: 28 }}>
                  <Link href="/updates">See all updates</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="give-band">
          <div className="wrap">
            <h2>A small amount every month is worth more to us than a large amount once.</h2>
            <p>
              School fees fall due whether or not a donation arrived that week. Regular giving is what lets us
              commit to a child&apos;s place for a full year and keep caregivers on staff, instead of raising
              money crisis by crisis.
            </p>

            <div className="tiers">
              <div className="tier">
                <div className="amt">
                  $15 <span className="alt">/ £12</span>
                </div>
                <p>Towards the shared cost of food, clothing, schooling and medical cover for the children living at Bridge of Hope.</p>
              </div>
              <div className="tier">
                <div className="amt">
                  $30 <span className="alt">/ £25</span>
                </div>
                <p>A month of food, clothing, school fees and medical cover, pooled across the home so no child goes without.</p>
              </div>
              <div className="tier">
                <div className="amt">
                  $50 <span className="alt">/ £40</span>
                </div>
                <p>Covers a child&apos;s month and contributes to the caregiver salaries that make the rest of it work.</p>
              </div>
            </div>

            <Link className="btn big" href="/give">
              Set up a monthly gift
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <h2>The Bridge of Hope Foundation</h2>
              <p style={{ color: "var(--slate)", maxWidth: "34ch" }}>
                <span className="fill">[Street or postal address]</span>
                <br />
                Narok, Narok County, Kenya
              </p>
              <p style={{ color: "var(--slate)" }}>
                <a href="tel:+254000000000" className="fill">
                  [+254 XXX XXX XXX]
                </a>
                <br />
                <a href="mailto:info@example.org" className="fill">
                  [info@yourdomain.org]
                </a>
              </p>
            </div>
            <div>
              <h2>About</h2>
              <ul>
                <li><a href="#work">Our work</a></li>
                <li><a href="#people">Who we are</a></li>
                <li><a href="#accountability">Accounts and documents</a></li>
                <li><a href="#updates">Updates</a></li>
              </ul>
            </div>
            <div>
              <h2>Giving</h2>
              <ul>
                <li><Link href="/give">Give monthly</Link></li>
                <li><Link href="/give#faq">Questions about giving</Link></li>
                <li><a href="#safeguarding">Our safeguarding rules</a></li>
                <li><Link href="/privacy">Privacy policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="colophon">
            <span>Registration no. SCH/2026/001</span>
            <span className="fill">[DCS Charitable Children&apos;s Institution no.]</span>
            <span>© 2026 The Bridge of Hope Foundation</span>
          </div>
        </div>
      </footer>
    </>
  );
}
