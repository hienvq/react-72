Prepare

- Push Source code to github
- Create AWS EC2 Instance and Open connection
- Install nvm, git, nginx, pm2, json-server

* https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html
* sudo yum install git

* sudo yum install nginx

* npm install pm2@latest -g

* npm install json-server -g

- start nginx: sudo service nginx start
- open url to check nginx
- Pull code from github

Deploy Backend

- cd to folder source code
- npm install
- pm2 start "npm run server" --name json-server
- Open Edit nginx config file: sudo nano /etc/nginx/nginx.conf
- add: location /api/ {
  proxy_pass http://localhost:3004/;
  }
- restart nginx: sudo service nginx restart
- verify api

Deploy Frontend

- update endpoint api, commit code to github
- connect to ec2, pull code from github
- Pull code from github
- cd to folder source code
- npm install
- npm run build
- Open Edit nginx config file: sudo nano /etc/nginx/nginx.conf
- update: root /home/ec2-user/react-72/build;
  index index.html index.htm;
- add: location / {
    try_files $uri $uri/ /index.html;
  }
- grant permission to access folder code: sudo chmod 755 /home/ec2-user
- restart nginx: sudo service nginx restart
- verify frontend



Ôn tập
1. Typescript
- Định nghĩa: 1 ngôn ngữ phát triển từ javascript ES6
- Ưu điểm so JS: 
+ kiểu dữ liệu rõ ràng. VD: boolean, number, string, null, undefined, và có thể tự định nghĩa kiểu dữ liệu = "type"
type User = {
 name: string;
 age: number;
}
+ Có thể viết OOP

2. var, let, const
- Tác dụng: Khai báo biến
- So sánh
+ var: khai báo biến có thể cập nhật giá trị. 
Scope: Global scope + function scope
Hoisting: Có Hoisting (dùng trước, khai báo sau)
+ let (ES6): khai báo biến có thể cập nhật giá trị. 
Scope: Block scope (nằm trong cặp dấu '{}')
Hoisting: Ko có 
+ const (ES6): khai báo biến không đc phép cập nhật giá trị.
Scope: Block scope
Hoisting: Ko có 

3. Destructoring
- Phân rã cấu trúc của 1 object hoặc 1 array
VD: 
 array = [1,3,2] => const [a,b,c] = array => a = 1, b = 3, c = 2;
 object = {x:1 , y: 2} => const {x, y} = object => x = 1, y = 2;

4. template string
- Cho phép sử dụng biến trong 1 chuỗi
- Cú pháp: `string ${variable}`

5. arrow function
- 1 kiểu khai báo function trong JS
- Cú pháp:
const functionName = (params) => {
  // abcxyz
}

6. Callback, promise, async await 
- Đây là 3 kỹ thuật xử lý bất đồng bộ trong JS
- Callback
+ Khái niệm: 
  Là 1 function được truyền vào làm đối số của 1 function khác (higher order function).
  Được gọi lại bên trong function khác đó.

- Promise
+ Khái niệm: Chuyển những tác vụ bất đồng bộ thành 1 promise. Khi tác vụ bất đồng bộ hoàn thành thì sẽ gọi resolve(), nếu thất bại thì gọi reject()
Bản chất là phát triển từ kỹ thuật callback. nhưng giải quyết đc bài toán callback hell

- Async/await
+ Khái niệm: 1 kiểu viết của promise
Thay vì dùng .then() và .catch() thì sẽ dùng async, await
Lưu ý: await phải nằm trong async function
1 async function luôn trả về 1 promise 

7. ReactJS
- Cài đặt reactjs
+ Cách 1: import script vào header của file html
+ Cách 2: Sử dụng thư viện. ví dụ: create-react-app

- JSX:
+ Khái niệm: JSX = Javascript and XML => Cho phép viết kết hợp javascript và các thẻ XML

- React phân chia UI thành các component
- Có 2 kiểu viết component: Class và Functional
- State & Props
+ State: là nơi lưu trữ dữ liệu bên trong 1 component. Component có thể cập nhật lại state
+ Props: là dữ liệu truyền từ bên ngoài vào trong 1 component. Component ko thể cập nhật props
Điểm chung: Khi state hoặc props được cập nhật thì Component sẽ re-render theo giá trị state & props mới

