## 1. Run `npm install`

## 2. Database config

Create a local database via MAMP

```
   host: 'localhost',
   port: '8889',
   user: 'admin',
   password: '',
   database: 'sgus_db_test',
```

## 3. Get **phpMyAdmin** running

Upload **sgus_db_test.sql** from the folder

## 4. Run `npm start`

```
> DEBUG=app,app:* nodemon app.js

[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
  app  Ready : http://localhost:4040/ +0ms
```

## 5. View in browser

Click on link in terminal to view page
or copy and paste in to browser the following url
```
http://localhost:4040/
```