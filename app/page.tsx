"use client";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>


      <main className="bg-[url('/hero.jpg')] bg-no-repeat bg-cover">
        <div className="flex items-center justify-center h-screen bg-cover bg-center bg-hero-pattern text-white text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
            <p className="mt-4 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima facilis, totam voluptas voluptate veniam reprehenderit! Dolorum at necessitatibus officiis accusantium porro distinctio cumque voluptatem ullam minus, sint quae dolore.</p>
            <Link href="/main" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">Get Started</Link>
          </div>
        </div>
      </main>

      <footer>
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}
