import Button from "./Button";

const HOST_FORM_URL = "https://airtable.com/app9tlGzibEY33NsH/shrPqY1YsGCmrXkqW";
const DONATE_URL = "https://fundraiser.tinkerhub.org";

export default function FloatingCTA() {
  return (
    <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50 flex flex-col sm:flex-row gap-2 items-end sm:items-center">
      <Button href={HOST_FORM_URL} className="h-9 px-4 text-xs shadow-lg">
        Host an event
      </Button>
      <Button href={DONATE_URL} variant="outline" className="h-9 px-4 text-xs shadow-lg">
        Support
      </Button>
    </div>
  );
}
