import { Component } from "react";

// 클래스형 컴포넌트
class MapComp extends Component {
  constructor(props) {
    super(props);
    // 배열의 map을 통해서 반복 컴포넌트 작성
    this.state = {
      season: ["봄", "여름", "가을", "다른계절"],
      book: [
        {
          title: "홍길동전",
          page: 100,
          author: "허균",
          pay: 8000,
          number: "abcd1111",
        },
      ],
    };
  }
  render() {
    const { season, book } = this.state;
    // state에 있는 season 배열을
    // map을 통해 태그안에 값을 넣어서 사용
    const seasonItem = season.map((season, index) => (
      <li key={index}>{season}</li>
    ));
    const bookItem = book.map((book, index) => (
      <li key={book.number}> {book.title}</li>
    ));
    return (
      <div>
        <ul>
          {season.map((season, index) => (
            // 여러줄로 작성할때 소괄호로 감싸서 작성
            <li key={index}>
              <a href="#">{season}</a>
            </li>
          ))}
        </ul>
        <ol>{bookItem}</ol>
      </div>
    );
  }
}

export default MapComp;
