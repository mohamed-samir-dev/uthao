import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";

export default function StepsPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8  mb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
      <Steps />
      <Footer />
    </>
  );
}
