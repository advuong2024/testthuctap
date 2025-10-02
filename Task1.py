# Cách 1: lọc số bình thường
# def find_num(arr, target):
#     for num in arr:
#         if num == target:
#             return True 
#     return False
    

# Cách 2: lọc bằng tìm kiếm nhị phân
def find_num(arr, target):
    left, right = 0, len(arr) -1
    while left <= right: 
        mid = (left + right) // 2
        if arr[mid] == target:
            return "YES"
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return "NO"


print(find_num([1, 3, 5, 7, 9], 5))
print(find_num([1, 2, 4, 6, 8], 3))
print(find_num([1, 1, 2, 3, 3, 4], 3))
print(find_num([], 1))