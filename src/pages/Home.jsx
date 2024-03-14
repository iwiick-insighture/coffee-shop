import Menu from "@components/Menu";

const Home = () => {
  return (
    <section>
      <div className="max-w-7xl">
        <div className="relative">
          <h3 className="text-left font-bold text-2xl">Select your coffee</h3>
          <div className="py-5">
            <Menu />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
