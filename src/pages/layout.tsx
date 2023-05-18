import Layout from "components/layouts/root";
import "@/styles/globals.css";
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Layout>{children}</Layout>;
}
