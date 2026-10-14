import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Shell, { SectionHeading } from "../../components/shell";
import Carousel from "../../components/carousel";
import { ArrowUpRight, GitHubIcon } from "../../components/socials";

export const metadata: Metadata = {
  title: "StepSight (Desktop Guide) — Naiyar Hasnain",
  description:
    "A visual desktop copilot and autonomous agent built overnight at OpenAI DevDay Exchange Hackathon in Kochi, Kerala. C#, Avalonia, .NET 10, Python FastAPI, AWS and multimodal Gemini models.",
};

const REPO = "https://github.com/nive62tech/step-sight/tree/implementation/desktop-guide";

const stats = [
  { value: "Overnight", label: "all-night hackathon" },
  { value: "Kochi", label: "OpenAI DevDay Exchange" },
  { value: "2 Modes", label: "Guided & Autonomous" },
  { value: "< 15 s", label: "bounded action grant" },
];

const modes = [
  {
    title: "Guided Mode (“I click”)",
    note: "Non-intrusive visual companion",
    description:
      "Observes the active application via Windows Graphics Capture. Draws a glowing animated cursor, pulse ring, and instruction callout right over the target button or form field without hijacking the user's mouse. Verifies completion visually before advancing.",
    color: "bg-[#e6f4ea] text-[#137333]",
  },
  {
    title: "Autonomous Mode (“Agent acts”)",
    note: "Supervised agentic execution",
    description:
      "When granted explicit consent, the agent can click, scroll, type, and verify steps in the target window. Supports complex multi-app handoffs (e.g., researching in Chrome then launching WhatsApp Desktop to share). Moving the physical mouse instantly pauses control.",
    color: "bg-[#fce8e6] text-[#c5221f]",
  },
];

const safetyGuards = [
  {
    title: "Instant Physical Takeover",
    body: "Any mouse movement or physical keypress immediately halts autonomous execution via a low-level Win32 hook and safety thread.",
  },
  {
    title: "Time-Bounded Capability Grants",
    body: "Every single primitive action requires a fresh, single-use authorization token with a strict 15-second expiry. No runaway loops.",
  },
  {
    title: "Sensitive Step Air-Gap",
    body: "Logins, credit card inputs, CAPTCHAs, and payment authorizations are hard-gated as manual-only. The agent refuses to touch credentials.",
  },
  {
    title: "Local On-Device Privacy Masking",
    body: "User-defined screen regions, passwords, and sensitive system areas are masked locally in memory before frames ever reach the inference API.",
  },
];

const workflow = [
  {
    title: "1. Intent & Voice / Text Prompt",
    body: "Describe the goal naturally (e.g., “Open Chrome and guide me to book a train ticket on IRCTC”). You can type or use 30-second voice input transcribed by Gemini.",
  },
  {
    title: "2. Visual Screen Ingestion & Privacy Masking",
    body: "The Windows client captures clean frame buffers using Windows Graphics Capture (WGC). Coordinates are normalized, sensitive zones are masked, and native window handles stay strictly local.",
  },
  {
    title: "3. Multimodal Inference & Grounding",
    body: "The FastAPI backend orchestrates calls to Gemini 3.1 Flash-Lite and 3.8 Flash with compact thinking tokens. It identifies the next UI interaction and computes exact bounding targets.",
  },
  {
    title: "4. Supervisor Approval & Execution",
    body: "The permission supervisor validates the current epoch, target geometry, and user consent. It draws smooth on-screen guidance (Guided) or dispatches tagged Win32 synthetic inputs (Autonomous).",
  },
  {
    title: "5. Visual Verification Loop",
    body: "Rather than assuming an action worked, StepSight takes a fresh post-action screenshot to visually verify state change before deciding the next step.",
  },
];

const architectureStack = [
  {
    layer: "Desktop Client",
    items: "C# · Avalonia 12 · .NET 10 · Windows Graphics Capture (WGC) · Win32 Hooks · DPAPI",
  },
  {
    layer: "Backend & Orchestration",
    items: "Python 3.12 · FastAPI · SQLAlchemy · Alembic · PostgreSQL",
  },
  {
    layer: "Cloud & Infrastructure",
    items: "AWS (ap-south-1) · EC2 / ECS · Application Load Balancer · CloudFront · Cognito · Amazon S3",
  },
  {
    layer: "AI & Multimodal Vision",
    items: "Gemini 3.1 Flash-Lite & 3.8 Flash via GCP Workload Identity Federation (keyless IAM)",
  },
  {
    layer: "Mobile Controller (PWA)",
    items: "Vanilla JavaScript · HTML5 · CSS3 · Web App Manifest · Ephemeral Account-Bound Broker",
  },
];

