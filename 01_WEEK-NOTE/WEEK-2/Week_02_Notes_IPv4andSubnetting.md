WEEK ON - IPv4-адресація і subnetting

Day 1: IPv4, prefix, mask, private/public IP.

Вивчити:
    що таке IPv4; _ IPv4 (Internet Protocol version 4) is a system for addressing devices in a network.
                        An IPv4 address contains 32 bits and is written as 4 numbers:
                        Example:
                        192.168.1.10
                            Each number can range from 0 to 255.
                    IPv4 is used for:
                        identifying devices;
                        transferring data between networks;
                        routing traffic on the internet.

    що таке subnet mask; Subnet mask shows < What is part IP means and which one - device >
                            IP: 192.168.1.10
                            Mask: 255.255.255.0
                                Here:
                                    192.168.1 → network part
                                             .10 → device(host) part
                        
    що означає /24; Prefix - It hou many bites networks on IP-Addres
                    /24 is a CIDR prefix.
                        It means: the first 24 bits of the IP address belong to the network;
                                  the remaining bits belong to devices/hosts.
                                /24 corresponds to the subnet mask: 255.255.255.0

    що таке private IP ranges. Private IP ranges are address ranges used inside local networks. They are not directly routed on the internet.

Private ranges:

10.0.0.0/8
172.16.0.0/12
192.168.0.0/16

Range	        CIDR	Number of addresses
10.0.0.0/8	    /8	    ~16.7 million
172.16.0.0/12	/12	    ~1 million
192.168.0.0/16	/16	    65,536

20 хв - конспект

Створити файл:

Week 02 - IPv4 and Subnetting.md

У ньому записати:

IP address: <A SYstem adres device y network or Address device on network;>
Subnet mask: <Subnet mask shows < What is part IP means and which one - device >>
Prefix: Prefix - <It hou many bites networks on IP-Address>
Network address: <Address Herself Network>
Broadcast address: Addres <for sending massages to all deviceson the network>.
Default gateway: Router <through which device accesses the Internet. >
Private IP: <A Local addresses used within networks.>
Public IP: <Addresses that are visible on the Internet.>

Для кожного терміна написати пояснення своїми словами.

20 хв - вправи

Визначити, private чи public:

192.168.1.10 - Private
10.10.50.1 - Private
172.16.5.20 - Private
172.31.255.1 - Private
172.32.1.1 - Public
8.8.8.8 - Public
1.1.1.1 - Public
100.64.1.1 - CGNAT (No Private and Public)

Самоперевірка

без підказки:

    Що означає /24?
        24 is a CIDR prefix meaning that the first 24 bits belong to the network part, while the remaining bits are for hosts.
        For IPv4, it corresponds to the subnet mask:
            255.255.255.0
        Such a network contains 256 addresses (254 usable for devices).

    Чим IP-адреса відрізняється від MAC-адреси?
        IP address — a logical network address used for routing between networks.
        MAC address — a physical hardware address of a network adapter used inside a local network (LAN).
    Example:
        IP: 192.168.1.10
        MAC: 00:1A:2B:3C:4D:5E

    Що таке default gateway?
        A default gateway is a router that forwards traffic from the local network to other networks or the internet.

    Чому 192.168.x.x не маршрутизується напряму в інтернеті?
        Because it is a private IP range reserved for local networks.
        Internet routers do not route these addresses directly. NAT is used for internet access.

    Які три основні private IP ranges?
        Private Range	                CIDR	        Description
        10.0.0.0 – 10.255.255.255	     /8	        Великий приватний діапазон / Large private range
        172.16.0.0 – 172.31.255.255	    /12	        Середній приватний діапазон / Medium private range
        192.168.0.0 – 192.168.255.255	/16	        Найпоширеніший домашній діапазон / Most common home range

DAY 2: MASK 

Prefix | Mask | Block size | Usable hosts

Topic
Masks /24, /25, /26

What to do^:

