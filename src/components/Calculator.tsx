"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const packages = [
    { id: "wedding", name: "Raja Sehari", basePrice: 500, defaultHours: 4, description: "Majlis tunang, nikah, sanding, bertandang" },
    { id: "convocation", name: "Menara Gading", basePrice: 150, defaultHours: 2, description: "Convocation day, Pre/post-Convo" },
    { id: "events", name: "Meraikan", basePrice: 250, defaultHours: 2, description: "Majlis korporat, hari lahir, aqiqah, dll." },
];

const addOns = [
    { id: "extra-photographer", name: "Extra Photographer", price: 250, bonusHours: 0 },
    { id: "album", name: "Photobook Album", price: 400, bonusHours: 0 },
    { id: "outdoor", name: "Sesi Outdoor", price: 0, bonusHours: 1 },
    { id: "preparation", name: "Preparation Moment", price: 0, bonusHours: 1 },
];

const HOURLY_RATE = 150;

export default function Calculator() {
    const [selectedPackage, setSelectedPackage] = useState(packages[0].id);
    const [hours, setHours] = useState(packages[0].defaultHours);
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

    const handlePackageSelect = (pkgId: string) => {
        setSelectedPackage(pkgId);
        const pkg = packages.find((p) => p.id === pkgId);
        if (pkg) {
            // Calculate bonus hours from currently selected add-ons
            const bonusHours = selectedAddOns.reduce((sum, id) => {
                const addOn = addOns.find((a) => a.id === id);
                return sum + (addOn?.bonusHours || 0);
            }, 0);
            setHours(pkg.defaultHours + bonusHours);
        }
    };

    const toggleAddOn = (id: string) => {
        const addOn = addOns.find((a) => a.id === id);
        const isSelected = selectedAddOns.includes(id);

        if (isSelected) {
            // Removing add-on: subtract bonus hours
            setSelectedAddOns((prev) => prev.filter((a) => a !== id));
            if (addOn?.bonusHours) {
                setHours((h) => Math.max(1, h - addOn.bonusHours));
            }
        } else {
            // Adding add-on: add bonus hours
            setSelectedAddOns((prev) => [...prev, id]);
            if (addOn?.bonusHours) {
                setHours((h) => h + addOn.bonusHours);
            }
        }
    };

    const calculateTotal = () => {
        const pkg = packages.find((p) => p.id === selectedPackage);
        const basePrice = pkg?.basePrice || 0;
        const defaultHours = pkg?.defaultHours || 0;
        const extraHours = Math.max(0, hours - defaultHours);
        const hoursPrice = extraHours * HOURLY_RATE;
        const addOnsPrice = selectedAddOns.reduce((sum, id) => {
            const addOn = addOns.find((a) => a.id === id);
            return sum + (addOn?.price || 0);
        }, 0);
        return basePrice + hoursPrice + addOnsPrice;
    };

    return (
        <section
            id="calculator"
            className="snap-start min-h-screen w-full bg-stone-50 flex flex-col items-center justify-center p-6 pt-24"
        >
            <div className="max-w-2xl w-full space-y-8">
                <div className="text-center space-y-2">
                    <h2 className="text-4xl font-bold tracking-tight text-black">
                        Kira-Kira Harga
                    </h2>
                    <p className="text-gray-500">
                        Dapatkan anggaran harga untuk sesi fotografi anda. <br /><span className="text-xs">Harga akhir selepas selesai berbincang.</span>
                    </p>
                </div>

                {/* Package Selection */}
                <div className="space-y-3">
                    <h3 className="font-semibold text-lg text-black">1. Pilih Pakej</h3>
                    <div className="grid grid-cols-3 gap-3">
                        {packages.map((pkg) => (
                            <button
                                key={pkg.id}
                                onClick={() => handlePackageSelect(pkg.id)}
                                className={`p-4 rounded-xl border-2 transition-all text-center ${selectedPackage === pkg.id
                                    ? "border-black bg-black text-white"
                                    : "border-gray-200 bg-white text-black hover:border-gray-400"
                                    }`}
                            >
                                <p className="font-bold">{pkg.name}</p>
                                <p className="text-xs text-gray-500 py-1">{pkg.description}</p>
                                <p className="text-sm opacity-80">Dari RM {pkg.basePrice}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Hours Selection */}
                <div className="space-y-3">
                    <h3 className="font-semibold text-lg text-black">2. Tempoh Majlis</h3>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-200">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setHours((h) => Math.max(1, h - 1))}
                            className="h-10 w-10"
                        >
                            -
                        </Button>
                        <div className="flex-1 text-center">
                            <span className="text-3xl font-bold text-black">{hours}</span>
                            <span className="text-gray-500 ml-2">
                                {hours === 1 ? "jam" : "jam"}
                            </span>
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setHours((h) => h + 1)}
                            className="h-10 w-10"
                        >
                            +
                        </Button>
                    </div>
                    <p className="text-sm text-gray-500 text-center">
                        RM {HOURLY_RATE} per jam
                    </p>
                </div>

                {/* Add-ons */}
                <div className="space-y-3">
                    <h3 className="font-semibold text-lg text-black">3. Add-ons (Optional)</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {addOns.map((addOn) => (
                            <button
                                key={addOn.id}
                                onClick={() => toggleAddOn(addOn.id)}
                                className={`p-4 rounded-xl border-2 transition-all text-left ${selectedAddOns.includes(addOn.id)
                                    ? "border-black bg-black text-white"
                                    : "border-gray-200 bg-white text-black hover:border-gray-400"
                                    }`}
                            >
                                <p className="font-medium">{addOn.name}</p>
                                <p className="text-sm opacity-80">
                                    + RM {addOn.price}
                                    {addOn.bonusHours > 0 && ` (+${addOn.bonusHours} jam)`}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Total */}
                <div className="bg-black text-white p-6 rounded-2xl text-center space-y-2">
                    <p className="text-gray-400 uppercase tracking-widest text-sm">
                        Estimated Total
                    </p>
                    <p className="text-5xl font-black">RM {calculateTotal()}</p>
                    <p className="text-gray-400 text-sm">
                        Final price may vary based on specific requirements.
                    </p>
                </div>
            </div>
        </section>
    );
}
