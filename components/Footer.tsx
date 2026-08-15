import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

const MAP_URL = "https://maps.app.goo.gl/9k69u1RgqVnevS57A";

const patrons = [
  { name: "Fantacode", logo: "/img/partners/fantacode.avif" },
  { name: "ClusterDev", logo: "/img/partners/clusterdev.png" },
  { name: "Eduport", logo: "/img/partners/eduport.png" },
  { name: "Mozilor", logo: "/img/partners/mozilor.svg" },
  { name: "Samagata Foundation", logo: "/img/partners/samagata.svg" },
  { name: "Institute of Palliative Medicine", logo: "/img/partners/institute-of-palliative-medicine.png" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-12 font-eyebrow text-xs uppercase text-ink-faint">
      <div className="max-w-[1128px] mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center mb-10">
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

        <div className="border-t border-line pt-8">
          <p className="text-center text-ink-faint mb-5">Our patrons & supporters</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {patrons.map((p) => (
              <div key={p.name} className="relative h-8 w-[120px]">
                <Image
                  src={withBasePath(p.logo)}
                  alt={p.name}
                  fill
                  sizes="120px"
                  className="object-contain normal-case"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