/24
Mask: 255.255.255.0
Block size: 256
Usable hosts: 254
    Why  254?
        Total addresses = 256
        1 is the network address
        1 is the broadcast address
        256 − 2 = 254 usable hosts
/25

Mask:   255.255.255.128
Block size: 128
Usable hosts: 126
Subnets increase by 128:
    0
    128
        So in 192.168.10.x:
              192.168.10.0/25 → addresses 0–127
              192.168.10.128/25 → addresses 128–255
/26

Mask: 255.255.255.192
Block size: 64
Usable hosts: 62

Subnets increase by 64:
            0
            64
            128
            192
    That is why:
        192.168.20.0/26
        192.168.20.64/26
        192.168.20.128/26
        192.168.20.192/26
            are the four /26 subnets inside one /24 network.

15 min — review

Review the table:

/24 = 255.255.255.0
/25 = 255.255.255.128
/26 = 255.255.255.192

25 min — paper exercises

Solve manually:

Task 1
№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№

Find:

* network address;
* broadcast;
* first usable;
* last usable;
* usable hosts.

Correct answer:
192.168.10.0/25

/25 = 255.255.255.128
BLOK: 256-128=128
(<0
  128>)

192.168.10.0 → 192.168.10.127

1.Network: 192.168.10.0
2.Broadcast: 192.168.10.127
3.First usable: 192.168.10.1
4.Last usable: 192.168.10.126
5.Usable hosts: 128-2=126


##################################################
Task 2

192.168.10.128/25
192.168.10.128 → 192.168.10.255
BLOK: 256-128=128
(<0
  128>)

Correct answer:

1.Network: 192.168.10.128
2.Broadcast: 192.168.10.255
3.First usable: 192.168.10.129
4.Last usable: 192.168.10.254
5.Usable hosts: 126

##########################################
Task 3

192.168.20.0/26
255.255.255.2=192
BLOCK Size^ 226-192=64

192.168.20.0/26 belongs to the range:
192.168.20.0 → 192.168.20.63

Subnets:

1.Network address: 192.168.20.0
3.First usable: 192.168.20.64 - START
4.Last usable: 192.168.20.128
5.Usable hosts:192.168.20.192

1.Network address: 192.168.20.0
2.Broadcast address: 192.168.20.63
3.First usable: 192.168.20.1
4.Last usable:192.168.20.62
5.Usable hosts:64-2=62


#################################
20 min — explain out loud

Should explain out loud:

* /26 gives a block size of 64, so the subnets go 0, 64, 128, 192.

Self-check

Should say without a calculator:

Prefix | Mask | Block size | Usable hosts
/24 | 255.255.255.0 | 256 | 254
/25 | 255.255.255.128 | 128 | 126
/26 | 255.255.255.192 | 64 | 62


/24 gives a block size of 256

BLOCK SIZE
256 - last mask octet
/25 - 256-128=128
/26 - 256-192=64
USABLE HOSTS
BS - 2
/25 128-2=126
/26   64-2=62


//////////
DAY 2 - Topic: /24, /25, /26 Masks

    Memorize this table:
        | Prefix | Mask | Block Size | Usable Hosts |
        |---|---|---|---||---|---|---|---|
        | /24 | 255.255.255.0 |  256 | 254 |
        | /25 | 255.255.255.128 | 128 | 126 |
        | /26 | 255.255.255.192 | 64 | 62 |
        |---|---|---|---||---|---|---|---|
### Key Logic

- Block size = 256 − last octet of the mask
- Usable hosts = block size − 2
    # 25 min — Paper Exercises

## Exercise 1

IP: `192.168.10.0/25`

Mask:

`255.255.255.128`

Block size:

`256 - 128 = 128`

Subnets increase by:

- 0
- 128

### Answer

- Network: `192.168.10.0`
- First usable: `192.168.10.1`
- Last usable: `192.168.10.126`
- Broadcast: `192.168.10.127`
- Usable hosts: `126`

---

## Exercise 2

IP: `192.168.10.128/25`

Block size:

`256 - 128 = 128`

