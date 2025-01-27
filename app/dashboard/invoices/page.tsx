import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function InvoicesRoute() {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-2xl font-bold"></CardTitle>
                        <CardDescription>Manage your invoices right here </CardDescription>
                    </div>
                    <Link href="" className={buttonVariants()}>
                    <PlusIcon/> Create Invoice
                    </Link>
                </div>
            </CardHeader>
        </Card>
    )
}