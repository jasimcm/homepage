const MAP_URL = "https://maps.app.goo.gl/9k69u1RgqVnevS57A";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-12 font-eyebrow text-xs uppercase text-ink-faint">
      <div className="max-w-[1128px] mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
          <span>TinkerSpace Calicut — built by TinkerHub Foundation</span>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Get directions →
          </a>
          <a
            href="https://fundraiser.tinkerhub.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Support the space
          </a>
        </div>
      </div>
    </footer>
  );
}