Subnets:

- 0
- 128

### Answer

- Network: `192.168.10.128`
- First usable: `192.168.10.129`
- Last usable: `192.168.10.254`
- Broadcast: `192.168.10.255`
- Usable hosts: `126`

---

## Exercise 3

IP: `192.168.20.0/26`

Mask:

`255.255.255.192`

Block size:

`256 - 192 = 64`

### Subnets

- `192.168.20.0`
- `192.168.20.64`
- `192.168.20.128`
- `192.168.20.192`

Each /26 subnet contains:
- 64 total addresses
- 62 usable hosts
- 1 network address
- 1 broadcast address
---

# 20 min — Explain Out Loud

Dima should explain:

> "/26 has the mask 255.255.255.192.
> 256 − 192 = 64, so the block size is 64.
> The subnets increase by 64:
> 0, 64, 128, 192."

Also:

> "In every /26 subnet:
> - the first address is the network address,
> - the last address is the broadcast address,
> - addresses in between are usable hosts."

---
//////

№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№
 
DAY 3 Subnet Masks /27, /28, /29, /30

STUDY THE TABLE
Prefix | Mask | Block Size | Usable Hosts
/27 = 255.255.255.224 = block 32 = 30 hosts
/28 = 255.255.255.240 = block 16 = 14 hosts
/29 = 255.255.255.248 = block 8 = 6 hosts
/30 = 255.255.255.252 = block 4 = 2 hosts

256 - last octet of subnet mask = block size
Examples:
/27 → 256 - 224 = 32
/28 → 256 - 240 = 16
/29 → 256 - 248 = 8
/30 → 256 - 252 = 4

TASK1 
Network: 192.168.1.0/27
RANGE:192.168.1.97 → 192.168.1.126
GIVEN:
    PREFIX:/27
    SUBMASK:255.255.255.224
    BlokSIZE:32
    FORMULA (256-224=32)
Subnets:
    192.168.1.0
    192.168.1.32
    192.168.1.64
    192.168.1.96
    192.168.1.128
    192.168.1.160
    192.168.1.192
    192.168.1.224   
                    For Subnet 192.168.1.96/27  [Network: 192.168.1.96
                                                First usable: 192.168.1.97
                                                Last usable: 192.168.1.126
                                                Broadcast: 192.168.1.127]
          Next subnet starts at 192.168.1.128 therefore broadcast = 192.168.1.127          

TASK2
Network:10.0.0.0/28 
RANGE: 10.0.0.33 - 10.0.0.46
Each subnet contains:
        16 total addresses
        14 usable hosts
GiVEN:  
    PREFIX:/28
    Mask:255.255.255.240
    BlokSIZE:16
    Formula:256-240=16
SUBNETS:
    10.0.0.0/28
    10.0.0.16/28
    10.0.0.32/28
    10.0.0.48/28     
                    For Subnet 10.0.0.32/28: [Network: 10.0.0.32
                                              First usable: 10.0.0.33
                                              Last usable: 10.0.0.46
                                              Broadcast: 10.0.0.47]
           Next subnet starts at 10.0.0.48 Therefore Broadcast = 10.0.0.47    

TASK3
Network:192.168.50.0/30
RANGE: 192.168.50.9 - 192.168.50.10
Each /30 subnet contains:
    4 total addresses
    2 usable hosts
GIVEN:
    PREFIX: /30
    MASK:255.255.255.252
    BLOCKSIZE:4
    FORMULA: 256-252=4
