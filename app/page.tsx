import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Cloud from "@/components/Cloud";
import Eyebrow from "@/components/Eyebrow";
import Ribbon from "@/components/Ribbon";
import Section from "@/components/Section";
import { withBasePath } from "@/lib/basePath";

const HOST_FORM_URL = "https://airtable.com/app9tlGzibEY33NsH/shrPqY1YsGCmrXkqW";
const DONATE_URL = "https://fundraiser.tinkerhub.org";

const openTo = ["3D Printing", "Maker Space", "VR Zone", "AR", "GPU"];

const audience = [
  "Young builders",
  "Indie developers",
  "Open source contributors",
  "Hardware hackers",
  "Community & collectives",
  "Interdisciplinary creators",
  "Kutty makers",
];

const spaces = [
  {
    name: "Hackerspace",
    tilt: undefined,
    accent: "bg-yellow",
    body: "A place to sit down, learn, code, experiment, and build. Use the space for your own projects, work with others, or simply spend time learning something you've always wanted to try.",
  },
  {
    name: "Maker Station",
    tilt: "tilt-1" as const,
    accent: "bg-pink",
    body: "A playground for people who like to build things with their hands. Electronics, microcontrollers, sensors, tools, components, and everything in between. Tinker. Break. Fix. Build again.",
  },
  {
    name: "AI & GPU Station",
    tilt: undefined,
    accent: "bg-violet",
    body: "Explore AI without needing to own expensive hardware. Experiment with machine learning, computer vision, generative AI, model training, and other compute-heavy projects using the available GPU infrastructure.",
  },
  {
    name: "3D Printing",
    tilt: "tilt-2" as const,
    accent: "bg-orange",
    body: "Have a digital design? Turn it into something you can actually hold. Prototype parts, enclosures, mechanical components, creative objects, and whatever else you can imagine.",
  },
  {
    name: "Event Space",
    tilt: undefined,
    accent: "bg-lime",
    body: "A space for the community to come together. Workshops, hackathons, meetups, talks, demos, build sessions, and everything in between. If you have something worth sharing, bring it here.",
  },
];

const happens = [
  { title: "Build", accent: "bg-lime", body: "Work on your own projects or find people to build with." },
  { title: "Learn", accent: "bg-yellow", body: "Explore new technologies through workshops, sessions, experiments, and self-learning." },
  { title: "Share", accent: "bg-pink", body: "Host a meetup, run a workshop, teach something you know, or show people what you've built." },
  { title: "Experiment", accent: "bg-violet", body: "Try things that might work. And things that probably won't. That's part of the process." },
];

const community = [
  { title: "Maker Thursday", accent: "bg-orange", body: "A regular gathering for makers, builders, students, and curious minds. Come build, share what you're working on, ask questions, or just meet people from the community." },
  { title: "AI Wednesday", accent: "bg-violet", body: "A weekly space to explore Artificial Intelligence. From understanding the basics to experimenting with the latest tools, models, and ideas. Every Wednesday." },
  { title: "Kutty Makers", accent: "bg-yellow", body: "A space for young makers to explore technology through hands-on building and experimentation. Because curiosity should start early." },
  { title: "Community Meetups", accent: "bg-pink", body: "The space is open to communities across Malabar. Developer groups, design communities, robotics clubs, student groups, open-source communities, and anyone who wants to bring people together around technology." },
];

const faqs = [
  { q: "Is TinkerSpace Calicut a co-working space?", a: "No. It's a community makerspace built for learning, experimentation, collaboration, and building with technology." },
  { q: "Do I need to pay to use the space?", a: "No. TinkerSpace is free and open to the community." },
  { q: "Do I need to be a student or an engineer?", a: "No. If you're curious about technology and want to learn or build, you're welcome." },
  { q: "Do I need to have a project?", a: "Not at all. You can come with an idea, a problem, a half-finished project, or nothing at all." },
  { q: "Can I come anytime?", a: "Yes. TinkerSpace Calicut is designed to operate 24/7 once it's open." },
  { q: "When does it open?", a: "The space is still being built. Follow our social pages for updates on the opening date." },
];

function WindowFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative border border-line bg-paper ${className}`}>
      <div
        aria-hidden
        className="h-6 bg-surface/90 border-b border-line flex items-center gap-1.5 px-2.5"
      >
        <span className="w-2 h-2 rounded-full bg-pink" />
        <span className="w-2 h-2 rounded-full bg-yellow" />
        <span className="w-2 h-2 rounded-full bg-lime" />
      </div>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative pb-24 sm:pb-28">
        <div className="relative w-full min-h-[620px] sm:min-h-0 sm:aspect-[1717/916] overflow-hidden">
          <Image
            src={withBasePath("/img/hero-building-day.png")}
            alt="Illustrated rendering of the TinkerSpace Calicut building"
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />

          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-paper"
          />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Cloud className="absolute top-[3%] left-[2%] w-16 sm:w-32 text-surface/90" />
            <Cloud className="absolute top-[10%] right-[3%] w-14 sm:w-28 text-surface/70" />
          </div>

          <div className="absolute top-[3%] inset-x-0 px-6 sm:px-4">
            <div className="max-w-[1128px] mx-auto flex flex-wrap items-baseline justify-between gap-3">
              <span className="font-eyebrow text-xs uppercase text-surface/80 [filter:drop-shadow(0_1px_3px_rgba(0,0,0,0.5))]">
                Est. 2026
              </span>
              <span className="hidden sm:inline font-heading italic text-sm sm:text-base text-surface/90 [filter:drop-shadow(0_1px_3px_rgba(0,0,0,0.5))]">
                we learn, build, and grow together with technology
              </span>
            </div>
          </div>

          <div className="absolute top-[36%] inset-x-0 px-6 sm:px-4">
            <div className="max-w-xl mx-auto">
              <Image
                src={withBasePath("/img/tinkerspace-malayalam.png")}
                alt="TinkerSpace, written in Malayalam script"
                width={748}
                height={273}
                className="w-full h-auto [filter:drop-shadow(0_2px_10px_rgba(0,0,0,0.55))]"
                priority
              />
            </div>
            <div className="max-w-xl mx-auto -mt-2 sm:-mt-4">
              <Image
                src={withBasePath("/img/tinkerspace-calicut-malayalam.png")}
                alt="Calicut, written in Malayalam script"
                width={1731}
                height={909}
                className="w-full h-auto [filter:drop-shadow(0_2px_10px_rgba(0,0,0,0.55))]"
                priority
              />
            </div>
          </div>
        </div>

        <div className="relative max-w-[1128px] mx-auto px-6 sm:px-4">
          <Card className="absolute -top-20 sm:-top-28 right-4 sm:right-16 z-20 w-56 sm:w-72 -rotate-2 shadow-xl text-ink">
            <p className="font-eyebrow text-[11px] uppercase text-ink-soft mb-3">
              We are open to
            </p>
            <ul className="flex flex-wrap gap-1.5 mb-4">
              {openTo.map((tag) => (
                <li
                  key={tag}
                  className="border border-line bg-paper px-2 py-1 text-[10px] font-eyebrow uppercase"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <ol className="space-y-1 font-heading text-sm sm:text-base">
              {audience.map((a, i) => (
                <li key={a} className="flex gap-1.5">
                  <span className="text-ink-faint text-xs w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {a}
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </section>

      <Section className="pt-20 sm:pt-16">
        <Eyebrow>EST. 2026</Eyebrow>
        <h1 className="font-billboard text-[13vw] sm:text-6xl md:text-7xl uppercase leading-[1.02]">
          It starts with curiosity.
        </h1>
        <p className="font-heading text-2xl sm:text-3xl mt-6 max-w-2xl">
          You have an idea. Now it&apos;s time to build it.
        </p>
        <p className="mt-6 max-w-xl text-ink-soft">
          Maybe it&apos;s a robot. Maybe it&apos;s an AI experiment. Maybe it&apos;s a
          weird prototype that probably won&apos;t work. That&apos;s exactly why
          TinkerSpace exists.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button href={HOST_FORM_URL}>Host an event</Button>
          <Button href={DONATE_URL} variant="outline">
            Support the space
          </Button>
        </div>
        <p className="font-hand text-xl text-ink-soft mt-6 -rotate-1">
          the space is still being built — this is what we&apos;re making.
        </p>
      </Section>

      <Section>
        <Eyebrow>What is TinkerSpace?</Eyebrow>
        <p className="max-w-3xl text-lg">
          TinkerSpace is an open community space built around the idea that access
          to technology and a community of people who build together can change
          what people are capable of creating. TinkerSpace Calicut brings this
          culture to Malabar.
        </p>
        <p className="max-w-3xl text-ink-soft mt-4">
          The space is designed for people to learn, experiment, collaborate,
          prototype, host events, and build projects across technology, AI,
          robotics, electronics, design, hardware, and more. Come with an idea.
          Come with a question. Or just come curious.
        </p>
      </Section>

      <Section id="facilities" className="bg-surface border-y border-line">
        <Eyebrow>The Space</Eyebrow>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {spaces.map((space) => (
            <Card key={space.name} tilt={space.tilt}>
              <span className={`inline-block h-1.5 w-10 mb-4 ${space.accent}`} />
              <h3 className="font-heading text-2xl mb-3">{space.name}</h3>
              <p className="text-ink-soft text-sm">{space.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Ribbon>Open 24/7</Ribbon>
        <h2 className="font-display font-semibold text-4xl sm:text-5xl mt-4">
          This is your space.
        </h2>
        <p className="max-w-2xl mt-4 text-ink-soft">
          TinkerSpace Calicut is designed to be available 24 hours a day, 7 days a
          week. Once you&apos;re part of the community, you don&apos;t have to wait
          for an event to happen.
        </p>
        <p className="max-w-2xl mt-4 text-ink-soft">
          Want to work on your project at midnight? Come. Want to spend your
          Sunday learning something new? Come. Want to meet other people building
          things? Come. If the space is open, you&apos;re welcome.
        </p>
      </Section>

      <Section className="bg-surface border-y border-line">
        <Eyebrow>What happens here?</Eyebrow>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {happens.map((h) => (
            <Card key={h.title}>
              <span className={`inline-block h-1.5 w-10 mb-4 ${h.accent}`} />
              <h3 className="font-heading text-2xl mb-3">{h.title}</h3>
              <p className="text-ink-soft text-sm">{h.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="recurring">
        <Eyebrow>Recurring Community</Eyebrow>
        <div className="grid sm:grid-cols-2 gap-4">
          {community.map((c, i) => (
            <Card key={c.title} tilt={i % 2 === 0 ? undefined : "tilt-1"}>
              <span className={`inline-block h-1.5 w-10 mb-4 ${c.accent}`} />
              <h3 className="font-heading text-2xl mb-3">{c.title}</h3>
              <p className="text-ink-soft text-sm">{c.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Not sure where to start?</Eyebrow>
        <p className="max-w-2xl text-lg">
          That&apos;s okay. You don&apos;t need a project. You don&apos;t need to be
          an expert. You don&apos;t even need to know what you want to build yet.
        </p>
        <p className="max-w-2xl text-ink-soft mt-4">
          You can simply walk in, look around, talk to someone, explore the
          tools, and find something that makes you curious. That&apos;s how most
          things start.
        </p>
      </Section>

      <Section id="get-involved" className="bg-surface border-y border-line">
        <Eyebrow>Get Involved</Eyebrow>
        <div className="grid sm:grid-cols-2 gap-4">
          <Card tint="bg-lime/15">
            <p className="font-eyebrow text-xs text-ink-faint mb-2">01</p>
            <h3 className="font-heading text-2xl mb-3">Host an event</h3>
            <p className="text-ink-soft text-sm mb-4">
              Have an idea for a workshop, meetup, or hackathon? Use
              TinkerSpace Calicut as your community space — tell us what
              you&apos;re planning and we&apos;ll figure it out together.
            </p>
            <Button href={HOST_FORM_URL} variant="outline">
              Host an event →
            </Button>
          </Card>
          <Card tilt="tilt-1" tint="bg-pink/15">
            <p className="font-eyebrow text-xs text-ink-faint mb-2">02</p>
            <h3 className="font-heading text-2xl mb-3">Support the space</h3>
            <p className="text-ink-soft text-sm mb-4">
              TinkerSpace Calicut is community-funded. Help us build and run a
              free, open makerspace for Malabar.
            </p>
            <Button href={DONATE_URL} variant="outline">
              Support →
            </Button>
          </Card>
        </div>

        <WindowFrame className="mt-8 max-w-2xl">
          <div className="relative aspect-16/9">
            <Image
              src={withBasePath("/img/space-rendering.png")}
              alt="Architectural rendering of the TinkerSpace Calicut building"
              fill
              sizes="(min-width: 768px) 672px, 100vw"
              className="object-cover"
            />
          </div>
        </WindowFrame>
      </Section>

      <Section className="bg-surface border-y border-line" id="faq">
        <Eyebrow>Frequently Asked</Eyebrow>
        <div className="border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line py-4">
              <summary className="flex items-center justify-between cursor-pointer list-none font-heading text-lg">
                {f.q}
                <span className="font-eyebrow text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-ink-soft mt-3 max-w-2xl">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section className="text-center bg-ink text-surface">
        <p className="font-hand text-xl text-surface/70 -rotate-1">
          chekk-in cheytho?
        </p>
        <h2 className="font-malayalam text-3xl sm:text-5xl mt-4">
          ചെക്ക്-ഇൻ ചെയ്തോ?
        </h2>
        <p className="font-malayalam text-2xl sm:text-3xl mt-4">
          അപ്പോൾ നമുക്ക് പണിതു തുടങ്ങാം!
        </p>
      </Section>

      <Section className="text-center">
        <h2 className="font-billboard text-3xl sm:text-5xl uppercase">
          Learn. Build. Share. Repeat.
        </h2>
        <p className="text-ink-soft mt-4">
          Open 24/7. Free for everyone. Built by the community.
        </p>
        <p className="mt-2">Come curious. Leave with something built.</p>
      </Section>
    </>
  );
}
