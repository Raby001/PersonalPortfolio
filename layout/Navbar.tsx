import LinkStyle from "@/components/ui/InternalLink"
import ThemeToggle from "@/themes/ThemeToggle"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 
    backdrop-blur-md bg-white/70 dark:bg-gray-950/70
    b dark:border-white/10
    transition-all duration-100">

      <div className="max-w-[700px] mx-auto px-[20px] md:px-0">
        <div className="h-[70px] flex justify-between items-center">

          {/* Links */}
          <div className="flex space-x-4 sm:space-x-8 text-[13px] sm:text-[16px] font-medium">
            <LinkStyle href="/">Home</LinkStyle>
            <LinkStyle href="/project">Project</LinkStyle>
            <LinkStyle href="/contact">Contact</LinkStyle>
          </div>

          {/* Theme */}
          <ThemeToggle />

        </div>
      </div>
    </nav>
  );
}