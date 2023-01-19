function App() {
  return (
    <form>
      {/* <label htmlFor="dinosaur_name">dinosaur name: </label> */}
      <input
        id="dinosaur_name"
        name="dinosaur_name"
        className="dinosaur-input"
        aria-describedby="dinosaur_name_info"
        type="text"
      />
    </form>
  );
}

export default App;
