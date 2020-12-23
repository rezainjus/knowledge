file = open('line.txt') # Opening Files

print(file)

filecontent = file.read()
print(filecontent)

fname = input("Enter your file name: ")

try:
    fhand = open(fname)
except:
    print("There is no file with that name" + fname)
    exit()

fread = fhand.read()
print(fread)