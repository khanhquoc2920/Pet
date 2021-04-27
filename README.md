<h2>Xây dựng Website bán quần áo sử dụng công nghệ ReactJS & NodeJS ( API,Socket )</h2>
<h3>Mô tả chung , giới thiệu đề tài </h3>
<b>Ngày nay , công nghệ thông tin đã có những bước phát triển mạnh mẽ trong mọi phương diện nói chung ví dụ như : đời sống , công việc , giải trí , truyền thông , ... Và riêng với bán hàng , so với cách bán truyền thống thì nay doanh nghiệp , cửa hàng nhỏ lẻ nào cũng có một website để quáng bá , bán hàng trực tuyến sản phẩm và tương tác với người dùng . Nắm bắt được nhu cầu đó , nhóm em quyết định thực hiện đề tài : Xây dựng Website bán quần áo sử dụng công nghệ ReactJS & NodeJS ( API,Socket ) . Khi sử dụng trang web khách hàng sẽ cảm nhận được sự mới mẻ và thuận tiện của Website mang lại . Và website cũng dễ dàng cung cấp thông tin chi tiết sản phẩm giúp khách hàng có thể thanh toán trực tiếp qua paypal hoặc ship cod .</b>
<h3>Website bao gồm các chức năng chính: </h3>
    <b>- Thêm, Xóa, Tìm Kiếm, Phân Trang, Phân Loại Sản Phẩm </b> </br>
    <b>- Đặt Hàng </b> </br>
    <b>- Live Chat ( Tư Vấn Khách Hàng ) </b> </br>
    <b>- Gửi Email để xác nhận đơn hàng </b> </br>
    <b>- Thanh Toán Paypal  </b> </br>
    <b>- Giao Hàng ( Hiển thị và tính giá tiền của đơn hàng phụ thuộc vào quảng đường từ cửa hàng đến địa điểm nhận hàng của khách hàng và hiển thị bằng Google Map API )  </b> </br>


---------------------------------------------------------------

 
## Fear of God

