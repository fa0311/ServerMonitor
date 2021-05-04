var getData = async(fn,data) => {
    const param  = {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({"query":data})
    };
    fn(get());
}
function get(){
    return {
        "free": [
            [
                "total",
                "used",
                "free",
                "shared",
                "buff\/cache",
                "available"
            ],
            [
                "Mem:",
                "7808964",
                "2209948",
                "727920",
                "32092",
                "4871096",
                "5250944"
            ],
            [
                "Swap:",
                "2097148",
                "6400",
                "2090748"
            ]
        ],
        "mpstat": [
            [
                "Linux",
                "5.4.0-42-generic",
                "(ubuntu)"
            ],
            [
                "05\/03\/21"
            ],
            [
                "_x86_64_"
            ],
            [
                "(16",
                "CPU)"
            ],
            [
                "02:58:29",
                "CPU",
                "%usr",
                "%nice",
                "%sys",
                "%iowait",
                "%irq",
                "%soft",
                "%steal",
                "%guest",
                "%gnice",
                "%idle"
            ],
            [
                "02:58:30",
                "all",
                "48.79",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "1.11",
                "0.00",
                "0.00",
                "0.00",
                "50.09"
            ],
            [
                "02:58:30",
                "0",
                "34.51",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "11.50",
                "0.00",
                "0.00",
                "0.00",
                "53.98"
            ],
            [
                "02:58:30",
                "1",
                "84.16",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "1.98",
                "0.00",
                "0.00",
                "0.00",
                "13.86"
            ],
            [
                "02:58:30",
                "2",
                "34.65",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.99",
                "0.00",
                "0.00",
                "0.00",
                "64.36"
            ],
            [
                "02:58:30",
                "3",
                "48.04",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "1.96",
                "0.00",
                "0.00",
                "0.00",
                "50.00"
            ],
            [
                "02:58:30",
                "4",
                "78.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "22.00"
            ],
            [
                "02:58:30",
                "5",
                "58.59",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "41.41"
            ],
            [
                "02:58:30",
                "6",
                "63.64",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "36.36"
            ],
            [
                "02:58:30",
                "7",
                "89.90",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "10.10"
            ],
            [
                "02:58:30",
                "8",
                "59.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "41.00"
            ],
            [
                "02:58:30",
                "9",
                "21.78",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "78.22"
            ],
            [
                "02:58:30",
                "10",
                "61.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "39.00"
            ],
            [
                "02:58:30",
                "11",
                "35.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "65.00"
            ],
            [
                "02:58:30",
                "12",
                "17.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "83.00"
            ],
            [
                "02:58:30",
                "13",
                "49.50",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "50.50"
            ],
            [
                "02:58:30",
                "14",
                "39.60",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "60.40"
            ],
            [
                "02:58:30",
                "15",
                "9.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "0.00",
                "91.00"
            ]
        ],
        "lscpu": [
            [
                "Architecture",
                "x86_64"
            ],
            [
                "CPUop-mode(s)",
                "32-bit,64-bit"
            ],
            [
                "ByteOrder",
                "LittleEndian"
            ],
            [
                "Addresssizes",
                "39bitsphysical,48bitsvirtual"
            ],
            [
                "CPU(s)",
                "16"
            ],
            [
                "On-lineCPU(s)list",
                "0-15"
            ],
            [
                "Thread(s)percore",
                "2"
            ],
            [
                "Core(s)persocket",
                "8"
            ],
            [
                "Socket(s)",
                "1"
            ],
            [
                "NUMAnode(s)",
                "1"
            ],
            [
                "VendorID",
                "GenuineIntel"
            ],
            [
                "CPUfamily",
                "6"
            ],
            [
                "Model",
                "165"
            ],
            [
                "Modelname",
                "Intel(R)Core(TM)i7-10700CPU@2.90GHz"
            ],
            [
                "Stepping",
                "5"
            ],
            [
                "Frequencyboost",
                "enabled"
            ],
            [
                "CPUMHz",
                "4300.000"
            ],
            [
                "CPUmaxMHz",
                "2901.0000"
            ],
            [
                "CPUminMHz",
                "800.0000"
            ],
            [
                "BogoMIPS",
                "5799.77"
            ],
            [
                "Virtualization",
                "VT-x"
            ],
            [
                "L1dcache",
                "256KiB"
            ],
            [
                "L1icache",
                "256KiB"
            ],
            [
                "L2cache",
                "2MiB"
            ],
            [
                "L3cache",
                "16MiB"
            ],
            [
                "NUMAnode0CPU(s)",
                "0-15"
            ],
            [
                "VulnerabilityItlbmultihit",
                "KVM",
                "Mitigation",
                "Splithugepages"
            ],
            [
                "VulnerabilityL1tf",
                "Notaffected"
            ],
            [
                "VulnerabilityMds",
                "Notaffected"
            ],
            [
                "VulnerabilityMeltdown",
                "Notaffected"
            ],
            [
                "VulnerabilitySpecstorebypass",
                "Mitigation;SpeculativeStoreBypassdisabledviaprctlandseccomp"
            ],
            [
                "VulnerabilitySpectrev1",
                "Mitigation;usercopy\/swapgsbarriersand__userpointersanitization"
            ],
            [
                "VulnerabilitySpectrev2",
                "Mitigation;EnhancedIBRS,IBPBconditional,RSBfilling"
            ],
            [
                "VulnerabilitySrbds",
                "Notaffected"
            ],
            [
                "VulnerabilityTsxasyncabort",
                "Notaffected"
            ],
            [
                "Flags",
                "fpuvmedepsetscmsrpaemcecx8apicsepmtrrpgemcacmovpatpse36clflushdtsacpimmxfxsrssesse2sshttmpbesyscallnxpdpe1gbrdtscplmconstant_tscartarch_perfmonpebsbtsrep_goodnoplxtopologynonstop_tsccpuidaperfmperfpnipclmulqdqdtes64monitords_cplvmxsmxesttm2ssse3sdbgfmacx16xtprpdcmpcidsse4_1sse4_2x2apicmovbepopcnttsc_deadline_timeraesxsaveavxf16crdrandlahf_lmabm3dnowprefetchcpuid_faultepbinvpcid_singlessbdibrsibpbstibpibrs_enhancedtpr_shadowvnmiflexpriorityeptvpidept_adfsgsbasetsc_adjustbmi1avx2smepbmi2ermsinvpcidmpxrdseedadxsmapclflushoptintel_ptxsaveoptxsavecxgetbv1xsavesdthermidaaratplnptspkuospkemd_clearflush_l1darch_capabilities"
            ]
        ]
    };
}