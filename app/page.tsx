import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-gray-100 dark:bg-gray-800 shadow-md">
        <div className="flex items-center gap-4">
          <Image src="/next.svg" alt="Logo" width={40} height={40} />
          <h1 className="text-xl font-bold">JKB21</h1>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/content" className="hover:text-blue-500">
            Content
          </Link>
          <Link href="/pricing" className="hover:text-blue-500">
            Pricing
          </Link>
          <Link href="/dashboard" className="hover:text-blue-500">
            Dashboard
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Explore Exclusive Media Content
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Video, Audio, Images, and Books curated just for you.
          </p>
          <div className="mt-8">
            <Link
              href="/pricing"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
            >
              Subscribe Now
            </Link>
          </div>
        </section>

        {/* Feature Section */}
        <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <Image
              src="/videos.svg"
              alt="Videos"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Videos</h3>
            <p>Stream premium video content anywhere, anytime.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <Image
              src="/audio.svg"
              alt="Audio"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Audio</h3>
            <p>Listen to exclusive audio content from our library.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <Image
              src="/images.svg"
              alt="Images"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Images</h3>
            <p>Browse high-quality images curated for our members.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <Image
              src="/books.svg"
              alt="Books"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Books</h3>
            <p>Access PDF books on a variety of topics.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 JKB21. All Rights Reserved.
          </p>
          <p className="mt-2">
            <Link
              href="/terms"
              className="text-blue-500 hover:underline"
            >
              Terms of Service
            </Link>{" "}
            |{" "}
            <Link
              href="/privacy"
              className="text-blue-500 hover:underline"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}