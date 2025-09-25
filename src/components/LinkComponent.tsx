import Link from "next/link";

export default function LinkComponent({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
    return <Link className={className} href={href}>{children}</Link>;
}