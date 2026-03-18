# find whether a year is leap or not
# a year is leap when it is divisible by 4 or (divisibe by 100 and 400 at the same time)
# 2000 - leap year
# 2400 - leap year
# 1990 - not a leap year
def is_leap(year):
    leap = False
    
    # Write your logic here
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        leap = True
    
    return leap

year = int(input())
print(is_leap(year))