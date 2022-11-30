import { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import { CloseButton } from "../plugin/svg";
const News = ({ ActiveIndex, animation }) => {
  const [isOpen4, setIsOpen4] = useState(false);
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    var lists = document.querySelectorAll(".news_list > ul > li");
    let box = document.querySelector(".cavani_fn_moving_box");
    if (!box) {
      let body = document.querySelector("body");
      let div = document.createElement("div");
      div.classList.add("cavani_fn_moving_box");
      body.appendChild(div);
    }

    lists.forEach((list) => {
      list.addEventListener("mouseenter", (event) => {
        box.classList.add("opened");
        var imgURL = list.getAttribute("data-img");
        box.style.backgroundImage = `url(${imgURL})`;
        box.style.top = event.clientY - 50 + "px";
        console.log(event.clientY);
        if (imgURL === "") {
          box.classList.remove("opened");
          return false;
        }
      });
      list.addEventListener("mouseleave", () => {
        box.classList.remove("opened");
      });
    });
  }, []);

  function toggleModalFour(value) {
    setIsOpen4(!isOpen4);
    setModalContent(value);
  }
  const newsData = [
    {
      img: "img/news/covid.jpg",
      tag: "Family",
      date: "November 29, 2022",
      comments: "3 comments",
      title: "A house full of Covid",
      text1:
        "After nearly 3 years of avoiding the Covid virus, our luck has turned and Christine, Ellie, and I are all at home sick. Unfortunatley, my mom and sister also caught it while here for the holiday.",
      text2:
        "Time to stay home, eat some soup, and rest, rest, rest. Wish us luck!",
    },
    {
      img: "img/news/thanks.jpg",
      tag: "Family",
      date: "November 25, 2022",
      comments: "3 comments",
      title: "So much to be grateful for ",
      text1:
        "I took this whole week off of work. Well, we had a fun Thanksgiving drink mixing virtual event with work on Monday that was so much fun (my sister caught some video of me dancing that I'm sure will be blackmail material at some point).",
      text2:
        "While my family was here, we celebrate Thanksgiving together, and looking over the past few years, we had a lot to be thankful for. We baked cookies, had family movie night, went to the Route 66 Christmas Chutes.",
      text3:
        "All in all, this was a great week. I was sad to see the family go, but Christmas is only a few weeks away.",
    },
  ];
  return (
    <Fragment>
      <div
        className={
          ActiveIndex === 3
            ? `cavani_tm_section active animated ${animation ? animation : "fadeInUp"
            }`
            : "cavani_tm_section hidden animated"
        }
        id="news__"
      >
        <div className="section_inner">
          <div className="cavani_tm_news">
            <div className="cavani_tm_title">
              <span>Latest News</span>
            </div>
            <div className="news_list">
              <ul>
                {newsData.map((news, i) => (
                  <li data-img={`img/news/${i + 1}.jpg`} key={i}>
                    <div className="list_inner">
                      <span className="number">{`${i <= 9 ? 0 : ""}${i + 1
                        }`}</span>
                      <div className="details">
                        <div className="extra_metas">
                          <ul>
                            <li>
                              <span>{news.date}</span>
                            </li>
                            <li>
                              <span>
                                <a
                                  href="#"
                                  onClick={() => toggleModalFour(news)}
                                >
                                  Branding
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>
                                <a
                                  href="#"
                                  onClick={() => toggleModalFour(news)}
                                >
                                  0 Comments
                                </a>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="post_title">
                          <h3>
                            <a href="#" onClick={() => toggleModalFour(news)}>
                              {news.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {modalContent && (
        <Modal
          isOpen={isOpen4}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close" onClick={toggleModalFour}>
                <a href="#">
                  <i className="icon-cancel"></i>
                </a>
              </div>
              <div className="description_wrap">
                <div className="news_popup_informations">
                  <div className="image">
                    <img src="img/thumbs/4-2.jpg" alt="" />
                    <div
                      className="main"
                      data-img-url="img/news/1.jpg"
                      style={{ backgroundImage: `url(${modalContent.img})` }}
                    />
                  </div>
                  <div className="details">
                    <div className="meta">
                      <ul>
                        <li><span>{modalContent.date}</span></li>
                        <li><span><a href="#">{modalContent.tag}</a></span></li>
                        <li><span><a href="#">{modalContent.comments}</a></span></li>
                      </ul>
                    </div>
                    <div className="title">
                      <h3>{modalContent.title}</h3>
                    </div>
                  </div>
                  <div className="text">
                    <p>{modalContent.text1}</p>
                    <p>{modalContent.text2}</p>
                    <p>{modalContent.text3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};
export default News;
