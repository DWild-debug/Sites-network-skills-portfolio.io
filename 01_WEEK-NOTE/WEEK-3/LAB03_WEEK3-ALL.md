# Week 03 - Day 1  
# Week 03 - Day 1  
## Topic: Ethernet, MAC Address, Switch Forwarding
# 1. Theory (Key Concepts)

## Ethernet
    Ethernet is a Layer 2 (Data Link Layer) technology used for communication inside a local network (LAN).  
    Devices send data using Ethernet frames.

### Simple idea:
    PC → Frame → Switch → Destination Device

## MAC Address
MAC (Media Access Control) address is the physical hardware address of a network interface card (NIC).

### Format:
`XX:XX:XX:XX:XX:XX`

### Important:
    - Unique for each device interface
        - Works on Layer 2
            - Used inside local networks

## Source MAC
    The MAC address of the sender.

### Example:
    PC1 sends data → Source MAC = PC1 MAC

## Destination MAC
        The MAC address of the receiver.

### Example:
        PC1 sends to PC2 → Destination MAC = PC2 MAC

# Ethernet Frame Structure
    Basic Ethernet frame includes:
        - Destination MAC
        - Source MAC
        - Type/Length
        - Data (Payload)
        - FCS (Frame Check Sequence)

### Logic:
    Switch reads:
        - Learns from Source MAC
        - Forwards using Destination MAC

# How a Switch Learns MAC Addresses
    When a frame enters a switch port:

        ### Step 1:
            Switch checks Source MAC

        ### Step 2:
            Switch stores: `MAC Address → Port`

    ### Example:
        `AA:AA:AA:AA:AA:AA → Fa0/1`

        # Unknown Destination MAC
            If switch does NOT know destination:

    ### Action:
        Flood frame out all ports except incoming port.

    ### Called:
        Flooding

    # Broadcast
        Broadcast = frame sent to all devices in the LAN.
        ### Broadcast MAC: `FF:FF:FF:FF:FF:FF`

    ### Example:
        ARP Request

    # Core Logic (Must Memorize)
        ## Rule 1:
            **Switch learns MAC addresses from source MAC.**
        ## Rule 2:
            **Switch forwards frames based on destination MAC.**

    # 2. Notes (For Your File)
        ## Ethernet:
            Layer 2 technology for LAN communication using frames.
        ## MAC Address:
            Unique hardware address of a network device.
        ## Ethernet Frame:
            Data structure used to send information over Ethernet.
        ## Source MAC:
            Sender’s MAC address.
        ## Destination MAC:
            Receiver’s MAC address.
        ## Broadcast MAC:
            FF:FF:FF:FF:FF:FF (all devices)
        ## MAC Address Table:
            Switch table mapping MAC addresses to ports.
        ## Flooding:
            Sending frame to all ports except source port.
        ## Forwarding:
            Sending frame only to correct destination port.
        ## Filtering:
            Dropping frame when source and destination are on same port/no need to forward.

# 3. Mini Exercise (Answers)
    ## What does a switch do when it receives a frame?
        It reads the source MAC, learns it, then checks destination MAC and decides where to send the frame.
    ## How does a switch learn where PC1 is?
        By reading PC1’s source MAC when PC1 sends a frame.
    ## What if destination MAC is unknown?
        The switch floods the frame.
    ## What is a broadcast frame?
        A frame sent to all devices using FF:FF:FF:FF:FF:FF.
    ## Why doesn’t switch check IP for normal L2 forwarding?
        Because Layer 2 forwarding uses MAC addresses, not IP addresses.
    # Self-Check Sentence
            ## English:
        **Switch learns MAC addresses from the source MAC address of incoming frames.**
            ## Ukrainian:
        Комутатор запам’ятовує MAC-адреси з поля source MAC у кадрах, які приходять на його порти.

    # Quick Memory Drill
    ## Learn:
        **Source = Learn**  
        **Destination = Forward**

    # Interview Style Question:
    ## If a switch receives a frame with unknown destination MAC:
        **Answer:** Flood out all ports except the incoming port.

