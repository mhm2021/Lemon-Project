import "./Specials.css";
import greekSalad from "./assets/images/greek-salad.jpg";
import bruschetta from "./assets/images/bruschetta.jpg";
import lemonDessert from "./assets/images/lemon-dessert.jpg";

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>Specials</h2>
        <a href="/menu" className="btn-primary">
          Online Menu
        </a>
      </div>

      <div className="specials-grid">
        <article className="card">
          <img src={greekSalad} alt="Greek Salad" />
          <div className="card-body">
            <div className="card-title">
              <h3>Greek Salad</h3>
              <span className="price">$12.99</span>
            </div>
            <p>
              Crisp lettuce, peppers, olives, and feta cheese, tossed in our
              signature vinaigrette.
            </p>
            <a href="/order" className="btn-secondary">Order Now</a>
          </div>
        </article>

        <article className="card">
          <img src={bruschetta} alt="Bruschetta" />
          <div className="card-body">
            <div className="card-title">
              <h3>Bruschetta</h3>
              <span className="price">$5.99</span>
            </div>
            <p>
              Grilled bread topped with garlic, olive oil, and fresh tomatoes.
            </p>
            <a href="/order" className="btn-secondary">Order Now</a>
          </div>
        </article>

        <article className="card">
          <img src={lemonDessert} alt="Lemon Dessert" />
          <div className="card-body">
            <div className="card-title">
              <h3>Lemon Dessert</h3>
              <span className="price">$4.99</span>
            </div>
            <p>
              A tangy lemon dessert with a sweet crust and whipped topping.
            </p>
            <a href="/order" className="btn-secondary">Order Now</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Specials;
