```mermaid
sequenceDiagram
    participant PC as Client
    participant DNS as DNS Server
    participant GW as Gateway
    participant WEB as Web Server

    PC->>DNS: DNS Query (google.com)
    DNS-->>PC: DNS Response (IP)

    PC->>GW: ICMP Echo Request
    GW-->>PC: ICMP Echo Reply

    PC->>WEB: TCP SYN (443)
    WEB-->>PC: SYN-ACK
    PC->>WEB: ACK

    PC->>WEB: HTTPS Request
    WEB-->>PC: HTTPS Response

    PC->>WEB: TCP FIN
    WEB-->>PC: FIN-ACK