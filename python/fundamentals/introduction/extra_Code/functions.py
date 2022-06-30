# def my_func(name = "programmer"):
#     print("hello " + name)
#     return "hello"

# my_func()
# x = my_func("KC")
# print(x)

#basicb 13 

# arr = [1,-5,8,-6,8,7,-2]

# def replaceNegWithDojo(arrParam)
#     newArray = []
#     for i in arrParam:
#         if(i < 0):
#             print('dojo')
#             newArray.append('dojo')
#         else:
#             print(i)
#             newArray.append(i)
#         print(newArray)

# replaceNegWithDojo(arr)


#basic 13

# for i in range(1,256):
#     if(i % 2 == 0):
#         print(i)

# #basic 13

# arr = [1,2,3,5,6,7,8]

# def printEach(arrParam):
#     for i in arrParam:
#         print(i)

# printEach(arr)

#basic 13

# arr = [1,2,3,5,6,7,8]

# def printAvg(arrParam):
#     length = len(arrParam)
#     sum = 0
#     for i in arrParam:
#         sum += i
#     print(sum/length)

# printAvg(arr)

#square each value in an array

# arr = [1,2,3,5,6,7,8]

# def sqrVals(arrParam):
#     for i in range (len(arrParam)):
#         arrParam[i] = arrParam[i]**2
#         print(arrParam[i])

# print(sqrVals(arr))

# print(arr)

# arr = [3,-4,98,-8,9,5,-7]

# def replaceNegwithZero(arrParam):
#     for i in range (len(arrParam)):
#         if(arrParam[i] < 0):
#             arrParam[i] = 0

# replaceNegwithZero(arr)
# print(arr)


arr = [1,2,3,4,5]

def shiftVals(arrParam):
    for i in range (len(arrParam)):
        if(i+1 == len(arrParam)):
            arrParam[i] = 0
        else:
            arrParam[i] = arrParam[i + i]
        
        
shiftVals(arr)
print(arr)