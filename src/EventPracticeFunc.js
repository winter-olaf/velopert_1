import React, { useState } from 'react'

const EventPracticeFunc = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  })
  const { username, message } = form
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용 복사
      [e.target.name]: e.target.value, // 원하는 값 복사
    }
    setForm(nextForm)
  }
  const onClick = () => {
    alert(username + ': ' + message)
    setForm({
      username: '',
      message: '',
    })
  }
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick()
    }
  }
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="input something"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>alert/init</button>
    </div>
  )
}

export default EventPracticeFunc
