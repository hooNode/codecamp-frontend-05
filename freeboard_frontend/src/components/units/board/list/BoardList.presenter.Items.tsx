import * as S from "./BoardList.styles";
import ReactPlayer from "react-player";
import { RedditCircleFilled } from "@ant-design/icons";
import GetDate from "./GetDate";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function BoardListPresenterItems({
  el,
  index,
  pushClick,
  setIsInView,
  newData,
  prevData,
}) {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (prevData.length <= newData.length) {
      setIsInView(true);
    } else {
      setIsInView(inView);
    }
  }, [inView]);

  return (
    <>
      {(index + 1) % 10 === 0 ? (
        <S.Row
          key={el._id}
          className={index}
          id={el._id}
          onClick={pushClick}
          ref={ref}
        >
          <S.Body_Youtube>
            <ReactPlayer
              style={{
                zIndex: "-1",
              }}
              url={el?.youtubeUrl}
              light={true}
              playIcon
              width="100%"
              height="auto"
              id={el._id}
              onClick={pushClick}
            />
          </S.Body_Youtube>
          <S.BodyTitle>
            <S.SubYoutubeLeft>
              <RedditCircleFilled style={{ fontSize: "90px", color: "gray" }} />
            </S.SubYoutubeLeft>
            <S.SubYoutubeRight>
              <S.ColumnTitle>
                {el.title.length >= 10
                  ? el.title.slice(0, 30) + "..."
                  : el.title}
              </S.ColumnTitle>
              <S.ColumnWriter>
                {el.writer.length >= 10
                  ? el.writer.slice(0, 30) + "..."
                  : el.writer}
              </S.ColumnWriter>
              <S.ColumnCreate>
                <GetDate data={el} />
              </S.ColumnCreate>
            </S.SubYoutubeRight>
          </S.BodyTitle>
        </S.Row>
      ) : (
        <S.Row key={el._id} className={index} id={el._id} onClick={pushClick}>
          <S.Body_Youtube>
            <ReactPlayer
              style={{
                zIndex: "-1",
              }}
              url={el?.youtubeUrl}
              light={true}
              playIcon
              width="100%"
              height="auto"
              id={el._id}
              onClick={pushClick}
            />
          </S.Body_Youtube>
          <S.BodyTitle>
            <S.SubYoutubeLeft>
              <RedditCircleFilled style={{ fontSize: "90px", color: "gray" }} />
            </S.SubYoutubeLeft>
            <S.SubYoutubeRight>
              <S.ColumnTitle>
                {el.title.length >= 10
                  ? el.title.slice(0, 30) + "..."
                  : el.title}
              </S.ColumnTitle>
              <S.ColumnWriter>
                {el.writer.length >= 10
                  ? el.writer.slice(0, 30) + "..."
                  : el.writer}
              </S.ColumnWriter>
              <S.ColumnCreate>
                <GetDate data={el} />
              </S.ColumnCreate>
            </S.SubYoutubeRight>
          </S.BodyTitle>
        </S.Row>
      )}
    </>
  );
}