SUBNETS^
    192.168.50.0/30
    192.168.50.4/30
    192.168.50.8/30
    192.168.50.12/30
                        For Subnet 192.168.50.8/30: [Network: 192.168.50.8
                                                    First usable: 192.168.50.9
                                                    Last usable: 192.168.50.10
                                                    Broadcast: 192.168.50.11]
          Next subnet starts at 192.168.50.12   Therefore Broadcast = 192.168.50.11

    How many usable hosts are in /27? 
    32 total bits − 27 network bits = 5 host bits
        Explanation:
            32 total IP addresses
            1 network address
            1 broadcast address
            30 usable host addresses

    What is the block size in /28? 
    4 host bits = 2^4=16
    
    

    What is the mask in /30? 
        Mask for /30: 255.255.255.252
    

    What is the broadcast for 192.168.1.64/27? 
        broadcast: 192.168.1.95
        block size = 32
        subnet range: 192.168.1.64 – 192.168.1.95
        
    
    Do 192.168.1.70 and 192.168.1.95 belong to the same /27 subnet?
        Yes, both are inside:
            network: 192.168.1.64/27
                range: 192.168.1.64 – 192.168.1.95
    

DAY 4: IP Planning


    Scenario
    A small office needs 4 network segments:
        Segment	Required    Devices
            Office PCs	    50
            VoIP Phones	    30
            Printers	    10
            Guest Wi-Fi	    25
                Available network:  192.168.10.0/24
                The task is to subnet this network efficiently.

    Step 1 — Plan the Subnets
1. Office PCs — 50 devices
            Need at least 50 usable host addresses.
                A /26 subnet provides:
                    64 total addresses
                    62 usable hosts
                Subnet
                    Network: 192.168.10.0/26
                    Usable range: 192.168.10.1 – 192.168.10.62
                    Broadcast: 192.168.10.63
                    Gateway: 192.168.10.1
2. VoIP Phones — 30 devices
    A /27 subnet provides:
        32 total addresses
        30 usable hosts
            Subnet
            Network: 192.168.10.64/27
            Usable range: 192.168.10.65 – 192.168.10.94
            Broadcast: 192.168.10.95
            Gateway: 192.168.10.65
3. Guest Wi-Fi — 25 devices
    A /27 subnet also provides 30 usable hosts.
        Subnet
        Network: 192.168.10.96/27
        Usable range: 192.168.10.97 – 192.168.10.126
        Broadcast: 192.168.10.127
        Gateway: 192.168.10.97
4. Printers — 10 devices
    A /28 subnet provides:
        16 total addresses
        14 usable hosts
            Subnet
            Network: 192.168.10.128/28
            Usable range: 192.168.10.129 – 192.168.10.142
            Broadcast: 192.168.10.143
            Gateway: 192.168.10.129

      Step 2 — Final IP Plan      
  VLAN	Назва	    Subnet	              Gateway	     Usable range	      Broadcast
    10	Office	    192.168.10.0/26	    192.168.10.1	192.168.10.1-62	    192.168.10.63
    20	VoIP	    192.168.10.64/27	192.168.10.65	192.168.10.65-94	192.168.10.95
    30	Guest	    192.168.10.96/27	192.168.10.97	192.168.10.97-126	192.168.10.127
    40	Printers	192.168.10.128/28	192.168.10.129	192.168.10.129-142	192.168.10.143

    Explanation
    1. Why Office Received /26?
            The Office segment needs 50 devices.
            A /27 subnet provides only:
                32 total addresses
                30 usable host addresses
            That is not enough.
            A /26 subnet provides:
                64 total addresses
                62 usable host addresses
        So /26 is the smallest subnet that can support 50 devices efficiently.

    2. Why VoIP and Guest Received /27
        Both segments need around 25–30 devices.
        A /28 provides only:
            16 total addresses
            14 usable hosts
        Not enough.
        A /27 provides:
            32 total addresses
            30 usable hosts
        That matches the requirement while minimizing wasted addresses.

    3. Why Printers Received /28
        The printer network needs only 10 devices.
            A /28 provides:
                16 total addresses  
                14 usable hosts
        This is enough while conserving IP space.
    4. Why Not Use One /24 for Everything
        A single /24 would place all devices in the same broadcast domain.
            Problems with that approach:
                More broadcast traffic
                Less security
                Poor traffic isolation
                Harder troubleshooting
                No separation between guests and internal devices
                VoIP traffic competes with normal user traffic
            Segmentation using VLANs and subnets provides:
                Security isolation
                Better performance
                Easier management
                Policy control
                QoS for VoIP
                Guest network isolation
            For example:
                Guests should not access office PCs or printers.
                VoIP phones often need separate QoS policies.
                Printers are easier to manage in their own VLAN.
    5. Why the Gateway Is Usually the First or Last Usable IP
        The gateway is the router interface for that subnet.
            Common practice is to use:
                First usable IP - Example: 192.168.10.1
                Or last usable IP - Example: 192.168.10.62
        Reasons:
            Consistency
            Easier troubleshooting
            Easier documentation
            Easier for administrators to remember

    Practice!!!! create an IP plan yourself for this scenario:

