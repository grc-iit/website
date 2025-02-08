# The IoWarp Runtime: Chimaera

Chimaera is a flexible runtime system for building and executing data-intensive tasks.
Chimaera defines a set of abstractions that make the development of active,
reliable, upgradeable and malleable I/O stacks easier. The core abstractions are the
ChiPool and ChiContainer. A **ChiPool** represents a set of ChiContainers. Each individual
**ChiContainer** represents a subset of data and the computations that can happen to that
data. ChiContainers can be migrated and are addressed using an unchanging, machine-independent
DomainId. For example, a ChiPool could represent a distributed key-value store while a ChiContainer
represents a bucket in that key-value store.

## Design



## Module Repos

In Chimaera, a module (or **ChiMod**) is the code object representing a ChiContainer. These
modules can be registered dynamically in the runtime. A module repo represents a set of 
ChiMod implementations. In the example below, we show the set of core modules defined
by Chimaera. These include modules for block devices (bdev), networking (remote_queue), 
work orchestration policies (worch_proc_round_robin and worch_queue_round_robin), and lastly
the Chimaera Admin, which is responsible for general runtime tasks (e.g., upgrading modules, 
creating new ChiPools, etc.).

The ChiMod named TASK_NAME is the boilerplate task that can be copied to create your own module.

```bash
chimaera
├── benchmark
├── build
├── src
├── tasks
    ├── bdev
    │   ├── CMakeLists.txt
    │   ├── include
    │   └── src
    ├── chimaera_admin
    │   ├── CMakeLists.txt
    │   ├── include
    │   └── src
    ├── CMakeLists.txt
    ├── remote_queue
    │   ├── CMakeLists.txt
    │   ├── include
    │   └── src
    ├── small_message
    │   ├── CMakeLists.txt
    │   ├── include
    │   └── src
    ├── TASK_NAME
    │   ├── CMakeLists.txt
    │   ├── include
    │   └── src
    ├── worch_proc_round_robin
    │   ├── CMakeLists.txt
    │   ├── include
    │   └── src
    └── worch_queue_round_robin
        ├── CMakeLists.txt
        ├── include
        └── src
```

## Bootstrapping a Module

