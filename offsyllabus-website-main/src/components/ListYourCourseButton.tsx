import { useState } from "react";
import { X } from "lucide-react";

function ListYourCourseButton() {
  const [open, setOpen] = useState(false);
  const email = "offsyllabus.info@gmail.com";
  const subject = encodeURIComponent("Course/Workshop Submission");
  const body = encodeURIComponent(
    `Course/Workshop name:\n\nAbout you (educator/organizer):\n\nCourse details (what it covers, format, duration):\n\nCreatives (attach or link banner/poster):\n\nRegistration/signup link:\n\nContact info:\n`
  );

  return (
    <>
      <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-[#7c5cff] px-8 py-3.5 font-semibold text-white transition-all hover:bg-[#6b4fd9]">
        List your own course
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0B0B0F] p-6 text-left" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-lg font-semibold text-white">List your course</h3>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mb-4 text-sm text-gray-400">
              Email us the details below and we'll review it. If it's a good fit, we'll list it here.
            </p>
            <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-gray-400">
              <li>Course/event name and what it covers</li>
              <li>Creatives — a banner or poster</li>
              <li>The registration/signup link (even if it's a WhatsApp group)</li>
            </ul>
            <p className="mb-5 text-sm text-gray-300">
              Send it to{" "}
              <a href={`mailto:${email}`} className="font-medium text-[#7c5cff] underline">
                {email}
              </a>
            </p>
            <div className="flex gap-3">
              <a href={`mailto:${email}?subject=${subject}&body=${body}`} className="flex-1 rounded-xl bg-[#7c5cff] py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-[#6b4fd9]">
                Open email
              </a>
              <button onClick={() => setOpen(false)} className="rounded-xl border border-white/10 px-4 py-2.5 text-sm text-gray-300 hover:text-white">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListYourCourseButton;