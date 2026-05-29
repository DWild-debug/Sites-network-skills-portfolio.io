# Linux Commands

## Interface Information
ip addr
Shows:
- interfaces
- IP addresses
- interface status

## Routing Table
ip route
Shows:
- routing table
- default gateway

## Connectivity Test
ping 8.8.8.8
Tests:
- network connectivity
- ICMP reachability

## DNS Test
dig google.com
Tests:
- DNS resolution

## Trace Route
traceroute google.com
Shows:
- packet path
- routers between source and destination

## HTTP/HTTPS Test
curl -I https://google.com
Shows:
- HTTP headers
- response status

## Open Ports
ss -tulpen
Shows:
- listening ports
- active connections
- processes

## Neighbor Table
ip neigh
Shows:
- ARP neighbor table
- MAC/IP mappings

## DNS Configuration
cat /etc/resolv.conf
Shows:
- DNS server configuration