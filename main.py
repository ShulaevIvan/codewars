from pprint import pprint


# def next_pal(val):
#     return next_palindrime(val)

# def next_palindrime(num):
#     counter = num+1
#     while counter < 999999999:
#         if str(counter)[::-1] == str(counter):
#             return counter
#         counter += 1

# if __name__ == '__main__':
#     print(next_pal(12))

def add_slash(tag, num, add=1):
    additioal = '\\/'
    return  (additioal * add) + (tag * num)

def add_slash_mirror(tag, num, add=0):
    additioal = '\\/'
    return  (additioal * add) + (tag * num)


def cube(n):
    right_slash = '/'
    left_slash = '\\'
    down_slash = '_'
    result_str = ''
    result_str2 = ''
    pattern1 =  left_slash + down_slash
    pattern2 =  down_slash + right_slash
    for i in range(n):
        a = add_slash(pattern1, n, i)
        if  i % 2 == 0:
            print(right_slash + a + left_slash)
        else:
            print(right_slash + a + left_slash)


    for i in range(n, 0, -1):
        b = add_slash_mirror(pattern2, n, i)
        result_str2 += b + '\n'
        print(b)
    


cube(3)
