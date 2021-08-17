import { useSelector, useDispatch } from "react-redux";
import { setIncrease, setDecrease } from "./../../redux/carouselActions";
import "./styles.scss";


const CarouselContainer = ({ children, ...otherProps }) => {
  const position = useSelector((state) => state);
  const dispatch = useDispatch();

  const next = () => dispatch(setIncrease(position + 1));
  const prev = () => dispatch(setDecrease(position - 1));

  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/9/9c/Siberian_Husky_pho.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Lengthy_body_Kanni.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Brooks_Chase_Ranger_of_Jolly_Dogs_Jack_Russell.jpg"
  ];

  

  return (
    <div className="container">
      <div className="arrow" onClick={prev}>
        &#60;
      </div>
      <img className="photo" src={images[position]} alt="" />
      {children}
      <div className="arrow" onClick={next}>
        &#62;
      </div>
    </div>
  );
};

export default CarouselContainer;