# 5 Critical Terms:
    - Ethernet
    - MAC Address
    - Source MAC
    - Destination MAC
    - Flooding
# Ultra Short Summary:
**Switch learns from source, forwards by destination, floods if unknown.**

# 6 Important Terms for Interviews
    Ethernet Frame
    MAC Address
    CAM Table
    Source MAC
    Destination MAC
    Unicast
    Broadcast
    Multicast
    Flooding
    Filtering
    ARP
    Collision Domain
    Broadcast Domain

        ## Hub vs Switch
        ### Hub:
            - Layer 1
            - No MAC learning
            - Sends everywhere
        ### Switch:
            - Layer 2
            - Learns MAC addresses
            - Intelligent forwarding


Day 2 — Cisco CLI Basics and Basic Switch Configuration
    1. Theory — Cisco CLI Modes
            User EXEC Mode
            Switch>
                The most basic mode.
                Used for simple monitoring commands.
                You cannot change the configuration here.
            Example:
            Switch> ping 192.168.1.1
                    Privileged EXEC Mode
            Switch#

            Enter this mode with:
             Switch> enable
             Switch#
                Gives access to advanced commands.
                Allows entering configuration mode.
                Global Configuration Mode
             Switch(config)#

            Enter this mode with:
             Switch# configure terminal
                Used to configure the whole switch.
                Interface Configuration Mode
             Switch(config-if)#
            
            Enter this mode with:
             Switch(config)# interface fastEthernet 0/1
                Used to configure a specific interface or port.
    2. Practice — Topology
            Topology Diagram
                graph LR
             PC1["PC1\n192.168.10.10"] --> SW1 
              PC2["PC2\n192.168.10.20"] --> SW1 
                PC3["PC3\n192.168.10.30"] --> SW1 
                Connections
                    Device	Port
                        PC1	Fa0/1
                        PC2	Fa0/2
                        PC3	Fa0/3
    3. IP Addressing
        Device	IP Address	Subnet Mask 	Gateway
        PC1	    192.168.10.10	255.255.255.0	—
        PC2	    192.168.10.20	255.255.255.0	—
        PC3	    192.168.10.30	255.255.255.0	—
         Gateway is not required yet because all PCs are in the same subnet.

4. Basic Switch Configuration - Configuration Commands
    enable
    configure terminal
    hostname SW1
    enable secret Cisco123
    line console 0
    password Console123
    login
    exit
    line vty 0 15
    password Vty123
    login
    exit
    service password-encryption
    banner motd #Unauthorized access is prohibited#
    end
    write memory
5. Command Explanation
        Command	Description
         enable	                        Enters privileged EXEC mode
         configure terminal	            Enters global configuration mode
         hostname SW1	                Changes the switch hostname
         enable secret Cisco123	        Sets an encrypted enable password
         line console 0	                Configures console access
         password Console123	        Sets the console password
         login	Enables                 password checking
         line vty 0 15	                Configures remote access lines
         service password-encryption	Encrypts passwords in configuration
         banner motd	                Displays a login warning banner
         write memory	                Saves the configuration
6. Verification Commands
        Show Running Configuration
            show running-config
          Displays the current active configuration stored in RAM.
        Show Startup Configuration
            show startup-config
          Displays the saved configuration stored in NVRAM.
        Show IOS and Device Information
            show version
            Displays:
                IOS version
                device uptime
                switch model
                RAM information
                configuration register
7. Self-Check Questions
* Why is enable secret better than enable password?
    enable secret:
        uses hashing
        more secure
    enable password:
        weaker security
        can sometimes be visible in plain text
* Why do we use service password-encryption?
    service password-encryption
        encrypts passwords in the configuration file
        prevents passwords from being displayed in plain text
* What does write memory do?
    write memory
        or
    copy running-config startup-config
        saves the current running configuration
        copies running-config to startup-config
* Where is the running-config stored?
    In RAM.
    Temporary memory
    Lost after reboot
