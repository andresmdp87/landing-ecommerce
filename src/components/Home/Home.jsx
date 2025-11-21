import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="text-center">
      <br/>
      <h1 className="fw-bold">Bienvenido a React Market</h1>
      <p className="text-muted">
        Encontrá los mejores productos al mejor precio.
      </p>
      <br/>

        <Link className='btn btn-success mb-5' to='/categories'>Empezar a Comprar</Link>

      <br/>
      <div>

        <div>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" 
            alt="Carrito Simple" 
            width="120"
            className="mb-3"
          />
          <h5 className="fw-semibold">Carrito Simple</h5>
          <p className="text-muted">
            Administrá tus productos de manera rápida y sencilla.
          </p>
        </div>
     <br/>
        <div>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
            alt="Productos Destacados" 
            width="120"
            className="mb-3"
          />
          <h5 className="fw-semibold">Productos Destacados</h5>
          <p className="text-muted">
            Descubrí ofertas y artículos mejor valorados.
          </p>
        </div>
   <br/>
        <div>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/857/857681.png" 
            alt="Compra Fácil" 
            width="120"
            className="mb-3"
          />
          <h5 className="fw-semibold">Compra Fácil</h5>
          <p className="text-muted">
            Navegación clara y proceso de compra simple.
          </p>
        </div>
      </div>
   
    </div>
  );
};

export default Home;
