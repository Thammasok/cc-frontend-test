### Front-end quiz
ให้เขียนหน้าเว็บ Front-end จำนวน 2 หน้า ได้แก่

### 1. Product lists 
    รายละเอียดมีดังนี้
    1. หน้า Product lists จะมีการแสดงผล 2 แบบ ได้แก่แบบ Grids และ แบบ Lists ตามภาพ
    2. ขนาดต่างๆ เช่น font, ระยะห่าง ฯลฯ สามารถกำหนดได้อย่างอิสระ
    3. เมื่อกดปุ่มตรงด้านบนขวามือ จะเปลี่ยนการแสดงผลเป็น Grids หรือ Lists ได้
    4. เมื่อเอาเมาส์ไปชี้ตรงรายการสินค้า จะแสดงผล hOver ตามภาพ
    5. เมื่อคลิกตรงปุ่มจะไปเปิดหน้า Product detail
![alt text](/ui/01.ChomCHOB-Example-Grids.png)
<center>ภาพ 1. การแสดงผลแบบ Grids</center>
![alt text](/ui/02.ChomCHOB-Example-Lists.png)
<center>ภาพ 2. การแสดงผลแบบ Lists</center>
![alt text](/ui/06.Product-lists-change-views.png)
<center>ภาพ 3. ปุ่มเปลี่ยนการแสดงผลแบบ Grids หรือ Lists</center>
![alt text](/ui/03.ChomCHOB-Example-Grids-On-Hover)
<center>ภาพ 4.1 เมื่อนำเมาส์มาวางบนรายการสินค้า (แบบ Grids)</center>
![alt text](/ui/04.ChomCHOB-Example-Lists-On-Hover.png)
<center>ภาพ 4.1   เมื่อนำเมาส์มาวางบนรายการสินค้า (แบบ Lists)</center>
### 2. Product detail
    รายละเอียดมีดังนี้
    1. หน้า Product detail จะแสดงผลรายละเอียดของสินค้า ตามภาพ
    2. จำนวนสินค้าสามารถกดเพิ่มได้
![alt text](/ui/05.ChomCHOB-Example-Product-Detail.png)
<center>ภาพ 5. หน้าแสดงรายละเอียดสินค้า</center>
### 3. Conditions
    กำหนดให้มีการใช้งานเครื่องมือต่อไปนี้ 
    1. ReactJS, React-router, Redux
    2. สามารถใช้ Css Frameworks (Bulma, Boostrap, etc.) หรือเขียน Css เองทั้งหมดก็ได้
    3. สามารถใช้ Sass/Less ได้
    4. ระยะเวลาในการทำ 5 วัน
---
### 4. API Service
##### URL
This is base url for call service
```
https://cc-mock-api.herokuapp.com
```

##### Product List
you can call product lists
```
GET /product
```
---

##### Product Detail
```
GET /product/:ID
```
###### Parameter:
    KEY           TYPE      EXAMPLE
    ID            string    PRO13
---

---
### ช่องทางการส่งงาน
ส่งงานโดยการอัพโหลดงานขึ้น Github และส่ง Link ของ Project นั้นมายัง
อีเมล์ Jaranchai.nt@gmail.com
หัวข้อ ส่งแบบทดสอบ Front-end