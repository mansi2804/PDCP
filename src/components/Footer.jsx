import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer
      className="w-full bg-background p-6 md:py-8 h-[11vh] flex items-center justify-center"
      style={{
        backgroundColor: "#000235",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs text-muted-foreground text-center md:text-left">
          &copy; 2024 PDCP. All rights reserved.
        </p>
        <Link to="#" className="flex items-center gap-2 mt-4 md:mt-0">
          <span className="text-lg font-semibold bg-gradient-to-r from-[#8d8ddf] to-white bg-clip-text text-transparent">
            PlanItNow
          </span>
          <span className="sr-only">PlanItNow Logo</span>
        </Link>
      </div>
    </footer>
  );
}