Base network: 192.168.50.0/24
    Departments:  Department	Hosts
                    Admin	    40
                    Support 	25
                    CCTV    	12
                    Guest	    50
                    Management	5
     Self-check
  Determine Required Subnets
        Department	Hosts Needed	Smallest Suitable Subnet	Usable Hosts
        Guest	        50	                /26	                    62
        Admin	        40	                /26                 	62
        Support	        25	                /27                 	30
        CCTV	        12	                /28                 	14
        Management	    5	                /29                 	6
        
        1. Guest Department 192.168.50.0/26
            Network: 192.168.50.0
            Usable Range: 192.168.50.1 – 192.168.50.62
            Broadcast: 192.168.50.63
            Mask: 255.255.255.192
        2. Admin Department 192.168.50.64/26
            Network: 192.168.50.64
            Usable Range: 192.168.50.65 – 192.168.50.126
            Broadcast: 192.168.50.127
            Mask: 255.255.255.192
        3. Support Department 192.168.50.128/27
            Network: 192.168.50.128
            Usable Range: 192.168.50.129 – 192.168.50.158
            Broadcast: 192.168.50.159
            Mask: 255.255.255.224
        4. CCTV Department  192.168.50.160/28
            Network: 192.168.50.160
            Usable Range: 192.168.50.161 – 192.168.50.174
            Broadcast: 192.168.50.175
            Mask: 255.255.255.240
        5. Management Department  192.168.50.176/29
            Network: 192.168.50.176
            Usable Range: 192.168.50.176-192.168.50.183
            Broadcast: 192.168.50.183
            Mask:255.255.255.248
    Final
    Department	        Subnet	            Mask	        Host Range  	    Broadcast
    Guest	        192.168.50.0/26	    255.255.255.192     	1–62	    192.168.50.63
    Admin	        192.168.50.64/26	255.255.255.192	        65–126	    192.168.50.127
    Support	        192.168.50.128/27	255.255.255.224	        129–158	    192.168.50.159
    CCTV	        192.168.50.160/28	255.255.255.240	        161–174	    192.168.50.175
    Management	    192.168.50.176/29	255.255.255.248	        177–182	    192.168.50.183



DAY 5 - Lab 02A – Multiple Subnets on One Switch (No Routing)
Topic

Packet Tracer Lab – Multiple Subnets Without Routing

Goal

Understand why devices connected to the same physical switch can only communicate directly if they are in the same IP subnet.

Objective

Learn the practical difference between:

Layer 2 (Switching) – forwards frames based on MAC addresses
Layer 3 (IP Subnetting) – determines whether communication is local or remote

This lab demonstrates that physical connectivity does not guarantee IP communication.

Topology in Packet Tracer
Devices:
1 × Switch (Switch1)
4 × PCs:
PC1 – Office
PC2 – Office
PC3 – Guest
PC4 – Printers
Physical Layout

All PCs are connected to the same switch using Copper Straight-Through cables.

PC1 ----\
PC2 ----- Switch1
PC3 ----/
PC4 ----/
IP Addressing Table
Device	    Department	    IP Address	        Subnet Mask	    CIDR	Default Gateway
PC1	        Office	        192.168.10.10	255.255.255.192	    /26	        None
PC2	        Office	        192.168.10.20	255.255.255.192 	/26	     None
PC3	        Guest	        192.168.10.100	255.255.255.224	    /27	     None
PC4	        Printers	    192.168.10.130	255.255.255.240	    /28	     None

