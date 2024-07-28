import Hero from "@/components/templates/Hero";

export default function LoginLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex flex-row w-full h-full">
            <Hero/>
            {children}
        </div>
    );
}