const mobileSlides = [
  {
    src: "/stepsight/mobile-control-render.png",
    alt: "Mobile companion controller: monitoring desktop state and autonomous tasks",
  },
  {
    src: "/stepsight/mobile-control-autonomous.png",
    alt: "Autonomous execution dashboard on mobile with remote stop and resume controls",
  },
  {
    src: "/stepsight/mobile-control-concept.png",
    alt: "Mobile controller design concept and system architecture",
  },
];

const lessons = [
  {
    title: "Vision-first beats brittle DOM selectors",
    body: "Website layouts, CSS class names, and native desktop app internals change constantly. Inspecting what human eyes actually see makes the guide far more resilient and universally applicable.",
  },
  {
    title: "Safety must be physical, not just algorithmic",
    body: "When building an agent with input authority, software promises aren't enough. Dedicating a separate safety thread to detect physical mouse twitch and immediately disarm the executor gave users total peace of mind.",
  },
  {
    title: "The magic of an overnight hackathon",
    body: "Travelling to Kochi for the OpenAI DevDay Exchange hackathon pushed us to ship something genuinely hard in a single night. From concept to passing tests and working live demos before sunrise.",
  },
];

const tags = [
  "C#",
  "Avalonia 12",
  ".NET 10",
  "Python 3.12",
  "FastAPI",
  "PostgreSQL",
  "Multimodal AI",
  "Gemini Vision",
  "AWS CloudFront",
  "AWS Cognito",
  "PWA Remote Control",
  "Win32 API",
];

