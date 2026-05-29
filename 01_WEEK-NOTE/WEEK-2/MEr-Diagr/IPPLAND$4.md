```mermaid
flowchart TB

    A["DAY 4 - VLSM SUBNETTING PRACTICAL LAB<br/>Base Network: 192.168.50.0/24"]

    A --> B["STEP 1 - Analyze Department Requirements"]

    B --> B1["Guest Department - 50 Hosts"]
    B --> B2["Admin Department - 40 Hosts"]
    B --> B3["Support Department - 25 Hosts"]
    B --> B4["CCTV Department - 12 Hosts"]
    B --> B5["Management Department - 5 Hosts"]

    B1 --> C1["/26 = 62 Usable Hosts"]
    B2 --> C2["/26 = 62 Usable Hosts"]
    B3 --> C3["/27 = 30 Usable Hosts"]
    B4 --> C4["/28 = 14 Usable Hosts"]
    B5 --> C5["/29 = 6 Usable Hosts"]

    C1 --> D1["192.168.50.0/26<br/>Gateway: 192.168.50.1<br/>Usable: 192.168.50.1 - 192.168.50.62<br/>Broadcast: 192.168.50.63"]

    C2 --> D2["192.168.50.64/26<br/>Gateway: 192.168.50.65<br/>Usable: 192.168.50.65 - 192.168.50.126<br/>Broadcast: 192.168.50.127"]

    C3 --> D3["192.168.50.128/27<br/>Gateway: 192.168.50.129<br/>Usable: 192.168.50.129 - 192.168.50.158<br/>Broadcast: 192.168.50.159"]

    C4 --> D4["192.168.50.160/28<br/>Gateway: 192.168.50.161<br/>Usable: 192.168.50.161 - 192.168.50.174<br/>Broadcast: 192.168.50.175"]

    C5 --> D5["192.168.50.176/29<br/>Gateway: 192.168.50.177<br/>Usable: 192.168.50.177 - 192.168.50.182<br/>Broadcast: 192.168.50.183"]

    D1 --> E["FINAL ENTERPRISE VLAN PLAN"]
    D2 --> E
    D3 --> E
    D4 --> E
    D5 --> E

    E --> E1["VLAN 10 - Guest<br/>192.168.50.0/26"]

    E --> E2["VLAN 20 - Admin<br/>192.168.50.64/26"]

    E --> E3["VLAN 30 - Support<br/>192.168.50.128/27"]

    E --> E4["VLAN 40 - CCTV<br/>192.168.50.160/28"]

    E --> E5["VLAN 50 - Management<br/>192.168.50.176/29"]

    E1 --> F["ENTERPRISE DESIGN PRINCIPLES"]
    E2 --> F
    E3 --> F
    E4 --> F
    E5 --> F

    F --> F1["1. Largest subnet first"]
    F --> F2["2. Efficient IP allocation"]
    F --> F3["3. VLAN segmentation for security"]
    F --> F4["4. Broadcast domain reduction"]
    F --> F5["5. Easier troubleshooting and management"]

    F --> G["Golden Rule:<br/>Network + 1 = First Host<br/>Broadcast - 1 = Last Host"]