import { ConnectButton } from "thirdweb/react";
import { client } from "@/app/client";

export function Navbar() {
    return (

        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Simple Prediction Market</h1>
            <div className="items-center flex gap-2">
                <ConnectButton
                    client={client} />


            </div>
        </div>
    );
}