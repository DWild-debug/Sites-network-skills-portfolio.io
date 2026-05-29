# Day 2 — Tuesday (1 Hour)

# Topic
Subnet Masks: `/24`, `/25`, `/26`

---

# Visual Overview

```mermaid
flowchart TD

A[/24 Mask/] --> B[255.255.255.0]
A --> C[Block Size: 256]
A --> D[Usable Hosts: 254]

E[/25 Mask/] --> F[255.255.255.128]
E --> G[Block Size: 128]
E --> H[Usable Hosts: 126]

I[/26 Mask/] --> J[255.255.255.192]
I --> K[Block Size: 64]
I --> L[Usable Hosts: 62]
```

---

# How to Calculate Block Size

```mermaid
flowchart LR

A[Last Octet of Mask] --> B[256 - Last Octet]
B --> C[Block Size]
```

Example:

```text
/25 → 256 - 128 = 128
/26 → 256 - 192 = 64
```

---

# Exercise 1 — 192.168.10.0/25

```mermaid
flowchart LR

A[Network<br>192.168.10.0]
--> B[First Usable<br>192.168.10.1]
--> C[Hosts]
--> D[Last Usable<br>192.168.10.126]
--> E[Broadcast<br>192.168.10.127]
```

---

# Exercise 2 — 192.168.10.128/25

```mermaid
flowchart LR

A[Network<br>192.168.10.128]
--> B[First Usable<br>192.168.10.129]
--> C[Hosts]
--> D[Last Usable<br>192.168.10.254]
--> E[Broadcast<br>192.168.10.255]
```

---

# Exercise 3 — /26 Subnets

```mermaid
flowchart LR

A[192.168.20.0]
--> B[192.168.20.64]
--> C[192.168.20.128]
--> D[192.168.20.192]
```

---

# Why /26 Uses 64

```mermaid
flowchart TD

A["/26"] --> B["Mask: 255.255.255.192"]
B --> C["Block Size = 64"]
C --> D["Hosts = 62 usable"]

D --> E["Subnets"]
E --> F["192.168.1.0"]
E --> G["192.168.1.64"]
E --> H["192.168.1.128"]
E --> I["192.168.1.192"]
```

---

# Address Types Inside a Subnet

```mermaid
flowchart LR

A[First Address]
--> B[Network Address]

C[Middle Addresses]
--> D[Usable Hosts]

E[Last Address]
--> F[Broadcast Address]
```

---

# Quick Memory Chart

```mermaid
classDiagram
class Prefix {
    +/24
    +255.255.255.0
    +256
    +254
}

class Prefix_25 {
    +/25
    +255.255.255.128
    +128
    +126
}

class Prefix_26 {
    +/26
    +255.255.255.192
    +64
    +62
}
```
