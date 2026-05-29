```mermaid  
flowchart TD
A[Interface] --> B{State}

B --> C[connected]
B --> D[notconnect]
B --> E[administratively down]
B --> F[err-disabled]

C --> G[Working normally]
D --> H[No cable / link]
E --> I[shutdown command applied]
F --> J[Error detected by switch]