import Meals from "./Meals";
import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);
  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-test-9dce8-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("wrong!");
      }
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }
  //const mealsList = DUMMY_MEALS.map((x) => x.name);
  if (isLoading) {
    return (
      <section className="MealsLoading">
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section className="meals">
      <ul>
        {meals.map((x) => (
          <MealItem key={x.id} {...x} />
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
