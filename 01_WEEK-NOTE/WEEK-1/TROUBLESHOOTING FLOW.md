```mermaid
flowchart TD
K[Problem: Internet not working] --> L{Layer 1: Physical}
L -->|No signal| L1[Check cable / Wi-Fi]

L --> M{Layer 2: Data Link}
M -->|MAC issue| M1[Check switch / VLAN]

M --> N{Layer 3: Network}
N -->|No IP| N1[Check DHCP / ipconfig]

N --> O{Gateway reachable?}
O --> P{DNS works?}
P --> Q{Ping 8.8.8.8 works?}
Q --> R{Website opens?}

R --> S[OK - Application works]