Subnet Breakdown
Subnet 1 – Office
192.168.10.0/26
Range: 192.168.10.1 – 192.168.10.62
Broadcast: 192.168.10.63
PC1 and PC2 belong here

Subnet 2 – Guest
    192.168.10.96/27
    Range: 192.168.10.97 – 192.168.10.126
    Broadcast: 192.168.10.127
PC3 belongs here

Subnet 3 – Printers
    192.168.10.128/28
    Range: 192.168.10.129 – 192.168.10.142
    Broadcast: 192.168.10.143
PC4 belongs here

Why This Happens
    PC1 checks:“Is destination inside my subnet?”
    For PC2:YES → Send directly using ARP → Communication works
    For PC3 / PC4: NO → Needs default gateway → None configured → Packet dropped


DAY 6: Basic Subnet Routing

    Configure 2 subnetworks (Office + Guest), verify routing, then intentionally break and troubleshoot.
    Result: Network configured successfully, tested, broken, diagnosed, repaired.

Incident:
    PC3 cannot reach Office network.
Symptoms:
    PC3 ping own IP: YES
    PC3 ping gateway: FAIL
    PC3 ping PC1: FAIL
Checks:
    Checked IP address
    Checked subnet mask
    Checked default gateway
    Compared with subnet plan
Root Cause:
    PC3 gateway set to:
        192.168.10.1
Correct gateway should be:
    192.168.10.97
Fix:    Changed gateway to:
            192.168.10.97
Verification:
    PC3 ping 192.168.10.97 — SUCCESS
    PC3 ping PC1 — SUCCESS
Lesson Learned:
    Default gateway must be in the same subnet as the host.
    Without correct gateway, device cannot reach external networks.


DAY 7: Reinforcement, Revision, Language Practice, Self-Check

step 1 - Subnetting drill
    Answers
    ## 1. 192.168.1.0/25
        - Range: 192.168.1.1 – 192.168.1.126
        - Broadcast: 192.168.1.127

    ## 2. 192.168.1.128/25
        - Range: 192.168.1.129 – 192.168.1.254
        - Broadcast: 192.168.1.255

    ## 3. 192.168.2.0/26 — All Subnet Starts
        - 192.168.2.0
        - 192.168.2.64
        - 192.168.2.128
        - 192.168.2.192

    ## 4. 192.168.2.64/26
        - Range: 192.168.2.65 – 192.168.2.126
        - Broadcast: 192.168.2.127

    ## 5. 192.168.3.0/27 — All Subnet Starts
        - 192.168.3.0
        - 192.168.3.32
        - 192.168.3.64
        - 192.168.3.96
        - 192.168.3.128
        - 192.168.3.160
        - 192.168.3.192
        - 192.168.3.224

    ## 6. 192.168.3.96/27
        - Range: 192.168.3.97 – 192.168.3.126
        - Broadcast: 192.168.3.127

    ## 7. 10.0.0.0/28 — First 5 Subnet Starts
        - 10.0.0.0
        - 10.0.0.16
        - 10.0.0.32
        - 10.0.0.48
        - 10.0.0.64

    ## 8. 10.0.0.32/28
        - Range: 10.0.0.33 – 10.0.0.46
        - Broadcast: 10.0.0.47

    ## 9. 172.16.1.0/29
        - Range: 172.16.1.1 – 172.16.1.6
        - Broadcast: 172.16.1.7

    ## 10. 172.16.1.8/29
        - Range: 172.16.1.9 – 172.16.1.14
        - Broadcast: 172.16.1.15

    ## 11. 192.168.50.0/30 — First 6 Subnet Starts
        - 192.168.50.0
        - 192.168.50.4
        - 192.168.50.8
        - 192.168.50.12
        - 192.168.50.16
        - 192.168.50.20

    ## 12. 192.168.50.12/30 — Usable IPs
        - 192.168.50.13
        - 192.168.50.14

    ## 13. 192.168.100.0/26 — Usable Hosts
        - 62 usable hosts

    ## 14. 192.168.100.128/26 — Broadcast
        - 192.168.100.191

    ## 15. 10.10.10.0/27 — Usable Range
        - 10.10.10.1 – 10.10.10.30

    ## 16. 10.10.10.224/27 — Usable Range
        - 10.10.10.225 – 10.10.10.254

    ## 17. 192.168.77.0/28 — Subnet Starts
        - 192.168.77.0
        - 192.168.77.16
        - 192.168.77.32
        - 192.168.77.48
        - 192.168.77.64
        - 192.168.77.80
        - 192.168.77.96
            - 192.168.77.112
            - 192.168.77.128
            - 192.168.77.144
            - 192.168.77.160
            - 192.168.77.176
            - 192.168.77.192
            - 192.168.77.208
            - 192.168.77.224
            - 192.168.77.240

    ## 18. 192.168.77.48/28 — Usable Range
        - 192.168.77.49 – 192.168.77.62

    ## 19. 172.20.0.0/30 — Usable IPs
        - 172.20.0.1
        - 172.20.0.2

    ## 20. 172.20.0.4/30 — Usable IPs
        - 172.20.0.5
        - 172.20.0.6
    
