```mermaid
sequenceDiagram
participant PC1
participant Switch
participant PC2

PC1->>Switch: Send frame (ARP Request)
Switch->>Switch: Learn Source MAC (PC1)
Switch->>PC2: Flood request

PC2->>Switch: ARP Reply
Switch->>Switch: Learn PC2 MAC
Switch->>PC1: Unicast reply

PC1->>Switch: Ping traffic
Switch->>PC2: Forward using MAC table