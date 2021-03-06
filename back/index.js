const compression = require("compression");
const cors = require("cors");
const { indexRouter } = require("./src/router/indexRouter"); 
const { userRouter} = require("./src/router/userRouter"); 


const express = require('express');
const app = express();
const port = 3000;  

/*express 미들웨어 설정*/

//정적 파일 제공 프론트 정적파일 쓰려고
app.use(express.static("../front"));



//cors 설정 - 허가된애들만 쓰게할거야 지금은 모두에게 개방함(보안느슨)
app.use(cors());

//body json 파싱 - 클라이언트에서 날아오는 데이터에서 바디를 찾아 json파싱가능
app.use(express.json());

//http 요청 압축
app.use(compression());

// 라우터 분리
indexRouter(app);
userRouter(app);

app.listen(port, () => {
  console.log(`Express app listening at port: ${port}`)
});