```mermaid
flowchart LR
A[MAC Address Table] --- B[ARP Table]

A --> C[Switch Layer 2]
A --> D[MAC → Port Mapping]

B --> E[PC / Router]
B --> F[IP → MAC Mapping]

C --> G[Ethernet Forwarding]
E --> H[Packet Delivery in LAN]