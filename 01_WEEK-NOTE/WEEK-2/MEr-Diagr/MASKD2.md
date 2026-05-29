```mermaid
mindmap
  root((DAY 2: SUBNET MASKS))
    Theory & Overview
      ::icon(fa fa-book)
      Key Concepts
        Prefix (CIDR)
        Mask (Dotted Decimal)
        Block Size (Total IPs)
        Usable Hosts (Total - 2)
      Review Table
        /24 = 255.255.255.0 | Block 256 | Hosts 254
        /25 = 255.255.255.128 | Block 128 | Hosts 126
        /26 = 255.255.255.192 | Block 64 | Hosts 62
    Prefix Breakdown
      ::icon(fa fa-list)
      /24
        Mask: 255.255.255.0
        Block Size: 256
        Hosts: 254
        Calculation: 256 - 2 = 254
      /25
        Mask: 255.255.255.128
        Block Size: 128
        Hosts: 126
        Subnet Step: 128 (0, 128)
      /26
        Mask: 255.255.255.192
        Block Size: 64
        Hosts: 62
        Subnet Step: 64 (0, 64, 128, 192)
    Paper Exercises
      ::icon(fa fa-pencil)
      Task 1: 192.168.10.0/25
        Network: 192.168.10.0
        Broadcast: 192.168.10.127
        First Host: 192.168.10.1
        Last Host: 192.168.10.126
        Usable Hosts: 126
      Task 2: 192.168.10.128/25
        Network: 192.168.10.128
        Broadcast: 192.168.10.255
        First Host: 192.168.10.129
        Last Host: 192.168.10.254
        Usable Hosts: 126
      Task 3: 192.168.20.0/26
        Network: 192.168.20.0
        Broadcast: 192.168.20.63
        First Host: 192.168.20.1
        Last Host: 192.168.20.62
        Usable Hosts: 62
    Cheat Sheet Formulas
      ::icon(fa fa-check-square)
      BLOCK SIZE (BS)
        256 - (Last Mask Octet)
        Ex: /25 -> 256 - 128 = 128
      USABLE HOSTS
        (Block Size) - 2
        Ex: /26 -> 64 - 2 = 62