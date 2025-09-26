import Link from "next/link";

export default function LinkComponent({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
    if(className) {
        return <Link className={className} href={href}>{children}</Link>;
    }
    return <Link className={ 'shadow-md shadow-neutral-900 rounded-xl bg-blue-600 py-2 px-4 font-bold text-center ' + className} href={href}>{children}</Link>;
}