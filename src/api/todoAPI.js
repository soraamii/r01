
// Axios 통신 코드 작성
// 외부에서 통신되어야 함 => export

import axios from "axios"


// async 함수 호출 결과는 늘 promise(약속 어음)
export const getList = async() => {

  const res = await axios.get(`http://localhost:8080/api/todos/list`)

  return res.data

}

export const postTodo = async(todo) => {
  const res = await axios.post(`http://localhost:8080/api/todos/`, todo)

  return res.data
}