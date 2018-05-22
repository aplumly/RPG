# -*- coding: utf-8 -*-
"""
Created on Sat May 12 23:55:26 2018

@author: pluml
"""

'''from PIL import Image

m=(127,127,127)
f=(34,177,76)
g=(181,236,29)
w=(0,162,232)
r=(153,217,234)
b=(185,122,87)
p=(179,141,53)
h=(255,242,0)
ps=(255,174,201)
eh1=(255,0,0)
eh2=(255,1,1)
eh3=(255,2,2)
eh4=(255,3,3)
q=(163,73,164)
sq=(200,191,231)
t1=(130,15,32)
t2=(136,0,21)
c=(0,0,0)



fil = open("one.map","w+")
a=0
img = Image.open('untitled.png')
pix = img.load()
print(pix[0,0])
for y in range(20):
    for x in range(40):
        a=a+1
        if pix[x,y]==m:
            fil.write("m\n")
        if pix[x,y]==f:
            fil.write("f\n")
        if pix[x,y]==g:
            fil.write("g\n")
        if pix[x,y]==w:
            fil.write("w\n")
        if pix[x,y]==r:
            fil.write("r\n")
        if pix[x,y]==b:
            fil.write("b\n")
        if pix[x,y]==p:
            fil.write("p\n")
        if pix[x,y]==h:
            fil.write("h\n")
        if pix[x,y]==ps:
            fil.write("ps\n")
        if pix[x,y]==eh1:
            fil.write("eh1\n")
        if pix[x,y]==eh2:
            fil.write("eh2\n")
        if pix[x,y]==eh3:
            fil.write("eh3\n")
        if pix[x,y]==eh4:
            fil.write("eh4\n")
        if pix[x,y]==q:
            fil.write("q\n")
        if pix[x,y]==sq:
            fil.write("sq\n")
        if pix[x,y]==t1:
            fil.write("t1\n")
        if pix[x,y]==t2:
            fil.write("t2\n")
        if pix[x,y]==c:
            fil.write("c\n")
print(a)            
fil.close()
'''
'''
from PIL import Image

m=(127,127,127)
f=(34,177,76)
g=(181,230,29)
w=(0,162,232)
r=(153,217,234)
b=(185,122,87)
p=(179,141,53)
h=(255,242,0)
ps=(255,174,201)
eh1=(237,28,36)
eh2=(255,1,1)
eh3=(255,2,2)
eh4=(255,3,3)
q=(163,73,164)
sq=(200,191,231)
t1=(130,15,32)
t2=(136,0,21)
c=(0,0,0)



fil = open("onearray.map","w+")
a=0
img = Image.open('untitled.png')
pix = img.load()
print(pix[1,11])
for y in range(20):
    for x in range(40):
        a=a+1
        if pix[x,y]==m:
            fil.write("\"mountain\",")
        if pix[x,y]==f:
            fil.write("\"forest\",")
        if pix[x,y]==g:
            fil.write("\"grass\",")
        if pix[x,y]==w:
            fil.write("\"water\",")
        if pix[x,y]==r:
            fil.write("\"river\",")
        if pix[x,y]==b:
            fil.write("\"bridge\",")
        if pix[x,y]==p:
            fil.write("\"port\",")
        if pix[x,y]==h:
            fil.write("\"healer\",")
        if pix[x,y]==ps:
            fil.write("\"playerstart\",")
        if pix[x,y]==eh1:
            fil.write("\"rock golem quary\",")
        if pix[x,y]==eh2:
            fil.write("\"pirate cove\",")
        if pix[x,y]==eh3:
            fil.write("\"necromancer's thicket\",")
        if pix[x,y]==eh4:
            fil.write("\"haunted graveyard\",")
        if pix[x,y]==q:
            fil.write("\"quest\",")
        if pix[x,y]==sq:
            fil.write("\"sidequest\",")
        if pix[x,y]==t1:
            fil.write("\"trader1\",")
        if pix[x,y]==t2:
            fil.write("\"trader2\",")
        if pix[x,y]==c:
            fil.write("\"cave\",")
print(a)            
fil.close()
'''



from PIL import Image

w=(127,127,127)
g=(195,195,195)
c=(0,0,0)
chest=(185,122,87)
key=(255,201,14)
door=(255,174,201)
fil = open("cavearray.map","w+")
a=0
img = Image.open('cave.png')
pix = img.load()
print(pix[20,1])
for y in range(20):
    for x in range(40):
        if pix[x,y]==w:
            fil.write("\"wall\",")
        if pix[x,y]==g:
            fil.write("\"ground\",")
        if pix[x,y]==chest:
            fil.write("\"boss"+str(a)+"\",")
            a=a+1
        if pix[x,y]==c:
            fil.write("\"cave_entrance\",")
        if pix[x,y]==key:
            fil.write("\"caveking\",")
        if pix[x,y]==door:
            fil.write("\"cave_door\",")
    
print(a)            
fil.close()