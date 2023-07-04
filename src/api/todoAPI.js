
// Axios 통신 코드 작성
// 외부에서 통신되어야 함 => export

import axios from "axios"

// 비동기 함수
// async 함수 호출 결과는 늘 promise(약속 어음)
// 외부 API에서 데이터를 가져옴
export const getList = async() => {

  const res = await axios.get(`http://localhost:8080/api/todos/list`)

  // API에서 받은 실제 데이터
  return res.data

}

export const postTodo = async(todo) => {
  
  // todo 객체 함께 전송
  const res = await axios.post(`http://localhost:8080/api/todos/`, todo)

  return res.data
}


export const getTodo = async(tno) => {
  const res = await axios.get(`http://localhost:8080/api/todos/${tno}`)

  return res.data
}

export const removeTodo = async(tno) => {
  const res = await axios.delete(`http://localhost:8080/api/todos/${tno}`)

  return res.data
}

export const putTodo = async(todo) => {
  const res = await axios.put(`http://localhost:8080/api/todos/${todo.tno}`, todo)

  return res.data
}