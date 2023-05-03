import { useContext, useEffect } from "react";
import { AppContext } from "../../context/Context";

const PizzaApi = () => {
    const { data, setData } = useContext(AppContext);

    useEffect(() => {
        // Verifica si ya se han cargado los datos
        if (data.length === 0) {
            fetch("pizzas.json")
                .then(response => response.json())
                .then(data => {
                    setData(data);
                });
        }
    }, []);
}

export default PizzaApi;
