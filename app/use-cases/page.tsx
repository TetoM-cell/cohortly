import { Navbar } from "@/components/Navbar";
import { UseCases } from "@/components/UseCases";
import { Footer } from "@/components/Footer";

const allowedUseCases = ["venture-funds", "accelerators", "education"] as const;

type UseCaseParam = (typeof allowedUseCases)[number];

function normalizeUseCase(value?: string): UseCaseParam {
    if (value && allowedUseCases.includes(value as UseCaseParam)) {
        return value as UseCaseParam;
    }
    return "venture-funds";
}

export default function UseCasesPage({
    searchParams,
}: {
    searchParams?: { useCase?: string };
}) {
    const initialUseCase = normalizeUseCase(searchParams?.useCase);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <UseCases initialUseCase={initialUseCase} />
            <Footer />
        </main>
    );
}
