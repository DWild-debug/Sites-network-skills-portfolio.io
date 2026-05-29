```mermaid
mindmap
  root((Switching & Ethernet Core))

    Ethernet
      Layer_2_LAN
      Frames
        Source_MAC
        Destination_MAC
        Payload
        FCS

    MAC_Address
      Unique_per_interface
      Format XX:XX:XX:XX:XX:XX
      Used_for_L2_communication

    Switch_Learning_Logic
      Learns_from_Source_MAC
      Builds_MAC_Table
        MAC_to_Port_mapping
      Forwards_by_Destination_MAC
      Unknown_unicast => Flood
      Broadcast => FF:FF:FF:FF:FF:FF

    ARP
      IP_to_MAC_resolution
      ARP_Request_Broadcast
      ARP_Reply_Unicast
      Stored_on_Hosts

    Cisco_CLI
      User_EXEC
      Privileged_EXEC
      Global_Config
      Interface_Config

    Switch_Configuration
      hostname
      enable_secret
      console_vty_access
      service_password_encryption
      save_config_write_memory

    Management_Access
      SVI_VLAN1
      Management_IP
      default_gateway
      SSH_secure_access
      Telnet_insecure

    Interface_Status
      connected
      notconnect
      administratively_down
      err_disabled

    Troubleshooting_Model
      Layer1_Physical
      Layer2_MAC_VLAN
      Layer3_IP
      Tools_ping_arp_show_commands