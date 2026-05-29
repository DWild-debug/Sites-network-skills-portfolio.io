```mermaid
flowchart TB

A[IP Networking Basics]

A --> B["/24 (CIDR)<br/>24 network bits<br/>= 255.255.255.0<br/>= 256 IPs (254 usable)"]

A --> C["IP vs MAC<br/>IP = logical (routing)<br/>MAC = physical (LAN device)<br/>IP: 192.168.1.10<br/>MAC: 00:1A:2B:3C:4D:5E"]

A --> D["Default Gateway<br/>Router to other networks / Internet"]

A --> E["Why 192.168.x.x not internet-routable<br/>Private range → requires NAT"]

A --> F["Private IP ranges"]
F --> F1["10.0.0.0/8 (large)"]
F --> F2["172.16.0.0/12 (medium)"]
F --> F3["192.168.0.0/16 (home)"]