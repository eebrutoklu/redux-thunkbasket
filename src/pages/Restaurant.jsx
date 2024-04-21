import React, { useEffect } from "react";
import Container from "../components/Container";
import { useParams } from "react-router-dom";
import { getProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import ProductCart from "../components/ProductCart";
import { FaFireFlameCurved } from "react-icons/fa6";
import { getRestaurants } from "../redux/actions/restaurantActions";
import RestaurantDetail from "../components/RestaurantDetail";
import { addToCart, updateCart } from "../redux/actions/basketActions";
const Restaurant = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productState = useSelector((store) => store.products);
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurants
  );

  useEffect(() => {
    dispatch(getRestaurants(id));
    dispatch(getProducts(id));
  }, []);

  const handleAdd = (item, found) => {
    found
      ? dispatch(updateCart(found.id, found.amount + 1))
      : dispatch(addToCart(item, restaurants));
  };

  return (
    <div>
      <>
        <div className="shadow">
          <Container>
            <h1>
              {isLoading ? (
                <Loader />
              ) : (
                !error && <RestaurantDetail data={restaurants} />
              )}
            </h1>
          </Container>
          <hr className="shadow"></hr>
        </div>

        <Container>
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <i className="text-red-500">
                <FaFireFlameCurved />
              </i>
              Populers
            </h2>
            <p className="text-gray-600">most preferred products</p>
          </div>
          <div>
            {productState.isLoading ? (
              <Loader />
            ) : productState.error ? (
              <Error />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {productState.products.map((item) => (
                  <ProductCart
                    item={item}
                    key={item.id}
                    handleAdd={handleAdd}
                  />
                ))}
              </div>
            )}
          </div>
        </Container>
      </>
    </div>
  );
};

export default Restaurant;
