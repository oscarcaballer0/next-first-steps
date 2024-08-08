import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO title",
  description: "SEO description",
  keywords: ["About page", "Fernando", "información", "..."],
};

export default function AboutPage() {
  return <span className="text-7xl">About Page</span>;
}
