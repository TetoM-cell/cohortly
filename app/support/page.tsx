import { Navbar } from "@/components/Navbar";
import { Support } from "@/components/Support";
import { Footer } from "@/components/Footer";

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Support />
            <Footer />
        </main>
    );
}