![](https://thegioidohieu.com/images/feature_variant/17/fear-of-god-logo.jpg)


## Contributors
- TienKim
- QuocToan
- MinhHieu

## ERD
<img src="https://firebasestorage.googleapis.com/v0/b/erd-img.appspot.com/o/ERD-CNPMNC.PNG?alt=media&token=e4a97fe3-2cdd-4d60-8902-59c53bf911f7" />

## API DOCS
ROOT API ENDPOINT : http://tienkim9920.herokuapp.com

```bash

- api/product : PRODUCT API ENDPOINT

    - router.get('/', Products.index)

    - router.get('/category', Products.category)

    - router.get('/:id', Products.detail)

    - router.get('/category/gender', Products.gender)

    - router.get('/category/pagination', Products.pagination)

    - router.get('/scoll/page', Products.scoll)

    - module.exports = router
  
- api/user : USER API ENDPOINT

    - router.get('/', Users.index)

    - router.get('/:id', Users.user)

    - router.get('/detail/login', Users.detail)

    - router.post('/', Users.post_user)

    - module.exports = router;
   
- api/detail_order : DETAIL ORDER API ENDPOINT

    - router.get('/:id', Detail_Order.detail)

    - router.post('/', Detail_Order.post_detail_order)

    - module.exports = router

- api/order : ORDER API ENDPOINT

    - router.get('/order/:id', Order.get_order)

    - router.get('/order/detail/:id', Order.get_detail)

    - router.post('/order', Order.post_order)

    - router.post('/email', Order.send_mail)

    - module.exports = router

- api/delivery : DELIVERY API ENDPOINT

    - router.post('/', Delivery.post_delivery)

    - router.get('/:id', Delivery.get_delivery)

    - module.exports = router

- api/comment : COMMENT API ENDPOINT

    - router.get('/:id', Comment.index)

    - router.post('/:id', Comment.post_comment)

    - module.exports = router
    


```

## 🚀 Example Request
**Please provider auth-token (JWT) in Headers of Request**

**CREATE NEW ORDER**
- POST localhost:8080/api/v1/orders
- Test on local :  Headers : auth-token (JWT token) Body (JSON form )
- Request Body : 

```json
{
"orderInfo": {
    "totalAmount": 5000,
    "userId" : "607ec5f6e3a5d0091ff78025",
    "items":[
        {
            "item":"60796508f7359b10225c5daa",
            "quantity":10
        },
        {
            "item":"607f074e3ca27f92d39fcf20",
            "quantity":10
        }
    ],
    "name": "Vudang",
    "address" : "67 Huynh Thien Loc",
    "phone":"09667881234",
    "paymentMethod":"607fe47b4ebfda44935ff96b",
    "status":"607fe50d4ebfda44935ff971"
},
    "token":"TestToken"
}

```

**LOGIN**
- POST localhost:8080/api/v1/user/login
- Request Body : 
```json
{
    "email":"admin@gmail.com",
    "password":"admin",
    "pushTokens" :[]
}
```

**ADD TO CART**
- POST localhost:8080/api/v1/carts
- Test on local :  Headers : auth-token (JWT token) Body (JSON form )
- Request Body : 

```json
{
    "userId": "605048dbcafa1206c221d275",
    "items": [
        {
            "item":"605449411d6e5b1185c9d2de",          
            "quantity": "20"
        }
    ]
}
```





## 🚀 Samples JSON Response
**Please provider auth-token (JWT) in Headers of Request**

- GET : Products in Warehouse
```json
{
    "data": [
        {
            "stock": 440,
            "_id": "607ac9aaad94b713fa366bdd",
            "product": null,
            "createdAt": "2021-04-17T11:42:34.295Z",
            "updatedAt": "2021-04-21T09:16:55.625Z",
            "__v": 0
        },
        {
            "stock": 0,
            "_id": "607f07863ca27f92d39fcf21",
            "product": {
                "url": "https://res.cloudinary.com/codingwithvudang/image/upload/v1618937677/gnzlpmsl2t1usc9ye2fj.png",
                "thumb": "https://res.cloudinary.com/codingwithvudang/image/upload/v1618937678/aqlydl4e6wdlx62ktszf.jpg",
                "_id": "607f074e3ca27f92d39fcf20",
                "filename": "imageUrl-1618937674747.jpg",
                "title": "Đừng Để Mất Bò - 7 Bước Quản Lý Cửa Hàng Hiệu Quả Và Chống Thất Thoát",
                "price": 149000,
                "description": "Bạn đang quản lý hay làm chủ một cửa hàng nhưng công việc kinh doanh lại không được suôn sẻ. Bạn luôn phải đau đầu vì những vấn đề như: \nTháng nào cũng có một lượng ngân quỹ “không cánh mà bay”.\nKhó tuyển người, nhân viên “đến rồi đi” mà không ai gắn bó.\nNhân viên đi làm trễ, vi phạm nội quy, nói hoài cũng không thay đổi.\n Hay dạy mãi nhưng nhân viên vẫn không làm được việc.\nĐừng đi tìm cách gỡ rối ở đâu xa xôi, quyển sách này sẽ giúp bạn giải quyết TẤT CẢ những vấn đề trên theo một cách khoa học và hiệu quả nhất. ",
                "author": "607962fd3b28280f84053110",
                "category": "6079636a3b28280f84053113",
                "provider": "607963393b28280f84053111",
                "publisher": "60795ce2773c2a0e524b52c5",
                "createdAt": "2021-04-20T16:54:39.002Z",
                "updatedAt": "2021-04-20T16:54:39.002Z",
                "__v": 0
            },
            "createdAt": "2021-04-20T16:55:34.119Z",
            "updatedAt": "2021-04-21T09:54:47.860Z",
            "__v": 0
        }
    ],
    "status": "SUCCESS"
}
```

- GET : Product in Cart
```json
{
    "status": "OK",
    "message": "Get Users Carts Successfully",
    "data": [
        {
            "_id": "60544b3b61d79712005f47de",
            "userId": "605048dbcafa1206c221d275",
            "items": [
                {
                    "item": {
                        "url": "https://res.cloudinary.com/codingwithvudang/image/upload/v1618937677/gnzlpmsl2t1usc9ye2fj.png",
                        "thumb": "https://res.cloudinary.com/codingwithvudang/image/upload/v1618937678/aqlydl4e6wdlx62ktszf.jpg",
                        "_id": "607f074e3ca27f92d39fcf20",
                        "filename": "imageUrl-1618937674747.jpg",
                        "title": "Đừng Để Mất Bò - 7 Bước Quản Lý Cửa Hàng Hiệu Quả Và Chống Thất Thoát",
                        "price": 149000,
                        "description": "Bạn đang quản lý hay làm chủ một cửa hàng nhưng công việc kinh doanh lại không được suôn sẻ. Bạn luôn phải đau đầu vì những vấn đề như: \nTháng nào cũng có một lượng ngân quỹ “không cánh mà bay”.\nKhó tuyển người, nhân viên “đến rồi đi” mà không ai gắn bó.\nNhân viên đi làm trễ, vi phạm nội quy, nói hoài cũng không thay đổi.\n Hay dạy mãi nhưng nhân viên vẫn không làm được việc.\nĐừng đi tìm cách gỡ rối ở đâu xa xôi, quyển sách này sẽ giúp bạn giải quyết TẤT CẢ những vấn đề trên theo một cách khoa học và hiệu quả nhất. ",
                        "author": "607962fd3b28280f84053110",
                        "category": "6079636a3b28280f84053113",
                        "provider": "607963393b28280f84053111",
                        "publisher": "60795ce2773c2a0e524b52c5",
                        "createdAt": "2021-04-20T16:54:39.002Z",
                        "updatedAt": "2021-04-20T16:54:39.002Z",
                        "__v": 0
                    },
                    "quantity": 20
                }
            ],
            "__v": 0
        }
    ]
}
```


- POST : Register
```json
{
    "status": "Success",
    "message": "Register account successfully",
    "data": {
        "phone": "",
        "address": "",
        "pushTokens": [],
        "_id": "607ff760cc5cc8870797ba78",
        "name": "Gia Vu",
        "email": "giavu@gmail.com",
        "password": "$2a$10$RmIeB9T6S0t2wEHGeA2zB.h/mfgeYUjJwWEYicyHiIr.2cDYm3W42",
        "profilePicture": "",
        "createdAt": "2021-04-21T09:58:56.687Z",
        "updatedAt": "2021-04-21T09:58:56.687Z",
        "__v": 0
    }
}
```



- POST : Login
```json
{
    "userid": "607ec5f6e3a5d0091ff78025",
    "name": "Vudang",
    "password": "$2a$10$3Ho6C5HO3ypPL4YWw.Tx5OzpvxjgaT/zNV8pHMpJUoGfDpHdAXG0e",
    "email": "admin@gmail.com",
    "phone": "",
    "address": "",
    "profilePicture": "",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDdlYzVmNmUzYTVkMDA5MWZmNzgwMjUiLCJpYXQiOjE2MTg5OTkwMjUsImV4cCI6MTYxOTYwMzgyNX0.uMerTNgPq3CtMoWc3oQb3Oz4tXDCa-mAUBvCB2IADWA",
    "loginAt": 1618999025039,
    "expireTime": 1619603825039
}
```



- GET : Orders by UserID
```json
{
    "status": "OK",
    "message": "Added Order Successfully",
    "data": {
        "_id": "607ff667cc5cc8870797ba77",
        "totalAmount": 5000,
        "userId": "607ec5f6e3a5d0091ff78025",
        "items": [
            {
                "item": "607f074e3ca27f92d39fcf20",
                "quantity": 10
            }
        ],
        "name": "Vudang",
        "address": "67 Huynh Thien Loc",
        "phone": "09667881234",
        "paymentMethod": "607fe47b4ebfda44935ff96b",
        "status": "607fe50d4ebfda44935ff971",
        "createdAt": "2021-04-21T09:54:47.780Z",
        "updatedAt": "2021-04-21T09:54:47.780Z",
        "__v": 0
    }
}
  
```


- GET : Favorite by UserID
``` json
{
    "status": "OK",
    "message": "Get Users Favorite List Successfully",
    "data": [
        {
            "_id": "607ff2794d7afe7bf95507ac",
            "userId": "607ec5f6e3a5d0091ff78025",
            "items": [
                {
                    "item": {
                        "url": "https://res.cloudinary.com/codingwithvudang/image/upload/v1618937677/gnzlpmsl2t1usc9ye2fj.png",
                        "thumb": "https://res.cloudinary.com/codingwithvudang/image/upload/v1618937678/aqlydl4e6wdlx62ktszf.jpg",
                        "_id": "607f074e3ca27f92d39fcf20",
                        "filename": "imageUrl-1618937674747.jpg",
                        "title": "Đừng Để Mất Bò - 7 Bước Quản Lý Cửa Hàng Hiệu Quả Và Chống Thất Thoát",
                        "price": 149000,
                        "description": "Bạn đang quản lý hay làm chủ một cửa hàng nhưng công việc kinh doanh lại không được suôn sẻ. Bạn luôn phải đau đầu vì những vấn đề như: \nTháng nào cũng có một lượng ngân quỹ “không cánh mà bay”.\nKhó tuyển người, nhân viên “đến rồi đi” mà không ai gắn bó.\nNhân viên đi làm trễ, vi phạm nội quy, nói hoài cũng không thay đổi.\n Hay dạy mãi nhưng nhân viên vẫn không làm được việc.\nĐừng đi tìm cách gỡ rối ở đâu xa xôi, quyển sách này sẽ giúp bạn giải quyết TẤT CẢ những vấn đề trên theo một cách khoa học và hiệu quả nhất. ",
                        "author": {
                            "_id": "607962fd3b28280f84053110",
                            "name": "Trần Thanh Phong ",
                            "createdAt": "2021-04-16T10:12:13.816Z",
                            "updatedAt": "2021-04-16T10:12:13.816Z",
                            "__v": 0
                        },
                        "category": {
                            "code": "KD ",
                            "_id": "6079636a3b28280f84053113",
                            "name": "Sách kinh doanh ",
                            "createdAt": "2021-04-16T10:14:02.823Z",
                            "updatedAt": "2021-04-16T10:14:02.823Z",
                            "__v": 0
                        },
                        "provider": {
                            "_id": "607963393b28280f84053111",
                            "name": "NXB Đà Nẵng ",
                            "createdAt": "2021-04-16T10:13:13.582Z",
                            "updatedAt": "2021-04-16T10:13:13.582Z",
                            "__v": 0
                        },
                        "publisher": {
                            "_id": "60795ce2773c2a0e524b52c5",
                            "name": "Alpha Book",
                            "createdAt": "2021-04-16T09:46:10.817Z",
                            "updatedAt": "2021-04-16T09:46:10.817Z",
                            "__v": 0
                        },
                        "createdAt": "2021-04-20T16:54:39.002Z",
                        "updatedAt": "2021-04-20T16:54:39.002Z",
                        "__v": 0
                    }
                }
            ],
            "createdAt": "2021-04-21T09:38:01.291Z",
            "updatedAt": "2021-04-21T09:38:01.291Z",
            "__v": 0
        }
    ]
}
```

## 🚀 Get Started

``` bash
# install dependencies
yarn install
```
``` bash
# run project
yarn start
```
``` bash
# Configuration 
Change the constants in .env file (your database, host, port,cloudinary key,stripe key ,...) 
Happy coding 😍😍😍
```

## 🚀 Server Features
- Login, Register, Forgot Password, ResetPassword with JWT Flow. 
- CRUD Products, Users, Carts, Whislist, Order...
- Fetch Products, Carts, Orders...
- Products url query (http://codingwithvudang-bookserver.herokuapp.com/api/v1/product?limit=2&page=1)
- Send email to user.
- Push notification to user's devices.
- Payment via Stripe
- Upload and resize photo 


## Technical details
- Nodejs, Express.
- Mongodb, Mongoose.
- Nodemailer.
- Multer, Sharp.
- Hapi/joi validation.
- Expo notification.
- Stripe Payment.
