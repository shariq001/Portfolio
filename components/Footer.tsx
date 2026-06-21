/** Minimal footer component */
export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center px-4">
      <p className="text-muted text-sm font-mono">
        © {new Date().getFullYear()} Muhammad Shariq — Built with Next.js & Spec-Kit Plus.
      </p>
    </footer>
  );
}
