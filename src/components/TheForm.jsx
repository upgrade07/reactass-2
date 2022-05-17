import React from "react";


const TheForm = ({
  name,
  setName,
  dept,
  setDept,
  rating,
  setRating,
  users,
  setusers,
}) => {
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDeptChange = (e) => {
    setDept(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setusers([...users, { name: name, dept: dept, rating: rating }]);
    console.log(users);
  };

  return (
    <form onSubmit={handleSubmit} className="formcont">
      <label>
        Name:
        <input
          onChange={handleNameChange}
          value={name}
          className="textbox"
          type="text"
          name="name"
          required
        />
      </label>

      <label>
        Department:
        <input
          onChange={handleDeptChange}
          value={dept}
          className="textbox"
          type="text"
          name="dept"
        />
      </label>

      <label>
        Rating:
        <input
          onChange={handleRatingChange}
          value={rating}
          className="textbox"
          type="text"
          name="rating"
        />
      </label>
      <span>
        <input className="submitbutton" type="submit" value="Submit" />
      </span>
    </form>
  );
};

export default TheForm;
