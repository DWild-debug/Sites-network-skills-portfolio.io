```mermaid
flowchart TB

A[IPv4 & Subnetting]

A --> B["IP address<br/>Device address in network<br/>Example: 192.168.1.10"]

A --> C["Subnet mask<br/>Splits network & host parts<br/>255.255.255.0 → 192.168.1 / .10"]

A --> D["Prefix /24<br/>24 bits = network<br/>= 255.255.255.0"]

A --> E["Network address<br/>Identifies network<br/>192.168.1.0"]

A --> F["Broadcast address<br/>To all devices<br/>192.168.1.255"]

A --> G["Default gateway<br/>Router to Internet<br/>192.168.1.1"]

A --> H["Private IP<br/>Local network only<br/>10.x.x.x / 172.16-31.x.x / 192.168.x.x"]

A --> I["Public IP<br/>Internet-visible address"]

A --> J["Exercise"]
J --> J1["192.168.1.10 → Private"]
J --> J2["10.10.50.1 → Private"]
J --> J3["172.16.5.20 → Private"]
J --> J4["172.31.255.1 → Private"]
J --> J5["172.32.1.1 → Public"]
J --> J6["8.8.8.8 → Public"]
J --> J7["1.1.1.1 → Public"]
J --> J8["100.64.1.1 → CGNAT"]