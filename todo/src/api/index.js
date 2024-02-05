import request from '@/request/request'

export const reqTodolist = () => {
  return request.get("/todo")
}