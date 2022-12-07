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

# def repeat(string, num):        
#     return string * num


# def cube(n):
#     resultstr = ''
#     all_elem = {
#         'space':  ' ',
#         'start_el_top':'/\\',
#         'end_el_top':'_\\',
#         'start_el_bottom': '\\/',
#         'end_el_bottom': '_/',
#     }
#     for i in range(1, n + 1):
#         if i < n + 1:
#             resultstr += repeat(all_elem['space'], n - i)
#             resultstr += repeat(all_elem['start_el_top'], i)
#             resultstr += repeat(all_elem['end_el_top'], n)
#             resultstr += '\n'

#     for i in range(n, -1, -1):
#         if (i > 0):
#             resultstr += repeat(all_elem['space'], n - i)
#             resultstr += repeat(all_elem['start_el_bottom'], i)
#             resultstr += repeat(all_elem['end_el_bottom'], n)
#             if  i != 1:
#                 resultstr += '\n'

#     return resultstr
# print(cube(1))

# def stray(arr):
#     result = []
#     for i in arr:
#         if arr.count(i) == 1:
#             return i

# stray([17, 17, 3, 17, 17, 17, 17])


# let str = "zbk", arr = [0, 1]
#     str = "bk", arr = [1]
#     str = "b", arr = []
#     return 'b'

# def last_survivor(letters, coords):
#     letters = list(letters)
#     for i in coords:
#         letters.pop(i)

#     return ''.join(letters)


# print(last_survivor("zbk", [0,1]))

# attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
# //0 survivors                4 survivors
# //return true

def is_defended(attackers, defenders):
    if (attackers == []):
        return True
    elif(defenders == []):
        return False

    defenders_arr = []
    attackers_arr = []

    for i in range(len(list(zip(attackers, defenders)))):
        max_attack = attackers[i]
        max_deffend = defenders[i]
        if (attackers[i] > defenders[i]):
            attackers_arr.append(attackers[i])
        if (defenders[i] > attackers[i]):
            defenders_arr.append(defenders[i])
        if (defenders[i] == attackers[i]):
            continue
    
    if (len(defenders_arr) > len(attackers_arr)):
        return  True
    if (len(attackers_arr) > len(defenders_arr)):
        return False

    if (len(defenders_arr) == len(attackers_arr)):
        if (sum(attackers) > sum(defenders)):
            return False
        elif (sum(attackers) < sum(defenders)):
            return True
        else:
            return  True
 
    if (len(defenders_arr) > len(attackers_arr)):
            return  True
    if (len(attackers_arr) > len(defenders_arr)):
            return False
    

print(is_defended([50], [49, 37]))