* Where is the startup-config stored?
    In NVRAM.
        Permanent memory
        Remains after reboot
        Mini Lab Check
        Check the Hostname
            SW1#
        Check the MOTD Banner
            When reconnecting to the switch, you should see:
            Unauthorized access is prohibited
            Check Password Encryption
        show running-config
        Passwords should not appear in plain text.

                                                    Tech English Vocabulary
                                                            Word	                 Meaning
                                                        configuration	         конфігурація
                                                        privileged mode	        привілейований режим
                                                        interface	            інтерфейс
                                                        encrypted password	    зашифрований пароль
                                                        reboot	                 перезавантаження
                                                        console access	         доступ через консоль
                                                        save configuration	    зберегти конфігурацію
                                                        running-config	         поточна конфігурація
                                                        startup-config	         стартова конфігурація

Week 03 — Day 3
Topic: Interface Status, Descriptions, Shutdown / No Shutdown
1. Theory (Key Concepts)
        Interface Statuses
            Status  	            Meaning
          connected	             Port is working and cable/device is connected
          notconnect	         No active connection on the port
          administratively down	 Port is manually disabled with shutdown
          disabled	             Port is inactive or disabled
          err-disabled	         Port was automatically disabled because of an error
            Important Commands
                Show interface status
                show interfaces status
            Displays:
                port state
                VLAN
                speed
                duplex
                descriptions
        Show IP interface summary
            show ip interface brief
            Quick overview of:
                interfaces
                IP addresses
                status
                protocol state
        Show running configuration
            show running-config
                Displays the active switch configuration.
                Interface Description
            Descriptions help identify:
                connected devices
                office locations
                users
                purpose of the port
            Example:
                description PC1 - Office workstation
            This is extremely important in real networks because engineers must quickly identify ports without tracing cables manually.

2. Practice Lab
        Configure Port Descriptions
            enable
            configure terminal
            interface fastEthernet0/1
            description PC1 - Office workstation
            no shutdown
            exit
            interface fastEthernet0/2
            description PC2 - Office workstation
            no shutdown
            exit    
            interface fastEthernet0/3
            description PC3 - Test workstation
            no shutdown
            exit
            end
            write memory
            Verification Commands
            show interfaces status
        Expected:
            interfaces should display descriptions
            active ports should show connected
            show ip interface brief
        Expected:
            interfaces should show up/up
            show running-config
        Expected:
            descriptions visible under interfaces
        Example:
            interface FastEthernet0/1
            description PC1 - Office workstation

3. Break and Restore a Port
        Disable PC2 Port
            configure terminal
            interface fastEthernet0/2
            shutdown
            end
    Verify Status
    show interfaces status
        Expected:
            Fa0/2    administratively down
    show ip interface brief
        Expected:
            FastEthernet0/2    administratively down/down
    Test Connectivity
    From PC1: ping 192.168.10.20
        Expected:
            ping should fail because the port is disabled
            Restore the Port
                configure terminal
                interface fastEthernet0/2
                no shutdown
                end
                write memory
        Real Network Notes
            Why descriptions matter
                Without descriptions:
                    engineers waste time tracing cables
                    troubleshooting becomes slower
                    mistakes happen more often
                  With descriptions:
                        ports are easy to identify
                        troubleshooting is faster
                        documentation becomes cleaner
                    Example from real environments:
                        description Uplink to Floor2-SW1
                        description HR Department Printer
                        description IP Phone - Reception
                            Self-Check Questions
        1. How do you check which ports are active?
            show interfaces status
        2. How do you see port descriptions?
            show running-config
                    or
            show interfaces status
        3. How do you disable a port?
            shutdown
        4. How do you enable a port?
            no shutdown

Week 04 - Day 4
Topic: MAC Address Table and ARP
1. Theory (Key Concepts)
MAC Address Table
A MAC address table is stored on a switch.
It shows which MAC address is learned on which switch port.
The switch learns MAC addresses automatically from Ethernet frames.
Example:
    MAC Address	Port
             1    0002.4a77.7736    DYNAMIC     Fa0/3
             1    0009.7c25.e7e5    DYNAMIC     Fa0/2
             1    00d0.5855.4769    DYNAMIC     Fa0/1
        The switch uses this table to forward Ethernet frames correctly.
            ARP Table
            An ARP table is stored on hosts and routers.
            ARP = Address Resolution Protocol.
            It maps:
                IP address → MAC address
            Example:
                IP Address	    MAC Address
                192.168.10.20	0009.7c25.e7e5
    A PC uses ARP when it wants to send traffic to another device in the same LAN.
