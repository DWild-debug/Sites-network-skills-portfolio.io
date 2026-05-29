# Lab 01 - Basic LAN

## Goal
Build a simple LAN with two PCs and one switch.

## Topology

PC1 ----- Switch ----- PC2

## IP Plan

PC:
192.168.10.10/24

PC1:
192.168.10.21/24

## Steps
1. Added two PCs
2. Added one switch
3. Connected both PCs to the switch
4. Configured static IP addresses
5. Tested connectivity with ping

## Verification
PC0 can ping PC1
PC1 can ping PC0

## Troubleshooting Checklist
- Check cable connection
- Check interface status
- Check IP address
- Check subnet mask
- Check if both hosts are in the same subnet

## What I Learned
A switch connects devices in the same local network.
Hosts in the same subnet can communicate directly through the switch.