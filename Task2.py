def best_run (arr):
    max_sum = float("-inf")
    current_sum = 0
    current_length = 0
    max_length = 0

    for y in arr:
        if current_sum + y > y:
            current_sum += y
            current_length += 1
        else:
            current_sum = y
            current_length = 1
        
        if current_sum > max_sum:
            max_sum = current_sum
            max_length = current_length
    return max_length

print(best_run([-2, 1, -3, 4, -1]))
print(best_run([-1, 2, 3, -2, 5, -3]))