Part 2 — Explanation Practice
        ##How do you find block size?
            Block size is calculated with: 256 − last octet of subnet mask
            Examples:
                /27 → 256 − 224 = 32
                /28 → 256 − 240 = 16
                /29 → 256 − 248 = 8
                /30 → 256 − 252 = 4
        ##How do you find the broadcast address?
            The broadcast address is the last address before the next subnet starts.
            Example:
                192.168.1.64/27
                Block size = 32
                Next subnet = 192.168.1.96
                Broadcast = 192.168.1.95
        ##How do you know if two IP addresses are in the same subnet?
            Devices are in the same subnet if: they have the same network address after applying the subnet mask.
            Example:
                192.168.1.10/24
                192.168.1.20/24
            Both belong to:
                192.168.1.0/24
            So they are in the same subnet.
        ##Why must the gateway be in the same subnet?
            A host can communicate directly only inside its own subnet.
            If the gateway is outside the subnet, the host cannot reach it.
        ##What happens if the subnet mask is wrong?
            Possible problems:
                devices cannot communicate;
                wrong network calculation;
                routing problems;
                unreachable gateway.
        ##Why does /30 provide only 2 usable hosts?
            /30 = 4 total addresses
            1 network address
            1 broadcast address
            2 usable host addresses
        ##Why can't the network address be assigned to a host?
            Because the network address identifies the subnet itself.
            Example:
                192.168.1.0/24
            Here:
                192.168.1.0 = network address
                It cannot be used by a device.

        ##Why can't the broadcast address be assigned to a host?
            Because the broadcast address is reserved for sending packets to all devices in the subnet.
Part 3 - MINI Test
    ##What is a subnet?
        A subnet is a smaller logical network created from a larger network.
    ##What is a subnet mask?
        A subnet mask determines which part of an IP address is the network part and which part is the host part.
    ##What is the difference between /24 and /27?
        /24 → 254 usable hosts
        /27 → 30 usable hosts
    /27 creates smaller subnetworks.
    ##How many usable hosts are in a /26 network?
        62 usable hosts
    ##What is the default gateway?
        A default gateway is a router interface used to reach external networks.
    ##Why does a host need a gateway?
        A host needs a gateway to communicate outside its local subnet.
    ##Are 192.168.1.10/24 and 192.168.2.10/24 in the same network?
        No.
            Networks:
                192.168.1.0/24
                192.168.2.0/24
        Different networks.
    ##Are 192.168.1.10/25 and 192.168.1.100/25 in the same network?
        Yes.
        Both belong to:
            192.168.1.0/25
    ##What is a broadcast address?
        A broadcast address sends traffic to all devices in a subnet.
    ##Why is subnetting useful?
        Subnetting improves:
            security;
            performance;
            organization;
            traffic isolation;
            network management.
