```mermaid  
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