Important Differences
                MAC Address Table	                    ARP Table
            Lives on switch	                        Lives on PC/router
            Learns MAC addresses from frames	    Learns MAC addresses using ARP
            Used to forward Ethernet frames	        Used to map IP to MAC
            Layer 2 function	                    Works between Layer 2 and Layer 3
2. Practice (Packet Tracer)
Step 1 — Clear MAC Table
    On the switch:
     clear mac address-table dynamic
Step 2 — Check MAC Table
    show mac address-table
        At first, the table may be almost empty.
Step 3 — Send Ping
        From PC1:
            ping 192.168.10.20
Step 4 — Check MAC Table Again
        On the switch:
            show mac address-table
                Now the switch should learn MAC addresses from PC1 and PC2.
    Example:
        Switch# show mac address-table
            Vlan    Mac Address       Type        Ports
            ----    -----------       --------    -----
            1    0002.4a77.7736    DYNAMIC     Fa0/3
            1    0009.7c25.e7e5    DYNAMIC     Fa0/2
            1    00d0.5855.4769    DYNAMIC     Fa0/1
3. ARP Practice on PC
        On PC1: Desktop → Command Prompt
        Check ARP table:
            arp -a
        If empty:
            ping 192.168.10.20
            arp -a
        Expected result:
            Internet Address      Physical Address
            192.168.10.20         0009.7c25.e7e5
4. Self-Check Questions
Explain the Difference
MAC Address Table
    The switch uses the MAC table to know where to forward Ethernet frames.
ARP Table
    The host uses the ARP table to map IP addresses to MAC addresses.
Ukrainian Explanation
MAC Address Table
    MAC-таблиця потрібна комутатору, щоб знати, в який порт відправити кадр.
ARP Table
    ARP-таблиця потрібна хосту, щоб знати, на яку MAC-адресу відправити кадр для певної IP-адреси.
Additional Notes
    Dynamic MAC Entries
    Most MAC entries are dynamic.
        Dynamic entries disappear after some time if the device becomes inactive.
        Unknown Unicast Traffic
        If the switch does not know the destination MAC address, it floods the frame to all ports except the incoming port.

ARP Request
    ARP request is broadcast:
        "Who has 192.168.10.20?"
             ARP reply is unicast: "192.168.10.20 is at 0009.7c25.e7e5"
Useful Commands
    Switch Commands
     show mac address-table
     clear mac address-table dynamic
     show interfaces status
    PC Commands
        arp -a
        ping 192.168.10.20
Mini Interview Questions
    Q1  What does a switch learn from Ethernet frames?
        Answer: The switch learns source MAC addresses.
    Q2 - Why does a PC use ARP?
        Answer: To discover the MAC address of another device in the same network.
    Q3 - Where is the MAC address table stored?
        Answer: On the switch.
    Q4 - Where is the ARP table stored?
        Answer: On PCs, routers, and servers.


# Week 03 - Day 5 & Day 6  
## Management IP, Default Gateway, Switching & Troubleshooting Lab

---

# DAY 5 — Management IP, Default Gateway, SSH

## 1. Theory (Answers)

### 1.1 Does a Layer 2 switch need an IP address for switching?
No.  
A Layer 2 switch forwards Ethernet frames based on MAC addresses, so it does not require an IP address for normal switching operations.

---

### 1.2 Why do we use a Management IP on a switch?
A Management IP is used to remotely access and manage the switch via:

- SSH
- Telnet (legacy, insecure)
- Ping (ICMP testing)
- SNMP monitoring
- Network management systems (NMS)

Without a Management IP, the switch can only be managed locally via console cable.

---

### 1.3 What is the purpose of `ip default-gateway` on a Layer 2 switch?
The default gateway allows the switch to communicate with devices outside its local subnet.

It is required for:
- Remote management access from different networks
- Sending replies to management stations outside the local subnet

