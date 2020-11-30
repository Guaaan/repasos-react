import ButtonComponent from "./components/button.component";
import ContainerComponent from "./components/container";

const App2 = () => {
    const saludo = () => {
        alert("Hola desde el Boton");
    }

    const saludo2 = () => {
        alert("Hola desde el Boton 2");
    }
    return (
        <>
            <h1>Ejercicio 2</h1>
            <button
                type="button"
                class="btn btn-primary"
            >
                Primary
            </button>

            <ContainerComponent>
                <ButtonComponent className={"btn-dark btn-block my-2"} action={saludo}>
                    4Geeks Academy
                </ButtonComponent>
                <ButtonComponent className={"btn-danger btn-block my-2"} action={saludo}>
                    4Geeks Academy
                </ButtonComponent>
                <ButtonComponent className={"btn-warning btn-block my-2"} action={saludo2}>
                    4Geeks Academy
                </ButtonComponent>
            </ContainerComponent>
        </>
    )
}

export default App2;