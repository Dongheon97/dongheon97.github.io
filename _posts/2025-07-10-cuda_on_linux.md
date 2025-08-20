---
layout: post
title: "CUDA Programming on Linux"
categories: [Study]
tags: [cuda, gpu, parallel programming]
---

## Environment Setting

### Components

- i7-13700k, RTX 3090, 64GB

### Software version

- Ubuntu 22.04
- Cuda 12.8

### IDE

- Visual Studio Code
- install nsight on visual studio code
    1. Run vscode
    2. ctrl + p
    3. type “cat /usr/local/cuda/include/cudnn_version.h | grep CUDNN_MAJOR -A 2” → enter

### 용어 정리

- Host: CPU를 의미
- Device: GPU를 의미

### Test code

hello_cuda.cu

```cpp
#include "cuda_runtime.h"
#include "device_launch_parameters.h"
#include <stdio.h>

__global__ void helloCUDA(void) {
    printf("Hello CUDA from GPU!\n");
}

int main(void) {
    printf("Hello GPU from CPU!\n");
    helloCUDA<<<1, 10>>>();
    cudaDeviceSynchronize();
    return 0;
}
```

- __host__: Host (CPU) function; 만약 따로 지정을 안한다면 host code가 default
    - 함수 호출: host
    - 실행 공간: host
- __device__: Device (GPU) function;
    - 함수 호출: device
    - 실행 공간: device
- __global__: Device function called by Host;
    - 함수 호출: host
    - 실행 공간: device
- `helloCUDA<<1, 10>>`
    - helloCUDA() 커널 한 번 호출
    - 10개의 cuda 스레드가 helloCUDA() 커널을 수행
- `cudaDeviceSynchronize()`
    - cuda 커널 실행은 asynchronous (비동기적)
    - GPU에서 helloCUDA()가 실행되기 전에 main()에서 return 0 으로 끝나 GPU에서의 출력이 안됨
    - cuda 커널이나 메모리 복사 등 비동기 작업들이 GPU에서 모두 완료될 때까지 CPU 실행을 멈춤

### Execute code

```bash
nvcc -arch=sm_86 hello_cuda.cu -o example.exe # compile
./example.exe # run

# <output>
Hello GPU from CPU!
Hello CUDA from GPU!
Hello CUDA from GPU!
Hello CUDA from GPU!
Hello CUDA from GPU!
Hello CUDA from GPU!
Hello CUDA from GPU!
Hello CUDA from GPU!
Hello CUDA from GPU!
Hello CUDA from GPU!
Hello CUDA from GPU!
```