Without it, the switch can only communicate within its own subnet.

---

### 1.4 Why is SSH better than Telnet?

| Feature | SSH | Telnet |
|--------|-----|--------|
| Encryption | Yes | No |
| Security | High | Very low |
| Credentials protection | Encrypted | Plain text |
| Recommended | Yes | No |

SSH protects login credentials and session data, making it secure for remote administration.

---

### 1.5 How to check IP configuration on a switch?
Command:

```bash
show ip interface brief

This shows:

Interface IPs
Status (up/down)
VLAN interfaces
2. Practice Configuration (Management IP + Gateway)
enable
configure terminal

interface vlan 1
ip address 192.168.10.2 255.255.255.0
no shutdown
exit

ip default-gateway 192.168.10.1

end
write memory
3. Verification
show ip interface brief

From PC1:

ping 192.168.10.2
4. SSH Configuration (Optional)
configure terminal

ip domain-name lab.local
username admin secret Admin123

crypto key generate rsa
1024

ip ssh version 2

line vty 0 15
login local
transport input ssh
exit

end
write memory
SSH Test from PC:
ssh -l admin 192.168.10.2
DAY 6 — Switching Lab & Troubleshooting
1. Topology Summary

Devices:

SW1 (Cisco 2960)
PC1 (Admin)
PC2 (Support)
PC3 (Office)
PC4 (Test)
2. IP Addressing Plan
Device	IP Address	Mask
PC1	192.168.10.10	255.255.255.0
PC2	192.168.10.20	255.255.255.0
PC3	192.168.10.30	255.255.255.0
PC4	192.168.10.40	255.255.255.0
SW1 (mgmt)	192.168.10.2	255.255.255.0
3. Switch Configuration
enable
configure terminal

hostname SW1
enable secret Cisco123
service password-encryption

banner motd #Unauthorized access is prohibited#

line console 0
password Console123
login
logging synchronous
exit

line vty 0 15
password Vty123
login
exit

interface vlan 1
description Management interface
ip address 192.168.10.2 255.255.255.0
no shutdown
exit

ip default-gateway 192.168.10.1
Interface Setup
interface fa0/1
description PC1 - Admin PC
no shutdown
exit

interface fa0/2
description PC2 - Support PC
no shutdown
exit

interface fa0/3
description PC3 - Office PC
no shutdown
exit

interface fa0/4
description PC4 - Test PC
no shutdown
exit

end
write memory
4. Verification Commands
Switch checks:
show running-config
show startup-config
show ip interface brief
show interfaces status
show mac address-table
PC checks:
ping 192.168.10.20
ping 192.168.10.30
ping 192.168.10.40
ping 192.168.10.2
arp -a
5. Expected Results
All PCs can ping each other
All PCs can ping switch management IP
MAC address table is populated dynamically
ARP table shows IP → MAC mappings
6. MAC Address Table Behavior

When PCs communicate:

Switch learns MAC addresses dynamically
Maps MAC → port

Example:

MAC Address	Port	Device
(PC1 MAC)	Fa0/1	PC1
(PC2 MAC)	Fa0/2	PC2
(PC3 MAC)	Fa0/3	PC3
(PC4 MAC)	Fa0/4	PC4
7. Port Shutdown Test
configure terminal
interface fa0/4
shutdown
end

Check:

show interfaces status
show mac address-table

Restore:

configure terminal
interface fa0/4
no shutdown
end
8. Troubleshooting Scenarios
Scenario 1 — Port Shutdown
Root Cause:

Port is administratively down.

Fix:
interface fa0/2
no shutdown
Verification:

Ping PC2 successfully.

Scenario 2 — Wrong IP Address
Issue:

PC3:

Wrong subnet (192.168.20.30 instead of 192.168.10.30)
Diagnosis:
ipconfig
ping
Fix:

Set correct IP:

192.168.10.30 /24
Scenario 3 — Wrong Subnet Mask
Issue:

Mask = 255.255.255.128 instead of 255.255.255.0

Effect:

Host misinterprets network boundaries.

Fix:

Correct mask to /24.

Scenario 4 — Cable Disconnected
Symptoms:

No connectivity, port down.

Diagnosis:
show interfaces status
Fix:

Reconnect cable or correct port.

Key Lesson:

Always check Layer 1 first before Layer 2/3 troubleshooting.

9. Troubleshooting Checklist (MD File)
Switch_Troubleshooting_Checklist.md
# Switch Troubleshooting Checklist

## 1. Physical Layer
- show interfaces status

## 2. Port Status
- show running-config interface fa0/x

## 3. MAC Table
- show mac address-table

## 4. IP Configuration (PC)
- ipconfig

## 5. ARP Table
- arp -a

## 6. Connectivity Test
- ping

## 7. Management IP
- show ip interface brief

## 8. Configuration Check
- show running-config
- show startup-config
10. Final Deliverables
Lab 03 - Basic Switching and Troubleshooting.pkt
Lab 03 - Basic Switching and Troubleshooting.md
Switch_Troubleshooting_Checklist.md
Week 03 - Ethernet and Switching.md

# Week 03 — Day 7
## Review, Troubleshooting, Language, Portfolio

---

# Part 1 — Theory Review (Written Answers)

## 1. What is a MAC address?
A MAC address is a unique Layer 2 hardware address assigned to a network interface card (NIC).

It is used for communication inside a local network (LAN).

Example:
```text
00:1A:2B:3C:4D:5E
```

---

## 2. What is an Ethernet frame?
An Ethernet frame is a Layer 2 data unit used in Ethernet networks.

An Ethernet frame contains:
- source MAC
- destination MAC
- payload (data)
- trailer/FCS

---

## 3. What is a source MAC?
The source MAC address identifies the device that sent the Ethernet frame.

---

## 4. What is a destination MAC?
The destination MAC address identifies the device that should receive the Ethernet frame.

---

## 5. What is a MAC address table?
A MAC address table is a table stored on a switch that maps MAC addresses to switch ports.

Example:

| MAC Address | Port |
|---|---|
| 000A.BBBB.CCCC | Fa0/1 |
| 000B.CCCC.DDDD | Fa0/2 |

---

## 6. How does a switch learn MAC addresses?
A switch learns MAC addresses from the source MAC address of incoming Ethernet frames.

The switch stores:
- source MAC
- incoming port

inside the MAC address table.

---

## 7. What does a switch do if the destination MAC is unknown?
If the destination MAC address is unknown, the switch floods the frame to all ports except the incoming port.

This is called unknown unicast flooding.

---

## 8. What is broadcast?
Broadcast is traffic sent to all devices in the local network.

Broadcast MAC:
```text
FF:FF:FF:FF:FF:FF
```

---

## 9. What is ARP?
ARP (Address Resolution Protocol) maps an IP address to a MAC address inside a local network.

Example:
- IP: `192.168.1.10`
- MAC: `00:11:22:33:44:55`

---

## 10. Difference between ARP table and MAC address table

| ARP Table | MAC Address Table |
|---|---|
| Stored on PC/router | Stored on switch |
| Maps IP → MAC | Maps MAC → port |
| Layer 3 support | Layer 2 forwarding |

---

## 11. Difference between switch and router

| Switch | Router |
|---|---|
| Works mainly at Layer 2 | Works mainly at Layer 3 |
| Uses MAC addresses | Uses IP addresses |
| Connects devices inside LAN | Connects different networks |

---

## 12. Why does a switch need a management IP?
A management IP address is used for remote administration of the switch.

Examples:
- SSH
- Telnet
- Ping
- Web management

---

## 13. Why use ip default-gateway on a Layer 2 switch?
The default gateway allows the switch to communicate with devices outside its local subnet for management traffic.

---

## 14. What does the shutdown command do?
```bash
shutdown
```

Administratively disables the interface.

Port status becomes:
```text
administratively down
```

---

## 15. What does no shutdown do?
```bash
no shutdown
```

Enables the interface again.

---



---


---

# Part 4 — Portfolio Lab Note

# Lab 03 — Basic Switching and Troubleshooting

## 1. Goal
The goal of this lab was to configure a basic Cisco switch, verify Layer 2 connectivity, analyze MAC address learning, inspect ARP behavior, and troubleshoot common switch port and host configuration issues.

---

## 2. Topology

- 1 Cisco Switch
- 3 PCs
- Straight-through Ethernet cables

Example:
```text
PC1 --- SW1 --- PC2
          |
         PC3
