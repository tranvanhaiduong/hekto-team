export default function BlogPageSingle({ image, Name, index }) {
  return (
    <div className="BlogPageSingle">
      <img className="BlogPageSingle__img" src={image} key={index} alt=""></img>
      <div className="BlogPageSingle__text">
        <div className="contentsingle__left__post__timeactor">
          <div className="contentsingle__left__post__timeactor__actor">
            <div className="contentsingle__left__post__timeactor__actor__image">
              <img src="./images/Vector (3).png" alt=""></img>
            </div>
            <div className="contentsingle__left__post__timeactor__actor__text">
              Surf Auxion
            </div>
          </div>

          <div className="contentsingle__left__post__timeactor__time">
            <div className="contentsingle__left__post__timeactor__time__image">
              <img src="./images/Vector (4).png" alt=""></img>
            </div>
            <div className="contentsingle__left__post__timeactor__time__text">
              Aug 09 2020
            </div>
          </div>
        </div>
        <p className="BlogPageSingle__text__name">{Name} key={index} </p>
        <p className="BlogPageSingle__text__nd">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
          facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
          malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
          purus, cursus vulputate id id dictum at.
        </p>
        <a href={{href:""}} className="BlogPageSingle__text__rmore">Read More</a>
      </div>
    </div>
  );
}
