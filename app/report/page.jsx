import MainLayout from "@/layouts/main";

export default function ReportPage() {
    return (
        <MainLayout>
            <div className="flex h-full flex-col items-center justify-between">
                <iframe src="/resume.pdf" frameBorder="0" className="h-full w-full"></iframe>
            </div>
        </MainLayout>
    );
}
