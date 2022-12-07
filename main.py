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

# def is_defended(attackers, defenders):
#     attackers_arr = []
#     defenders_arr = []

#     if (len(attackers) == 0):
#         return True
#     elif(len(defenders) == 0):
#         return False

#     if (len(attackers) > len(defenders)):
#         max = len(attackers)
#     elif(len(attackers) < len(defenders)):
#         max = len(defenders)
#     elif (len(attackers) != 0 and len(defenders) != 0 and len(attackers) == len(defenders)):
#         max = len(attackers)
#     elif (len(attackers) != 0 and len(defenders) != 0 and len(attackers) == len(defenders)):
#         max = len(defenders)
#     elif (len(attackers) == 0):
#         return True
#     elif(len(defenders) == 0):
#         return False
    
#     for i in range(max):
#         if (len(attackers) > i and len(defenders) > i and attackers[i] > defenders[i]):
#             attackers_arr.append(attackers[i])
#         elif (len(defenders) > i and len(attackers) > i and attackers[i] < defenders[i]):
#             defenders_arr.append(defenders[i])
#         elif(len(defenders) > i and len(attackers) > i and attackers[i] == defenders[i]):
#             continue
#         elif (len(attackers) <= i and len(defenders) >= i):
#             defenders_arr.append(defenders[i])
#         elif (len(defenders) <= i and len(attackers) >= i):
#             attackers_arr.append(attackers[i])

#     if (len(defenders_arr) == len(attackers_arr)):
#         if (sum(attackers) > sum(defenders)):
#             return False
#         elif (sum(attackers) < sum(defenders)):
#             return True
#         else:
#             return True
#     elif (len(defenders_arr) > len(attackers_arr)):
#             return  True
#     elif (len(attackers_arr) > len(defenders_arr)):
#             return False
    
# print(is_defended([29, 15, 10, 35, 48, 49], [18, 25, 35, 27, 14, 2, 11, 22, 28]))

# def remove_smallest(numbers):
#     if (len(numbers) <= 1):
#         return []
#     result = []
#     min_index = numbers.index(min(numbers))
#     for i in range(len(numbers)):
#         if (i == min_index):
#             continue
#         else:
#             result.append(numbers[i])
#     return result

# print(remove_smallest([347, 276, 306, 181, 207, 92, 177, 278]))

# 
# from datetime import datetime, timedelta

# def movie_times(open, close, length):
#     format = '%H:%M'
#     buffer_in_seconds = 15 * 60
#     length_in_seconds = length * 60
    
#     showtimes = []
    
#     showtime_hh_mm = datetime.strptime(f'{open}:00', format)
#     close_hh_mm = datetime.strptime(f'{close}:00', format)
#     close_hh_mm_dt = showtime_hh_mm + timedelta(hours = 24 - open + close)
    
#     close = close_hh_mm if close > open else  close_hh_mm_dt
            
#     while (close - showtime_hh_mm).total_seconds() - length_in_seconds >= 0:
        
#         showtime_tuple = tuple(list(map(lambda x: int(x), showtime_hh_mm.strftime('%H:%M').split(':'))))
#         showtimes.append(showtime_tuple)
        
#         showtime_hh_mm += timedelta(seconds = length_in_seconds + buffer_in_seconds)

#     return showtimes
      
# print(movie_times(13, 23, 60))

