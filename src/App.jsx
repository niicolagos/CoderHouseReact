import Product from "../src/Product";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Kai Suplementos " />
      <Product
        img="https://cdn.batitienda.com/baticloud/images/product_picture_1e5b4327de294e2588933eceb40529d5_637934929745390044_0_m.png"
        title="Proteina"
        description="Whey X Pro aporta una combinación explosiva de proteínas, creatina, taurina, glutamina, aminoácidos, vitaminas, minerales y antioxidantes, en una nueva fórmula mejorada. Aporta más sabor y una máxima disolución para lograr mejores resultados y la podés consumir antes o después del entrenamiento. Es la proteína de suero más avanzada del mercado."
        price={39.000}
      />
      <Product
        img="https://cdn.batitienda.com/baticloud/images/product_picture_67dc6cbf085141bfba2914463184490c_637933221216371039_0_m.png"
        title="Creatina"
        description="Suplemento dietario creatina para ayudarte a que rindas mucho más durante el entrenamiento y la competencia. Mejora la potencia muscular y retrasa su fatiga. La creatina colabora en la formación de los componentes energéticos, mejorando la potencia muscular. Es ideal para consumir antes del entrenamiento , ya que de esa forma prepara el cuerpo para una mejor performance. Esta creatina es 99% pura , sin adiitivos, cero grasas y azucares."
        price={30.000}
      />
      <Product
        img="https://reevolvefit.com/wp-content/plugins/aawp/public/image.php?url=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTFkWHlDTE9DSkwuanBn"
        title="Pre Entreno"
        description="Los pre workouts son el mejor suplemento que existe a día de hoy, exprimir mejor tu entrenamiento se traduce en mejores resultados"
        price={70.000}
      />
    </div>
  );
}

export default App;
