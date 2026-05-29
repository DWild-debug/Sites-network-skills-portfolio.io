```mermaid
flowchart TD
A[User opens google.com] --> B[DNS Query: domain → IP]
B --> C[DNS Response returns IP]

C --> D[TCP 3-way handshake]
D --> E[HTTPS request sent]

E --> F[IP routing through routers]
F --> G[MAC switching in LAN]
G --> H[Physical layer: cables / Wi-Fi]

H --> I[Server response]
I --> J[Browser displays website]