- Fragment: Thẻ noname => <></> hoặc <React.Fragment></React.Fragment>
Tác dụng: Bao đóng nhiều thẻ cùng cấp trong React mà không làm ảnh hưởng đến giao diện

- Form, Event, List
+ Form: React quản lý form thông qua state (quản lý value của các input trong form = state)
Có 2 loại: 
  Controlled Component: là những component trong form mà React có thể quản lý đc thông qua state
  VD: <input type="text" />, select/option,...
  UnControlled Component: là những component trong form mà React ko quản lý đc thông qua state
  VD: <input type="file"/>
+ Event: Là những sự kiện do User thao tác trên giao diện
VD: click, mouse move, ....
=> onClick, onChange, onMouseMove,...

+ List: Là 1 danh sách các component tương tự nhau
Để tạo 1 list nhanh: dùng phương thức map() của Array

8. Chia sẻ dữ liệu giữa các component
- Truyền từ component cha -> con => dùng props
- Truyền từ component con -> cha => dùng callback function
- Truyền từ component con A -> con B => kết hợp, thông qua 1 component cha làm trung gian
A -> cha -> B

Cách 1: Props & callback
Cách 2: Context (CreateContext(), Provider, useContext)
Cách 3: Redux

9. Router
Khái niệm: Router giúp đồng bộ URL với UI
Sử dụng thư viện: react-router-dom
1 số phương thức phổ biến: createBrowserRouter, RouterProvider, useNavigate, useLocation, useParams

10. LifeCycle - vòng đời của 1 component
Mount -> Update -> Unmount

Mount: componentDidMount (đc gọi sau khi component xuất hiện lần đầu tiên trên UI)
Update: componentDidUpdate (được gọi sau mỗi lần component re-render)
Unmount: componentWillUnmount (được gọi trước khi component biến mất khỏi UI)

11. Styling
- Inline CSS - viết trực tiếp trong thẻ XML
- CSS in CSS file
+ Stylesheet css: viết theo kiểu truyền thống
+ CSS Module: đặt tên file css có chứa '.module', import from module và đặt className theo giá trị import
- CSS in JS file
Dùng thư viện: styled-component

12. UI Libraries
- Antd, Bootstrap, Material UI, tailwind

13. Call API
- XML HttpRequest (XHR)
- Fetch
- Axios
- react-query

14. Higher Order Component (HOC)
- Định nghĩa: 
+ Nhận 1 hoặc nhiều Component làm đối số 
+ Trả về 1 Component mới

15. Hooks - chỉ sử dụng trong functional Component
- useState
- useEffect
- useContext
- useMemo
- useCallback
- useReducer

16. Redux
- Lưu trữ dữ liệu tập trung trong store
- Không thể trực tiếp thay đổi dữ liệu trong store mà phải thông qua reducer
- Redux có thể sử dụng cả Vue và Angular 

- Mô hình Flow của Redux
https://redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif
- Quy trình
+ Khi User phát sinh Event trên UI thì Event Handler sẽ dispatch 1 action tương ứng tới reducer
(Nếu có middleware thì action sẽ đến middleware)
+ Reducer sẽ dựa vào action và state hiện tại để trả ra state mới cập nhật vào store
+ Các UI đang subscribe store sẽ đc re-render theo state mới

- Middleware: nằm trước reducer, hứng action và xử lý. Sau đó sẽ quyết định các bước tiếp theo tuỳ vào bài toán
VD: redux-thunk, redux-saga,..
Tại sao cần dùng middleware trong redux?
redux-thunk và saga hỗ trợ xử lý bất đồng bộ trong action

- React-redux, redux-toolkits (react-redux + redux-thunk + redux devtools)

17. Deploy
Deploy là triển khai Project lên 1 môi trường public để nhiều người có thể sử dụng.

1 số nền tảng deploy: AWS, Azure Microsoft, Github, Heroku, Vercel, Netlify, ...