Part 4 — English Technical Vocabulary
English Term	                Translation
IP address	                    IP-адреса
subnet	                        підмережа
subnet mask	                    маска підмережі
default gateway             	шлюз за замовчуванням
network address	                адреса мережі
broadcast address           	широкомовна адреса
usable range	                діапазон доступних адрес
host	                        вузол / пристрій
prefix	                          префікс
routing	                        маршрутизація
Part 5 — Polish Phrases
Polish Phrase	                                        English Meaning
Ten komputer znajduje się w innej podsieci.	        This computer is in a different subnet.
Brama domyślna jest skonfigurowana nieprawidłowo.	The default gateway is configured incorrectly.
Maska podsieci jest błędna.	                        The subnet mask is incorrect.
Adres IP należy do zakresu prywatnego.	            The IP address belongs to a private range.
Ten adres jest adresem rozgłoszeniowym.	            This address is a broadcast address.
Ten adres nie może być przypisany do hosta.        	This address cannot be assigned to a host.
        Ten komputer znajduje się w innej podsieci.
        Brama domyślna jest skonfigurowana nieprawidłowo.
        Maska podsieci jest błędna.
        Adres IP należy do zakresu prywatnego.
        Ten adres jest adresem rozgłoszeniowym.
        Ten adres nie może być przypisany do hosta.

        LAB!!!!!!

Base Network:

192.168.10.0/24

graph TD
    R1[Router R1]
    S1[Switch1 - HR]
    S2[Switch0 - IT + Sales]

    HR1[PC0 HR]
    HR2[PC1 HR]

    IT1[PC2 IT]
    SA1[PC3 Sales]

    R1 -->|G0/0| S1
    R1 -->|G0/1| S2

    S1 --> HR1
    S1 --> HR2

    S2 --> IT1
    S2 --> SA1

HR Department
    Needed Hosts: 50
    Subnet: /26
    Mask: 255.255.255.192
    Network: 192.168.10.0
    Gateway: 192.168.10.1
    Host Range: 192.168.10.1 - 192.168.10.62
    Broadcast: 192.168.10.63
IT Department
    Needed Hosts: 30
    Subnet: /27
    Mask: 255.255.255.224
    Network: 192.168.10.64
    Gateway: 192.168.10.65
    Host Range: 192.168.10.65 - 192.168.10.94
    Broadcast: 192.168.10.95
Sales Department
    Needed Hosts: 20
    Subnet: /27
    Mask: 255.255.255.224
    Network: 192.168.10.96
    Gateway: 192.168.10.97
    Host Range: 192.168.10.97 - 192.168.10.126
    Broadcast: 192.168.10.127
WAN / Future Router Link
    Subnet: /30
    Mask: 255.255.255.252
    Network: 192.168.10.128
    Router IPs:
    192.168.10.129
    192.168.10.130
    Broadcast: 192.168.10.131

3. IP Addressing Plan
Department	        Network Address	    CIDR	Subnet Mask	        Usable Range	                    Broadcast	Gateway
HR	                192.168.10.0	    /26	    255.255.255.192	    192.168.10.1 - 192.168.10.62	192.168.10.63	192.168.10.1
IT + Sales	        192.168.10.64	    /26	    255.255.255.192	    192.168.10.65 - 192.168.10.126	192.168.10.127	192.168.10.65

4. Verified:
    HR to Router
    IT to Router
    HR to IT
    HR to Sales
    Inter-subnet routing functional

    Quick Reference Table
        CIDR	Mask	            Block Size	Usable Hosts
        /24	    255.255.255.0	    256	        254
        /25	    255.255.255.128	    128	        126
        /26	    255.255.255.192	    64	        62
        /27	    255.255.255.224	    32	        30
        /28	    255.255.255.240	    16	        14
        /29	    255.255.255.248	    8	        6
        /30	    255.255.255.252	    4	        2