```mermaid
flowchart TD
A[PC wants to send to IP] --> B{ARP Table has MAC?}

B -->|Yes| C[Send frame directly]
B -->|No| D[Send ARP Request Broadcast]

D --> E[Who has IP?]
E --> F[Device replies with MAC]
F --> G[Update ARP Table]
G --> C