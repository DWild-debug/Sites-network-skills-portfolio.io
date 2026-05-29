```mermaid
    flowchart TD

    A[IPv4]
    A --> A1["IPv4 = Internet Protocol version 4"]
    A --> A2["Used for addressing devices in a network"]
    A --> A3["IPv4 address = 32 bits"]
    A --> A4["Written as 4 numbers"]
    A4 --> A5["Example: 192.168.1.10"]
    A --> A6["Each number ranges from 0 to 255"]

    A --> A7["Used for:"]
    A7 --> A8["Identifying devices"]
    A7 --> A9["Transferring data between networks"]
    A7 --> A10["Routing traffic on the internet"]

    B[Subnet Mask]
    B --> B1["Shows which part of IP is network"]
    B --> B2["Shows which part is device/host"]

    B --> B3["Example:"]
    B3 --> B4["IP: 192.168.1.10"]
    B3 --> B5["Mask: 255.255.255.0"]

    B5 --> B6["192.168.1 = Network part"]
    B5 --> B7["10 = Host/device part"]

    C["CIDR Prefix /24"]
    C --> C1["/24 means first 24 bits belong to network"]
    C --> C2["Remaining bits belong to hosts/devices"]
    C --> C3["/24 corresponds to subnet mask 255.255.255.0"]

    D["Private IP Ranges"]
    D --> D1["Used inside local networks"]
    D --> D2["Not routed directly on the internet"]

    D --> E["10.0.0.0/8"]
    D --> F["172.16.0.0/12"]
    D --> G["192.168.0.0/16"]

    E --> E1["~16.7 million addresses"]
    F --> F1["~1 million addresses"]
    G --> G1["65,536 addresses"]