# Week 3 Vocabulary

## English

| English | Ukrainian |
|---|---|
| switch | комутатор |
| router | маршрутизатор |
| Ethernet frame | Ethernet-кадр |
| MAC address | MAC-адреса |
| source MAC | MAC-адреса відправника |
| destination MAC | MAC-адреса отримувача |
| MAC address table | таблиця MAC-адрес |
| ARP table | ARP-таблиця |
| interface | інтерфейс |
| management IP | IP для керування |

---

## Polish

| Polski | Українською |
|---|---|
| przełącznik | комутатор |
| router | маршрутизатор |
| adres MAC | MAC-адреса |
| tablica adresów MAC | таблиця MAC-адрес |
| interfejs | інтерфейс |
| port | порт |
| status portu | стан порту |
| brama domyślna | шлюз за замовчуванням |

# Part 3 — Mini Interview

## Ukrainian Answers

### Як працює switch?
Switch отримує Ethernet-кадри, аналізує destination MAC address і пересилає кадр на потрібний порт.

---

### Чому switch називають Layer 2 пристроєм?
Тому що він працює з MAC-адресами на Data Link Layer.

---

### Що таке MAC address table?
Це таблиця відповідності MAC-адрес і switch ports.

---

### Як switch запам’ятовує MAC-адреси?
Switch вивчає source MAC address із вхідних кадрів.

---

### Що таке ARP?
ARP використовується для визначення MAC-адреси по IP-адресі.

---

### Чим ARP table відрізняється від MAC table?
ARP table:
```text
IP → MAC
```

MAC table:
```text
MAC → port
```

---

### Навіщо management IP на switch?
Для remote management через SSH, Telnet або ping.

---

### Як перевірити, чи порт активний?
Команди:
```bash
show interfaces status
show ip interface brief
```

---

### Що ти зробиш, якщо PC не відповідає на ping?
1. Перевірю кабель  
2. Перевірю port status  
3. Перевірю IP configuration  
4. Перевірю VLAN  
5. Перевірю ARP/MAC table

---

### Які перші 5 команд ти введеш на switch?
```bash
show running-config
show ip interface brief
show interfaces status
show mac address-table
show version
```

---

## English Answers

- A switch forwards Ethernet frames based on MAC addresses.
- The switch learns MAC addresses from the source MAC address of incoming frames.
- ARP maps an IP address to a MAC address in the local network.
- A management IP address is used to access and manage the switch remotely.
- I would first check the physical link, interface status, IP configuration, ARP table, and MAC address table.

---

## Polish Answers

- Przełącznik przekazuje ramki na podstawie adresów MAC.
- Ten port jest wyłączony administracyjnie.
- Sprawdziłem status interfejsu.
- Adres IP komputera jest nieprawidłowy.
- Tabela MAC pokazuje, na którym porcie znajduje się urządzenie.
