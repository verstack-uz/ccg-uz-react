import { useNavigate } from "react-router";

import AppPaths from "@/routes/AppPaths";

export default function ServerErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left Section: Text */}
      <div className="px-4py-8 flex flex-col items-center justify-center justify-self-center text-center">
        <h2 className="text-base-content mb-6 text-5xl font-semibold">
          Whoops! 500 error
        </h2>
        <h3 className="text-base-content mb-1.5 text-3xl font-semibold">
          Something went wrong on the server
        </h3>
        <p className="text-base-content mb-6 max-w-sm">
          The page you're looking for isn't found, we suggest you back to home.
        </p>
        <a
          onClick={() => navigate(AppPaths.ROOT)}
          className="btn btn-primary btn-gradient"
        >
          Back to home page
        </a>
      </div>
      {/* Right Section: Illustration */}
      <div className="relative max-h-screen w-full p-2 max-lg:hidden">
        <img
          src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/404/error-5.png"
          alt="500 background"
          className="h-full w-full rounded-2xl"
        />
        <img
          src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/404/error-6.png"
          alt="500 illustration"
          className="absolute top-1/2 left-1/2 h-[clamp(300px,40vw,477px)] -translate-x-[42%] -translate-y-1/2"
        />
      </div>
    </div>
  );
}
