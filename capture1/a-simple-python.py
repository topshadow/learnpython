def pythonsum(n):
        a = range(n)
        b = range(n)
        c = []

        for i in range(len(a)):
            a[i] = i 
            # b[i] = i ** 3
            # c.append(a[i] + b[i])

        return c
    
print(pythonsum(3))
            
