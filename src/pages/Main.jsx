import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../redux/actions/restaurantActions";
import Container from "../components/Container";
import Loader from "../components/Loader";
import Error from "../components/Error";
import RestaurantCart from "../components/RestaurantCart";

const Main = () => {
  const dispatch = useDispatch();
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurants
  );

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-5"> ALL RESTAURANTS</h1>
      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} retry={dispatch(getRestaurants())} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
            {restaurants.length > 0 &&
              restaurants.map((item) => (
                <RestaurantCart key={item.id} data={item} />
              ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Main;