```

---

## 3. IP Addressing

| Device | IP Address | Mask |
|---|---|---|
| PC1 | 192.168.1.10 | 255.255.255.0 |
| PC2 | 192.168.1.11 | 255.255.255.0 |
| PC3 | 192.168.1.12 | 255.255.255.0 |
| SW1 VLAN1 | 192.168.1.2 | 255.255.255.0 |

---

## 4. Switch Configuration

```bash
enable
configure terminal

hostname SW1

interface vlan1
ip address 192.168.1.2 255.255.255.0
no shutdown

ip default-gateway 192.168.1.1

interface fa0/1
description PC1

interface fa0/2
description PC2

interface fa0/3
description PC3

end
write memory
```

---

## 5. Verification Commands

```bash
show running-config
show ip interface brief
show interfaces status
show mac address-table
show version
```

---

## 6. MAC Address Table Analysis

The switch learned MAC addresses dynamically from incoming frames.

Example:
```bash
show mac address-table
```

Result:
```text
000A.1111.1111 -> Fa0/1
000B.2222.2222 -> Fa0/2
000C.3333.3333 -> Fa0/3
```

---

## 7. ARP Analysis

PCs used ARP to resolve IP addresses into MAC addresses before communication.

Example:
```bash
arp -a
```

---

## 8. Troubleshooting Scenarios

### Scenario 1 — Shutdown Port

Problem:
Port Fa0/2 was administratively down.

Fix:
```bash
interface fa0/2
no shutdown
```

---

### Scenario 2 — Wrong IP Address

Problem:
PC had incorrect IP configuration.

Fix:
Configured proper IP address and subnet mask.

---

### Scenario 3 — Disconnected Cable

Problem:
No physical link.

Fix:
Reconnect Ethernet cable.

---

## 9. Lessons Learned

I learned how a switch forwards Ethernet frames based on MAC addresses, how to verify interface status, how to configure a management IP address, and how to troubleshoot common Layer 1 and Layer 2 connectivity problems.

---

# Part 5 — Subnetting Practice

## 1
Network:
```text
192.168.1.0/26
```

- Usable range:
```text
192.168.1.1 - 192.168.1.62
```

- Broadcast:
```text
192.168.1.63
```

---

## 2
Network:
```text
192.168.1.64/26
```

- Usable range:
```text
192.168.1.65 - 192.168.1.126
```

- Broadcast:
```text
192.168.1.127
```

---

## 3
Network:
```text
192.168.10.0/27
```

Subnet starts:
```text
.0
.32
.64
.96
.128
.160
.192
.224
```

---

## 4
Network:
```text
192.168.10.96/27
```

Usable range:
```text
192.168.10.97 - 192.168.10.126
```

---

## 5
Network:
```text
10.0.0.0/28
```

First 4 subnets:
```text
10.0.0.0/28
10.0.0.16/28
10.0.0.32/28
10.0.0.48/28
```

---

## 6
Network:
```text
10.0.0.48/28
```

Broadcast:
```text
10.0.0.63
```

---

## 7
Network:
```text
172.16.5.0/29
```

Usable range:
```text
172.16.5.1 - 172.16.5.6
```

---

## 8
Network:
```text
172.16.5.8/29
```

Usable range:
```text
172.16.5.9 - 172.16.5.14
```

---

## 9
Network:
```text
192.168.50.0/30
```

Usable IPs:
```text
192.168.50.1
192.168.50.2
```

---

## 10
Network:
```text
192.168.50.12/30
```

Usable IPs:
```text
192.168.50.13
192.168.50.14
```
---

# Troubleshooting Logic

Correct troubleshooting order:

1. Layer 1  
2. Layer 2  
3. Layer 3  
4. DNS/services

Always verify:
- cable
- port status
- VLAN
- MAC table
- IP configuration
- gateway
- ping tests