function Photo({
  src,
  alt,
  ratio,
  caption,
}: {
  src: string;
  alt: string;
  ratio: string;
  caption?: React.ReactNode;
}) {
  return (
    <figure>
      <div className={`shot relative ${ratio}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 720px"
          unoptimized
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-[13px] leading-relaxed text-body">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function StepSight() {
  return (
    <Shell>
      <article className="flex flex-col gap-16 lg:gap-[72px]">
        {/* ── Header ───────────────────────────────────── */}
        <header className="anim-fade-up">
          <Link
            href="/#projects"
            className="text-[13px] text-mute transition-colors hover:text-ink"
          >
            ← all projects
          </Link>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#059669]">
            OpenAI DevDay Exchange · All-Night Hackathon · Kochi, Kerala
          </p>
          <h1 className="mt-3 font-serif text-[44px] leading-[1.02] tracking-[-0.02em] text-ink sm:text-[56px]">
            StepSight
          </h1>
          <p className="mt-3 max-w-xl font-serif text-[22px] leading-snug text-body">
            A visual desktop companion &amp; autonomous guide,{" "}
            <em className="text-[#059669]">built overnight in Kochi.</em>
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-body">
            We travelled to Kochi, Kerala for the OpenAI DevDay Exchange all-night hackathon
            and built StepSight from scratch. It is an intelligent Windows desktop companion
            that uses multimodal vision models to visually guide learners through complex desktop
            and web workflows step-by-step — or safely pilot actions autonomously with strict human-in-the-loop
            guardrails.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !w-auto"
            >
              <GitHubIcon />
              View on GitHub
            </a>
            <a
              href="https://github.com/nive62tech/step-sight/tree/implementation/desktop-guide#desktop-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !w-auto"
            >
              <ArrowUpRight />
              Implementation Docs
            </a>
          </div>
        </header>

        {/* ── Event Venue Banner ───────────────────────── */}
        <Photo
          src="/stepsight/event-banner.jpg"
          alt="At the OpenAI DevDay Exchange Community Event in Kochi, Kerala"
          ratio="aspect-[4/5] sm:aspect-[16/10]"
          caption="OpenAI DevDay Exchange Community Event, Kochi, Kerala. Ready for the all-night hackathon."
        />

        {/* ── Stats Strip ──────────────────────────────── */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="surface-soft p-4">
              <p className="font-serif text-[28px] font-semibold leading-none text-ink">
                {s.value}
              </p>
              <p className="mt-2 text-[12px] text-mute">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Hero Shot ────────────────────────────────── */}
        <Photo
          src="/stepsight/desktop-control-render.png"
          alt="StepSight Desktop Guide showing floating companion dock, 3D blob, and visual guidance HUD"
          ratio="aspect-[16/10]"
          caption="StepSight in action: an animated floating companion blob, non-intrusive instruction cards, and live visual coordinate grounding."
        />

        {/* ── The Idea ─────────────────────────────────── */}
        <section>
          <SectionHeading>the problem &amp; the idea.</SectionHeading>
          <p className="font-serif text-[24px] leading-snug text-ink">
            Bridging human intent and complex software,{" "}
            <em className="text-[#059669]">without brittle selectors</em>.
          </p>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-body">
            <p>
              Navigating cluttered portals like government booking sites (IRCTC), complex developer
              dashboards, or unfamiliar desktop apps can be daunting. Traditional automation tools
              rely on fragile accessibility trees or hard-coded DOM selectors that break whenever a
              stylesheet changes.
            </p>
            <p>
              StepSight takes a pure computer-vision approach: it looks at what is actually rendered
              on screen via high-performance Windows Graphics Capture, understands natural language
              goals, and guides the user in real time — either as an interactive spotlight teacher or
              as a safe, supervised autonomous pilot.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {modes.map((m) => (
              <div key={m.title} className="surface-soft flex flex-col justify-between p-5">
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${m.color}`}>
                      {m.note}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[16px] font-semibold text-ink">{m.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-body">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Live Chrome Browser Guidance ─────────────── */}
        <Photo
          src="/stepsight/control-live-chrome.png"
          alt="StepSight guiding a live Google Chrome window through autonomous navigation"
          ratio="aspect-[16/9]"
          caption="Autonomous guidance in Chrome: grounding UI elements, executing precise click targets, and verifying step completion."
        />

        {/* ── Safety & Permission Architecture ─────────── */}
        <section>
          <SectionHeading>safety by design.</SectionHeading>
          <p className="font-serif text-[24px] leading-snug text-ink">
            Input authority requires{" "}
            <em className="text-[#059669]">uncompromising guardrails</em>.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-body">
            Giving an AI agent the ability to control mouse clicks and keystrokes is inherently
            dangerous without strict safety supervisor boundaries. We engineered StepSight with defense-in-depth:
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {safetyGuards.map((g) => (
              <li key={g.title} className="surface-soft p-5">
                <h4 className="text-[15px] font-semibold text-ink">{g.title}</h4>
                <p className="mt-2 text-[13px] leading-relaxed text-body">{g.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Step-by-Step Flow ────────────────────────── */}
        <section>
          <SectionHeading>how it works.</SectionHeading>
          <ol className="space-y-6">
            {workflow.map((s, i) => (
              <li key={s.title} className="relative pl-10">
                {i < workflow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[-24px] left-[13px] top-7 w-px bg-line"
                  />
                )}
                <span className="absolute left-0 top-0 inline-flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] border-ink bg-white font-serif text-[14px] text-ink">
                  {i + 1}
                </span>
                <h3 className="text-[15px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-body">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Mobile Companion PWA ─────────────────────── */}
        <section>
          <SectionHeading>mobile remote controller.</SectionHeading>
          <p className="font-serif text-[24px] leading-snug text-ink">
            Control &amp; monitor the desktop agent{" "}
            <em className="text-[#059669]">from your phone</em>.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-body">
            In addition to the Windows desktop client, we built an installable Progressive Web App (PWA)
            mobile controller. Paired over an account-bound ephemeral broker, it streams live autonomous task
            progress, displays agent thinking status, and lets users pause or trigger emergency stops remotely.
          </p>
          <div className="mt-6">
            <Carousel slides={mobileSlides} />
          </div>
        </section>

        {/* ── Architecture & Tech Stack ────────────────── */}
        <section>
          <SectionHeading>system architecture &amp; stack.</SectionHeading>
          <div className="surface-soft overflow-hidden p-5 sm:p-6">
            <div className="divide-y divide-line/60">
              {architectureStack.map((item) => (
                <div key={item.layer} className="py-3.5 first:pt-0 last:pb-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#059669]">
                    {item.layer}
                  </p>
                  <p className="mt-1 font-mono text-[13px] text-ink">{item.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Overnight Hackathon Sprint ──────────────── */}
        <section>
          <SectionHeading>the overnight sprint in kochi.</SectionHeading>
          <p className="font-serif text-[24px] leading-snug text-ink">
            Building through the night,{" "}
            <em className="text-[#059669]">from scratch to demo</em>.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-body">
            We arrived in Kochi for the OpenAI DevDay Exchange hackathon ready to build something ambitious.
            From midnight brainstorming to connecting high-performance Windows Graphics Capture and wiring
            up multimodal vision prompts, the entire team pushed through the night until the companion
            guided its first live application before sunrise.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Photo
              src="/stepsight/team-at-work.jpg"
              alt="The team hacking through the night around the table in Kochi"
              ratio="aspect-[4/5]"
              caption="The team at the hackathon table in Kochi, pushing through the all-night build."
            />
            <Photo
              src="/stepsight/at-work.jpg"
              alt="Naiyar and teammate deep in code debugging the C# client and inference loop"
              ratio="aspect-[4/5]"
              caption="Deep in code: tuning C# Avalonia UI hooks and the Gemini multimodal vision loop."
            />
          </div>
        </section>

        {/* ── What We Learned ──────────────────────────── */}
        <section>
          <SectionHeading>hackathon takeaways.</SectionHeading>
          <div className="space-y-4">
            {lessons.map((l) => (
              <div key={l.title} className="surface-soft p-5">
                <h3 className="text-[15px] font-semibold text-ink">{l.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-body">{l.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tags Footer ──────────────────────────────── */}
        <section className="border-t border-line pt-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-faint">
            Technologies &amp; Topics
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </section>
      </article>
    </Shell>
  );
}
