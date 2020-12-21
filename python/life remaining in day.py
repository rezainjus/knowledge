# -*- coding: utf-8 -*-
"""
Created on Mon Dec 21 13:59:33 2020

@author: Y530
"""

num = int(input("Enter your age: "))

year_remaining = 90 - num
month_remaining = year_remaining * 12
week_remaining = month_remaining * 4
day_remaining = week_remaining * 7

print("Number of day remaining of your life is: " + str(day_remaining))
print("Number of week remaining of your life is: " + str(week_remaining))
print("Number of month remaining of your life is: " + str(month_remaining))