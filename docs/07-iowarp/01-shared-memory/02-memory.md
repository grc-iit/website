# Hermes-Shm Design

The main purpose of hermes-shm is to provide data structures and allocators for managing memory.
This can be both private memory and shared memory.

## Memory Backend

A memory backend is a region of contiguous memory. Allocators such as ``malloc`` initially reserve
a large segment of memory to avoid frequent system calls for memory allocation. These memory backends
can be for either private or shared memory. 

There are several backends currently supported (``hermes_shm/memory/backend/*``):
1. ``ArrayBackend``: takes as input a pointer to memory that was already allocated.
Works only for private memory.
2. ``MallocBackend``: calls ``malloc`` to allocate a segment of memory
3. ``PosixMmapBackend``: Uses ``mmap`` or its equivalent for Windows
to map a segment of private memory. Similar to ``MallocBackend``.
4. ``PosixShmMmap``: Uses ``mmap`` or its equivalent for Windows to
map a segment of shared memory.
5. ``CudaShmMmap``: Uses ``mmap`` + cudaHostRegister to allocate memory 
shared across processes and GPU.
6. ``RocmShmMmap``: Uses ``mmap`` + hipHostRegister to allocate memory
shared across processes and GPU.

## Allocator

A memory allocator is used to manage a 

## Thread Model

Many memory allocators rely on a specific thread-model to achieve scalability
using thread-local storage. Different thread models have different APIs and
implementations for this. For that reason, we implement a factory of different
thread models to handle this circumstance.

The following thread models are currently supported:
1. ``Pthreads``: Threads for Linux / Mac.
2. ``Windows``: Threads for Windows.
3. ``Argobots``: The user-level thread library for Mochi framework.
4. ``Cuda``: CUDA threads on GPU.
5. ``Rocm``: ROCm threads on GPU.

The basic API for the thread model is as follows:
```cpp
  /** Default constructor */
  HSHM_INLINE_CROSS_FUN
  Rocm();

  /** Destructor */
  HSHM_CROSS_FUN
  ~Rocm() = default;

  /** Yield the current thread for a period of time */
  HSHM_CROSS_FUN
  void SleepForUs(size_t us);

  /** Yield thread time slice */
  HSHM_CROSS_FUN
  void Yield();

  /** Create thread-local storage */
  template <typename TLS>
  HSHM_CROSS_FUN bool CreateTls(ThreadLocalKey &key, TLS *data);

  /** Get thread-local storage */
  template <typename TLS>
  HSHM_CROSS_FUN TLS *GetTls(const ThreadLocalKey &key);

  /** Create thread-local storage */
  template <typename TLS>
  HSHM_CROSS_FUN bool SetTls(ThreadLocalKey &key, TLS *data);

  /** Get the TID of the current thread */
  HSHM_CROSS_FUN
  ThreadId GetTid();
```