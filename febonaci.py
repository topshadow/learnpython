def feb():
    """费波纳茨数列 """
    a,b =0,1
    while b < 10099:
        print(b)
        a,b = b, a+b



print(feb())