'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm mb-4">© 2025 MyJobb Resume AI. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/about" className="text-sm hover:text-gray-400" aria-label="About page">About</a>
          <a href="/contact" className="text-sm hover:text-gray-400" aria-label="Contact page">Contact</a>
          <a href="/privacy" className="text-sm hover:text-gray-400" aria-label="Privacy page">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
