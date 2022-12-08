/*백계환/60192203/웹프로그래밍 과제 #4 */
import React, { useState } from "react";

function Chatting() {
  const [id, setId] = useState(1);
  const [nickname, setNickname] = useState("");
  const [saying, setSaying] = useState("");

  //객체 타입 리스트
  const [list, setList] = useState([]);

  const onChangeNickname = (e) => setNickname(e.target.value);
  const onChangeSaying = (e) => setSaying(e.target.value);

  //추가 버튼을 눌렀을 때 실행할 메소드
  const onClick = () => {
    //concat: 새로운 배열 생성 (상태 업데이트 할 때 새로운 값으로 해야 성능 최적화)
    if (nickname != "" && saying != "") {
      const nextList = list.concat({
        id: id,
        nickname: nickname,
        saying: saying,
      });
      setId(id + 1); //id는 하나씩 늘려준다
      setList(nextList); //리스트 갱신
      setNickname("");
      setSaying("");
    }
  };
  //엔터버튼을 눌러도 추가되게함.
  const onKeyPress = (e) => {
    e.preventDefault(); //엔터를 눌렀을때 페이지가 새로고침 되는 문제 방지
    if (e.key === "Enter" && nickname !== null && saying !== null) {
      onClick();
    }
  };
  //리스트 항목 더블클릭시 삭제 기능
  const onRemove = (id) => {
    const nextList = list.filter((saying) => saying.id !== id);
    setList(nextList);
  };

  const sayingList = list.map((list) => (
    <li key={list.id} onDoubleClick={() => onRemove(list.id)}>
      {list.nickname} : {list.saying}
    </li>
  ));
  return (
    <div>
      <h2>Chatting Room</h2>
      <form onSubmit={onKeyPress}>
        <input
          type="text"
          value={nickname}
          name="nickname"
          placeholder="닉네임"
          onChange={onChangeNickname}
        />
        <input
          type="text"
          value={saying}
          name="saying"
          placeholder="하고 싶은 말"
          onChange={onChangeSaying}
        />
        <button onClick={onClick}>추가</button>
      </form>
      <ul>{sayingList}</ul>
    </div>
  );
}

export default Chatting;
