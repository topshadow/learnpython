import numpy as np
def pythonsum(n):
    a = np.arange(n) ** 2
    b = np.arange(n) ** 3
    c = a+b
    return c
    
print(pythonsum(3))
            
