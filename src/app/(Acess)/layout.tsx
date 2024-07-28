import Hero from "@/components/templates/Hero";

export default function AcessLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex flex-row w-full h-full">
            <Hero/>
            {children}
        </div>
    );
}