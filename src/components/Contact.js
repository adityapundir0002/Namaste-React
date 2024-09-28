const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-pretty text-2xl p-4 m-4">Contact to Us</h1>
      <form>
        <input
          className="border black p-2 m-2"
          type="text"
          placeholder="name"
        />
        <input
          className=" border black p-2 m-2"
          type="text"
          placeholder="message"
        />
        <select className="border black p-2 m-2" defaultValue="">
          <option value="" disabled>
            Select your age
          </option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36-45">36-45</option>
          <option value="46-60">46-60</option>
          <option value="60+">60+</option>
        </select>
        <button className="bg-gray-200 p-2 m-2">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
