# Week 04 - Day 1
## Topic: VLAN Basics (What is VLAN and why it is needed)

---

# 1. Theory (25 min)

## Key concepts to learn:

- VLAN (Virtual Local Area Network)
- Broadcast domain
- Access port
- Trunk port
- Native VLAN
- VLAN ID
- VLAN name
- Relationship between VLAN and subnet
    ## Simple explanation:
        ### VLAN
            A VLAN is a logical Layer 2 segmentation that divides one physical switch into multiple isolated broadcast domains.
        ### Broadcast domain
            A broadcast domain is a network segment where all devices receive broadcast frames.
        ### Access port
            A switch port assigned to a single VLAN.
            It carries traffic for only one VLAN.
                Example: PC → Switch (VLAN 10 only)
        ### Trunk port
            A switch port that carries traffic for multiple VLANs.
            Uses IEEE 802.1Q tagging to separate VLAN traffic.
        ### 802.1Q
            A standard that adds VLAN tags to Ethernet frames so multiple VLANs can travel over one link.
        ### Native VLAN
            The VLAN that carries untagged traffic on a trunk link.
        ### VLAN ID
            A numeric identifier of a VLAN (example: 10, 20, 100).
                Range: 1–4094
        ### VLAN name
            A readable label for a VLAN (e.g., "SALES", "IT").
        ### Inter-VLAN routing
            Process that allows communication between different VLANs using a Layer 3 device (router or Layer 3 switch).### Router-on-a-stick
                A router configuration where one physical interface is divided into multiple subinterfaces, each handling a VLAN.
        ### STP (Spanning Tree Protocol)
            Prevents switching loops in Layer 2 networks by blocking redundant paths.
        ### PortFast
            A feature that makes switch ports go directly to forwarding state (used for end devices).
        ### BPDU Guard
            Shuts down a port if it receives STP BPDU packets (protects edge ports).
# 2. Notes (20 min)

Create file:

## `Week 04 - VLAN Trunk InterVLAN Routing.md`


## DAY 2 - !VLAN Creation and Access Ports — Compact Version
1. VLAN Concept
VLAN

VLAN (Virtual Local Area Network) separates devices into independent Layer 2 networks.

Even on one physical switch:

VLAN 10 ≠ VLAN 20
Different VLANs cannot communicate without routing
2. Access Port
Access Port

Port that belongs to ONE VLAN only.

Used for:

PC
Printer
IP phone
Camera
3. VLAN Configuration
enable
configure terminal

hostname SW1

vlan 10
 name OFFICE
exit

vlan 20
 name VOICE
exit

vlan 30
 name GUEST
exit

vlan 99
 name MGMT
exit
4. Configure Access Ports
interface fa0/1
 description PC1 - Office
 switchport mode access
 switchport access vlan 10
 no shutdown
exit

interface fa0/2
 description PC2 - Office
 switchport mode access
 switchport access vlan 10
 no shutdown
exit

interface fa0/3
 description PC3 - Voice
 switchport mode access
 switchport access vlan 20
 no shutdown
exit

interface fa0/4
 description PC4 - Guest
 switchport mode access
 switchport access vlan 30
 no shutdown
exit

end
write memory
5. IP Addressing
Device	IP	VLAN
PC1	192.168.10.10	10
PC2	192.168.10.20	10
PC3	192.168.20.10	20
PC4	192.168.30.10	30

Gateway:

Not configured yet
6. Verification Commands
Show VLANs
show vlan brief

Expected:

VLAN 10 → Fa0/1 Fa0/2
VLAN 20 → Fa0/3
VLAN 30 → Fa0/4
Show Port Status
show interfaces status
Show Full Config
show running-config
7. Connectivity Tests

From PC1:

ping 192.168.10.20
ping 192.168.20.10
ping 192.168.30.10
8. Expected Results
Test	Result
PC1 → PC2	SUCCESS
PC1 → PC3	FAIL
PC1 → PC4	FAIL

Reason:

Same VLAN = communication works
Different VLAN = routing required
9. Self-Check
Create VLAN
vlan 10
Show VLANs
show vlan brief
Assign Port to VLAN
switchport access vlan 10
10. Important Logic
Why PC1 sees PC2 but not PC3?
PC1 + PC2 → VLAN 10
PC3 → VLAN 20
No inter-VLAN routing
What if PC3 is connected to VLAN 10 port but keeps IP 192.168.20.10?

Result:

Layer 2 = VLAN 10
Layer 3 = subnet VLAN 20
IP/subnet mismatch
Communication fails


Day 3 – Wednesday (1 hour)

Topic: Trunk between two switches

1. Topology

Add a second switch:

SW1 ↔ SW2

PC1 on SW1 – VLAN 10
PC2 on SW2 – VLAN 10
PC3 on SW1 – VLAN 20
PC4 on SW2 – VLAN 20
Connections:
Link	Port
SW1 → SW2	SW1 Gi0/1 → SW2 Gi0/1
PC1 → SW1	Fa0/1
PC2 → SW2	Fa0/1
PC3 → SW1	Fa0/3
PC4 → SW2	Fa0/3
IP addressing
Device	VLAN	IP
PC1	10	192.168.10.10
PC2	10	192.168.10.20
PC3	20	192.168.20.10
PC4	20	192.168.20.20
2. VLANs on both switches

On SW1 and SW2:

VLAN 10 → OFFICE
VLAN 20 → VOICE
VLAN 30 → GUEST
VLAN 99 → MGMT
3. Access ports
SW1:
Fa0/1 → PC1 (VLAN 10)
Fa0/3 → PC3 (VLAN 20)
SW2:
Fa0/1 → PC2 (VLAN 10)
Fa0/3 → PC4 (VLAN 20)
4. Trunk between SW1 and SW2
SW1 Gi0/1 ↔ SW2 Gi0/1
Allowed VLANs: 10, 20, 30, 99
Mode: trunk (802.1Q)

Optional (if required by device):

switchport trunk encapsulation dot1q
5. Verification

Commands:

show interfaces trunk
show vlan brief
show interfaces status
show running-config interface gi0/1

Tests:

PC1 → PC2 = SUCCESS
PC3 → PC4 = SUCCESS
PC1 → PC3 = FAIL
PC2 → PC4 = FAIL

Explanation:

VLAN 10 extends across switches via trunk
VLAN 20 extends across switches via trunk
No inter-VLAN routing exists yet
Self-check questions:
Why do we need a trunk between switches?
What happens if VLAN 20 is not allowed on the trunk?
Which command verifies trunk status?
Which command shows VLAN membership of ports?
Why can PC1 ping PC2 even though they are on different switches?
2) Mermaid Topology Diagram
Loading diagram...
3) Questions & Answers
1. Why do we need a trunk between switches?

A trunk is required to carry traffic from multiple VLANs over a single physical link. Without it, only one VLAN (or untagged traffic) would pass between switches.

2. What happens if VLAN 20 is not allowed on the trunk?

Devices in VLAN 20 on different switches will lose connectivity.
PC3 and PC4 would NOT be able to communicate.

3. Which command verifies trunk status?
show interfaces trunk
4. Which command shows VLAN membership of ports?
show vlan brief
5. Why can PC1 ping PC2 even though they are on different switches?

Because both are in VLAN 10 and the trunk carries VLAN 10 traffic between SW1 and SW2 at Layer 2, making them part of the same broadcast domain.